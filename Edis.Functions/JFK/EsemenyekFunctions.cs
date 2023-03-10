//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Edis.Functions.JFK.FENY
{
    using System.Data.Entity;
    using Edis.Functions.Base;
    using Edis.ViewModels.JFK.FENY;
    using Edis.Entities.JFK.FENY;
    using System.Collections.Generic;
    using Edis.ViewModels.JFK;
    using Edis.IoC.Attributes;
    using Edis.Functions.Fany;
    using System.Linq;
    using System;
    using Edis.ViewModels;
    using Edis.Functions.Common;
    using Edis.Entities.Enums.Cimke;
    using System.Data.SqlClient;
    using Edis.ViewModels.Common;
    using Edis.ViewModels.JFK.FENY.FormModel;
    using Edis.Entities.Fany;
    using Edis.Entities.Enums;
    using Edis.Diagnostics;
    using static Edis.Entities.Enums.Cimke.CimkeEnums;

    public class EsemenyekFunctions : KonasoftBVFonixFunctionsBase<EsemenyViewModel, Esemenyek>, IEsemenyekFunctions
    {
        public delegate void EsemenyValtoztasEvent(List<int> ujUgyIdList, List<int> valtozottUgyIdList, List<int> megszuntUgyIdList);
        public static event EsemenyValtoztasEvent OnEsemenyValtozas;

        [Inject]
        IFogvatartottFunctions FogvatartottFunctions { get; set; }

        [Inject]
        IEsemenyResztvevoFunctions EsemenyResztvevoFunctions { get; set; }

        [Inject]
        ICimkeFunctions CimkeFunctions { get; set; }

        [Inject]
        ISzemelyzetFunctions SzemelyzetFunctions { get; set; }

        [Inject]
        IAlkalmazasKontextusFunctions AlkalmazasKontextusFunctions { get; set; }

        [Inject]
        IFegyelmiUgyFunctions FegyelmiUgyFunctions { get; set; }


        public DbSet<Esemenyek> Table => KonasoftBVFonixContext.Esemenyek;

        public List<KSelect2ItemModel> GetFogvatartottak()
        {
            var fogvatartottak = KonasoftBVFonixContext.FogvatartottakFegyelmiView.AsNoTracking().ToList().Select(x => new KSelect2ItemModel() { id = x.Id.ToString(), text = $"{x.SzuletesiCsaladiNev} {x.SzuletesiUtonev} - {x.NyilvantartasiAzonosito}" }).ToList();
            return fogvatartottak;
        }

        public List<KSelect2ItemModel> FindFogvatartottakForSelect(string pattern, int? intezetId)
        {
            var keresesSzoveg = pattern;
            //keresesSzoveg = keresesSzoveg.Replace(" ", string.Empty);
            //keresesSzoveg = keresesSzoveg.Replace("-", string.Empty);
            //keresesSzoveg = keresesSzoveg.Replace("*", string.Empty);
            //var fogvatartottak = (from fogv in KonasoftBVFonixContext.FogvatartottakFegyelmiView
            //where fogv.KeresoNev.Contains(keresesSzoveg) || fogv.KeresoAzonKod.Contains(keresesSzoveg)
            // select new KSelect2ItemModel() { id = fogv.Id.ToString(), text = fogv.NyilvantartasiAzonosito + " - " + fogv.SzuletesiCsaladiNev + " " + fogv.SzuletesiUtonev }).ToList();
            //return fogvatartottak;

            var result = this.KonasoftBVFonixContext.Database.SqlQuery<KSelect2ItemModel>
            ("Fegyelmi.KeresFogvatartott @szoveg, @intezetId",
               new SqlParameter("@szoveg", keresesSzoveg),
               new SqlParameter("@intezetId", (object)intezetId ?? DBNull.Value)
             ).ToList();

            return result;
        }

        public EsemenyViewModel GetEsemenyById(int id)
        {
            KonasoftBVFonixContext.Configuration.LazyLoadingEnabled = false;

            var esemeny = Table
                .Include(i => i.RogzitoSzemely)
                .Include(i => i.RogzitoSzemely.Rendfokozat)
                .Include(i => i.Jelleg)
                .Include(i => i.Hely)
                .Include(i => i.Napszak)
                .SingleOrDefault(s => s.Id == id);
            if (esemeny == null)
            {
                return null;
            }
            var esemenyViewModel = (EsemenyViewModel)esemeny;
            esemenyViewModel.RogzitoSzemely = esemeny.RogzitoSzemely.Nev;
            esemenyViewModel.RogzitoSzemelyRendfokozat = esemeny.RogzitoSzemely?.RendfokozatKszId == 0 ? "" : esemeny.RogzitoSzemely?.Rendfokozat?.Nev;
            esemenyViewModel.Jelleg = esemeny.Jelleg?.Nev;
            esemenyViewModel.Hely = esemeny.Hely?.Nev;
            esemenyViewModel.Napszak = esemeny.Napszak?.Nev;
            esemenyViewModel.Feltoltesek = KonasoftBVFonixContext.Feltoltesek.Where(x => x.EsemenyId == id).ToList().Select(x => (FeltoltesekViewModel)x).ToList();
            return esemenyViewModel;
        }

        public List<int> CreateEsemeny(EsemenyMentesViewModel model)
        {
            //ValidateDate(model.EsemenyDatuma);
            //int esemenyId;
            List<int> ujFegyelmiUgyek = new List<int>();
            using (var transaction = KonasoftBVFonixContext.Database.BeginTransaction())
            {
                try
                {
                    var entity = new Esemenyek()
                    {
                        EsemenyDatuma = model.EsemenyDatuma,
                        JellegCimkeId = model.EsemenyJellegCimkeId,
                        NapszakCimkeId = model.NapszakCimkeId,
                        HelyCimkeId = model.EsemenyHelyCimkeId,
                        Leiras = model.Leiras,
                        Bizonyitek = model.Bizonyitek,
                        EszleloId = SzemelyzetFunctions.SzemelyzetLekeresVagyLetrehozas(model.EszleloId, null, null).Id,
                    };

                    if(AlkalmazasKontextusFunctions.Kontextus.SzemelyzetSid== Edis.Functions.JFK.RekaFunctions.AdUserSid) // _BVOP-FONIXAPP h?v?s k?ls? alkalmaz?sb?l
                    {
                        entity.KeziRogzitoAdatok = true;
                        entity.RogzitoTelephelyId = model.IntezetId.Value;
                        entity.EszleloId = SzemelyzetFunctions.SzemelyzetLekeresVagyLetrehozas(model.EszleloId, null, model.IntezetId).Id;
                        entity.RogzitoSzemelyId = entity.EszleloId;
                    }

                        Table.Add(entity);
                    KonasoftBVFonixContext.SaveChanges();

                    int esemenyId = entity.Id;
                    KonasoftBVFonixContext.SaveChanges();

                    // Elk?vet?k r?gz?t?se
                    if (model.Elkovetok != null)
                    {
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Elkovetok.Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Elkoveto, entity.Id);
                        ujFegyelmiUgyek = FegyelmiUgyFunctions.FegyelmiUgyekInditasa(entity.Id, model.Elkovetok.Select(x => int.Parse(x)).ToList(), model.BvBankbol, model.IntezetId);
                    }

                    // S?rtettek r?gz?t?se
                    if (model.Sertettek != null && model.Sertettek[0] != "")
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Sertettek.Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Sertett, entity.Id);

                    // Seg?t?k r?gz?t?se
                    if (model.Tanuk != null)
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Tanuk.Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Tanu, entity.Id);

                    // ?llom?nyi tan?k r?gz?t?se
                    if (model.AllomanyiTanuk != null)
                    {
                        var bekuldottTanuk = new List<Szemelyzet>();

                        foreach (var item in model.AllomanyiTanuk)
                        {
                            bekuldottTanuk.Add(SzemelyzetFunctions.SzemelyzetLekeresVagyLetrehozas(item, null, null));
                        }

                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(bekuldottTanuk.Select(x => x.Id).ToList(), (int)ErintettsegFoka.SzemelyiAllomanyiTanu, entity.Id);
                    }
                    if (model.UploadedFiles != null)
                    {
                        foreach (var url in model.UploadedFiles)
                        {
                            KonasoftBVFonixContext.Feltoltesek.Add(new Feltoltesek
                            {
                                EsemenyId = entity.Id,
                                Url = url,
                            });
                        }
                    }

                    KonasoftBVFonixContext.SaveChanges();
                    transaction.Commit();

                    OnEsemenyValtozas?.Invoke(ujFegyelmiUgyek, new List<int>(0), new List<int>(0));

                    if (model.KarjelentoLapIktatas == true)
                    {
                        try
                        {
                            //new NyomtatvanySablonFunction().KarjelentoLapDocxNyomtatvany(entity.Id, null);
                        }
                        catch (Exception exc)
                        {
                            Log.Error("", exc);
                        }
                    }

                    return ujFegyelmiUgyek;
                }
                catch (Exception e)
                {
                    Log.Error("CreateEsemeny", e);
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public List<int> ModifyEsemeny(EsemenyMentesViewModel model)
        {
            List<int> ujFegyelmiUgyek = new List<int>();
            //ValidateDate(model.EsemenyDatuma);
            using (var transaction = KonasoftBVFonixContext.Database.BeginTransaction())
            {
                try
                {
                    var entity = Table.Single(x => x.Id == model.EsemenyId);
                    //entity.Id = model.EsemenyId;
                    entity.EsemenyDatuma = model.EsemenyDatuma;
                    entity.JellegCimkeId = model.EsemenyJellegCimkeId;
                    entity.NapszakCimkeId = model.NapszakCimkeId;
                    entity.HelyCimkeId = model.EsemenyHelyCimkeId;
                    entity.Leiras = model.Leiras;
                    entity.Bizonyitek = model.Bizonyitek;
                    entity.EszleloId = SzemelyzetFunctions.SzemelyzetLekeresVagyLetrehozas(model.EszleloId, null, null).Id;
                    KonasoftBVFonixContext.SaveChanges();
                    //Modify(saveModel);


                    //EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(model.EsemenyId);
                    var resztvevok = EsemenyResztvevoFunctions.GetEsemenyResztvevok(model.EsemenyId.Value);

                    // Elk?vet?k r?gz?t?se
                    if (model.Elkovetok != null)
                    {
                        var eddigiElkovetok = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.Elkoveto).Select(x => x.FogvatartottId.ToString()).ToList();

                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Elkovetok.Where(w => eddigiElkovetok.Contains(w) == false).Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Elkoveto, entity.Id);
                        ujFegyelmiUgyek = FegyelmiUgyFunctions.FegyelmiUgyekInditasa(entity.Id, model.Elkovetok.Where(w => eddigiElkovetok.Contains(w) == false).Select(x => int.Parse(x)).ToList());
                        //ujFegyelmiUgyek = model.Elkovetok.Where(w => eddigiElkovetok.Contains(w) == false).S;
                    }

                    // S?rtettek r?gz?t?se
                    if (model.Sertettek != null && model.Sertettek[0] != "")
                    {
                        var eddigiSertettek = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.Sertett).Select(x => x.FogvatartottId.ToString()).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(eddigiSertettek.Where(w => model.Sertettek.Contains(w) == false).Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Sertett, entity.Id);
                        //?j s?rtettek felv?tele
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Sertettek.Where(w => eddigiSertettek.Contains(w) == false).Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Sertett, entity.Id);
                    }
                    else
                    {
                        var eddigiSertettek = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.Sertett).Select(x => x.FogvatartottId.ToString()).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(eddigiSertettek.Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Sertett, entity.Id);
                    }

                    // Tan?k r?gz?t?se
                    if (model.Tanuk != null)
                    {
                        var eddigiTanuk = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.Tanu).Select(x => x.FogvatartottId.ToString()).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(eddigiTanuk.Where(w => model.Tanuk.Contains(w) == false).Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Tanu, entity.Id);
                        //?j s?rtettek felv?tele
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(model.Tanuk.Where(w => eddigiTanuk.Contains(w) == false).Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Tanu, entity.Id);
                    }
                    else
                    {
                        var eddigiTanuk = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.Tanu).Select(x => x.FogvatartottId.ToString()).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(eddigiTanuk.Select(x => int.Parse(x)).ToList(), (int)ErintettsegFoka.Tanu, entity.Id);
                    }

                    // ?llom?nyi tan?k r?gz?t?se
                    if (model.AllomanyiTanuk != null)
                    {
                        var bekuldottTanuk = new List<Szemelyzet>();

                        foreach (var item in model.AllomanyiTanuk)
                        {
                            bekuldottTanuk.Add(SzemelyzetFunctions.SzemelyzetLekeresVagyLetrehozas(item, null, null));
                        }

                        var eddigiTanuk = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.SzemelyiAllomanyiTanu).Select(x => (int)x.AllomanyiSzemelyId).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(bekuldottTanuk.Where(w => model.AllomanyiTanuk.Contains(w.AdSid) == false).Select(x => x.Id).ToList(), (int)ErintettsegFoka.SzemelyiAllomanyiTanu, entity.Id);
                        //?j s?rtettek felv?tele
                        EsemenyResztvevoFunctions.SaveEsemenyResztvevok(bekuldottTanuk.Where(w => eddigiTanuk.Contains(w.Id) == false).Select(x => x.Id).ToList(), (int)ErintettsegFoka.SzemelyiAllomanyiTanu, entity.Id);
                    }
                    else
                    {
                        var eddigiTanuk = resztvevok.Where(w => w.ErintettsegFokaCimkeId == (int)ErintettsegFoka.SzemelyiAllomanyiTanu).Select(x => (int)x.AllomanyiSzemelyId).ToList();
                        // hi?nyz? s?rtettek t?rl?se
                        EsemenyResztvevoFunctions.DeleteEsemenyResztvevok(eddigiTanuk, (int)ErintettsegFoka.SzemelyiAllomanyiTanu, entity.Id);
                    }

                    if (model.UploadedFiles != null)
                    {
                        foreach (var url in model.UploadedFiles)
                        {
                            KonasoftBVFonixContext.Feltoltesek.Add(new Feltoltesek
                            {
                                EsemenyId = entity.Id,
                                Url = url,
                            });
                        }
                    }



                    KonasoftBVFonixContext.SaveChanges();
                    transaction.Commit();
                    OnEsemenyValtozas?.Invoke(ujFegyelmiUgyek, new List<int>(0), new List<int>(0));
                    return ujFegyelmiUgyek;
                }
                catch (Exception e)
                {

                    transaction.Rollback();
                    throw;
                }
            }
        }

        private void ValidateDate(DateTime datum)
        {
            if (datum < DateTime.Now.AddDays(-7))
                throw new WarningException("Az esem?ny d?tuma nem lehet egy h?tn?l r?gebbi");
            if (datum > DateTime.Now)
                throw new WarningException("Az esem?ny d?tuma nem lehet j?v?beli");
        }

        public EsemenyMentesViewModel GetEsemeny(int? esemenyId)
        {
            EsemenyMentesViewModel model;
            List<AdFegyelmiUserItem> fegyelmiUsers = new List<AdFegyelmiUserItem>();

            //model.EszleloOptions = fegyelmiUsers.Select(x => new KSelect2ItemModel() { id = x.Sid.ToString(), text = x.Displayname }).ToList();
            if (esemenyId != null && esemenyId > 0)
            {

                var esemeny = FindById(esemenyId.Value);
                var eszleloSzemely = SzemelyzetFunctions.FindById(esemeny.EszleloId);
                var eszleloSid = eszleloSzemely.AdSid;

                if (!fegyelmiUsers.Any(a => a.Sid == eszleloSid))
                {
                    var eszlelo = SzemelyzetFunctions.GetAdFegyelmiUser(eszleloSzemely);
                    fegyelmiUsers.Add(eszlelo);
                }

                model = new EsemenyMentesViewModel()
                {
                    EsemenyId = esemeny.Id,
                    EsemenyDatuma = esemeny.EsemenyDatuma,
                    EsemenyJellegCimkeId = esemeny.JellegCimkeId,
                    NapszakCimkeId = esemeny.NapszakCimkeId,
                    EsemenyHelyCimkeId = esemeny.HelyCimkeId,
                    Leiras = esemeny.Leiras,
                    EszleloId = fegyelmiUsers.Any(a => a.Sid == eszleloSid) ? eszleloSid : fegyelmiUsers.FirstOrDefault()?.Sid ?? null,
                    Tanuk = new List<string>(),
                    Elkovetok = new List<string>(),
                    Sertettek = new List<string>(),
                    Bizonyitek = esemeny.Bizonyitek
                    //Resztvevok = EsemenyResztvevoFunctions.GetEsemenyResztvevokPanelra(esemenyId)
                };

                var resztvevok = EsemenyResztvevoFunctions.GetEsemenyResztvevokPanelra(esemeny.Id);

                var allomanyiResztvevok = KonasoftBVFonixContext.EsemenyResztvevok
                    .Include(x => x.AllomanyiSzemely)
                    .Include(x => x.AllomanyiSzemely.Rendfokozat)
                    .Where(x => x.EsemenyId == esemenyId && x.ErintettsegFokaCimkeId == (int)ErintettsegFoka.SzemelyiAllomanyiTanu).ToList();

                model.TanukDefault = resztvevok.Where(w => w.ErintettsegFokaCimId == (int)ErintettsegFoka.Tanu).Select(x => new KSelect2ItemModel() { id = x.FogvatartottId.ToString(), text = x.NyilvantartasiAzonosito + " - " + x.FogvatartottNev }).ToList();
                model.ElkovetokDefault = resztvevok.Where(w => w.ErintettsegFokaCimId == (int)ErintettsegFoka.Elkoveto).Select(x => new KSelect2ItemModel() { id = x.FogvatartottId.ToString(), text = x.NyilvantartasiAzonosito + " - " + x.FogvatartottNev }).ToList();
                model.SertettekDefault = resztvevok.Where(w => w.ErintettsegFokaCimId == (int)ErintettsegFoka.Sertett).Select(x => new KSelect2ItemModel() { id = x.FogvatartottId.ToString(), text = x.NyilvantartasiAzonosito + " - " + x.FogvatartottNev }).ToList();
                model.AllomanyiTanukDefault = allomanyiResztvevok.Select(x => new KSelect2ItemModel() { id = x.AllomanyiSzemely.AdSid, text = x.AllomanyiSzemely.Nev + (x.AllomanyiSzemely.RendfokozatKszId == 0 ? "" : (" " + x.AllomanyiSzemely.Rendfokozat.Nev)) }).ToList();

                var fajlok = KonasoftBVFonixContext.Feltoltesek.Where(x => x.EsemenyId == esemenyId.Value).ToList().Select(x => (FeltoltesekViewModel)x).ToList();
                model.PrevUploadedFiles = fajlok;

                foreach (var tanu in allomanyiResztvevok)
                {
                    if (!fegyelmiUsers.Any(a => a.Sid == tanu.AllomanyiSzemely.AdSid))
                    {
                        fegyelmiUsers.Add(new AdFegyelmiUserItem()
                        {
                            Displayname = tanu.AllomanyiSzemely.Nev,
                            Rendfokozat = tanu.AllomanyiSzemely?.Rendfokozat?.Nev,
                            Sid = tanu.AllomanyiSzemely.AdSid
                        });
                    }
                }
            }
            else
            {
                fegyelmiUsers = SzemelyzetFunctions.GetFegyelmiEszlelok();
                var currentEszleloSid = AlkalmazasKontextusFunctions.Kontextus.SzemelyzetSid;
                var currentEszlelo = AlkalmazasKontextusFunctions.Kontextus.SzemelyzetId;
                var isEszleloInFegyelmiUsersList = fegyelmiUsers.Any(w => w.Sid == currentEszleloSid);
                if (!isEszleloInFegyelmiUsersList)
                {
                    var szemelyzet = SzemelyzetFunctions.FindById(currentEszlelo);
                    var eszlelo = SzemelyzetFunctions.GetAdFegyelmiUser(szemelyzet);
                    fegyelmiUsers.Add(eszlelo);
                }
                var eszleloSid = AlkalmazasKontextusFunctions.Kontextus.SzemelyzetSid;
                model = new EsemenyMentesViewModel()
                {
                    EsemenyId = 0,
                    EsemenyDatuma = DateTime.Now,
                    EszleloId = fegyelmiUsers.Any(a => a.Sid == eszleloSid) ? eszleloSid : fegyelmiUsers.FirstOrDefault()?.Sid ?? null,
                    Tanuk = new List<string>(),
                    Elkovetok = new List<string>(),
                    Sertettek = new List<string>(),
                    TanukDefault = new List<KSelect2ItemModel>(),
                    ElkovetokDefault = new List<KSelect2ItemModel>(),
                    SertettekDefault = new List<KSelect2ItemModel>(),
                    AllomanyiTanukDefault = new List<KSelect2ItemModel>()
                    //Resztvevok = new List<EsemenyResztvevoPanelViewModel>()
                };

               
            }


            // selectek felt?lt?se            
            //var users = SzemelyzetFunctions.GetAllSzemelyzet(AlkalmazasKontextusFunctions.Kontextus.RogzitoTelephelyId);            
            //model.EszleloOptions = users.Select(x => new KSelect2ItemModel() { id = x.AdSid.ToString(), text = x.Nev + ' ' + x.RendfokozatKszId }).ToList();

            model.EszleloOptions = fegyelmiUsers.Select(x => new KSelect2ItemModel() { id = x.Sid.ToString(), text = x.Displayname + " " + x.Rendfokozat }).ToList();
            // Ez m?r FegyelmiVetsegTipusa kell hogy legyen
            model.EsemenyJellegOptions = CimkeFunctions.GetCimkekByFelhoId((int)Felhok.FegyelmiVetsegTipusa).ToList().Select(x => new KSelect2ItemModel() { id = x.Id.ToString(), text = x.Nev }).ToList();
            model.NapszakOptions = CimkeFunctions.GetCimkekByFelhoId((int)Felhok.EsemenyNapszaka).ToList().Select(x => new KSelect2ItemModel() { id = x.Id.ToString(), text = x.Nev }).ToList();
            model.HelyOptions = CimkeFunctions.GetCimkekByFelhoId((int)Felhok.EsemenyHelyszine).ToList().Select(x => new KSelect2ItemModel() { id = x.Id.ToString(), text = x.Nev }).ToList();
            model.UploadedFiles = new List<string>();
            return model;
        }

        public EsemenyReszletekViewModel GetEsemenyReszletek(int esemenyId)
        {
            EsemenyReszletekViewModel model;

            var esemeny = KonasoftBVFonixContext.Esemenyek
                            .Include(x => x.Jelleg)
                            .Include(x => x.Hely)
                            .Include(x => x.Napszak)
                                .SingleOrDefault(x => x.Id == esemenyId);
            model = new EsemenyReszletekViewModel()
            {
                EsemenyId = esemeny.Id,
                ErvenyessegKezd = esemeny.ErvenyessegKezdete,
                EsemenyDatuma = esemeny.EsemenyDatuma,
                JellegCimke = (CimkeModel)esemeny.Jelleg,
                NapszakCimke = (CimkeModel)esemeny.Napszak,
                HelyCimke = (CimkeModel)esemeny.Hely,
                Leiras = esemeny.Leiras,
                Resztvevok = EsemenyResztvevoFunctions.GetEsemenyResztvevokPanelra(esemenyId),
            };
            model.ErintettsegFokaOptions = CimkeFunctions.GetCimkekByFelhoId((int)Felhok.ErintettsegFoka).ToList().Select(x => new KSelect2ItemModel() { id = x.Id.ToString(), text = x.Nev }).ToList();



            return model;
        }

        public List<EsemenyListItemViewModel> GetEsemenyek()
        {
            //KonasoftBVFonixContext.Configuration.LazyLoadingEnabled = false;
            //int intezetId = AlkalmazasKontextusFunctions.Kontextus.RogzitoTelephelyId;

            //var resztvevok = EsemenyResztvevoFunctions.GetEsemenyResztvevokByIntezetId(intezetId);

            //var egyHonappalEzelott = DateTime.Now.Date.AddMonths(-1);
            //KonasoftBVFonixContext.DisableToroltFlFilter(x => x.Intezet);

            //var results = Table.Where(w => w.RogzitoTelephelyId == intezetId || intezetId == (int)BvIntezet.Bvop)
            //    .Include(x => x.RogzitoSzemely)
            //    .Include(x => x.RogzitoIntezet)
            //    .Include(x => x.Jelleg)
            //    .Include(x => x.Napszak)
            //    .Include(x => x.Hely)
            //    .Where(e => KonasoftBVFonixContext.FegyelmiUgyek.Any(f => (f.EsemenyId == e.Id && (f.Lezarva != true || f.ErvenyessegKezdete > egyHonappalEzelott))))
            //    .AsNoTracking()
            //    .ToList().Select(x => new EsemenyListItemViewModel()
            //    {
            //        EsemenyId = x.Id,
            //        Leiras = x.Leiras,
            //        EsemenyDatuma = x.EsemenyDatuma,
            //        Jelleg = x.Jelleg != null ? x.Jelleg.Nev : null,
            //        Hely = x.Hely != null ? x.Hely.Nev : null,
            //        Napszak = x.Napszak != null ? x.Napszak.Nev : null,
            //        Resztvevok = resztvevok.Where(w => w.EsemenyId == x.Id).OrderBy(o => o.ErintettsegFokaCimId != (int)CimkeEnums.ErintettsegFoka.Elkoveto).ToList(),
            //        RogzitoIntezet = x.RogzitoIntezet.Nev,
            //        RogzitoSzemely = x.RogzitoSzemely.Nev
            //    }).ToList();

            return default;
        }
    }
}
