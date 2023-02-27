using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{
    [Table("erfa.vAlkatreszKeszletek")]
    public class AlkatreszKeszletView
    {
        [Column("prdID")]        
        public int PrdId { get; set; }

        [Key]
        [Column("icgCode")]
        public string IcgCode { get; set; }

        [Column("ottimokod")]
        public string OttimoKod { get; set; }

        [Column("oriReqQty")]
        public double OriReqQty { get; set; }

        [Column("TablaDb")]
        public int? TablaDb { get; set; }

        [Column("SzabadMennyiseg")]
        public decimal SzabadMennyiseg { get; set; }
    }
}
