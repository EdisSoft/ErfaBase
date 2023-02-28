using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{
    [Table("erfa.vAlkatreszKeszletekOttimo")]
    public class AlkatreszKeszletView
    {
        //[Column("prdID")]
        //public int PrdId { get; set; }

        [Key]
        [Column("ottimokod")]
        public string Ottimokod { get; set; }

        [Column("icgCode")]
        public string IcgCode { get; set; }

        //[Column("oriReqQty")]
        //public double OriReqQty { get; set; }

        //[Column("TablaDb")]
        //public int? TablaDb { get; set; }

        [Column("SzabadMennyiseg")]
        public decimal SzabadMennyiseg { get; set; }
    }
}
