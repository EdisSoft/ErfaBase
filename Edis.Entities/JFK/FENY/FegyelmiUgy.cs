//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Edis.Entities.JFK.FENY
{
    using System;
    using Edis.Entities.Base;
    using System.ComponentModel.DataAnnotations.Schema;
    using Edis.Entities.Common;
    using Edis.Entities.Fany;

    [Table("Fegyelmi.FegyelmiUgyek")]
    public class FegyelmiUgy : KeziJavitoEntity
    {
        [Column("EsemenyId")]
        public int EsemenyId { get; set; }

        [Column("FogvatartottId")]
        public int FogvatartottId { get; set; }

        [Column("UgySorszamaIntezetAzon")]
        public string UgySorszamaIntezetAzon { get; set; }

        [Column("IntezetId")]
        public int IntezetId { get; set; }

        [Column("UgySorszamaEv")]
        public int UgySorszamaEv { get; set; }

        [Column("UgySorszama")]
        public int UgySorszama { get; set; }

        [Column("StatuszCimkeId")]
        public int StatuszCimkeId { get; set; }

        [Column("DontesDatuma")]
        public DateTime? DontesDatuma { get; set; }

        [Column("ElrendeloSzemelyId")]
        public int? ElrendeloSzemelyId { get; set; }        

        [Column("KivizsgaloSzemelyId")]
        public int? KivizsgaloSzemelyId { get; set; }

        [Column("VanJogiKepviselet")]
        public bool VanJogiKepviselet { get; set; }

        [Column("TorvenyszekiHatarozatDatuma")]
        public DateTime? TorvenyszekiHatarozatDatuma { get; set; }

        [Column("FeljelentesKezdemenyezesenekDatuma")]
        public DateTime? FeljelentesKezdemenyezesenekDatuma { get; set; }

        [Column("ElsofokuHatarozatotTudomasulVette")]
        public bool? ElsofokuHatarozatotTudomasulVette { get; set; }        

        [Column("FegyelmiVetsegTipusaCimkeId")]
        public int? FegyelmiVetsegTipusaCimkeId { get; set; }

        [Column("FeljelentesKezdemenyezesenekTipusaCimkeId")]
        public int? FeljelentesKezdemenyezesenekTipusaCimkeId { get; set; }

        [Column("FeljelentesStatuszaCimkeId")]
        public int? FeljelentesStatuszaCimkeId { get; set; }

        [Column("HatarozatVagyFellebbezesJogkoreCimkeId")]
        public int? HatarozatVagyFellebbezesJogkoreCimkeId { get; set; }

        [Column("FoFegyelmiUgyId")]
        public int? FoFegyelmiUgyId { get; set; }

        [Column("UgyFoka")]
        public byte? UgyFoka { get; set; }

        [Column("Hatarido")]
        public DateTime? Hatarido { get; set; }

        [Column("FenyitesTipusCimkeId")]
        public int? FenyitesTipusCimkeId { get; set; }

        [Column("Lezarva")]
        public bool? Lezarva { get; set; }

        [Column("FelfuggesztesiJavaslat")]
        public bool? FelfuggesztesiJavaslat { get; set; }

        [Column("Felfuggesztve")]
        public bool? Felfuggesztve { get; set; }

        [Column("HataridoModositasJavaslat")]
        public bool? HataridoModositasJavaslat { get; set; }
        
        [Column("ElsofokuTargyalasIdopontja")]
        public DateTime? ElsofokuTargyalasIdopontja { get; set; }

        [Column("MasodfokuTargyalasIdopontja")]
        public DateTime? MasodfokuTargyalasIdopontja { get; set; }

        [Column("HatarozatHozoJogkoreCimkeId")]
        public int? HatarozatHozoJogkoreCimkeId { get; set; }
        
        [Column("Visszakuldve")]
        public bool? Visszakuldve { get; set; }                    
        public bool? KozvetitoiEljarasKezdemenyezve { get; set; }                    

        [Column("HatarozatIndoklasa")]
        public string HatarozatIndoklasa { get; set; }

        [Column("HatarozatJogerosFL")]
        public bool? HatarozatJogerosFL { get; set; }

        [Column("VetsegRendeletSzerintCimkeId")]
        public int? VetsegRendeletSzerintCimkeId { get; set; }

        [Column("HatarozatotHozottSzemelyId")]
        public int? HatarozatotHozottSzemelyId { get; set; }

        [Column("HatarozatDatuma")]
        public DateTime? HatarozatDatuma { get; set; } 
        
        [Column("JogiKepviseletetKer")]
        public bool? JogiKepviseletetKer { get; set; }        

        [Column("FenyitesHossza")]
        public int? FenyitesHossza { get; set; }
        
        [Column("FenyitesHosszaMennyisegiEgysegCimkeId")]
        public int? FenyitesHosszaMennyisegiEgysegCimkeId { get; set; }

        [Column("VegrehajtasKezdeteIdo")]
        public DateTime? VegrehajtasKezdeteIdo { get; set; }

        [Column("VegrehajtasVegeIdo")]
        public DateTime? VegrehajtasVegeIdo { get; set; }

        [Column("VegrehajtasHosszEddig")]
        public double? VegrehajtasHosszEddig { get; set; }
        [Column("KozvetitoiGaranciaHatarido")]
        public DateTime? KozvetitoiGaranciaHatarido { get; set; }

        [Column("GaranciaTeljesultFl")]
        public bool? GaranciaTeljesultFl { get; set; }
        [Column("FeljelentesFL")]
        public bool? FeljelentesFl { get; set; }
        [Column("ElkulonitesFL")]
        public bool? ElkulonitveFl { get; set; }

        [Column("KivizsgalasiHatarido")]
        public DateTime? KivizsgalasiHatarido { get; set; }
        [Column("KarteritesId")]
        public int? KarteritesId { get; set; }

        [ForeignKey(nameof(FenyitesHosszaMennyisegiEgysegCimkeId))]
        public virtual Cimke FenyitesHosszaMennyisegiEgyseg { get; set; }

        [ForeignKey(nameof(HatarozatHozoJogkoreCimkeId))]
        public virtual Cimke HatarozatHozoJogkoreCimke { get; set; }

        [ForeignKey(nameof(StatuszCimkeId))]
        public virtual Cimke StatuszCimke { get; set; }

        [ForeignKey(nameof(ElrendeloSzemelyId))]
        public virtual Szemelyzet ElrendeloSzemely { get; set; }

        [ForeignKey(nameof(KivizsgaloSzemelyId))]
        public virtual Szemelyzet KivizsgaloSzemely { get; set; }

        [ForeignKey(nameof(HatarozatotHozottSzemelyId))]
        public virtual Szemelyzet HatarozatotHozottSzemely { get; set; }

        [ForeignKey(nameof(FegyelmiVetsegTipusaCimkeId))]
        public virtual Cimke FegyelmiVetsegTipusa { get; set; }

        [ForeignKey(nameof(FeljelentesKezdemenyezesenekTipusaCimkeId))]
        public virtual Cimke FeljelentesKezdemenyezesenekTipusa { get; set; }

        [ForeignKey(nameof(FeljelentesStatuszaCimkeId))]
        public virtual Cimke FeljelentesStatusza { get; set; }

        [ForeignKey(nameof(FenyitesTipusCimkeId))]
        public virtual Cimke FenyitesTipusa { get; set; }

        [ForeignKey(nameof(HatarozatVagyFellebbezesJogkoreCimkeId))]
        public virtual Cimke HatarozatVagyFellebbezesJogkore { get; set; }
        
        [ForeignKey(nameof(EsemenyId))]
        public virtual Esemenyek Esemeny { get; set; }

        [ForeignKey(nameof(FogvatartottId))]
        public virtual FogvatartottListaItemFegyelmiView Fogvatartott { get; set; }

        [ForeignKey(nameof(FogvatartottId))]
        public virtual Fogvatartott FogvatartottFonix { get; set; }

        [ForeignKey(nameof(VetsegRendeletSzerintCimkeId))]
        public virtual Cimke VetsegRendeletSzerintCimke { get; set; }

        [ForeignKey(nameof(IntezetId))]
        public virtual Intezet Intezet { get; set; }
        public byte? KietkezesCsokkentes { get; set; }
        [Column("KozvetitoiEljarasban")]
        public bool? KozvetitoiEljarasban { get; set; }
        [Column("FelfuggesztesDatum")]
        public DateTime? FelfuggesztesDatum { get; set; }
        [Column("HatarozatotHozoTorvenyszekId")]
        public int? HatarozatotHozoTorvenyszekId { get; set; }
        [Column("MegszuntetesOkaCimkeId")]
        public int? MegszuntetesOkaCimkeId { get; set; }
        [Column("SzakteruletiVelemenyreVarFL")]
        public bool? SzakteruletiVelemenyreVarFL { get; set; } 
        [Column("FelfuggesztesOkaCimkeId")]
        public int? FelfuggesztesOkaCimkeId { get; set; } 
        [Column("KozvetitoiSikeresFL")]
        public bool? KozvetitoiSikeres { get; set; }
        [Column("KozvetitoSzemelyId")]
        public int? KozvetitoSzemelyId { get; set; }
        public bool? EljarasAlaVontatMeghallgattukFL { get; set; }
        [ForeignKey(nameof(KozvetitoSzemelyId))]
        public virtual Szemelyzet KozvetitoSzemely { get; set; }
        [Column("MaganelzarasVegeDatum")]
        public DateTime? MaganelzarasVegeDatum { get; set; }
        [Column("MaganelzarasElrendelesDatum")]
        public DateTime? MaganelzarasElrendelesDatum { get; set; }
        [Column("MaganelzarasEllenjavaltHatarido")]
        public DateTime? MaganelzarasEllenjavaltHatarido { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string Ugyszam { get; set; }
    }
}
