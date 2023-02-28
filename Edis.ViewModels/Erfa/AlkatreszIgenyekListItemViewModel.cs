using Edis.Entities.Erfa;
using Edis.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edis.ViewModels.Erfa
{
    public class AlkatreszKeszletekListItemViewModel
    {
        //public int PrdId { get; set; }
        public string Ottimokod { get; set; }
        public string IcgCode { get; set; }
        public double SzabadMennyiseg { get; set; }

        public static explicit operator AlkatreszKeszletView(AlkatreszKeszletekListItemViewModel model)
        {
            return ValueInjecterUtilities.InjectViewModel<AlkatreszKeszletekListItemViewModel, AlkatreszKeszletView>(model);
        }

        public static explicit operator AlkatreszKeszletekListItemViewModel(AlkatreszKeszletView model)
        {
            return ValueInjecterUtilities.InjectViewModel<AlkatreszKeszletView, AlkatreszKeszletekListItemViewModel>(model);
        }
    }
}
