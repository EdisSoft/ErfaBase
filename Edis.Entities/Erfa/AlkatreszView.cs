using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{               
    [Table("erfa.vAlkatreszek1")]
    public class AlkatreszView
    {
        [Column("prdId")]
        [Key]
        public int PrdId { get; set; }

        [Column("prdInfo2")]
        public string PrdInfo2 { get; set; }

        [Column("korpNev")]
        public string KorpNev { get; set; }

        [Column("korpQty")]
        public string KorpQty { get; set; }

        [Column("korpIdo")]
        public string KorpIdo { get; set; }

        [Column("ordKorpIdo")]
        public string OrdKorpIdo { get; set; }

        [Column("mennyiseg")]
        public string Mennyiseg { get; set; }
    }
}
