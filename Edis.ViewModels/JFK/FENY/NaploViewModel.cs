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

    public class NaploViewModel : BaseViewModel
    {

        public int FegyelmiUgyId { get; set; }
        public DateTime LetrehozasDatuma { get; set; }

        public int? JegyzokonyvVezetoSzemelyId { get; set; }

        public int? FogvatartottId { get; set; }
        public string FogvatartottNyelve { get; set; }
        public string RogzitoSzemely { get; set; }

        public DateTime? JegyzokonyvLezarasDatuma { get; set; }

        public int TipusCimkeId { get; set; }

        public bool? AlairtaFl { get; set; }

        public bool? InaktivFl { get; set; }

        public string TovabbiJelenlevok { get; set; }

        public int? KihallgatasIntezetId { get; set; }

        public string KihallgatasHelye { get; set; }

        public string JegyzokonyvTartalma { get; set; }

        public int? MeghallgatoSzemelyId { get; set; }

        public bool? IsFogvatartottElfogadta { get; set; }
       
        public int? FegyelmiVetsegTipusaCimkeId { get; set; }
        
        public int? ReintegraciosReszlegId { get; set; }
        
        public DateTime? FenyitesKiszabasDatuma { get; set; }

        public int? DonteshozoSzemelyId { get; set; }

        public DateTime? Hatarido { get; set; }

        public int? KivizsgaloSzemelyId { get; set; }        

        public int? SzemelyiAllomanyiTanuSzemelyId { get; set; }

        public DateTime? ElsofokuTargyalasIdopontja { get; set; }

        public int? HatarozatHozoJogkoreCimkeId { get; set; }
        public int? VisszakuldesOkaCimkeId { get; set; }

        public string EgyebAdatokJson { get; set; }
        public bool? Vegleges { get; set; }
        public DateTime? MasodfokuTargyalasIdopontja { get; set; }
              
        
        public int? FenyitesTipusCimkeId { get; set; }
        
        public int? FenyitesHossza { get; set; }

        public int? FenyitesHosszaMennyisegiEgysegCimkeId { get; set; }

        public int? VetsegRendeletSzerintCimkeId { get; set; }

        public byte? KietkezesCsokkentes { get; set; }
        public int? TorvenyszekId { get; set; }
        public int? TitulusCimkeId { get; set; }
        public string VedoElerhetosege { get; set; }
        public string VedoNeve { get; set; }
        public string VedoCime { get; set; }
        public int? FelfuggesztesOkaCimkeId { get; set; }
        public int? TajekoztatastNyujtoId { get; set; }

        public string Tajekoztatott { get; set; }

        public string Telefonszam { get; set; }

        public DateTime? TajekoztatasIdeje { get; set; }

        public string TajekoztatasSikertelensegenekOka { get; set; }

        public bool? InkognitoFl { get; set; }
        public int? MegszuntetesOkaCimkeId { get; set; }

        public string ElozmenyUgyAzonosito { get; set; }

        public int? Szembesitett1FogvatartottId { get; set; }
        public int? Szembesitett2FogvatartottId { get; set; }
        public int? SertettId { get; set; }
        public string SertettKepviseloje { get; set; }
        public string EljarasAlaVontKepviseloje { get; set; }
        public bool? Visszautasitva { get; set; }
        public bool? GaranciaTeljesultFl { get; set; }
        public string ElkulonitesOka { get; set; }
        public string ElkulonitesRendelkezesek { get; set; }
        public DateTime? ElkulonitesElrendelesIdeje { get; set; }
        public DateTime? ElkulonitesMegszuntetesenekIdeje { get; set; }
        public bool? ElkulonitesFelulvizsgalvaFL { get; set; }
        public DateTime? MaganelzarasVegeDatum { get; set; }

        public static explicit operator NaploViewModel(Naplo item)
		{
			var model = ValueInjecterUtilities.InjectViewModel<Naplo, NaploViewModel>(item);
			return model;
		}

		public static explicit operator Naplo(NaploViewModel model)
		{
            Naplo entity = new Naplo();
			entity = ValueInjecterUtilities.InjectViewModel<NaploViewModel, Naplo> (model);

			return entity;
		}
    }
}