﻿using Edis.Entities.Erfa;
using Edis.Functions.Base;
using Edis.ViewModels.Erfa;
using System.Collections.Generic;

namespace Edis.Functions.Erfa
{
    public interface IAlkatreszFunctions : IFunctionsBase<AlkatreszekListItemViewModel, AlkatreszView>
    {
        List<AlkatreszekListItemViewModel> GetAlkatreszek();
        List<AlkatreszekListItemViewModel> GetAlkatreszekByPrdId(int prdId);
    }
}