using Edis.Fenyites.Controllers.Base;
using Edis.Functions.Erfa;
using Edis.IoC.Attributes;
using System.Web.Mvc;

namespace Edis.Fenyites.Controllers.Erfa
{
    [EnableCors]
    public class AlkatreszController : BaseController
    {
        [Inject]
        IAlkatreszFunctions AlkatreszFunctions { get; set; }
             
        public JsonResult GetAlkatreszek()
        {
            var alkatreszek = AlkatreszFunctions.GetAlkatreszek();    
            return Json(new { alkatreszek });
        }

        //[HttpPost]
        public JsonResult GetAlkatreszKeszletek()
        {
            var alkatreszKeszletek = AlkatreszFunctions.GetAlkatreszKeszletek();
            return Json(new { alkatreszKeszletek });
        }

        [HttpPost]
        public JsonResult GetAlkatreszekByPrdId(int prdId)
        {
            var alkatreszek = AlkatreszFunctions.GetAlkatreszekByPrdId(prdId);
            return Json(new { alkatreszek });
        }
    }
}