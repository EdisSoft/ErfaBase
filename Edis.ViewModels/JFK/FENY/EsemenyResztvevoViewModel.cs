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

    public class EsemenyResztvevoViewModel : BaseViewModel
    {
        public int? FogvatartottId { get; set; }
        
        public int ErintettsegFokaCimkeId { get; set; }
        
        public int EsemenyId { get; set; }

        public int? AllomanyiSzemelyId { get; set; }

        public string Bizonyitek { get; set; }

        public static explicit operator EsemenyResztvevoViewModel(EsemenyResztvevo item)
		{
			var model = ValueInjecterUtilities.InjectViewModel<EsemenyResztvevo, EsemenyResztvevoViewModel>(item);
			return model;
		}

		public static explicit operator EsemenyResztvevo(EsemenyResztvevoViewModel model)
		{
            EsemenyResztvevo entity = new EsemenyResztvevo();
			entity = ValueInjecterUtilities.InjectViewModel<EsemenyResztvevoViewModel, EsemenyResztvevo> (model);

			return entity;
		}
    }
}
