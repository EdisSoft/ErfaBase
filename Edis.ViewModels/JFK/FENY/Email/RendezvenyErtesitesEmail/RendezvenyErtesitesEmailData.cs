using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edis.ViewModels.JFK.FENY.Email
{
    public class RendezvenyErtesitesEmailData
    {
        public string CimzettekTitle { get; set; }
        public string EmailAddresses { get; set; }

        public string Datum { get; set; }
        public string AlkalmazasUrl { get; set; }


        public List<FegyelmiUgyItem> KorlatozottFegyelmiList { get; set; }
        public List<FegyelmiUgyItem> EngedelyezettFegyelmiList { get; set; }
    }
}
