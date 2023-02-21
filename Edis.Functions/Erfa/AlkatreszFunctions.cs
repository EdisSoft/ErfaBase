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
        public DbSet<AlkatreszView> Table => KonasoftBVFonixContext.AlkatreszView;

        public List<AlkatreszekListItemViewModel> GetAlkatreszek()
        {
            var alkatreszek = KonasoftBVFonixContext.AlkatreszView.ToArray();
            return alkatreszek.Select(s => (AlkatreszekListItemViewModel)s).ToList();
        }
    }
}