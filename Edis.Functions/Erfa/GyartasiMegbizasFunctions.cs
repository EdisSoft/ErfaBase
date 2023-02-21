using Edis.Entities.Erfa;
using Edis.Functions.Base;
using Edis.ViewModels.Erfa;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Edis.Functions.Erfa
{
    public class GyartasiMegbizasFunctions : KonasoftBVFonixFunctionsBase<GyartasiMegbizasListItemViewModel, GyartasiMegbizasView>, IGyartasiMegbizasFunctions
    {
        private DbSet<GyartasiMegbizasView> Table => KonasoftBVFonixContext.GyartasiMegbizasokView;

        public List<GyartasiMegbizasListItemViewModel> GetGyartasiMegbizasok()
        {
            var gyartasiMegbizasok = Table.ToArray();
            return gyartasiMegbizasok.Select(s => (GyartasiMegbizasListItemViewModel)s).ToList();
        }
    }
}
