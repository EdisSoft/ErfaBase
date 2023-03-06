using Edis.Entities.Erfa;
using Edis.Utilities;
using System;

namespace Edis.ViewModels.Erfa
{
    public class GyartasiMegbizasListItemViewModel
    {
        public int PrdID { get; set; }
        public string PrjCode { get; set; }
        public string PrjDescription { get; set; }
        public string Szabszam { get; set; }
        public DateTime OrdCustRequestDate { get; set; }
        public string Prdinfo2 { get; set; }
        public string Terv { get; set; }
        public DateTime? ObsStartDate { get; set; }
        public string Felulet { get; set; }
        public string Fo { get; set; }
        public string Prioritas { get; set; }
        public string Lejart { get; set; }
        public string GyartasbaKiadhato { get; set; }

        public static explicit operator GyartasiMegbizasView(GyartasiMegbizasListItemViewModel model)
        {
            return ValueInjecterUtilities.InjectViewModel<GyartasiMegbizasListItemViewModel, GyartasiMegbizasView>(model);
        }

        public static explicit operator GyartasiMegbizasListItemViewModel(GyartasiMegbizasView model)
        {
            //var a = ValueInjecterUtilities.InjectViewModel<GyartasiMegbizasView, GyartasiMegbizasListItemViewModel>(model);
            return ValueInjecterUtilities.InjectViewModel<GyartasiMegbizasView, GyartasiMegbizasListItemViewModel>(model);
        }
    }
}
