using Edis.Entities.Erfa;
using Edis.Utilities;
using System;

namespace Edis.ViewModels.Erfa
{
    public class AlkatreszekListItemViewModel
    {
        public int Id { get; set; }
        public int PrdId { get; set; }
        public string ItmItemNumber { get; set; }
        public string ItmDescription { get; set; }
        public string PrimaryUOMCode { get; set; }
        public Single OriReqQty { get; set; }
        public float? IssuedQty { get; set; }
        public float? islLocationQtyTotal { get; set; }
        public float? IslLocationQtyTotal { get; set; }
        public string IcgCode { get; set; }
        public string Icg2Code { get; set; }
        public bool szabjuk { get; set; }
        public string Szinjelzes { get; set; }
        public float? DimZ { get; set; }
        public string ItmavValue { get; set; }
        public string OttimoKod { get; set; }
        public int? TablaDb { get; set; }
        public float? UtolsoTablaKihozatal { get; set; }
        public float? BruttoMennyiseg { get; set; }

        public static explicit operator AlkatreszView(AlkatreszekListItemViewModel model)
        {
            return ValueInjecterUtilities.InjectViewModel<AlkatreszekListItemViewModel, AlkatreszView>(model);
        }

        public static explicit operator AlkatreszekListItemViewModel(AlkatreszView model)
        {
            return ValueInjecterUtilities.InjectViewModel<AlkatreszView, AlkatreszekListItemViewModel>(model); 
        }
    }
}
