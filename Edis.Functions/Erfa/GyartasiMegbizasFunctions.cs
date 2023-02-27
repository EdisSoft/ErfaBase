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

        public List<GyartasiMegbizasListItemViewModel> AddAlkatreszKeszletekToGyartasiMegbizasok(List<GyartasiMegbizasListItemViewModel> gyartasiMegbizasok, List<AlkatreszKeszletekHelperModel> alkatreszKeszletek)
        {
            foreach (var gyartasiMegbizas in gyartasiMegbizasok)
            {
                var alkatreszKeszlet = alkatreszKeszletek.Where(w => w.PrdId == gyartasiMegbizas.PrdID).FirstOrDefault();
                if(alkatreszKeszlet != null)
                {
                    gyartasiMegbizas.Lapanyag = alkatreszKeszlet.LapAnyag;
                    gyartasiMegbizas.Elanyag = alkatreszKeszlet.ElAnyag;
                    gyartasiMegbizas.Kellekek = alkatreszKeszlet.Kellek;
                }
            }

            return gyartasiMegbizasok;
        }
    }
}
