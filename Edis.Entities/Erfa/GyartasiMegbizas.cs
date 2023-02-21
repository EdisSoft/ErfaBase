using System.ComponentModel.DataAnnotations.Schema;

namespace Edis.Entities.Erfa
{
    [Table("erfa.GyartasiMegbizas")]
    public class GyartasiMegbizas
    {

        [Column("Id")]
        public int Id { get; set; }

        [Column("Azonosito")]
        public string Azonosito { get; set; }
    }
}
