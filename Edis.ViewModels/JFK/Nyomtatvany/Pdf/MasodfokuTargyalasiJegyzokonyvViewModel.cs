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

    public class SzembesitesiJegyzokonyvViewModel
    {
        public int FegyelmiUgyId { get; set; }
        public string IntezetNev { get; set; }
        public string Iktatoszam { get; set; }
        public string Meghallgato { get; set; }
        public string ElsoSzembesitettTipus { get; set; }
        public string ElsoSzembesitett { get; set; }
        public string ElsoSzembesitettAzon { get; set; }
        public string ElsoSzembesitettAnyja { get; set; }
        public string ElsoSzembesitettSzulHelye { get; set; }
        public string ElsoSzembesitettSzulIdeje { get; set; }
        public string MasodikSzembesitettTipus { get; set; }
        public string MasodikSzembesitett { get; set; }
        public string MasodikSzembesitettAzon { get; set; }
        public string MasodikSzembesitettAnyja { get; set; }
        public string MasodikSzembesitettSzulHelye { get; set; }
        public string MasodikSzembesitettSzulIdeje { get; set; }
        public string UgySzam { get; set; }
        public string JegyzokonyvVezeto { get; set; }
        public string JegyzokonyvText { get; set; }
        public string EgyebJelenlevo { get; set; }
        public int? Ev { get; set; }
        public int? Honap { get; set; }
        public int? Nap { get; set; }
        public int? Ora { get; set; }
        public int? Perc { get; set; }

    }
}
