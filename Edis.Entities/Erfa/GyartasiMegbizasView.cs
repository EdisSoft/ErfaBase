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

        [Column("prjDescription")]
        public string PrjDescription { get; set; }

        [Column("szabszam")]
        public string Szabszam { get; set; }

        [Column("ordCustRequestDate")]
        public DateTime OrdCustRequestDate { get; set; }

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

        [Column("prioritas")]
        public int? Prioritas { get; set; }

        [Column("lejart")]
        public string Lejart { get; set; }

    }
}
