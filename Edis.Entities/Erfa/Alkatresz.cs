using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{
    [Table("erfa.Alkatreszek")]
    public class Alkatresz
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Azonosito")]
        public string Azonosito { get; set; }

        [Column("GyartasiMegbizasId")]
        public int GyartasiMegbizasId { get; set; }
    }
}
