using Edis.Entities.Erfa;
using Edis.Functions.Base;
using Edis.ViewModels.Erfa;
using System.Collections.Generic;

namespace Edis.Functions.Erfa
{
    public interface IGyartasiMegbizasFunctions : IFunctionsBase<GyartasiMegbizasListItemViewModel, GyartasiMegbizasView>
    {
        List<GyartasiMegbizasListItemViewModel> GetGyartasiMegbizasok();
        //List<GyartasiMegbizasListItemViewModel> AddAlkatreszKeszletekToGyartasiMegbizasok(List<GyartasiMegbizasListItemViewModel> gyartasiMegbizasok, List<AlkatreszKeszletekHelperModel> alkatreszKeszletek);
    }
}
