//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Edis.Entities.JFK.FENY
{
    using System;
    using Edis.Entities.Base;
    using System.ComponentModel.DataAnnotations.Schema;
    using Edis.Entities.Common;
    using Edis.Entities.Fany;

    [Table("Fegyelmi.Feltoltesek")]
    public class Feltoltesek : KeziJavitoEntity
    {

		[Column("EsemenyId")]
		public int? EsemenyId { get; set; }

        [Column("NaploId")]
        public int? NaploId { get; set; }

        [Column("Url")]
        public string Url { get; set; }
        

    }
}