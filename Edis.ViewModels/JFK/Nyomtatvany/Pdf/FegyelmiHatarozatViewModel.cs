//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Edis.ViewModels.JFK.FENY
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Edis.Utilities;
    using Edis.ViewModels.Base;
    using System.ComponentModel.DataAnnotations;
    using Edis.Entities.JFK.FENY;
    using System.Web.Mvc;
    using System.Web.Helpers;
    using Newtonsoft.Json.Linq;
    using Edis.ViewModels.Common;

    public class FegyelmiHatarozatViewModel
    {
        public int FegyelmiUgyId { get; set; }
        public string IntezetNev { get; set; }
        public string Iktatoszam { get; set; }
        public string UgySzam { get; set; }
        public int? MeghallgatasEve { get; set; }
        public int? MeghallgatasHava { get; set; }
        public int? MeghallgatasNapja { get; set; }
        public string MeghallgatasIdeje { get; set; }
        public string FogvatartottNev { get; set; }
        public string FogvatartottSzulIdeje { get; set; }
        public string FogvatartottSzulHelye { get; set; }
        public string FogvatartottAnyjaNeve { get; set; }
        public string FogvLakohelye { get; set; }
        public string FogvElhelyezese { get; set; }
        public string FogvSzabadul { get; set; }
        public string FogvAzon { get; set; }
        public string BvFok { get; set; }
        public string VegrehajtasiFok { get; set; }
        public string FegyVetseg { get; set; }
        public string FenyTipus { get; set; }
        public string FenyIdotart { get; set; }
        public string KietkezesCsokkentes { get; set; }
        public string HatarozathozoNev { get; set; }
        public string HatarozathozoRang { get; set; }
        public string HatarozathozoTitulus { get; set; }
        public string HatarozathozoSzam { get; set; }
        public string HatarozatHelyDatum { get; set; }
        public string IndoklasText { get; set; }
        public string FegyelmiUgyekOsszevont { get; set; }
        public bool? PanasszalElt { get; set; }
        public int? HatarozatHozoJogkoreCimkeId { get; set; }
        public string MegszuntetesOka { get; set; }
    }
}