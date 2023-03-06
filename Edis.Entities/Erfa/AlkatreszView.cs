using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{               
    [Table("erfa.vAlkatreszek")]
    public class AlkatreszView
    {
        [Column("Id")]
        [Key]
        public string Id { get; set; }

        [Column("prdID")]
        public int PrdId { get; set; }

        [Column("itmItemNumber")]
        public string ItmItemNumber { get; set; }

        [Column("itmDescription")]
        public string ItmDescription { get; set; }

        [Column("PrimaryUOMCode")]
        public string PrimaryUOMCode { get; set; }

        [Column("oriReqQty")]
        public Single OriReqQty { get; set; }

        //[Column("IssuedQty")]
        //public float? IssuedQty { get; set; }

        //[Column("IslLocationQtyTotal")]
        //public float? IslLocationQtyTotal { get; set; }

        [Column("IcgCode")]
        public string IcgCode { get; set; }

        [Column("icg2Code")]
        public string Icg2Code { get; set; }

        [Column("szabjuk")]
        public bool szabjuk { get; set; }

        [Column("szinjelzes")]
        public string Szinjelzes { get; set; }

        [Column("dimZ")]
        public float? DimZ { get; set; }

        [Column("itmavValue")]
        public string ItmavValue { get; set; }

        [Column("ottimokod")]
        public string OttimoKod { get; set; }

        [Column("Tábla db")]
        public int? TablaDb { get; set; }

        [Column("Utolsó tábla kihozatal")]
        public float? UtolsoTablaKihozatal { get; set; }

        [Column("Bruttó mennyiség")]
        public float? BruttoMennyiseg { get; set; }

        [Column("SzabadMennyiseg")]
        public Single? SzabadMennyiseg { get; set; }
    }
}
