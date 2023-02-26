using System.Linq;
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
        private DbSet<AlkatreszView> Table => KonasoftBVFonixContext.AlkatreszekView;

        public List<AlkatreszekListItemViewModel> GetAlkatreszek()
        {
            var alkatreszek = Table.ToArray();
            return alkatreszek.Select(s => (AlkatreszekListItemViewModel)s).ToList();
        }

        public List<AlkatreszekListItemViewModel> GetAlkatreszekByPrdId(int prdId)
        {
            var alkatreszek = Table.Where(w => w.PrdId == prdId).ToArray();
            return alkatreszek.Select(s => (AlkatreszekListItemViewModel)s).OrderBy(s=>s.ItmItemNumber).ToList();
        }
    }
}