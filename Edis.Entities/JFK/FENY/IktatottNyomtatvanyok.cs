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

    [Table("Fenyites.IktatottNyomtatvanyok")]
    public class IktatottNyomtatvanyok : KeziJavitoEntity
    {
        
		[Column("FegyelmiUgyId")]
		public int FegyelmiUgyId { get; set; }

		[Column("DokumentumId")]
		public int DokumentumId { get; set; }

		[Column("Alszam")]
		public Byte Alszam { get; set; }

        [Column("AktivFl")]
        public bool AktivFl { get; set; }

        [Column("ModositoSzemelyId")]
        public int? ModositoSzemelyId { get; set; }

        [Column("ModositasDatuma")]
        public DateTime? ModositasDatuma { get; set; }

     

        [ForeignKey(nameof(DokumentumId))]
        public virtual NyomtatvanySablon Dokumentum { get; set; }

        [ForeignKey(nameof(ModositoSzemelyId))]
        public virtual Szemelyzet ModositoSzemely { get; set; }


    }
}
