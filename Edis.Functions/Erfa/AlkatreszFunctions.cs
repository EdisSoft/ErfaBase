﻿using System.Linq;
using Edis.Entities.Erfa;
using Edis.Functions.Base;
using Edis.Repositories.Contexts;
using Edis.ViewModels.Erfa;
using Edis.ViewModels.JFK.FENY;
using System.Data.Entity;
using System.Collections.Generic;

namespace Edis.Functions.Erfa
{
    public class AlkatreszFunctions : KonasoftBVFonixFunctionsBase<AlkatreszekListItemViewModel, Alkatresz>, IAlkatreszFunctions
    {
        private DbSet<AlkatreszView> Alkatreszek => KonasoftBVFonixContext.AlkatreszekView;
        private DbSet<AlkatreszKeszletView> AlkatreszKeszletek => KonasoftBVFonixContext.AlkatreszKeszletekView;

        private Dictionary<int, AlkatreszKeszletekHelperModel> alkatreszKeszletHelper = new Dictionary<int, AlkatreszKeszletekHelperModel>();

        public List<AlkatreszekListItemViewModel> GetAlkatreszek()
        {
            var alkatreszek = Alkatreszek.ToArray();
            return alkatreszek.Select(s => (AlkatreszekListItemViewModel)s).ToList();
        }

        public List<AlkatreszekListItemViewModel> GetAlkatreszekByPrdId(int prdId)
        {
            var alkatreszek = Alkatreszek.Where(w => w.PrdId == prdId).ToArray();
            return alkatreszek.Select(s => (AlkatreszekListItemViewModel)s).OrderBy(s => s.ItmItemNumber).ToList();
        }

        public List<AlkatreszKeszletekListItemViewModel> GetAlkatreszKeszletek()
        {
            var alkatreszKeszletek = AlkatreszKeszletek.Where(w => w.IcgCode != null).ToArray();
            return alkatreszKeszletek.Select(s => (AlkatreszKeszletekListItemViewModel)s).ToList();
        }

        public List<AlkatreszKeszletekListItemViewModel> GetAlkatreszKeszletekByPrdIds(List<int> prdIds)
        {
            var alkatreszKeszletek = AlkatreszKeszletek.Where(w => w.IcgCode != null && prdIds.Contains(w.PrdId)).ToArray();
            return alkatreszKeszletek.Select(s => (AlkatreszKeszletekListItemViewModel)s).ToList();
        }

        public List<AlkatreszKeszletekHelperModel> FormatAlkatreszKeszletek(List<AlkatreszKeszletekListItemViewModel> alkatreszKeszletek, List<int> prdIds)
        {
            List<AlkatreszKeszletekListItemViewModel> alkatreszKeszletekToDeduct = null;
            if (prdIds != null)
            {
                alkatreszKeszletekToDeduct = GetAlkatreszKeszletekByPrdIds(prdIds);
            }

            var result = new Dictionary<int, AlkatreszKeszletekHelperModel>();
            foreach (var item in alkatreszKeszletek)
            {
                if (!result.ContainsKey(item.PrdId))
                {
                    result.Add(item.PrdId, new AlkatreszKeszletekHelperModel() { PrdId = item.PrdId });
                }

                var member = result[item.PrdId];

                switch (item.IcgCode)
                {
                    case "Lapanyag":
                        member.LapAnyagIgeny += item.TablaDb;
                        member.LapAnyagSzabad += item.SzabadMennyiseg;

                        if (alkatreszKeszletekToDeduct != null && !alkatreszKeszletekToDeduct.Any(w => w.PrdId == item.PrdId))
                        {
                            var toDeduct = alkatreszKeszletekToDeduct.Where(w => w.Ottimokod == item.Ottimokod).Sum(s => s.TablaDb);
                            member.LapAnyagSzabad -= toDeduct;
                        }
                        break;
                    case "Élanyag":
                        member.ElAnyagIgeny += item.OriReqQty;
                        member.ElAnyagSzabad += (double)item.SzabadMennyiseg;

                        if (alkatreszKeszletekToDeduct != null && !alkatreszKeszletekToDeduct.Any(w => w.PrdId == item.PrdId))
                        {
                            var toDeduct = alkatreszKeszletekToDeduct.Where(w => w.Ottimokod == item.Ottimokod).Sum(s => s.OriReqQty);
                            member.ElAnyagSzabad -= toDeduct;
                        }
                        break;
                    case "Kellék":
                        member.KellekIgeny += item.OriReqQty;
                        member.KellekSzabad += (double)item.SzabadMennyiseg;

                        if (alkatreszKeszletekToDeduct != null && !alkatreszKeszletekToDeduct.Any(w => w.PrdId == item.PrdId))
                        {
                            var toDeduct = alkatreszKeszletekToDeduct.Where(w => w.Ottimokod == item.Ottimokod).Sum(s => s.OriReqQty);
                            member.KellekSzabad -= toDeduct;
                        }
                        break;
                }
            }
            return new List<AlkatreszKeszletekHelperModel>(result.Values);
        }
    }
}
