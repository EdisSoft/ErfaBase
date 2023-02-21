using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{
    [Table("erfa.vGyartasiMegbizas")]
    public class GyartasiMegbizasView
    {
        [Column("prdID")]
        [Key]
        public int PrdID { get; set; }

        [Column("prjCode")]
        public string PrjCode { get; set; }

        [Column("szabszam")]
        public string Szabszam { get; set; }

        [Column("OrdCustRequestDate")]
        public DateTime ordCustRequestDate { get; set; }

        [Column("prdinfo2")]
        public string Prdinfo2 { get; set; }

        [Column("Terv")]
        public int? Terv { get; set; }

        [Column("obsStartDate")]
        public DateTime? ObsStartDate { get; set; }

        [Column("felulet")]
        public int? Felulet { get; set; }

        [Column("fo")]
        public int? Fo { get; set; }

        [Column("lapanyag")]
        public int? Lapanyag { get; set; }

        [Column("elanyag")]
        public int? Elanyag { get; set; }

        [Column("kellekek")]
        public int? Kellekek { get; set; }

        [Column("prioritas")]
        public int? Prioritas { get; set; }

        [Column("lejart")]
        public string Lejart { get; set; }

        [Column("lapHiany")]
        public int? LapHiany { get; set; }

        [Column("elHiany")]
        public int? ElHiany { get; set; }

        [Column("kellekHiany")]
        public int? KellekHiany { get; set; }
    }
}
