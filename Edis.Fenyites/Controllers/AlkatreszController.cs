using Edis.Fenyites.Controllers.Base;
using Edis.Functions.Erfa;
using Edis.IoC.Attributes;
using System.Web.Mvc;

namespace Edis.Fenyites.Controllers
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
    }
}