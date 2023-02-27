using Edis.Fenyites.Controllers.Base;
using Edis.Functions.Erfa;
using Edis.IoC.Attributes;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Edis.Fenyites.Controllers.Erfa
{
    [EnableCors]
    public class GyartasiMegbizasController : BaseController
    {
        [Inject]
        IGyartasiMegbizasFunctions GyartasiMegbizasFunctions { get; set; }

        [Inject]
        IAlkatreszFunctions AlkatreszFunctions { get; set; }

        public JsonResult GetGyartasiMegbizasok()
        {
            var gyartasiMegbizasok = GyartasiMegbizasFunctions.GetGyartasiMegbizasok();
            return Json(gyartasiMegbizasok);
        }

        [HttpPost]
        public JsonResult GetGyartasiMegbizasok(List<int> prdIds)
        {
            var alkatreszKeszletek = AlkatreszFunctions.GetAlkatreszKeszletek();

            var formattedAlkatreszKeszletek = AlkatreszFunctions.FormatAlkatreszKeszletek(alkatreszKeszletek, prdIds);
            
            var simpleGyartasiMegbizasok = GyartasiMegbizasFunctions.GetGyartasiMegbizasok();
            var gyartasiMegbizasok = GyartasiMegbizasFunctions.AddAlkatreszKeszletekToGyartasiMegbizasok(simpleGyartasiMegbizasok, formattedAlkatreszKeszletek);
            return Json(gyartasiMegbizasok);
        }
    }
}