using Edis.Entities.Erfa;
using Edis.Utilities;

namespace Edis.ViewModels.Erfa
{
    public class AlkatreszekListItemViewModel
    {
        public int PrdId { get; set; }
        public string PrdInfo2 { get; set; }
        public string KorpNev { get; set; }
        public string KorpQty { get; set; }
        public string KorpIdo { get; set; }
        public string OrdKorpIdo { get; set; }
        public string Mennyiseg { get; set; }

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
