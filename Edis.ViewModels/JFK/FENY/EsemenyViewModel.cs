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

    public class EsemenyViewModel : BaseViewModel
    {

        //public int Id { get; set; }
        
        public int RogzitoSzemelyId { get; set; }
        public string RogzitoSzemely { get; set; }
        public string RogzitoSzemelyRendfokozat { get; set; }

        public int RogzitoTelephelyId { get; set; }

		public DateTime ErvenyessegKezd { get; set; }

		public bool ToroltFl { get; set; }

		public DateTime LetrehozasDatuma { get; set; }

		public int? KeziJavitasAzonosito { get; set; }
        

        public DateTime EsemenyDatuma { get; set; }

        public int JellegCimkeId { get; set; }

        public int NapszakCimkeId { get; set; }

        public int HelyCimkeId { get; set; }

        public string Leiras { get; set; }
        public string Bizonyitek { get; set; }
        public int EszleloId { get; set; }
        public string Jelleg { get; set; }
        public string Hely { get; set; }
        public string Napszak { get; set; }

        public List<string> Tanuk;
        public List<string> Elkovetok;
        public List<string> Sertettek;
        public List<string> TovabbiElkovetok;

        public List<FeltoltesekViewModel> Feltoltesek { get; set; }

        public static explicit operator EsemenyViewModel(Esemenyek item)
		{
			var model = ValueInjecterUtilities.InjectViewModel<Esemenyek, EsemenyViewModel>(item);
			return model;
		}

		public static explicit operator Esemenyek(EsemenyViewModel model)
		{
			Esemenyek entity = new Esemenyek();
			entity = ValueInjecterUtilities.InjectViewModel<EsemenyViewModel, Esemenyek> (model);

			return entity;
		}
    }
}
