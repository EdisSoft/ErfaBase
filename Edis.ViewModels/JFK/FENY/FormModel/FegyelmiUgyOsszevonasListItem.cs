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

    public class FegyelmiUgyOsszevonasListItem
    {

        public int FegyelmiUgyId { get; set; }
        public string EsemenyJellege { get; set; }
        public DateTime FegyelmiUgyElrendelesenekDatuma { get; set; }
        public string Ugyszam { get; set; }
        public string ElrendeloSzemely { get; set; }
        public string KivizsgaloSzemely { get; set; }

    }
}
