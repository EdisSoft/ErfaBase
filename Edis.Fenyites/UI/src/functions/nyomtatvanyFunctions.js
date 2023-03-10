import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from '../fonts/timesnewroman/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfMake from 'html-to-pdfmake';
import { apiService } from '../main';
import settings from '../data/settings';
import { FegyelmiUgyFunctions } from './FegyelmiUgyFunctions';
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import ApiService from '../services/ApiService';
import { isFulfilled } from 'q';
import Cimkek from '../data/enums/Cimkek';

class Nyomtatvany {
  async ErtesitoLapNyomtatas(fegyelmiUgyId, iktatasId) {
    var url =
      settings.baseUrl +
      `Api/Nyomtatvany/ErtesitoLapNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    if (iktatasId) {
      url += '&iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async FegyelmiEljarastKezdemenyezoLapNyomtatas(fegyelmiUgyId, iktatasId) {
    var url =
      settings.baseUrl +
      `Api/Nyomtatvany/FegyelmiEljarastKezdemenyezoNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    if (iktatasId) {
      url += '&iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async LefoglalasiJegyzokonyvNyomtatas(fegyelmiUgyId, iktatasId) {
    var url =
      settings.baseUrl +
      `Api/Nyomtatvany/LefoglalasiJegyzokonyvNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    if (iktatasId) {
      url += '&iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async IratosszesitoFegyelmiUgybenNyomtatas(fegyelmiUgyId, iktatasId) {
    var url =
      settings.baseUrl +
      `Api/Nyomtatvany/IratosszesitoFegyelmiUgybenNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    if (iktatasId) {
      url += '&iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async ElkulonitoLapNyomtatas({ fegyelmiUgyId, iktatasId }) {
    var url = settings.baseUrl + 'Api/Dokumentum/ElkulonitesiLapNyomtatvany';
    if (fegyelmiUgyId && iktatasId) {
      url += `?fegyelmiUgyId=${fegyelmiUgyId}` + '&iktatasId=' + iktatasId;
    } else if (fegyelmiUgyId) {
      url += `?fegyelmiUgyId=${fegyelmiUgyId}`;
    } else if (iktatasId) {
      url += '?iktatasId=' + iktatasId;
    }

    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async AlairasMegtagadasaNyomtatvany({ fegyelmiUgyId, iktatasId }) {
    var url =
      settings.baseUrl +
      `Api/Dokumentum/AlairasMegtagadasaNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    if (iktatasId) {
      url += '&iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async VedoKirendeleseNyomtatas({ naplobejegyzesId, iktatasId }) {
    var url = settings.baseUrl + 'Api/Nyomtatvany/VedoKirendeleseNyomtatvany?';
    if (naplobejegyzesId) url += `naplobejegyzesId=${naplobejegyzesId}`;
    if (iktatasId) {
      url += 'iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async VedoTelefonosTajekoztatasaNyomtatasDocX({
    naplobejegyzesId,
    iktatasId,
  }) {
    var url =
      settings.baseUrl +
      'Api/Nyomtatvany/FegyemiVedoTelefononTortenoTajekoztatasa?';
    if (naplobejegyzesId) url += `naplobejegyzesId=${naplobejegyzesId}`;
    if (iktatasId) {
      url += 'iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async MeghatalmazottVedoKirendeleseNyomtatas({
    naplobejegyzesId,
    iktatasId,
  }) {
    var url =
      settings.baseUrl +
      'Api/Nyomtatvany/MeghatalmazottVedoKirendeleseNyomtatvany?';
    if (naplobejegyzesId) url += `naplobejegyzesId=${naplobejegyzesId}`;
    if (iktatasId) {
      url += 'iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async OsszefoglaloJelentesDocxNyomtatas({ naplobejegyzesId, iktatasId }) {
    console.log('IDK');
    console.log(naplobejegyzesId);
    console.log(iktatasId);
    var url =
      settings.baseUrl + 'Api/Dokumentum/OsszefoglaloJelentesDocxNyomtatvany?';
    if (naplobejegyzesId) url += `naplobejegyzesId=${naplobejegyzesId}`;
    if (iktatasId) {
      url += 'iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async BuntetoFeljelentesDocxNyomtatas({ naplobejegyzesId, iktatasId }) {
    console.log('IDK');
    console.log(naplobejegyzesId);
    console.log(iktatasId);
    var url =
      settings.baseUrl + 'Api/Dokumentum/BuntetoFeljelentesDocxNyomtatvany?';
    if (naplobejegyzesId) url += `naplobejegyzesId=${naplobejegyzesId}`;
    if (iktatasId) {
      url += 'iktatasId=' + iktatasId;
    }
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async KarjelentoLapErtesitoLapDocxNyomtatas({ esemenyId }) {
    console.log('K??rjelent?? lap ??rtes??t?? lap id');
    console.log(esemenyId);
    var url =
      settings.baseUrl +
      'Api/Dokumentum/KarjelentoLapErtesitoLapDocxNyomtatvany?';
    if (esemenyId) url += `esemenyId=${esemenyId}`;
    console.log(url);
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async ErtesitoLapByEsemenyIdDocxNyomtatas({ esemenyId }) {
    console.log('??rtes??t?? lap id');
    console.log(esemenyId);
    var url =
      settings.baseUrl +
      'Api/Dokumentum/ErtesitoLapByEsemenyIdDocxNyomtatvany?';
    if (esemenyId) url += `esemenyId=${esemenyId}`;
    console.log(url);
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async KarjelentoLapDocxNyomtatas({ esemenyId, iktatasId, fegyelmiUgyId }) {
    console.log('K??rjelent?? lap ids');
    console.log(esemenyId);
    console.log(iktatasId);
    console.log(fegyelmiUgyId);
    var url = settings.baseUrl + 'Api/Dokumentum/KarjelentoLapDocxNyomtatvany?';
    if (esemenyId) url += `esemenyId=${esemenyId}`;
    if (iktatasId) {
      url += `iktatasId=${iktatasId}`;
    }
    if (fegyelmiUgyId) {
      url += `&fegyelmiUgyId=${fegyelmiUgyId}`;
    }
    console.log(url);
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async OtosSzamuMellekletDocxNyomtatas({ fegyelmiUgyId }) {
    console.log('IDK');
    console.log(fegyelmiUgyId);
    //console.log(iktatasId);
    var url =
      settings.baseUrl +
      `Api/Dokumentum/OtosSzamuMellekletDocxNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    //if (iktatasId) {
    //  url += 'iktatasId=' + iktatasId;
    //}
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }
  async FeljelentesNyomtatas({ fegyelmiUgyId }) {
    console.log('IDK');
    console.log(fegyelmiUgyId);
    //console.log(iktatasId);
    var url =
      settings.baseUrl +
      `Api/Dokumentum/FeljelentesNyomtatasDocxNyomtatvany?fegyelmiUgyId=${fegyelmiUgyId}`;
    //if (iktatasId) {
    //  url += 'iktatasId=' + iktatasId;
    //}
    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  async TeritesmentesTelefonalasJutalomNyomtatas({ jutalmiUgyId }) {
    var url =
      settings.baseUrl +
      `Api/Jutalom/TeritesmentesTelefonalasJutalomNyomtatas?jutalomUgyId=${jutalmiUgyId}`;

    FegyelmiUgyFunctions.NyomtatvanyLetoltes(url);
  }

  // async FegyelmiLapNyomtatas(fegyelmiUgyId, iktatasId) {
  //   if (pdfMake.vfs == undefined) {
  //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //   }
  //   var model = await apiService.FegyelmiLapNyomtatas({
  //     fegyelmiUgyId: fegyelmiUgyId,
  //     iktatasId: iktatasId,
  //   });
  //   var esemenyLeiras = htmlToPdfMake(
  //     `
  //   <div style="margin-left: 20px; text-align: justify;">` +
  //       model.EsemenyLeirasa +
  //       '</div>'
  //   );
  //   var docDefinition = {
  //     header: function(currentPage, pageCount, pageSize) {
  //       // you can apply any logic and return any valid pdfmake element

  //       return [
  //         {
  //           margin: [40, 30, 40, 0],
  //           style: 'tableExample',
  //           table: {
  //             widths: ['*', '*'],
  //             body: [
  //               [
  //                 {
  //                   text: model.IntezetNev,
  //                   border: [false, false, false, true],
  //                   margin: [-5, 0, 0, 5],
  //                 },
  //                 {
  //                   text: model.Iktatoszam,
  //                   alignment: 'right',
  //                   border: [false, false, false, true],
  //                   margin: [0, 0, 0, 5],
  //                 },
  //               ],
  //             ],
  //           },
  //         },
  //       ];
  //     },
  //     content: [
  //       { text: model.UgySzama },
  //       {
  //         text: 'FEGYELMI LAP',
  //         style: 'header',
  //       },
  //       {
  //         style: 'tableExample',
  //         table: {
  //           widths: [150, 1, '*'],
  //           body: [
  //             [
  //               { text: 'N??v', border: [false, false, false, false] },
  //               { text: ':', border: [false, false, false, false] },
  //               { text: model.Nev, border: [false, false, false, false] },
  //             ],
  //             [
  //               { text: 'Azonos??t??', border: [false, false, false, false] },
  //               { text: ':', border: [false, false, false, false] },
  //               { text: model.Azonosito, border: [false, false, false, false] },
  //             ],
  //             [
  //               {
  //                 text: 'Sz??let??si hely',
  //                 border: [false, false, false, false],
  //               },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.SzuletesiHely,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             [
  //               { text: 'Sz??let??si id??', border: [false, false, false, false] },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.SzuletesiIdo,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             [
  //               { text: 'Anyja neve', border: [false, false, false, false] },
  //               { text: ':', border: [false, false, false, false] },
  //               { text: model.AnyjaNeve, border: [false, false, false, false] },
  //             ],
  //             [
  //               { text: 'Elhelyez??se', border: [false, false, false, false] },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.FogvElhelyezese,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             [
  //               {
  //                 text: 'Bv.I-ben tart. jogc??m/fok',
  //                 border: [false, false, false, false],
  //               },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.TartozkodasFokaJogcime,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             [
  //               {
  //                 text: 'Aktu??lis szabadul??si id??',
  //                 border: [false, false, false, false],
  //               },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.AktualisSzabadulasiIdo,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             // [
  //             //   {
  //             //     text: 'Esem??ny sorsz??ma',
  //             //     border: [false, false, false, false],
  //             //     margin: [0, 20, 0, 0],
  //             //   },
  //             //   {
  //             //     text: ':',
  //             //     border: [false, false, false, false],
  //             //     margin: [0, 20, 0, 0],
  //             //   },
  //             //   {
  //             //     text: model.EsemenySorszama,
  //             //     border: [false, false, false, false],
  //             //     margin: [0, 20, 0, 0],
  //             //   },
  //             // ],
  //             [
  //               {
  //                 text: 'Esem??ny ??szlel??se',
  //                 border: [false, false, false, false],
  //                 margin: [0, 20, 0, 0],
  //               },
  //               {
  //                 text: ':',
  //                 border: [false, false, false, false],
  //                 margin: [0, 20, 0, 0],
  //               },
  //               {
  //                 text: model.EsemenyEszlelese,
  //                 border: [false, false, false, false],
  //                 margin: [0, 20, 0, 0],
  //               },
  //             ],
  //             [
  //               {
  //                 text: 'Esem??nyt ??szlelte',
  //                 border: [false, false, false, false],
  //               },
  //               { text: ':', border: [false, false, false, false] },
  //               {
  //                 text: model.EsemenytEszlelte,
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //       {
  //         margin: [0, 20, 0, 0],
  //         text: 'Esem??ny le??r??sa:',
  //       },
  //       esemenyLeiras,
  //       {
  //         text: 'K??rem az elj??r??s lefolytat??s??t',
  //         margin: [0, 30, 0, 0],
  //       },
  //       {
  //         margin: [-5, 20, 0, 0],
  //         table: {
  //           widths: ['auto', 50, 1, 20, 1, 20, 1],
  //           body: [
  //             [
  //               {
  //                 text: 'Elrendelve: ' + model.Telepules + ',',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 50,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 20,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 20,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //             [
  //               {
  //                 text: 'Kivizsg??l??: ',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 135,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                     colSpan: 5,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               { text: '', border: [false, false, false, false] },
  //               { text: '', border: [false, false, false, false] },
  //               { text: '', border: [false, false, false, false] },
  //               { text: '', border: [false, false, false, false] },
  //               { text: '', border: [false, false, false, false] },
  //             ],
  //             [
  //               {
  //                 text: 'Hat??rid??: ',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 50,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 20,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 20,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 margin: [-5, 0, 0, 0],
  //                 text: '.',
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //       {
  //         margin: [-5, 30, 0, 15],
  //         table: {
  //           widths: [150, '*', '*'],
  //           body: [
  //             [
  //               {
  //                 text: '',
  //                 border: [false, false, false, false],
  //               },
  //               {
  //                 text: 'Elrendel??:',
  //                 border: [false, false, false, false],
  //                 alignment: 'right',
  //               },
  //               {
  //                 canvas: [
  //                   {
  //                     type: 'line',
  //                     x1: 0,
  //                     y1: 12,
  //                     x2: 120,
  //                     y2: 12,
  //                     dash: { length: 2 },
  //                     lineWidth: 1,
  //                   },
  //                 ],
  //                 border: [false, false, false, false],
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     ],
  //     pageSize: 'A4',
  //     pageMargins: [40, 60, 40, 60],
  //     styles: {
  //       header: {
  //         fontSize: 16,
  //         bold: true,
  //         alignment: 'center',
  //         margin: [0, 20, 0, 0],
  //       },
  //       subheader: {
  //         fontSize: 15,
  //         bold: true,
  //       },
  //       quote: {
  //         italics: true,
  //       },
  //       small: {
  //         fontSize: 8,
  //       },
  //       footersmall: {
  //         fontSize: 6,
  //       },
  //       tableExample: {
  //         margin: [-5, 30, 0, 15],
  //       },
  //       tableHeader: {
  //         bold: true,
  //         fontSize: 8,
  //         //color: 'black',
  //         margin: [0, 10, 5, 10],
  //       },
  //       tableHeader2: {
  //         bold: true,
  //         fontSize: 8,
  //         alignment: 'center',
  //         //color: 'black',
  //         margin: [0, 10, 0, 10],
  //       },
  //       tableCell: {
  //         fontSize: 8,
  //         alignment: 'right',
  //         margin: [0, 5, 5, 5],
  //       },
  //     },
  //     defaultStyle: {
  //       columnGap: 20,
  //       font: 'TimesNewRoman',
  //       fontSize: 12,
  //     },
  //   };

  //
  // pdfMake.fonts = {
  //   TimesNewRoman: {
  //     normal: 'TimesNewRoman.ttf',
  //     bold: 'TimesNewRoman.ttf',
  //     italics: 'TimesNewRoman.ttf',
  //     bolditalics: 'TimesNewRoman.ttf',
  //   },
  // };
  // pdfMake.createPdf(docDefinition).download();

  //   /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
  //   // pdfMake.createPdf(docDefinition).print();
  // }

  async FegyelmiLapokNyomtatasa({ fegyelmiUgyIds, iktatasId }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var model;

    if (iktatasId != null) {
      model = await apiService.FegyelmiLapNyomtatas({
        iktatasId: iktatasId,
      });
    } else if (fegyelmiUgyIds != null) {
      model = await apiService.FegyelmiLapokNyomtatasaEsemenyRogzitesnel({
        fegyelmiUgyIds: fegyelmiUgyIds,
      });
    } else return null;

    // model = await apiService.FegyelmiLapokNyomtatasaEsemenyRogzitesnel({
    //   fegyelmiUgyIds: fegyelmiUgyIds,
    // });

    // if (naplobejegyzesIds != null) {
    //   model = await apiService.VedoKirendeleseNyilatkozatNyomtatasByNaploIds({
    //     naplobejegyzesIds,
    //   });
    // } else if (iktatasIds != null) {
    //   model = await apiService.VedoKirendeleseNyilatkozatokNyomtatasByIktatasIds(
    //     {
    //       iktatasIds,
    //     }
    //   );
    // } else return null;

    //var fogvCount = model.length;
    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var esemenyLeiras = htmlToPdfMake(
            '<div style="margin-left: 20px; text-align: justify;">' +
              item.EsemenyLeirasa +
              '</div>'
          );
          return {
            id:
              fegyelmiUgyIds && fegyelmiUgyIds.length > 1 && index >= 1
                ? 'NoBreak'
                : '',
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'FEGYELMI LAP',
                style: 'header',
              },
              {
                style: 'tableExample',
                table: {
                  widths: [150, 1, '*'],
                  body: [
                    [
                      { text: 'N??v', border: [false, false, false, false] },
                      { text: ':', border: [false, false, false, false] },
                      { text: item.Nev, border: [false, false, false, false] },
                    ],
                    [
                      {
                        text: 'Azonos??t??',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.Azonosito,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si hely',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.SzuletesiHely,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si id??',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.SzuletesiIdo,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Anyja neve',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.AnyjaNeve,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Elhelyez??se',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.FogvElhelyezese,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'V??grehajt??si fokozat',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.TartozkodasFokaJogcime,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Aktu??lis szabadul??si id??',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.AktualisSzabadulasiIdo,
                        border: [false, false, false, false],
                      },
                    ],
                    // [
                    //   {
                    //     text: 'Esem??ny sorsz??ma',
                    //     border: [false, false, false, false],
                    //     margin: [0, 20, 0, 0],
                    //   },
                    //   {
                    //     text: ':',
                    //     border: [false, false, false, false],
                    //     margin: [0, 20, 0, 0],
                    //   },
                    //   {
                    //     text: item.EsemenySorszama,
                    //     border: [false, false, false, false],
                    //     margin: [0, 20, 0, 0],
                    //   },
                    // ],
                    [
                      {
                        text: 'Esem??ny ??szlel??se',
                        border: [false, false, false, false],
                        margin: [0, 20, 0, 0],
                      },
                      {
                        text: ':',
                        border: [false, false, false, false],
                        margin: [0, 20, 0, 0],
                      },
                      {
                        text: item.EsemenyEszlelese,
                        border: [false, false, false, false],
                        margin: [0, 20, 0, 0],
                      },
                    ],
                    [
                      {
                        text: 'Esem??nyt ??szlelte',
                        border: [false, false, false, false],
                      },
                      { text: ':', border: [false, false, false, false] },
                      {
                        text: item.EsemenytEszlelte,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 20, 0, 0],
                text: 'Esem??ny le??r??sa:',
              },
              esemenyLeiras,
              {
                text: 'K??rem az elj??r??s lefolytat??s??t',
                margin: [0, 30, 0, 0],
              },
              {
                margin: [-5, 20, 0, 0],
                table: {
                  widths: ['auto', 50, 1, 20, 1, 20, 1],
                  body: [
                    [
                      {
                        text: 'Elrendelve: ' + item.Telepules + ',',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 50,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 20,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 20,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Kivizsg??l??: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 135,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                            colSpan: 5,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      { text: '', border: [false, false, false, false] },
                      { text: '', border: [false, false, false, false] },
                      { text: '', border: [false, false, false, false] },
                      { text: '', border: [false, false, false, false] },
                      { text: '', border: [false, false, false, false] },
                    ],
                    [
                      {
                        text: 'Hat??rid??: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 50,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 20,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 20,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        margin: [-5, 0, 0, 0],
                        text: '.',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [-5, 30, 0, 15],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Elrendel??:',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 120,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
            ],
            //pageBreak: 'after',
          };
        }),
      ],
      // pageBreakBefore: function(currentNode) {
      //   if (currentNode.pageNumbers.length > 1) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage,
        pageNumber
      ) {
        if (currentNode.id === 'NoBreak') {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          //color: 'black',
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          //color: 'black',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 12,
      },
    };
    // docDefinition['content'].push({
    //   pageBreak: isLastPage ? '' : 'after',
    //   columns: [left_columns, right_columns],
    // });

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    // pdfMake.createPdf(docDefinition).print();
  }

  async TajekoztatoNyomtatas(fegyelmiUgyId, kerem, iktatasId) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model = await apiService.TajekoztatoNyomtatas({
      fegyelmiUgyId: fegyelmiUgyId,
      kerem: kerem,
      iktatasId: iktatasId,
    });

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: [
            { text: 'T??J??KOZTAT??\n' },
            {
              text:
                'A fegyelmi elj??r??ssal ??sszef??gg?? jogokr??l, k??telezetts??gekr??l ',
              fontSize: 12,
            },
          ],
          style: 'header',
          decoration: 'underline',
        },

        {
          margin: [0, 10, 0, 0],
          alignment: 'center',
          text:
            'Mell??klet a ' +
            model.UgySzama +
            ' sz. fegyelmi ??gyh??z elj??r??s elrendel??sekor',
        },
        {
          margin: [0, 10, 0, 0],
          text: [
            { text: 'N??v: ' + model.Nev + ', ' },
            {
              text: 'azonos??t?? jel: ' + model.Azonosito + ', ',
            },
            {
              text: 'sz??l. id?? (??v, h??, nap): ' + model.SzuletesiIdo,
            },
          ],
        },

        {
          text:
            'Nevezettet az al??bbi jogokr??l ??s k??telezetts??gekr??l oktattam ki:',
          italics: true,
          margin: [0, 10, 0, 0],
        },
        {
          margin: [10, 10, 0, 0],
          italics: true,
          ul: [
            '??nmag??ra nem k??teles terhel?? vallom??st tenni.',
            'Jogs??relem eset??n ??gy??szhez, adatv??delmi biztoshoz fordulhat.',
            'Az elj??r??s sor??n anyanyelv??t vagy az ??ltala ismert m??s nyelvet haszn??lhatja.',
            'V??dekez??s??t sz??ban vagy ??r??sban el??adhatja.',
            'A vallom??st??tel megtagad??sa nem akad??lya az elj??r??s folytat??s??nak, a fegyelmi felel??ss??g meg??llap??t??snak.',
            'A vizsg??lat sor??n bizony??t??si ind??tv??nyt tehet, melynek teljes??t??s??r??l, vagy megtagad??s??r??l a vizsg??l?? d??nt, d??nt??se ellen k??l??n jogorvoslatnak nincs helye.',
            'V??d??t b??zhat meg, vagy k??rheti kirendel??s??t.',
            'Felh??vtam figyelm??t a hamis v??d, illetve a hamis tan??z??s t??rv??nyi k??vetkezm??nyeire.',
            'Fegyelmi kiszab??sa eset??n panasszal ??lhet, ill. joga van fel??lvizsg??lati k??relem el??terjeszt??s??re.',
            'Az elj??r??s sor??n felmer??lt k??lts??gek megt??r??t??s??re k??telezhet??.',
            'Az elj??r??s sor??n keletkezett iratokat tanulm??nyozhatja, azokb??l m??solatot k??rhet.',
          ],
        },
        {
          text: 'A fenti jogokat velem ismertett??k, azokat tudom??sul vettem.',
          italics: true,
          margin: [0, 10, 0, 0],
        },
        {
          italics: true,
          margin: [-5, 10, 0, 0],
          table: {
            body: [
              [
                {
                  text: 'Kelt: ' + model.Telepules + ',',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 50,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*', 120],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 120,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  text: 'fogvatartott',
                  border: [false, false, false, false],
                  alignment: 'center',
                  italics: true,
                  margin: [0, -3, 0, 0],
                },
              ],
            ],
          },
        },
        {
          text: 'A terhemre r??tt fegyelmi cselekm??nyt velem ismertett??k.',
          italics: true,
        },
        {
          text:
            'A vizsg??lat befejez??sekor a fegyelmi iratok tanulm??nyoz??s??t ' +
            (model.Kerem == true ? 'k??rem.' : 'nem k??rem.'),
          italics: true,
        },
        {
          margin: [-5, 10, 0, 0],
          table: {
            widths: [150, '*', 120],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 120,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  text: 'fogvatartott',
                  border: [false, false, false, false],
                  alignment: 'center',
                  italics: true,
                  margin: [0, -3, 0, 0],
                },
              ],
            ],
          },
        },

        {
          italics: true,
          margin: [-5, 10, 0, 0],
          table: {
            body: [
              [
                {
                  text: 'Kelt: ' + model.Telepules + ',',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 50,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*', 120],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 120,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  text: 'kivizsg??l??',
                  border: [false, false, false, false],
                  alignment: 'center',
                  italics: true,
                  margin: [0, -3, 0, 0],
                },
              ],
            ],
          },
        },
        {
          text:
            'A rendelkez??sre ??ll?? iratokba a vonatkoz?? adatv??delmi szab??lyok betart??sa mellett betekintettem.',
          italics: true,
        },
        {
          italics: true,
          margin: [-5, 10, 0, 0],
          table: {
            body: [
              [
                {
                  text: 'Kelt: ' + model.Telepules + ',',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 50,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 20,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
                {
                  margin: [-5, 0, 0, 0],
                  text: '.',
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*', 120],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 120,
                      y2: 12,
                      dash: { length: 2 },
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  text: 'fogvatartott',
                  border: [false, false, false, false],
                  alignment: 'center',
                  italics: true,
                  margin: [0, -3, 0, 0],
                },
              ],
            ],
          },
        },
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          //color: 'black',
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          //color: 'black',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 12,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    // pdfMake.createPdf(docDefinition).print();
  }

  async EljarasAlaVontMeghallgatasiJegyzokonyvNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var result = await apiService.EljarasAlaVontMeghallgatasDokumentumAdatok({
      naplobejegyzesIds: naplobejegyzesIds,
      iktatasIds: iktatasIds,
    });
    let model = result.data;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 0],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var jegyzoKonyvText = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.JegyzoKonyvText +
              `</div>
      `
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAWAAwAwERAAIRAQMRAf/EAJQAAAICAwEAAAAAAAAAAAAAAAgJBgoABQcDAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAAHAQAABgIABgMBAAAAAAECAwQFBgcIABESExQJFRchIkMWGApCIyQyEQACAQIEAwQIBAUFAAAAAAABAhEhAwAxEgRBUWFxIjIT8IGRobFCIwXB0ZIU4fFSYjNyotJDNP/aAAwDAQACEQMRAD8Av8eJiYzxMTFZH7WfsC3XkXqydn8C19/bYumc/wB8T1rIZagalLZ7iK0dnp7LB6VLyNJqdwrj52lJXuuzL15JskyRzJJJBZ4Rm5WSJ0dtZsXduTuAVQOIcGskgRGZoGgSKmeuAYwYGcenpyw8fix1fpHm3OpjR9tpfQ8/PNZSdZ6xn0jGztUsVZlph89qqcdZoiErDC1mjIBZBsrJEi475aqZjC3THz8+exDMSBHMTMHiOlZpwywdeOCn8ViYzxMTGeJiYUt1v9l0nUdXJxpwplf+XvdEs1WcytOZyZ4bEucq6mqVo70XpvU0iKRtSiYx0qBEYFmdaelHIA2TSROomYxIqt3n1CzMFlANYNBNJFJBIzBwJPBY1YTl3Fg+2c8fC3Dv7s2/3E92xqZDYlub4NDOE84qxOjOYKRoCVBsaaDacukZO5/rs3DN4ywNCQEe1dicGaavrdeMu53Vy3eSxtEUJcuWwdUEkFtJJMgCBUkVGnxQIK2BAUtHeevsJz7QI9mWNLzVmR7nvjrBOKes+vsIGo6a2r8s60zTaDsbaBd2bCNH3S05+3Qxi8SGOzFJvsk3g5ly7iX/AOajX4GRKu3FM7bx0RcPkL5qhrbA6TQNQgTME0FADSCTGDAkQJU/D1e/DQ8x746L4x1CA5o+0aoIs6xaBdNcP7loQLWDJr2hGoGcr1zYTNYuKe0a6xbIhlFHi0c0SVZpGcuEgQQcyRwZRdP0VINKZnqeYHGtI4yMWshRrNcPCYP2MoxZycY8aSMbItG7+PkGDhF4xfsXiJHDR4zdtzqN3TR03UKdNQhjEOQwGKIgID4TlQ54LAE/Z122++vTkG79RMKBHaUrUbHQK6atSlp/tJp5X24RNOSkxfEjJd1ILRrqYTUTj26IOH5/JFM5DHAwGi62g0EGvYJ7a5U54mK8X1r6hpXMmOyv2XW+2Pn3PFsscpkXbdDctbAjrEx0/pWnsn9v2uAiXiRCxgY3tt+TyyBpCqR3ZYsjyQ+UL5woi5bubxa41guGFoxAA0rAkAaZB1qyszTyBkqcLVqTpPXn/HswZvCeAM9Zv+Kcpdtwkxomp8I4hotvv9A02ySWh162WTpTYoW75vZLd+cMuw1Cq1+k1RoWLSlE3TNnZ2b8CJ/IikjppKPqO4t6ls91Qad4wdRjMGa8M4ypi1LairVETPby4iBnPPhXBGdq4JzpybqfP++5BnpsitN8ltfwdek8+x8fnzbXL9qHPukQGPkRqldYtq+51xhcUkY6BmitSvWjeTc++qdqmAJEu4ZIsFPMU94A/LBBYjjBEyMjnngWYLcCjxMCfZA/HC5rHD9A6xylD89W+2yrGu/UXRm9h+wiJmL1bT3PctBjIy6zZIXMLa4EZGCi81zGBbaVTLBMHfg8UlIFoZEot3joloj3botoxRLhKgwJgmADpNJ8DxBA1EZjFtXxLJFfXEZcaE8cGj/r29z3jqTna4YJd6iCD7ihnn2St9RWeDFSOrwswW5O6LYnuaOomNkKCm9zKDhJBsHqUaP20iRVsRFECphd615UAZyQRAADDTIEEyK5zSIrEklNMqRjo339Z+w07jvOaZNXCKo8BLdK58pLWC1Q87ZaK3WhKlodnrLS21itgWYnTTVzgY2OhyJKJi3sD1i4AFDokSPVpEuEozBSVMTEkyPDObASYAYkAgCsiGZEc8V7Z3jm+s3+i5q81vSKtSRulK0a8V2159qshE4vc57Rue5sOgOgI+LXa1+4LT8/oEjYIl/F/EftpGrg6duCgi4VR51uwLtk7kaV3CwkMV1MmkkxC91EgI0jVWhymld3E6YOdZ8XaBn16Y6Qny7pMUwntiL1XrK12f1uz1JfoRqXQarS53MaR0hQM3gNlsb5/Jv9RPz1TWupTEs/agq4STeMXLlu8RZKquiaBs9nctpaYk7fUpYAq0NpIKrC1JKgKTJGoahIIxRu3LbKIAdgxOfCPbVuQy642dh4+0CXmSMnnZ927Tk8nvkLP5hrmEykxOU1zfpTDehrq2z2mqyt1vrSt9BQ/wCu2KXyYSYk/KFsiYKJNXCgJqMtfbdqLNxrf0ka3JWQREqJJKglIYiKE5kngZd9QZ4McePX4DHDbPzFoqFO1Ofb9aSejs9Pissba/p0Hne9Fzm3zFkxboN+4wbWoh5LvrJdr+3UyaAq0Yd04+O2b3Jq3dNSqC3br5bO22xv2VuMoUXNIMqAqg0aSImJMGkjxGcFLhSSAK9azxyzw2b6Q8AdYt2r1yopabN897lcFC3DOpOBnK1N1Z7UtTsVBz9ztJpUpGN0u7rPqGgrVX7BNFpHV106akAwHAS6bN5n2ih7RlrjHzCUPggaQFggMSWqDMCs5ptksNTDSQMu2pPtp6jjoH3B0uY3HXDUCz6jqUHnuZxeZ3es0WnTFWj6ktdXWH95XYbRY4edp9kTscqzmMjhRbfJMKDZJBT20yqnBUh27du9Zui5WGiOEHyxEcR3jiI7G444Kwj9M/HCzIfiKgO7oygVNG2csaGsS1OBJJ7kRFyQ6HS36nT9tf8ATQmSff2kYSGVKAet2b3RD/j4w7nY7K3dCrbt6SiE0GZVCficaldzBk8fx/LEEovFWdXGvQ9nnbnpzuZkaTmrp299jFxVUTvOPfXBeLDH+4ti6ywRLue6jtBithOKQIGYJmA3xCmUttrtUFpVtrpfUTSkqzgEDKYX44W9x1dQPmMf7Z+ONDGcKY9D59JOYacucMSr5LfdIgYyJgMEiYaIt8Dz303pbN+wiIzEG7NmU1my6LBUUipqqtRcpGP/AOgwl02tpZvbV9xfWb+hpNagXiigzUgKBQ0mowPmt5vljwxyHp+PPE+muELOwmv7mN+zUcNHqTaudGWjK6nhzyyvFM7tm8Fi1T0AnPib9kkvDUOGjlVhfmUUeNXL0UipOCELhOx2nlT5duShNFHi0kiZERIBOdMq4ZruawpNJ9v5YInhjKVOf+0ec7TnWqaui50Jg0pN9ipCRoRK9bqq9iuZLMav2CKr+d1757SPntTlXTI5lCrsjqEBBQpBXI41C1bsbO1dtIqPcvKDHEFLhMdpQdYHCpxnt3nuhGb5gZ/ST8RhnXTKfACv2H6wTu8cTCMDlvng2cfudZFFn801z6XJaRghdnIzM4/CCIO/PzUBmKn9EVvGj7efuA3t39j5kQs6edNPrzj+WED/ANL6v8fumFj3TjxK3/19RceZFeJxd/IHyEj+N+X8z8oUDeXpce/8384QPP8AqfNAP6oB46mr7wFzuaSY6TGXbHDOOmNH0+mPJu3/ANe8qZPiK8QFQ9tuCXxH8SCIoka1wzIEvYce2KJWCcMKHl/L7BY/0fyA08F5n3uAdV7TEipiK1HTOo69cSLfTCoK2tkJMvyyHuO9oczYhcc+rVIk9gZQMbY2lfzy5czdfwqrZg1tEPNRrBrJ1t0YiT9w3ODJMAVEwCX1eM2zS7etOCuu5DSKVjcsCKHnnHXI5Lot7l3R+Ppyw2mzVfkBfgKv2ST77/F5ot1RfNWa9UhXqUQJbZrldNNTuNPCmrVdSvIgk+tEzH/CLHlWafF9wRAyRjeMgsze8nQZFNMwfDGfrnDw3zE1n07cAPzY5qDjqzmQmf68beqLG6tcYKoa2aEja8NwrlffciQcQ6GMiI6IjQOyYsCNRcIt0SPPZ98AN7nma99aazt7NtlKEbhKTP8A1XjzMdnDphShVdFXwjVH6GwU/wBiv7GsXXOgUfL8E2zbZwmO43bJYcpr9OlI2vRMnlv2AZLFlnX9tvVNKg+kbZpDAEkUSuB+GRysYSgj6TrsX7a+bYM+YWBHZ9P/AIn3YG2R59xfmJB9QUD8RgZoir9QMrm2nl+DeyvgJavJXM4kpmNncfhXXS37XRMCP7zDzejU/wCYUvP+Dv8A6vP/AJeB3IF26GTwhVHrCqD8DjUpgV6/jiI57nnV1ZqsLCynBnYYPGFUy6GXBtUcaXRB7UMf+uKjTAJq/vEnrRLO8s2oET+Qe4gmxU8g+WBUxdQ3lQPAGn1s5EfqGFuCzIRkDJ/THxx64dk2xdJRM7X84u+C5JHq801FOYZ9AntLS7pq77mXVePnSQhqnNtI1spVY+2HcrkOu596Qbi39z2xFUdNp0tfbrdxqi6bq+LSRovsZEhuzp7hBb+qW4wOHMT05/xw1ixcd67K8lQtcS2LnlDTEut9R6beWtwS3Diqn7PsetOl6fHPiThbMZWJZ6UCSbpRcfecNDAKZSn8i4zGhajSKZ9CKHn6o6HDCCXniDOWAEpOSani3cvJFR0m/wCCX8rxNpKw73FXVrVcMfxE7zbnblKyJWSSkU003iVDRcNjImKPuLLpmAQTIJiukfs7KLEDcqM5P+O7HAcM+ZqIwhbYtNbStJFf9DYLXrTo7buWu49X0DKMzzDSo20894PT5trfdBs1EfxUjWYztDYWq0X+EpFvaybGRgc7kWyhlDIKIu1G/kUyZjmKj9vuXuvf2+gAEAlqiO5kAQZlhnQ+o4QFY33dCAwMVE5hTzHLEWYfab2k/sKNdJy/zaRZa4OqUDoehNBMiWUaa4GPqL+2GKAoLI0x5vAN/wDXxQ9Ih7n8PEvLv7LaddgsVU+F/mAOerqBhwG5ORX2dv8Ad0xpav8AbV2RaoljMs+WudGrSQiafNIlddB38Vis7nRuVb6wKoRLFjlBw1jetIVBUoCIe/GPfIRKKImojfrpl7HfmO6/AsDPe/t9/Q4FjfUgSskwKdJ/q5YT7o8fiqecRD/fMip1wtsnzJcoFGxEycmqxVSmD8x9bIxzD+5F6u+m4WEQ0ebYKMXCqKRUnQFeKAiKKiqe/b6b20Fll1XWD6Qc5/cMSRJoIAr2cwMGGK34kadM0y/ngxLpesbPytB4fIYBOMue0/s06XcV3QJDKax/iPJwraa6Ks0Cxg3iTleJQrJlZFqhEv1YlCBdTSIsmjpR4mVMU27Ra35YWCtuiwZJNvuwBlmKmAMzInDGuKG1/KDnn6dmOXcOR2LI9V81vsgymOzkhLVEws3INcmRyxeyKxkDx1/EiKkLCS0vHMZZZ8omdykUPddKLEAQces97i2E2tkMqi8NwgMRP+O8anjXiJB5zkm3rBtq86q+3Q2HBda8kWPqHt2bpUV0PaMMZv8Amii3pFvX83zu7KWl9ASnROMWFYr+8xr9RgnXqnu5iGRblEouJRBY4gZJMDNtFrSsRBRzUGeS9n9I44MKockGrQT6hFMR1t9Peps5hOcbfYHoxXyVqXuJDKc8c/qJhNOtEDUlze3+AIQWw2/zUKn5eRW4+z/EoeYg/wBQd+rwBPGAAAIypA4TTDQSMssauA+mLQ63GM4eM+wDSyMWEbXIhuVbn7AFlvx9TqXP1KhE1Vj17/sXSg+Y6kVVT0h7qiDs4gAuz+myVYKCBKAwa8SSePHUfdgSAxBOYMj2R8MVrNG0XRNTqON5yfE9LtUFCaxSIW82qB2mPy6L1ehZvVuiMh0h1KWDG5s+g0aD0e030zFlDwTeUk15dgpALsSPXLFi+fYazb2wtNcNu9cLBCqwA3nG6oliNNIGo1jvjUCcKZS9wgTkM+lDE+7lgoC7FXpnHIzDHvG0G2oMFr1m6FbJm+wHpFUyeh3bOZhedsRrNG5u5aS2bvG4uHiLZu2WhU4RY9rjW6pWE9+Iwnztrd/b3XuWrhJANJMQCJKiGAyWjalikqWrTKFNRkESe7lwOUR1joTiU/WJH61/ktzfTZ+k/go+I6S2JRo3t22y2p6Qem2dpHa3CfhZaXj5qauFaxSv4Wxrcy5npdtOgnOwz1NspGumzhfduPJezbsAtpTS4MRqYBxzqDrYmBQ+uDC6SC0yD8QRw7ezFgf7ZuWbxt2Owmv4yz02Y2rndpoU1A0jJNOt2S3DVqbcqW/grPQWVlpU7XJR9Kxc2hD2mGj1nXxH03XGzY5P/R6i1YYBtDsBbaJmqyMi3TgTwBJrlgyDmJnFfKsX/nCatUcYexdESgHOrS0GdpM977rXXbatN+ohpRWEzETe1R0zCOmVDTFqqm8SQdIIgY6gFOAnCbtLtq75SINICAkCe8VUkSOJknFppIBPXOnPh7MRjO9AwuSqcE6sPZ18PKuqrlT10Z79hOwNXKktM459as7ZvUiO5I+lVa26loZlk/SAJLupFLyL8ICNxc3VWzcVBoYMSdOcNc0+4DtgYB5DqFyJr2aZ+OOP44lW3OZtIyFWZPoL87pjeGfmmI2wxk3Et7nNxSSi87PpRbCQfmrCsc2cO5s/tSUYs1Zz71zCua9bYRjKLtg2t2FbbsYaAQUbUY1QTEmSrrk+qAGD2yAa3cdrQMXkryMcCOfKcuBx0Zs0Vbyftv13CRwUWdoSny7A1kouRbWf3XL0qi5465pPy3tgUz1BQWdkQsrUFvNhoLf3r2kIQr7L7iGvWyv07mcgDwmMrirVWBKlRIm2ZS0gNqalxTPStJHQ8VPHLhhsX0v4ZarxrNq69esxQxSDosxmOMvlGzJtDaVcZmdj1rdplEZw6TCBNSKPEQ7mvwkpHoGhJQZ2XXg0oiMcfhGTLq3LSiy76jOogioPymZJDEE6wanu6paSTiW1EyOH8PhPLFkzwjBYALWPr5yi06FZdsyNtUMb2e7O2j/RJpXKaFo+f668YolbtnmsZxaY4iM5NEakBH8zFP4SfMkAEO+UTKUgSWgLJ0g0E0ExMdsDnBrE5iVrMmcQM1auOaiVPXfrwxDVYdqUTu9A5bgs5mHRiHcGIRZfG9Tj6hbWZiFXFRVGMl7CqACf0esQ8jAGud43BlJBEmQKgZTqOXKRnXElsopivLhPB3cduiIWAo/KtsqcWeZnXzqd2yYb4NVq5FSlxtU1ENGdfnT3XSmMvWmMsugVCOg3UQgs6Iux9MZIzsG502boF1muFsiCI1aqCawqkNIma901Loj4y3duLtxbiSlxTmPTiMxkRQ1FG34R9J0E4eRtl7Y0qN28GpWbgcIziCkKLgBpBnDEgUjWz8jIyN91Bo1iwFoi1fu2EWeLTaRztk7ZxcWmzjXjoNpR9KCK1MTPKhHCMswZJnVpkkt6en5YevGxsdDRzCIiGDKKiYpk1jYuLjWqDGOjY5igRsyYMGTVNJszZM2yRU0kkylImQoFKAAAB4Tgsf/Z',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
                margin: [0, 0, 0, 0],
              },
              {
                text:
                  'ELJ??R??S AL?? VONT MEGHALLGAT??SI JEGYZ??K??NYV\n FEGYELMI ??GY KIVIZSG??L??S??HOZ',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                fontSize: 11,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben.',
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {
                text:
                  item.MeghallgatasEve +
                  '. ??v ' +
                  item.MeghallgatasHava +
                  '. h??nap ' +
                  item.MeghallgatasNapja +
                  '. napon.',
                // +
                // (item.MeghallgatasOraja + '').padStart(2, 0) +
                // ':' +
                // (item.MeghallgatasPerce + '').padStart(2, 0) +
                // '-kor.',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'JELEN VANNAK:',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                ul: [
                  'Elj??r??s al?? vont: ' +
                    item.MeghallgatottNev +
                    ', ' +
                    item.MeghallgatottAzon,
                  'Meghallgat??: ' +
                    item.MeghallgatoNev +
                    ' ' +
                    (item.MeghallgatoRang != '' ? item.MeghallgatoRang : ''),
                  'Jegyz??k??nyvvezet??: ' +
                    (item.JegyzoNev != null ? item.JegyzoNev : '') +
                    ' ' +
                    (item.JegyzoRang != null ? item.JegyzoRang : ''),
                  'Egy??b jelenl??v??: ' +
                    (item.EgyebJelenlevo != null ? item.EgyebJelenlevo : ''),
                ],
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'Elj??r??s al?? vont adatai:\nN??v: ' +
                  item.MeghallgatottNev +
                  '\nNyilv??ntart??si sz??m: ' +
                  item.MeghallgatottAzon +
                  '\nSz??let??si helye, ideje: ' +
                  item.MeghallgatottSzulHelye +
                  ', ' +
                  item.MeghallgatottSzulIdeje +
                  '\nAnyja neve: ' +
                  item.MeghallgatottAnyjaNeve,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A jegyz??k??nyv felv??tele el??tt felh??vtam a fogvatartott figyelm??t a hamis v??d t??rv??nyes k??vetkezm??nyeire, r??szletesen ismertettem a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:\n268. ?? (1) Aki\n',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,\nb) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
                margin: [3, 0, 0, 10],
              },
              {
                text:
                  //'T??j??koztatom, hogy az olyan k??rd??sekben amelyben saj??t mag??t vagy k??zvetlen hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelem s??rt??s elk??vet??s??vel v??doln?? a vallom??st??telt megtagadhatja, de a v??dekez??s ezen m??dj??r??l ezzel lemond. Felh??vom figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.\nT??j??koztatom tov??bb??, hogy a fegyelmi elj??r??s sor??n felmer??l?? k??lts??gek terh??t viselnie kell, amennyiben a fegyelmi jogk??r gyakorl??ja a fegyelmi cselekm??ny elk??vet??s??ben a felel??ss??g??t meg??llap??tja.\nFigyelmeztettem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
                  'T??j??koztatom, hogy a fegyelmi elj??r??s sor??n felmer??l?? k??lts??gek terh??t viselnie kell, amennyiben a fegyelmi jogk??r gyakorl??ja a fegyelmi cselekm??ny elk??vet??s??ben a felel??ss??g??t meg??llap??tja.\nFigyelmeztettem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
                margin: [3, 0, 0, 10],
              },
              {
                text:
                  'A b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi',
              },
              {
                text:
                  'felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet 15. ??. (1) bekezd??se alapj??n t??j??koztatom a fegyelmi\nelj??r??s sor??n ??rv??nyes??thet?? jogaira, azaz:',
                margin: [16, 0, 0, 0],
              },
              {
                ul: [
                  'v??d??t hatalmazhat meg, illetve k??rheti kirendel??s??t,',
                  'a 14/2014. (XII.17.) IM rendelet 36. ??.-ban foglaltak fenn??ll??sa eset??n k??zvet??t??i elj??r??s lefolytat??s??t kezdem??nyezheti,',
                  'anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja,',
                  'v??dekez??s??t sz??ban vagy ??r??sban adhatja el??,',
                  'nem k??teles vallom??st tenni ??s a vallom??st??telt az elj??r??s sor??n b??rmikor megtagadhatja, ez esetben figyelmezetem arra, hogy ez az elj??r??s folytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak nem akad??lya',
                  'bizony??t??si ind??tv??nyt tehet,',
                  'a vizsg??lat befejez??se ut??n az elj??r??si iratait tanulm??nyozhatja, azokr??l m??solatot k??rhet,',
                  'panasszal ??lhet, illetve b??r??s??gi fel??lvizsg??lati k??relmet terjeszthet el?? a fegyelmi hat??rozattal szemben.',
                ],
              },
              {
                text:
                  'Meg??rtettem a fegyelmi ??gy kivizsg??l??j??nak figyelmeztet??s??t a hamis v??d t??rv??nyes k??vetkezm??nyeire.',
              },
              {
                text:
                  'Al????r??sommal igazolom, hogy a fegyelmi elj??r??ssal kapcsolatos jogaimr??l ??s k??telezetts??geimr??l kioktattak.',
                margin: [20, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [60, '*', 150],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 150,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: 'Elj??r??s al?? vont al????r??sa',
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                pageBreak: 'before',
                text:
                  'Nevezett a fegyelmi ??ggyel kapcsolatosan t??rt??nt meghallgat??sa sor??n a k??vetkez??ket mondta el:',
                fontSize: 11,
                margin: [0, 0, 0, 10],
              },
              jegyzoKonyvText,
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 10, 0, 10],
              },
              {
                text:
                  'Jegyz??k??nyv lez??rva: ' +
                  item.JegyzoKonyvZarasOra +
                  ' ??ra ' +
                  item.JegyzoKonyvZarasPerc +
                  ' perc',
              },
              {
                text: 'Kelt, mint fent',
                alignment: 'center',
                margin: [0, 0, 0, 40],
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [120, 180, '*'],
                  body: [
                    [
                      {
                        text: 'Elj??r??s al?? vont al????r??sa: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.MeghallgatottNev + ', ' + item.MeghallgatottAzon,
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [180, '*', 180],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Meghallgat??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Tan??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                    ],
                  ],
                },
              },
              item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                ? {
                    margin: [-5, 0, 0, 40],
                    table: {
                      widths: [120, '*', 180],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 180,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: item.EgyebJelenlevo.split(', ')[0],
                            border: [false, false, false, false],
                            alignment: 'center',
                            margin: [0, -4, 0, 0],
                          },
                        ],
                      ],
                    },
                  }
                : null,
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async TanuMeghallgatasiJegyzokonyvNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var result = await apiService.TanuMeghallgatasDokumentumAdatok({
      naplobejegyzesIds: naplobejegyzesIds,
      iktatasIds: iktatasIds,
    });
    let model = result.data;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var jegyzoKonyvText = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.JegyzoKonyvText +
              `</div>
      `
          );
          console.log(jegyzoKonyvText);
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text:
                  'TAN?? MEGHALLGAT??SI JEGYZ??K??NYV\nFEGYELMI ??GY KIVIZSG??L??S??HOZ',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                margin: [0, 15, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                fontSize: 11,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben',
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {
                text:
                  item.MeghallgatasEve +
                  '. ??v ' +
                  item.MeghallgatasHava +
                  '. h??nap ' +
                  item.MeghallgatasNapja +
                  '. napon. ',
                // +
                // (item.MeghallgatasOraja + '').padStart(2, 0) +
                // ':' +
                // (item.MeghallgatasPerce + '').padStart(2, 0) +
                // '-kor.',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'JELEN VANNAK:',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: ['*', '*'],
                  body: [
                    [
                      {
                        ul: [
                          'Tan?? (fogvatartott): ' +
                            item.MeghallgatottNev +
                            ', ' +
                            item.MeghallgatottAzon,
                          'Meghallgat??: ' +
                            item.MeghallgatoNev +
                            ' ' +
                            (item.MeghallgatoRang != ''
                              ? item.MeghallgatoRang
                              : ''),
                          'Jegyz??k??nyvvezet??: ' +
                            (item.JegyzoNev != null ? item.JegyzoNev : '') +
                            ' ' +
                            (item.JegyzoRang != null ? item.JegyzoRang : ''),
                          'Egy??b jelenl??v??: ' +
                            (item.EgyebJelenlevo != null
                              ? item.EgyebJelenlevo
                              : ''),
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: 'nytsz.: ' + item.MeghallgatottAzon,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text: [
                  {
                    text: 'Tan?? (fogvatartott) adatai:\n',
                    decoration: 'underline',
                  },
                  'N??v: ' +
                    item.MeghallgatottNev +
                    '\nNyilv??ntart??si sz??m: ' +
                    item.MeghallgatottAzon +
                    '\nSz??let??si helye, ideje: ' +
                    item.MeghallgatottSzulHelye +
                    ', ' +
                    item.MeghallgatottSzulIdeje +
                    '\nAnyja neve: ' +
                    item.MeghallgatottAnyjaNeve,
                ],
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeivel kapcsolatosan r??szletesen ismertettem a fogvatartottal a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:\n268. ?? (1) Aki\n',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,\nb) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
                margin: [3, 0, 0, 10],
              },
              {
                text:
                  '272. ?? A tan??, aki hat??s??g el??tt az ??gy l??nyeges k??r??lm??ny??re val??tlan vallom??st tesz, vagy a val??t elhallgatja, hamis tan??z??st k??vet el.',
              },
              {
                text:
                  'T??j??koztattam, hogy a tan??vallom??st megtagadhatja a fegyelmi elj??r??s al?? vont fogvatartott Bv. tv. szerinti hozz??tartoz??ja, az ??rintett k??rd??sben az, aki a vallom??s??val mag??t vagy a hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelems??rt??s elk??vet??s??vel v??doln??, az egyh??zi szem??ly ??s a vall??si tev??kenys??get v??gz?? szervezet vall??sos szertart??st hivat??sszer??en v??gz?? tagja arr??l, amire a hivat??s??n??l fogva titoktart??si k??telezetts??ge ??ll fenn, a v??d?? arr??l, amir??l mint v??d?? szerzett tudom??st.\nFelh??vom a figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.\nA fegyelmi elj??r??s sor??n anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja, vallom??s??t sz??ban vagy ??r??sban adhatja el??.\nFigyelmeztetem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
                margin: [3, 0, 0, 0],
              },
              // {
              //   ul: [
              //     'A b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet 16. ??. alapj??n t??j??koztatom a fogvatartottat a fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaira, azaz:',
              //     'v??d??t b??zhat meg,',
              //     //'a 14/2014. (XII.17.) IM rendelet 36. ??.-ban foglaltak fenn??ll??sa eset??n k??zvet??t??i elj??r??s lefolytat??s??t kezdem??nyezheti,',
              //     'anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja,',
              //     'vallom??s??t sz??ban vagy ??r??sban adhatja el??.',
              //   ],
              //   margin: [40, 0, 0, 0],
              // },
              {
                text:
                  'Meg??rtettem a fegyelmi ??gy kivizsg??l??j??nak figyelmeztet??s??t a hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeire. Kijelentem, hogy a fegyelmi elj??r??ssal kapcsolatos jogaimr??l ??s k??telezetts??geimr??l kioktattak.',
                margin: [0, 0, 0, 15],
              },
              {
                margin: [-5, 0, 0, 30],
                table: {
                  widths: [60, '*', 150],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 150,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: 'Tan?? (fogvatartott) al????r??sa',
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                pageBreak: 'before',
                text:
                  'Nevezett a fegyelmi ??ggyel kapcsolatosan t??rt??nt meghallgat??sa sor??n a k??vetkez??ket mondta el:',
                fontSize: 11,
                margin: [0, 0, 0, 15],
              },
              jegyzoKonyvText,
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 10, 0, 30],
              },
              {
                text:
                  'Jegyz??k??nyv lez??rva: ' +
                  item.JegyzoKonyvZarasOra +
                  ' ??ra ' +
                  item.JegyzoKonyvZarasPerc +
                  ' perc',
              },
              {
                text: 'Kelt, mint fent',
                alignment: 'center',
                margin: [0, 0, 0, 40],
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [140, 180, '*'],
                  body: [
                    [
                      {
                        text: 'Tan?? (fogvatartott) al????r??sa: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.MeghallgatottNev + ', ' + item.MeghallgatottAzon,
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [180, '*', 180],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Meghallgat??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Tan??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                    ],
                  ],
                },
              },
              item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                ? {
                    margin: [-5, 0, 0, 40],
                    table: {
                      widths: [120, '*', 180],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 180,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: item.EgyebJelenlevo.split(', ')[0],
                            border: [false, false, false, false],
                            alignment: 'center',
                            margin: [0, -4, 0, 0],
                          },
                        ],
                      ],
                    },
                  }
                : null,
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async ElsoFokuTargyalsiJegyzokonyvNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var result = await apiService.ElsoFokuTargyalasiDokumentumAdatok({
      naplobejegyzesIds: naplobejegyzesIds,
      iktatasIds: iktatasIds,
    });
    let model = result.data;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var esemenyLeiras = htmlToPdfMake(
            `
          <div style="margin-left: 20px; text-align: justify;">` +
              item.JegyzoKonyvText +
              `</div>
      `
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'FEGYELMI T??RGYAL??SI JEGYZ??K??NYV',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                margin: [0, 15, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                fontSize: 11,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben',
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {
                text:
                  item.MeghallgatasEve +
                  '. ??v ' +
                  item.MeghallgatasHava +
                  '. h??nap ' +
                  item.MeghallgatasNapja +
                  '. napon ',
                //  +
                // item.MeghallgatasOraja +
                // ':' +
                // item.MeghallgatasPerce +
                // ' ??rakor.',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'JELEN VANNAK:',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: ['*'],
                  body: [
                    [
                      {
                        ul: [
                          'Hat??rozathoz??: ' +
                            item.FegyelmiJogkorGyakorloNev +
                            ' ' +
                            (item.FegyelmiJogkorGyakorloRang != ''
                              ? item.FegyelmiJogkorGyakorloRang
                              : ''),
                          'Jegyz??k??nyvvezet??: ' +
                            item.JegyzoNev +
                            ' ' +
                            (item.JegyzoRang != '' ? item.JegyzoRang : ''),
                          'Egy??b: ' + item.EgyebJelenlevo,
                        ],
                        border: [false, false, false, false],
                      },
                      // {
                      //   text: 'nytsz.: ' + model.MeghallgatottAzon,
                      //   border: [false, false, false, false],
                      // },
                    ],
                  ],
                },
              },
              {
                text: [
                  {
                    text: 'Az elj??r??s al?? vont adatai:\n',
                    decoration: 'underline',
                  },
                  'N??v: ' +
                    item.EljarasAlaVontNev +
                    '\nNyilv??ntart??si sz??m: ' +
                    item.EljarasAlaVontAzon +
                    '\nSz??let??si helye, ideje: ' +
                    item.EljarasAlaVontSzulHelye +
                    ', ' +
                    item.EljarasAlaVontSzulIdeje +
                    '\nAnyja neve: ' +
                    item.EljarasAlaVontAnyjaNeve,
                ],
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A fegyelmi jogk??r gyakorl??ja meg??llap??tja, hogy a fegyelmi t??rgyal??s megtart??s??nak nincs akad??lya. A fegyelmi jogk??r gyakorl??ja a t??rgyal??st megkezdi ??s ismerteti a fegyelmi elj??r??s alapj??ul szolg??l?? cselekm??nyt.',
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A jegyz??k??nyv felv??tele el??tt felh??vja a fogvatartott figyelm??t a hamis v??d t??rv??nyes k??vetkezm??nyeire, r??szletesen ismerteti a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:\n268. ?? (1) Aki\n',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,\nb) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.\n',
              },
              {
                text:
                  'T??j??koztatom, hogy az olyan k??rd??sekben amelyben saj??t mag??t vagy k??zvetlen hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelem s??rt??s elk??vet??s??vel v??doln?? a vallom??st??telt megtagadhatja, de a v??dekez??s ezen m??dj??r??l ezzel lemond.\n',
              },
              {
                text:
                  'T??j??koztatom tov??bb??, hogy a fegyelmi elj??r??s sor??n felmer??l?? k??lts??gek terh??t viselnie kell, amennyiben a fegyelmi jogk??r gyakorl??ja a fegyelmi cselekm??ny elk??vet??s??ben a felel??ss??g??t meg??llap??tja.\n',
              },
              {
                text:
                  'Felh??vja figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.\n',
              },
              {
                text:
                  'Figyelmeztetem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.\n',
              },
              {
                text:
                  'A b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet 15. ??. (1) bekezd??se alapj??n t??j??koztatom a fogvatartottat a fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaira, azaz:\n',
              },
              {
                ul: [
                  'v??d??t b??zhat meg, illetve k??rheti kirendel??s??t,',
                  'a 14/2014. (XII.17.) IM rendelet 36. ??.-ban foglaltak fenn??ll??sa eset??n k??zvet??t??i elj??r??s lefolytat??s??t kezdem??nyezheti,',
                  'anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja,',
                  'v??dekez??s??t sz??ban vagy ??r??sban adhatja el??,',
                  'bizony??t??si ind??tv??nyt tehet,',
                  'a vizsg??lat befejez??se ut??n az elj??r??si iratait tanulm??nyozhatja, azokr??l m??solatot k??rhet,',
                  'panasszal ??lhet, illetve b??r??s??gi fel??lvizsg??lati k??relmet terjeszthet el?? a fegyelmi hat??rozattal szemben.',
                ],
                margin: [40, 0, 0, 0],
              },
              {
                text:
                  'Meg??rtettem a fegyelmi ??gy kivizsg??l??j??nak figyelmeztet??s??t a hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeire. Kijelentem, hogy a fegyelmi elj??r??ssal kapcsolatos jogaimr??l ??s k??telezetts??geimr??l kioktattak.',
                margin: [0, 0, 0, 15],
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [180, '*', 180],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Fegyelmi jogk??r gyakorl??ja',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Elj??r??s al?? vont al????r??sa',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                    ],
                  ],
                },
              },
              {
                pageBreak: 'before',
                text:
                  'A fegyelmi jogk??r gyakorl??ja meg??llap??tja, hogy a fegyelmi t??rgyal??s megtart??s??nak nincs akad??lya. A fegyelmi jogk??r gyakorl??ja a az elj??r??s al?? vont fogvatartottat kioktatja a jogair??l ??s k??telezetts??geir??l, felh??vja a figyelm??t a hamis v??d t??rv??nyi k??vetkezm??nyeire. A fegyelmi jogk??r gyakorl??ja ismerteti az elk??vetett fegyelems??rt??st a jelenl??v??kkel.',
                fontSize: 11,
                margin: [0, 0, 0, 15],
              },
              {
                text:
                  'Nevezett fogvatartott az I. fok?? fegyelmi t??rgyal??son t??rt??n?? meghallgat??sa sor??n a k??vetkez??ket mondta el:',
                fontSize: 11,
                margin: [0, 0, 0, 10],
              },
              esemenyLeiras,
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 10, 0, 30],
              },
              {
                text:
                  'Jegyz??k??nyv lez??rva: ' +
                  item.JegyzoKonyvZarasOra +
                  ' ??ra ' +
                  item.JegyzoKonyvZarasPerc +
                  ' perc',
              },
              {
                text: 'Kelt, mint fent',
                alignment: 'center',
                margin: [0, 0, 0, 40],
              },
              {
                margin: [0, 0, 0, 40],
                table: {
                  widths: [130, 200, '*'],
                  body: [
                    [
                      {
                        text: 'Elj??r??s al?? vont al????r??sa:',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [10, 0, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.EljarasAlaVontNev +
                          ', ' +
                          item.EljarasAlaVontAzon,
                        border: [false, false, false, false],
                        margin: [10, 0, 0, 0],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'Tekintettel a fentiekre az els??fok?? fegyelmi hat??rozat rendelkez?? r??sz??ben le??rtak szerint hat??roztam.',
                margin: [0, 0, 0, 30],
              },
              {
                margin: [0, 0, 0, 0],
                table: {
                  widths: [200, '*', 200],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Jegyz??k??nyvvezet??',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        text:
                          item.EljarasAlaVontNev +
                          ', ' +
                          item.EljarasAlaVontAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              // saj??t saj??t
              {
                margin: [0, 30, 0, 0],
                table: {
                  widths: [200, '*', 200],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                        ? {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 200,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          }
                        : null,
                    ],
                    [
                      {
                        text: 'Fegyelmi jogk??r gyakorl??ja',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                        ? {
                            text: item.EgyebJelenlevo,
                            border: [false, false, false, false],
                            alignment: 'center',
                          }
                        : null,
                    ],
                  ],
                },
              },
              // {
              //   margin: [0, 30, 0, 0],
              //   table: {
              //     widths: ['*', 200, '*'],
              //     body: [
              //       [
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //         },
              //         {
              //           canvas: [
              //             {
              //               type: 'line',
              //               x1: 0,
              //               y1: 12,
              //               x2: 200,
              //               y2: 12,
              //               lineWidth: 1,
              //             },
              //           ],
              //           border: [false, false, false, false],
              //         },
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //         },
              //       ],
              //       [
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //         },
              //         {
              //           text: 'Fegyelmi jogk??r gyakorl??ja',
              //           border: [false, false, false, false],
              //           margin: [0, 0, 0, 0],
              //           alignment: 'center',
              //         },
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //         },
              //       ],
              //     ],
              //   },
              // },
              // item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
              //   ? {
              //       margin: [-5, 0, 0, 40],
              //       table: {
              //         widths: [120, '*', 180],
              //         body: [
              //           [
              //             {
              //               text: '',
              //               border: [false, false, false, false],
              //             },
              //             {
              //               text: '',
              //               border: [false, false, false, false],
              //             },
              //             {
              //               canvas: [
              //                 {
              //                   type: 'line',
              //                   x1: 0,
              //                   y1: 12,
              //                   x2: 180,
              //                   y2: 12,
              //                   lineWidth: 1,
              //                 },
              //               ],
              //               border: [false, false, false, false],
              //             },
              //           ],
              //           [
              //             {
              //               text: '',
              //               border: [false, false, false, false],
              //             },
              //             {
              //               text: '',
              //               border: [false, false, false, false],
              //             },
              //             {
              //               text: item.EgyebJelenlevo.split(', ')[0],
              //               border: [false, false, false, false],
              //               alignment: 'center',
              //               margin: [0, -4, 0, 0],
              //             },
              //           ],
              //         ],
              //       },
              //     }
              //   : null,
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async SzemelyiAllomanyiTanuMeghallgatasiJegyzokonyvNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var result = await apiService.SzemelyiAllomanyiTanuMeghallgatasDokumentumAdatok(
      {
        naplobejegyzesIds: naplobejegyzesIds,
        iktatasIds: iktatasIds,
      }
    );
    let model = result.data;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var esemenyLeiras = htmlToPdfMake(
            `
          <div style="margin-left: 0px; text-align: justify;">` +
              item.JegyzoKonyvText +
              `</div>
      `
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text:
                  'JEGYZ??K??NYV TAN?? (SZEM??LYI ??LLOM??NYI TAG)\nMEGHALLGAT??S??R??L',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                margin: [0, 15, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                fontSize: 11,
                margin: [0, 0, 0, 30],
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben.',
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {
                text:
                  item.MeghallgatasEve +
                  '. ??v ' +
                  item.MeghallgatasHava +
                  '. h??nap ' +
                  item.MeghallgatasNapja +
                  '. napon. ',
                // +
                // item.MeghallgatasOraja +
                // ':' +
                // item.MeghallgatasPerce +
                // ' ??rakor.',
                alignment: 'center',
                margin: [0, 0, 0, 30],
              },
              {
                text: 'JELEN VANNAK:',
                alignment: 'center',
                margin: [0, 0, 0, 50],
              },
              {
                margin: [-5, 0, 0, 50],
                table: {
                  widths: ['*'],
                  body: [
                    [
                      {
                        ul: [
                          'Tan?? (Szem??lyi ??llom??ny tagja): ' +
                            item.MeghallgatottNev +
                            ' ' +
                            item.MeghallgatottRang +
                            ' \n',
                          // item.MeghallgatottRang,
                          'Meghallgat??: ' +
                            item.MeghallgatoNev +
                            ' ' +
                            (item.MeghallgatoRang != ''
                              ? item.MeghallgatoRang
                              : ''),
                          // 'Jegyz??k??nyvvezet??: ' +
                          //   model.JegyzoNev +
                          //   ', ' +
                          //   model.JegyzoRang,
                          // 'Egy??b: ' + model.EgyebJelenlevo,
                        ],
                        border: [false, false, false, false],
                      },
                      // {
                      //   text: 'nytsz.: ' + model.MeghallgatottAzon,
                      //   border: [false, false, false, false],
                      // },
                    ],
                  ],
                },
              },
              // {
              //   text: [
              //     { text: 'Tan?? adatai:\n', decoration: 'underline' },
              //     'N??v: ' +
              //       item.MeghallgatottNev +
              //       ' ' +
              //       item.MeghallgatottRang,
              //     // '\nElfogultnak ??rzi-e mag??t?: ' + model.Elfogult,
              //   ],
              //   margin: [0, 0, 0, 10],
              // },
              {
                text:
                  'A hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeivel kapcsolatosan r??szletesen ismertettem a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:\n268. ?? (1) Aki\n',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,\nb) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
                margin: [3, 0, 0, 10],
              },
              {
                text:
                  '272. ?? A tan??, aki hat??s??g el??tt az ??gy l??nyeges k??r??lm??ny??re val??tlan vallom??st tesz, vagy a val??t elhallgatja, hamis tan??z??st k??vet el.',
              },
              {
                text:
                  'T??j??koztatom, hogy az olyan k??rd??sekben amelyben saj??t mag??t vagy k??zvetlen hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelem s??rt??s elk??vet??s??vel v??doln?? a vallom??st??telt megtagadhatja, de a v??dekez??s ezen m??dj??r??l ezzel lemond. Felh??vom a figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.\nFigyelmeztetem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
                margin: [3, 0, 0, 50],
              },
              // {
              //   ul: [
              //     'A b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet 16. ??. alapj??n t??j??koztatom a fogvatartottat a fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaira, azaz:',
              //     'v??d??t b??zhat meg,',
              //     'a 14/2014. (XII.17.) IM rendelet 36. ??.-ban foglaltak fenn??ll??sa eset??n k??zvet??t??i elj??r??s lefolytat??s??t kezdem??nyezheti,',
              //     'anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja,',
              //     'vallom??s??t sz??ban vagy ??r??sban adhatja el??.',
              //   ],
              //   margin: [40, 0, 0, 0],
              // },
              // {
              //   text:
              //     'Meg??rtettem a fegyelmi ??gy kivizsg??l??j??nak figyelmeztet??s??t a hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeire. Kijelentem, hogy a fegyelmi elj??r??ssal kapcsolatos jogaimr??l ??s k??telezetts??geimr??l kioktattak.',
              //   margin: [0, 0, 0, 15],
              // },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [60, '*', 150],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 150,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: 'Tan?? (szem??lyi ??llom??ny tagja) al????r??sa',
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                pageBreak: 'before',
                text: 'Nevezett az ??ggyel kapcsolatban az al??bbiakat k??zli:',
                fontSize: 11,
                margin: [0, 0, 0, 0],
              },
              esemenyLeiras,
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 30, 0, -5],
              },
              {
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 12,
                    x2: 510,
                    y2: 12,
                    lineWidth: 1,
                  },
                ],
                border: [false, false, false, false],
                margin: [0, 0, 0, 5],
              },
              {
                text:
                  'Jegyz??k??nyv lez??rva: ' +
                  item.JegyzoKonyvZarasOra +
                  ' ??ra ' +
                  item.JegyzoKonyvZarasPerc +
                  ' perckor',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Kelt, mint fent',
                alignment: 'center',
                margin: [0, 0, 0, 40],
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [180, 180, '*'],
                  body: [
                    [
                      {
                        text: 'Tan?? (szem??lyi ??llom??ny tagja) al????r??sa: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [-15, 0, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.MeghallgatottNev + ' ' + item.MeghallgatottRang,
                        border: [false, false, false, false],
                        margin: [0, -4, 0, 0],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [-5, 0, 0, 40],
                table: {
                  widths: [180, '*', 180],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Meghallgat??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Tan??',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -4, 0, 0],
                      },
                    ],
                  ],
                },
              },
              item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                ? {
                    margin: [-5, 0, 0, 40],
                    table: {
                      widths: [120, '*', 180],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 180,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: item.EgyebJelenlevo.split(', ')[0],
                            border: [false, false, false, false],
                            alignment: 'center',
                            margin: [0, -4, 0, 0],
                          },
                        ],
                      ],
                    },
                  }
                : null,
            ],
          };
        }),
      ],
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          previousNodesOnPage.length != 1 &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  //   async TanuAllomanyiTagJegyzokonyvNyomtatas(fegyelmiUgyId) {
  //     if (pdfMake.vfs == undefined) {
  //       pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //     }
  //     var model = {
  //       fegyelmiUgyId: 101010,
  //       IntezetNev: 'V??ci fegyh??z ??s b??rt??n',
  //       Iktatoszam: 46843278,
  //       UgySzam: '18859/99214',
  //       MeghallgatasEve: '2019',
  //       MeghallgatasHava: '10',
  //       MeghallgatasNapja: '01',
  //       MeghallgatasOraja: '16:15',
  //       AllomanyiTanuNev: 'Teszt Elek',
  //       AllomanyiTanuSzulIdeje: '1996.07.25.',
  //       AllomanyiTanuSzulHelye: 'Budapest',
  //       AllomanyiTanuAnyjaNeve: 'Fekete S??ra',
  //       Elfogult: 'nem',
  //       MeghallgatoNev: 'F??lel?? G??za',
  //       MeghallgatoRang: '??rnagy',
  //       JegyzoNev: 'Jegyzet Elek',
  //       JegyzoRang: 'f??jegyz??',
  //       EgyebJelenlevo: 'Jelen L??v??1, Jelen L??v??2',
  //       JegyzoKonyvText:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //       JegyzoKonyvZarasOra: '18',
  //       JegyzoKonyvZarasPerc: '47',
  //     };

  //     var jegyzokonyvText = htmlToPdfMake(
  //       `
  //     <div style="margin-left: 20px; text-align: justify;">` +
  //         model.JegyzokonyvText +
  //         `</div>
  // `
  //     );

  //     var docDefinition = {
  //       footer: function(currentPage, pageCount, pageSize) {
  //         // you can apply any logic and return any valid pdfmake element

  //         return [
  //           {
  //             text: pageCount >= 2 ? pageCount + '. oldal' : '',
  //             alignment: 'center',
  //             opacity: 0.5,
  //           },
  //         ];
  //       },
  //       content: [
  //         {
  //           image:
  //             'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
  //           alignment: 'center',
  //           width: 30,
  //           height: 55,
  //           opacity: 0.5,
  //         },
  //         {
  //           text: model.IntezetNev,
  //           alignment: 'center',
  //           fontSize: 12,
  //           opacity: 0.5,
  //           margin: [0, 0, 0, 10],
  //         },
  //         {
  //           text: model.Iktatoszam,
  //           alignment: 'right',
  //           fontSize: 10,
  //         },
  //         {
  //           text: 'JEGYZ??K??NYV TAN?? (SZEM??LYI ??LLOM??NYI TAG)\nMEGHALLGAT??S??R??L',
  //           alignment: 'center',
  //           fontSize: 12,
  //           bold: true,
  //           margin: [0, 15, 0, 15],
  //         },
  //         {
  //           text: model.UgySzam + ' sz??m?? fegyelmi ??gyben',
  //           alignment: 'center',
  //           bold: true,
  //           fontSize: 11,
  //           margin: [0, 0, 0, 30],
  //         },
  //         {
  //           text: 'K??sz??lt a ' + model.IntezetNev + ' hivatalos helyis??g??ben.',
  //           alignment: 'center',
  //           margin: [0, 0, 0, 0],
  //         },
  //         {
  //           text:
  //             model.MeghallgatasEve +
  //             '. ??v ' +
  //             model.MeghallgatasHava +
  //             '. h??nap ' +
  //             model.MeghallgatasNapja +
  //             '. napon ' +
  //             model.MeghallgatasOraja +
  //             ' ??rakor.',
  //           alignment: 'center',
  //           margin: [0, 0, 0, 50],
  //         },
  //         {
  //           text: 'JELEN VANNAK:',
  //           alignment: 'center',
  //           margin: [0, 0, 0, 50],
  //         },
  //         {
  //           ul: [
  //             'Tan?? (Szem??lyi ??llom??ny tagja): ' + model.AllomanyiTanuNev,
  //             'Meghallgat??: ' + model.MeghallgatoNev,
  //           ],
  //           margin: [0, 0, 0, 50],
  //         },
  //         {
  //           text:
  //             'A hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeivel kapcsolatosan r??szletesen ismertettem a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:\n268. ?? (1) Aki\n',
  //         },
  //         {
  //           text:
  //             'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,\nb) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
  //           margin: [3, 0, 0, 10],
  //         },
  //         {
  //           text:
  //             '272. ?? A tan??, aki hat??s??g el??tt az ??gy l??nyeges k??r??lm??ny??re val??tlan vallom??st tesz, vagy a val??t elhallgatja, hamis tan??z??st k??vet el.',
  //           margin: [0, 0, 0, 10],
  //         },
  //         {
  //           text:
  //             'T??j??koztatom, hogy az olyan k??rd??sekben amelyben saj??t mag??t vagy k??zvetlen hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelem s??rt??s elk??vet??s??vel v??doln?? a vallom??st??telt megtagadhatja, de a v??dekez??s ezen m??dj??r??l ezzel lemond. Felh??vom a figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.\nFigyelmeztetem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
  //           margin: [0, 0, 0, 40],
  //         },
  //         {
  //           pageBreak: 'after',
  //           margin: [-5, 0, 0, 10],
  //           table: {
  //             widths: [60, '*', '*'],
  //             body: [
  //               [
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                   alignment: 'right',
  //                 },
  //                 {
  //                   canvas: [
  //                     {
  //                       type: 'line',
  //                       x1: 0,
  //                       y1: 12,
  //                       x2: 200,
  //                       y2: 12,
  //                       lineWidth: 1,
  //                     },
  //                   ],
  //                   border: [false, false, false, false],
  //                 },
  //               ],
  //               [
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                   alignment: 'right',
  //                 },
  //                 {
  //                   text: 'Tan?? (szem??lyi ??llom??ny tagja) al????r??sa',
  //                   border: [false, false, false, false],
  //                   margin: [10, -4, 0, 0],
  //                 },
  //               ],
  //             ],
  //           },
  //         },
  //         {
  //           text: 'Nevezett az ??ggyel kapcsolatban az al??bbiakat k??zli:',
  //           fontSize: 11,
  //           margin: [0, 0, 0, 10],
  //         },
  //         // {
  //         //   text: model.JegyzoKonyvText,
  //         //   margin: [0, 0, 0, 10],
  //         // },
  //         jegyzoKonyvText,
  //         {
  //           text:
  //             'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
  //           margin: [0, 0, 0, -8],
  //         },
  //         {
  //           canvas: [
  //             {
  //               type: 'line',
  //               x1: 0,
  //               y1: 12,
  //               x2: 470,
  //               y2: 12,
  //               lineWidth: 1,
  //             },
  //           ],
  //         },
  //         {
  //           text:
  //             'Jegyz??k??nyv lez??rva: ' +
  //             model.JegyzoKonyvZarasOra +
  //             ' ??ra ' +
  //             model.JegyzoKonyvZarasPerc +
  //             ' perckor',
  //           margin: [0, 0, 0, 15],
  //         },
  //         {
  //           text: 'Kelt, mint fent',
  //           alignment: 'center',
  //           margin: [0, 0, 0, 40],
  //         },
  //         {
  //           margin: [-5, 0, 0, 40],
  //           table: {
  //             widths: [200, 180, '*'],
  //             body: [
  //               [
  //                 {
  //                   text: 'Tan?? (szem??lyi ??llom??ny tagja) al????r??sa: ',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   canvas: [
  //                     {
  //                       type: 'line',
  //                       x1: 0,
  //                       y1: 12,
  //                       x2: 180,
  //                       y2: 12,
  //                       lineWidth: 1,
  //                     },
  //                   ],
  //                   border: [false, false, false, false],
  //                   margin: [-15, 0, 0, 0],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //               ],
  //               [
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                   margin: [18, -4, 0, 0],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //               ],
  //             ],
  //           },
  //         },
  //         {
  //           margin: [-5, 0, 0, 40],
  //           table: {
  //             widths: [180, '*', 180],
  //             body: [
  //               [
  //                 {
  //                   canvas: [
  //                     {
  //                       type: 'line',
  //                       x1: 0,
  //                       y1: 12,
  //                       x2: 180,
  //                       y2: 12,
  //                       lineWidth: 1,
  //                     },
  //                   ],
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   canvas: [
  //                     {
  //                       type: 'line',
  //                       x1: 0,
  //                       y1: 12,
  //                       x2: 180,
  //                       y2: 12,
  //                       lineWidth: 1,
  //                     },
  //                   ],
  //                   border: [false, false, false, false],
  //                 },
  //               ],
  //               [
  //                 {
  //                   text: 'Meghallgat??',
  //                   border: [false, false, false, false],
  //                   alignment: 'center',
  //                   margin: [0, -4, 0, 0],
  //                 },
  //                 {
  //                   text: '',
  //                   border: [false, false, false, false],
  //                 },
  //                 {
  //                   text: 'Tan??',
  //                   border: [false, false, false, false],
  //                   alignment: 'center',
  //                   margin: [0, -4, 0, 0],
  //                 },
  //               ],
  //             ],
  //           },
  //         },
  //       ],
  //       pageSize: 'A4',
  //       pageMargins: [40, 150, 40, 70],
  //       styles: {
  //         header: {
  //           fontSize: 16,
  //           bold: true,
  //           alignment: 'center',
  //           margin: [0, 20, 0, 0],
  //         },
  //         subheader: {
  //           fontSize: 15,
  //           bold: true,
  //         },
  //         quote: {
  //           italics: true,
  //         },
  //         small: {
  //           fontSize: 8,
  //         },
  //         footersmall: {
  //           fontSize: 6,
  //         },
  //         tableExample: {
  //           margin: [-5, 30, 0, 15],
  //         },
  //         tableHeader: {
  //           bold: true,
  //           fontSize: 8,
  //           margin: [0, 10, 5, 10],
  //         },
  //         tableHeader2: {
  //           bold: true,
  //           fontSize: 8,
  //           alignment: 'center',
  //           margin: [0, 10, 0, 10],
  //         },
  //         tableCell: {
  //           fontSize: 8,
  //           alignment: 'right',
  //           margin: [0, 5, 5, 5],
  //         },
  //       },
  //       defaultStyle: {
  //         columnGap: 20,
  //         fontSize: 10.5,
  //       },
  //     };

  //
  // pdfMake.fonts = {
  //   TimesNewRoman: {
  //     normal: 'TimesNewRoman.ttf',
  //     bold: 'TimesNewRoman.ttf',
  //     italics: 'TimesNewRoman.ttf',
  //     bolditalics: 'TimesNewRoman.ttf',
  //   },
  // };
  // pdfMake.createPdf(docDefinition).download();

  //     /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
  //     //pdfMake.createPdf(docDefinition).print();
  //   }

  async FegyelmiHatarozatNyomtatas(fegyelmiUgyId, iktatasId, naploId) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var model = await apiService.FegyelmiHatarozatNyomtatas(
      fegyelmiUgyId,
      iktatasId,
      naploId
    );

    var indoklas = htmlToPdfMake(
      `
    <div style="margin-left: 20px; text-align: justify;">` +
        model.IndoklasText +
        `</div>
`
    );

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: 'I. FOK??\n FEGYELMI HAT??ROZAT',
          alignment: 'center',
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 10],
        },
        {
          text:
            'A b??ntet??s-v??grehajt??si int??zetben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet rendelkez??seire figyelemmel',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'N??v',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottNev,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Azonos??t??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvAzon,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si hely',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulHelye,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si id??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulIdeje,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Anyja neve',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottAnyjaNeve,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Elhelyez??se',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvElhelyezese,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Bv.i-ben tart. jogc??m/fok',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.BvFok,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'V??grehajt??si fokozat',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.VegrehajtasiFok,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Szabadul??s aktu??lis d??tum',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvSzabadul,
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          text:
            'fogvatartott ellen kezdem??nyezett fegyelmi ??gyben a fegyelmi felel??ss??g meg??llap??tva.',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'Fegyelmi v??ts??g',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FegyVetseg,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Fegyelmi feny??t??s',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FenyTipus,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Feny??t??s tartama',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FenyIdotart + model.KietkezesCsokkentes,
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          text:
            model.FegyelmiUgyekOsszevont != ''
              ? '??sszevont fegyelmi ??gyek:'
              : null,
          fontSize: 12,
          margin: [20, 0, 0, 0],
        },
        {
          text: model.FegyelmiUgyekOsszevont,
          fontSize: 12,
          margin: [30, 0, 0, 10],
        },
        {
          text: 'Indokl??s:',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        // {
        //   text: indoklas,
        //   fontSize: 12,
        //   margin: [20, 0, 0, 10],
        // },
        indoklas,
        // {
        //   text: model.FegyelmiPaymentText,
        //   fontSize: 12,
        //   margin: [20, 20, 0, 30],
        // },
        // {
        //   text: model.FegyelmiResultText,
        //   fontSize: 12,
        //   margin: [20, 0, 0, 30],
        // },
        {
          text:
            'E fegyelmi ??gyben keletkezett hat??rozatot a fogvatartott el??tt sz??ban kihirdettem, indokoltam. A hat??rozat egy p??ld??ny??t a fogvatartottnak ??tadtam.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text:
            model.PanasszalElt == true
              ? model.FenyTipus == 'Mag??nelz??r??s'
                ? 'Az elj??r??s al?? vont a fegyelmi hat??rozottal szemben b??r??s??gi fel??lvizsg??lati k??relemmel ??l.'
                : 'Az elj??r??s al?? vont a fegyelmi hat??rozattal szemben panasszal ??l.'
              : model.FenyTipus == 'Mag??nelz??r??s'
              ? 'Az elj??r??s al?? vont a fegyelmi hat??rozottal szemben b??r??s??gi fel??lvizsg??lati k??relemmel nem ??l.'
              : 'Az elj??r??s al?? vont a fegyelmi hat??rozattal szemben panasszal nem ??l.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Hat??rozat: ' + model.HatarozatHelyDatum,
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 15],
          table: {
            widths: ['*', 90, 180],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: 'Hat??rozathoz??: ',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 180,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
                {
                  text:
                    (model.HatarozathozoNev && model.HatarozathozoNev != ''
                      ? model.HatarozathozoNev + '\n'
                      : '') +
                    (model.HatarozathozoRang && model.HatarozathozoRang != ''
                      ? model.HatarozathozoRang + '\n'
                      : '') +
                    (model.HatarozathozoTitulus &&
                    model.HatarozathozoTitulus != ''
                      ? model.HatarozathozoTitulus + '\n'
                      : ''),
                  border: [false, false, false, false],
                  alignment: 'center',
                  margin: [0, 0, 0, 0],
                  bold: 'true',
                },
              ],
            ],
          },
        },
        {
          margin: [-5, 0, 0, 40],
          table: {
            widths: ['*', 170, 180],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '1 pld-t a hat??rozatb??l ??tvettem: ',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 180,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
                {
                  text: 'fogvatartott',
                  border: [false, false, false, false],
                  alignment: 'center',
                  margin: [0, -5, 0, 0],
                },
              ],
            ],
          },
        },
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async FegyelmiHatarozatMegszuntetesNyomtatas(
    fegyelmiUgyId,
    iktatasId,
    naploId
  ) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model = await apiService.FegyelmiHatarozatMegszuntetesNyomtatas(
      fegyelmiUgyId,
      iktatasId,
      naploId
    );

    var indoklas = htmlToPdfMake(
      `
    <div style="margin-left: 20px; text-align: justify;">` +
        model.IndoklasText +
        `</div>
`
    );

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: 'FEGYELMI HAT??ROZAT',
          alignment: 'center',
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 10],
        },
        {
          text:
            'A b??ntet??s-v??grehajt??si int??zetben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet rendelkez??seire figyelemmel',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'N??v',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottNev,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Azonos??t??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvAzon,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si hely',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulHelye,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si id??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulIdeje,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Anyja neve',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottAnyjaNeve,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Elhelyez??se',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvElhelyezese,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Bv.i-ben tart. jogc??m/fok',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.BvFok,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Szabadul??s aktu??lis d??tum',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvSzabadul,
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          text:
            'fogvatartott ellen kezdem??nyezett fegyelmi ??gyben a fegyelmi elj??r??st megsz??ntettem.',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          text: 'Indokl??s:',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.MegszuntetesOka,
          margin: [20, 0, 0, 10],
        },
        indoklas,
        // {
        //   text: model.DDLText,
        //   fontSize: 12,
        //   margin: [30, 0, 0, 10],
        // },
        {
          text: 'E fegyelmi hat??rozat joger??s ??s v??grehajthat??.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text:
            'E fegyelmi ??gyben keletkezett hat??rozatot a fogvatartott el??tt sz??ban kihirdettem, indokoltam.\n A hat??rozat egy p??ld??ny??t a fogvatartottnak ??tadtam.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Hat??rozat: ' + model.HatarozatHelyDatum,
          fontSize: 12,
          margin: [0, 0, 0, 30],
        },
        {
          margin: [-5, 0, 0, 15],
          table: {
            widths: ['*', 90, 180],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: 'Hat??rozathoz??: ',
                  border: [false, false, false, false],
                  alignment: 'right',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 180,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
                {
                  text:
                    (model.HatarozathozoNev && model.HatarozathozoNev != ''
                      ? model.HatarozathozoNev + '\n'
                      : '') +
                    (model.HatarozathozoRang && model.HatarozathozoRang != ''
                      ? model.HatarozathozoRang + '\n'
                      : '') +
                    (model.HatarozathozoTitulus &&
                    model.HatarozathozoTitulus != ''
                      ? model.HatarozathozoTitulus + '\n'
                      : '') +
                    (model.HatarozathozoSzam && model.HatarozathozoSzam != ''
                      ? model.HatarozathozoSzam + '\n'
                      : ''),
                  border: [false, false, false, false],
                  alignment: 'center',
                  margin: [0, -5, 0, 0],
                  bold: 'true',
                },
              ],
            ],
          },
        },
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async HatarozatReintegraciosNyomtatas(fegyelmiUgyId, naploId, iktatasId) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var model = await apiService.HatarozatReintegraciosNyomtatas(
      fegyelmiUgyId,
      naploId,
      iktatasId
    );
    var indoklas = htmlToPdfMake(
      `
    <div style="margin-left: 20px; text-align: justify;">` +
        model.IndoklasText +
        `</div>
`
    );
    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: 'REINTEGR??CI??S TISZTI JOGK??RBEN HOZOTT\nFEGYELMI HAT??ROZAT',
          alignment: 'center',
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 10],
        },
        {
          text:
            'A b??ntet??s-v??grehajt??si int??zetben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet rendelkez??seire figyelemmel',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'N??v',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottNev,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Azonos??t??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvAzon,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si hely',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulHelye,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Sz??let??si id??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottSzulIdeje,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Anyja neve',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvatartottAnyjaNeve,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Elhelyez??se',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvElhelyezese,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Bv.i-ben tart. jogc??m/fok',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.BvFok,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Szabadul??s aktu??lis d??tum',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvSzabadul,
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          text:
            'fogvatartott ellen kezdem??nyezett fegyelmi ??gyben a fegyelmi felel??ss??g meg??llap??tva.',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'Fegyelmi v??ts??g',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FegyVetseg,
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: 'Fegyelmi feny??t??s',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FenyTipus,
                  border: [false, false, false, false],
                },
              ],
            ],
          },
        },
        {
          text: 'Indokl??s:',
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        // {
        //   text: indoklas,
        //   fontSize: 12,
        //   margin: [20, 0, 0, 10],
        // },
        indoklas,
        // {
        //   text: model.DDLText,
        //   fontSize: 12,
        //   margin: [30, 0, 0, 10],
        // },
        {
          text:
            'Ezen fegyelmi hat??rozat ellen panasszal ??lhet, mely a fegyelmi elj??r??s lefolytat??s??t vonja maga ut??n.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text:
            'E fegyelmi ??gyben keletkezett hat??rozatot a fogvatartott el??tt sz??ban kihirdettem, indokoltam.\n A hat??rozat egy p??ld??ny??t a fogvatartottnak ??tadtam.',
          fontSize: 12,
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Hat??rozat: ' + model.HatarozatHelyDatum,
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 15],
          table: {
            widths: ['*', 90, 180],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: 'Hat??rozathoz??: ',
                  border: [false, false, false, false],
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 180,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  margin: [0, 0, 0, 0],
                },
                {
                  text:
                    (model.HatarozathozoNev && model.HatarozathozoNev != ''
                      ? model.HatarozathozoNev + '\n'
                      : '') +
                    (model.HatarozathozoRang && model.HatarozathozoRang != ''
                      ? model.HatarozathozoRang + '\n'
                      : '') +
                    (model.HatarozathozoTitulus &&
                    model.HatarozathozoTitulus != ''
                      ? model.HatarozathozoTitulus + '\n'
                      : '') +
                    (model.HatarozathozoSzam && model.HatarozathozoSzam != ''
                      ? model.HatarozathozoSzam + '\n'
                      : ''),
                  border: [false, false, false, false],
                  alignment: 'center',
                  margin: [0, -5, 0, 0],
                  bold: 'true',
                },
              ],
            ],
          },
        },
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async VedoKirendeleseNyilatkozatNyomtatas({ iktatasIds, naplobejegyzesIds }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.VedoKirendeleseNyilatkozatNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.VedoKirendeleseNyilatkozatokNyomtatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          return {
            id:
              (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
              (naplobejegyzesIds && naplobejegyzesIds.length > 1 && index >= 1)
                ? 'NoBreak'
                : '',
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAWAAwAwERAAIRAQMRAf/EAJQAAAICAwEAAAAAAAAAAAAAAAgJBgoABQcDAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAAHAQAABgIABgMBAAAAAAECAwQFBgcIABESExQJFRchIkMWGApCIyQyEQACAQIEAwQIBAUFAAAAAAABAhEhAwAxEgRBUWFxIjIT8IGRobFCIwXB0ZIU4fFSYjNyotJDNP/aAAwDAQACEQMRAD8Av8eJiYzxMTFZH7WfsC3XkXqydn8C19/bYumc/wB8T1rIZagalLZ7iK0dnp7LB6VLyNJqdwrj52lJXuuzL15JskyRzJJJBZ4Rm5WSJ0dtZsXduTuAVQOIcGskgRGZoGgSKmeuAYwYGcenpyw8fix1fpHm3OpjR9tpfQ8/PNZSdZ6xn0jGztUsVZlph89qqcdZoiErDC1mjIBZBsrJEi475aqZjC3THz8+exDMSBHMTMHiOlZpwywdeOCn8ViYzxMTGeJiYUt1v9l0nUdXJxpwplf+XvdEs1WcytOZyZ4bEucq6mqVo70XpvU0iKRtSiYx0qBEYFmdaelHIA2TSROomYxIqt3n1CzMFlANYNBNJFJBIzBwJPBY1YTl3Fg+2c8fC3Dv7s2/3E92xqZDYlub4NDOE84qxOjOYKRoCVBsaaDacukZO5/rs3DN4ywNCQEe1dicGaavrdeMu53Vy3eSxtEUJcuWwdUEkFtJJMgCBUkVGnxQIK2BAUtHeevsJz7QI9mWNLzVmR7nvjrBOKes+vsIGo6a2r8s60zTaDsbaBd2bCNH3S05+3Qxi8SGOzFJvsk3g5ly7iX/AOajX4GRKu3FM7bx0RcPkL5qhrbA6TQNQgTME0FADSCTGDAkQJU/D1e/DQ8x746L4x1CA5o+0aoIs6xaBdNcP7loQLWDJr2hGoGcr1zYTNYuKe0a6xbIhlFHi0c0SVZpGcuEgQQcyRwZRdP0VINKZnqeYHGtI4yMWshRrNcPCYP2MoxZycY8aSMbItG7+PkGDhF4xfsXiJHDR4zdtzqN3TR03UKdNQhjEOQwGKIgID4TlQ54LAE/Z122++vTkG79RMKBHaUrUbHQK6atSlp/tJp5X24RNOSkxfEjJd1ILRrqYTUTj26IOH5/JFM5DHAwGi62g0EGvYJ7a5U54mK8X1r6hpXMmOyv2XW+2Pn3PFsscpkXbdDctbAjrEx0/pWnsn9v2uAiXiRCxgY3tt+TyyBpCqR3ZYsjyQ+UL5woi5bubxa41guGFoxAA0rAkAaZB1qyszTyBkqcLVqTpPXn/HswZvCeAM9Zv+Kcpdtwkxomp8I4hotvv9A02ySWh162WTpTYoW75vZLd+cMuw1Cq1+k1RoWLSlE3TNnZ2b8CJ/IikjppKPqO4t6ls91Qad4wdRjMGa8M4ypi1LairVETPby4iBnPPhXBGdq4JzpybqfP++5BnpsitN8ltfwdek8+x8fnzbXL9qHPukQGPkRqldYtq+51xhcUkY6BmitSvWjeTc++qdqmAJEu4ZIsFPMU94A/LBBYjjBEyMjnngWYLcCjxMCfZA/HC5rHD9A6xylD89W+2yrGu/UXRm9h+wiJmL1bT3PctBjIy6zZIXMLa4EZGCi81zGBbaVTLBMHfg8UlIFoZEot3joloj3botoxRLhKgwJgmADpNJ8DxBA1EZjFtXxLJFfXEZcaE8cGj/r29z3jqTna4YJd6iCD7ihnn2St9RWeDFSOrwswW5O6LYnuaOomNkKCm9zKDhJBsHqUaP20iRVsRFECphd615UAZyQRAADDTIEEyK5zSIrEklNMqRjo339Z+w07jvOaZNXCKo8BLdK58pLWC1Q87ZaK3WhKlodnrLS21itgWYnTTVzgY2OhyJKJi3sD1i4AFDokSPVpEuEozBSVMTEkyPDObASYAYkAgCsiGZEc8V7Z3jm+s3+i5q81vSKtSRulK0a8V2159qshE4vc57Rue5sOgOgI+LXa1+4LT8/oEjYIl/F/EftpGrg6duCgi4VR51uwLtk7kaV3CwkMV1MmkkxC91EgI0jVWhymld3E6YOdZ8XaBn16Y6Qny7pMUwntiL1XrK12f1uz1JfoRqXQarS53MaR0hQM3gNlsb5/Jv9RPz1TWupTEs/agq4STeMXLlu8RZKquiaBs9nctpaYk7fUpYAq0NpIKrC1JKgKTJGoahIIxRu3LbKIAdgxOfCPbVuQy642dh4+0CXmSMnnZ927Tk8nvkLP5hrmEykxOU1zfpTDehrq2z2mqyt1vrSt9BQ/wCu2KXyYSYk/KFsiYKJNXCgJqMtfbdqLNxrf0ka3JWQREqJJKglIYiKE5kngZd9QZ4McePX4DHDbPzFoqFO1Ofb9aSejs9Pissba/p0Hne9Fzm3zFkxboN+4wbWoh5LvrJdr+3UyaAq0Yd04+O2b3Jq3dNSqC3br5bO22xv2VuMoUXNIMqAqg0aSImJMGkjxGcFLhSSAK9azxyzw2b6Q8AdYt2r1yopabN897lcFC3DOpOBnK1N1Z7UtTsVBz9ztJpUpGN0u7rPqGgrVX7BNFpHV106akAwHAS6bN5n2ih7RlrjHzCUPggaQFggMSWqDMCs5ptksNTDSQMu2pPtp6jjoH3B0uY3HXDUCz6jqUHnuZxeZ3es0WnTFWj6ktdXWH95XYbRY4edp9kTscqzmMjhRbfJMKDZJBT20yqnBUh27du9Zui5WGiOEHyxEcR3jiI7G444Kwj9M/HCzIfiKgO7oygVNG2csaGsS1OBJJ7kRFyQ6HS36nT9tf8ATQmSff2kYSGVKAet2b3RD/j4w7nY7K3dCrbt6SiE0GZVCficaldzBk8fx/LEEovFWdXGvQ9nnbnpzuZkaTmrp299jFxVUTvOPfXBeLDH+4ti6ywRLue6jtBithOKQIGYJmA3xCmUttrtUFpVtrpfUTSkqzgEDKYX44W9x1dQPmMf7Z+ONDGcKY9D59JOYacucMSr5LfdIgYyJgMEiYaIt8Dz303pbN+wiIzEG7NmU1my6LBUUipqqtRcpGP/AOgwl02tpZvbV9xfWb+hpNagXiigzUgKBQ0mowPmt5vljwxyHp+PPE+muELOwmv7mN+zUcNHqTaudGWjK6nhzyyvFM7tm8Fi1T0AnPib9kkvDUOGjlVhfmUUeNXL0UipOCELhOx2nlT5duShNFHi0kiZERIBOdMq4ZruawpNJ9v5YInhjKVOf+0ec7TnWqaui50Jg0pN9ipCRoRK9bqq9iuZLMav2CKr+d1757SPntTlXTI5lCrsjqEBBQpBXI41C1bsbO1dtIqPcvKDHEFLhMdpQdYHCpxnt3nuhGb5gZ/ST8RhnXTKfACv2H6wTu8cTCMDlvng2cfudZFFn801z6XJaRghdnIzM4/CCIO/PzUBmKn9EVvGj7efuA3t39j5kQs6edNPrzj+WED/ANL6v8fumFj3TjxK3/19RceZFeJxd/IHyEj+N+X8z8oUDeXpce/8384QPP8AqfNAP6oB46mr7wFzuaSY6TGXbHDOOmNH0+mPJu3/ANe8qZPiK8QFQ9tuCXxH8SCIoka1wzIEvYce2KJWCcMKHl/L7BY/0fyA08F5n3uAdV7TEipiK1HTOo69cSLfTCoK2tkJMvyyHuO9oczYhcc+rVIk9gZQMbY2lfzy5czdfwqrZg1tEPNRrBrJ1t0YiT9w3ODJMAVEwCX1eM2zS7etOCuu5DSKVjcsCKHnnHXI5Lot7l3R+Ppyw2mzVfkBfgKv2ST77/F5ot1RfNWa9UhXqUQJbZrldNNTuNPCmrVdSvIgk+tEzH/CLHlWafF9wRAyRjeMgsze8nQZFNMwfDGfrnDw3zE1n07cAPzY5qDjqzmQmf68beqLG6tcYKoa2aEja8NwrlffciQcQ6GMiI6IjQOyYsCNRcIt0SPPZ98AN7nma99aazt7NtlKEbhKTP8A1XjzMdnDphShVdFXwjVH6GwU/wBiv7GsXXOgUfL8E2zbZwmO43bJYcpr9OlI2vRMnlv2AZLFlnX9tvVNKg+kbZpDAEkUSuB+GRysYSgj6TrsX7a+bYM+YWBHZ9P/AIn3YG2R59xfmJB9QUD8RgZoir9QMrm2nl+DeyvgJavJXM4kpmNncfhXXS37XRMCP7zDzejU/wCYUvP+Dv8A6vP/AJeB3IF26GTwhVHrCqD8DjUpgV6/jiI57nnV1ZqsLCynBnYYPGFUy6GXBtUcaXRB7UMf+uKjTAJq/vEnrRLO8s2oET+Qe4gmxU8g+WBUxdQ3lQPAGn1s5EfqGFuCzIRkDJ/THxx64dk2xdJRM7X84u+C5JHq801FOYZ9AntLS7pq77mXVePnSQhqnNtI1spVY+2HcrkOu596Qbi39z2xFUdNp0tfbrdxqi6bq+LSRovsZEhuzp7hBb+qW4wOHMT05/xw1ixcd67K8lQtcS2LnlDTEut9R6beWtwS3Diqn7PsetOl6fHPiThbMZWJZ6UCSbpRcfecNDAKZSn8i4zGhajSKZ9CKHn6o6HDCCXniDOWAEpOSani3cvJFR0m/wCCX8rxNpKw73FXVrVcMfxE7zbnblKyJWSSkU003iVDRcNjImKPuLLpmAQTIJiukfs7KLEDcqM5P+O7HAcM+ZqIwhbYtNbStJFf9DYLXrTo7buWu49X0DKMzzDSo20894PT5trfdBs1EfxUjWYztDYWq0X+EpFvaybGRgc7kWyhlDIKIu1G/kUyZjmKj9vuXuvf2+gAEAlqiO5kAQZlhnQ+o4QFY33dCAwMVE5hTzHLEWYfab2k/sKNdJy/zaRZa4OqUDoehNBMiWUaa4GPqL+2GKAoLI0x5vAN/wDXxQ9Ih7n8PEvLv7LaddgsVU+F/mAOerqBhwG5ORX2dv8Ad0xpav8AbV2RaoljMs+WudGrSQiafNIlddB38Vis7nRuVb6wKoRLFjlBw1jetIVBUoCIe/GPfIRKKImojfrpl7HfmO6/AsDPe/t9/Q4FjfUgSskwKdJ/q5YT7o8fiqecRD/fMip1wtsnzJcoFGxEycmqxVSmD8x9bIxzD+5F6u+m4WEQ0ebYKMXCqKRUnQFeKAiKKiqe/b6b20Fll1XWD6Qc5/cMSRJoIAr2cwMGGK34kadM0y/ngxLpesbPytB4fIYBOMue0/s06XcV3QJDKax/iPJwraa6Ks0Cxg3iTleJQrJlZFqhEv1YlCBdTSIsmjpR4mVMU27Ra35YWCtuiwZJNvuwBlmKmAMzInDGuKG1/KDnn6dmOXcOR2LI9V81vsgymOzkhLVEws3INcmRyxeyKxkDx1/EiKkLCS0vHMZZZ8omdykUPddKLEAQces97i2E2tkMqi8NwgMRP+O8anjXiJB5zkm3rBtq86q+3Q2HBda8kWPqHt2bpUV0PaMMZv8Amii3pFvX83zu7KWl9ASnROMWFYr+8xr9RgnXqnu5iGRblEouJRBY4gZJMDNtFrSsRBRzUGeS9n9I44MKockGrQT6hFMR1t9Peps5hOcbfYHoxXyVqXuJDKc8c/qJhNOtEDUlze3+AIQWw2/zUKn5eRW4+z/EoeYg/wBQd+rwBPGAAAIypA4TTDQSMssauA+mLQ63GM4eM+wDSyMWEbXIhuVbn7AFlvx9TqXP1KhE1Vj17/sXSg+Y6kVVT0h7qiDs4gAuz+myVYKCBKAwa8SSePHUfdgSAxBOYMj2R8MVrNG0XRNTqON5yfE9LtUFCaxSIW82qB2mPy6L1ehZvVuiMh0h1KWDG5s+g0aD0e030zFlDwTeUk15dgpALsSPXLFi+fYazb2wtNcNu9cLBCqwA3nG6oliNNIGo1jvjUCcKZS9wgTkM+lDE+7lgoC7FXpnHIzDHvG0G2oMFr1m6FbJm+wHpFUyeh3bOZhedsRrNG5u5aS2bvG4uHiLZu2WhU4RY9rjW6pWE9+Iwnztrd/b3XuWrhJANJMQCJKiGAyWjalikqWrTKFNRkESe7lwOUR1joTiU/WJH61/ktzfTZ+k/go+I6S2JRo3t22y2p6Qem2dpHa3CfhZaXj5qauFaxSv4Wxrcy5npdtOgnOwz1NspGumzhfduPJezbsAtpTS4MRqYBxzqDrYmBQ+uDC6SC0yD8QRw7ezFgf7ZuWbxt2Owmv4yz02Y2rndpoU1A0jJNOt2S3DVqbcqW/grPQWVlpU7XJR9Kxc2hD2mGj1nXxH03XGzY5P/R6i1YYBtDsBbaJmqyMi3TgTwBJrlgyDmJnFfKsX/nCatUcYexdESgHOrS0GdpM977rXXbatN+ohpRWEzETe1R0zCOmVDTFqqm8SQdIIgY6gFOAnCbtLtq75SINICAkCe8VUkSOJknFppIBPXOnPh7MRjO9AwuSqcE6sPZ18PKuqrlT10Z79hOwNXKktM459as7ZvUiO5I+lVa26loZlk/SAJLupFLyL8ICNxc3VWzcVBoYMSdOcNc0+4DtgYB5DqFyJr2aZ+OOP44lW3OZtIyFWZPoL87pjeGfmmI2wxk3Et7nNxSSi87PpRbCQfmrCsc2cO5s/tSUYs1Zz71zCua9bYRjKLtg2t2FbbsYaAQUbUY1QTEmSrrk+qAGD2yAa3cdrQMXkryMcCOfKcuBx0Zs0Vbyftv13CRwUWdoSny7A1kouRbWf3XL0qi5465pPy3tgUz1BQWdkQsrUFvNhoLf3r2kIQr7L7iGvWyv07mcgDwmMrirVWBKlRIm2ZS0gNqalxTPStJHQ8VPHLhhsX0v4ZarxrNq69esxQxSDosxmOMvlGzJtDaVcZmdj1rdplEZw6TCBNSKPEQ7mvwkpHoGhJQZ2XXg0oiMcfhGTLq3LSiy76jOogioPymZJDEE6wanu6paSTiW1EyOH8PhPLFkzwjBYALWPr5yi06FZdsyNtUMb2e7O2j/RJpXKaFo+f668YolbtnmsZxaY4iM5NEakBH8zFP4SfMkAEO+UTKUgSWgLJ0g0E0ExMdsDnBrE5iVrMmcQM1auOaiVPXfrwxDVYdqUTu9A5bgs5mHRiHcGIRZfG9Tj6hbWZiFXFRVGMl7CqACf0esQ8jAGud43BlJBEmQKgZTqOXKRnXElsopivLhPB3cduiIWAo/KtsqcWeZnXzqd2yYb4NVq5FSlxtU1ENGdfnT3XSmMvWmMsugVCOg3UQgs6Iux9MZIzsG502boF1muFsiCI1aqCawqkNIma901Loj4y3duLtxbiSlxTmPTiMxkRQ1FG34R9J0E4eRtl7Y0qN28GpWbgcIziCkKLgBpBnDEgUjWz8jIyN91Bo1iwFoi1fu2EWeLTaRztk7ZxcWmzjXjoNpR9KCK1MTPKhHCMswZJnVpkkt6en5YevGxsdDRzCIiGDKKiYpk1jYuLjWqDGOjY5igRsyYMGTVNJszZM2yRU0kkylImQoFKAAAB4Tgsf/Z',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'NYILATKOZAT',
                alignment: 'center',
                fontSize: 20,
                margin: [0, 15, 0, 10],
              },
              {
                text: 'V??d?? kirendel??s??hez',
                alignment: 'center',
                fontSize: 16,
                margin: [0, 5, 0, 100],
              },
              {
                text: 'Alul??rott ' + item.Nev + ' nytsz.: ' + item.FogvAzon,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'a 14/2014. (XII.17.) IM. Rendelet 23.??. (1) bekezd??se alapj??n k??rem a Bv. B??r?? Urat, hogy a ' +
                  item.UgySzam +
                  ' sz??mon ind??tott fegyelmi ??gyben r??szemre v??d??t kirendelni sz??veskedjen.',
                margin: [0, 0, 0, 50],
              },
              {
                text:
                  item.Varos +
                  ', ' +
                  item.Ev +
                  '. ' +
                  item.Honap +
                  '. ' +
                  item.Nap +
                  '. ',
                margin: [0, 0, 0, 30],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [60, '*', 150],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 150,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: 'Elj??r??s al?? vont al????r??sa',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          previousNodesOnPage.length != 1 &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  // async VedoKirendeleseNyomtatas({ iktatasIds, naplobejegyzesIds }) {
  //   if (pdfMake.vfs == undefined) {
  //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //   }

  //   var model;

  //   if (naplobejegyzesIds != null) {
  //     model = await apiService.VedoKirendeleseNyomtatasByNaploIds({
  //       naplobejegyzesIds,
  //     });
  //   } else if (iktatasIds != null) {
  //     model = await apiService.VedoKirendeleseNyomtatasByIktatasIds({
  //       iktatasIds,
  //     });
  //   } else return null;

  //   var docDefinition = {
  //     header: function(currentPage, pageCount, pageSize) {
  //       return [
  //         [
  //           model.map(function(item, index) {
  //             return {
  //               margin: [40, 20, 40, 20],
  //               stack: [
  //                 {
  //                   image:
  //                     'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
  //                   alignment: 'center',
  //                   width: 30,
  //                   height: 55,
  //                   opacity: 0.5,
  //                   margin: [0, 0, 0, 10],
  //                 },
  //                 {
  //                   text: item.IntezetNev,
  //                   alignment: 'center',
  //                   fontSize: 12,
  //                   opacity: 0.5,
  //                   margin: [0, 0, 0, 10],
  //                 },
  //                 {
  //                   text: item.Iktatoszam,
  //                   alignment: 'right',
  //                   fontSize: 10,
  //                 },
  //               ],
  //             };
  //           }),
  //         ],
  //       ];
  //     },

  //     footer: function(currentPage, pageCount) {
  //       return {
  //         margin: [40, 20, 40, 20],
  //         text: pageCount >= 2 ? currentPage + '. oldal' : '',
  //         opacity: 0.5,
  //         margin: [0, 10, 0, 10],
  //         alignment: 'center',
  //         fontSize: 10,
  //       };
  //     },
  //     content: [
  //       model.map(function(item, index) {
  //         return {
  //           id:
  //             (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
  //             (naplobejegyzesIds && naplobejegyzesIds.length > 1 && index >= 1)
  //               ? 'NoBreak'
  //               : '',
  //           stack: [
  //             {
  //               margin: [-5, 0, 0, 20],
  //               table: {
  //                 widths: ['*', '200'],
  //                 body: [
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'T??rgy:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: '??.i.:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'Tel.:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'E-mail:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                 ],
  //               },
  //             },
  //             {
  //               text:
  //                 '.........................................................',
  //             },
  //             {
  //               text: 'Bv. b??r??',
  //               margin: [0, 0, 0, 20],
  //               bold: true,
  //             },
  //             {
  //               text: item.Torvenyszek,
  //               bold: true,
  //             },
  //             {
  //               text: 'Bv. csoport',
  //               margin: [0, 0, 0, 20],
  //               bold: true,
  //             },
  //             {
  //               text: 'C??mz??s',
  //               margin: [0, 0, 0, 20],
  //               bold: true,
  //               decoration: 'underline',
  //             },
  //             {
  //               text: 'Tisztelt...........................................!',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'T??j??koztatom, hogy ' +
  //                 item.Nev +
  //                 ' (Sz??l.: ' +
  //                 item.SzulDatum +
  //                 ', an.: ' +
  //                 item.AnyjaNeve +
  //                 ') ' +
  //                 item.FogvAzon +
  //                 ' fogvatartott ellen int??zet??nkben ' +
  //                 item.UgySzam +
  //                 ' sz??mon fegyelmi elj??r??s indult, mivel megs??rtette a fogvatart??s rendj??re vonatkoz?? szab??lyokat.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'A 14/2014. (XII.17.) IM. Rendelet 23.??. (1) bekezd??se alapj??n a fogvatartott v??d?? kirendel??se ir??nti k??relmet terjeszthet el?? a bv. b??r??hoz. Nevezett ??gy nyilatkozott, hogy a fegyelmi elj??r??sa sor??n v??d?? kirendel??s??t k??ri, err??l ??r??sban is nyilatkozott, melyet mell??kelten csatolok.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'Helye: .........................................................................................................................................',
  //               margin: [0, 0, 0, 10],
  //               bold: true,
  //             },
  //             {
  //               text:
  //                 'K??rem a tisztelt B??r?? Urat, hogy a v??d?? kirendel??s??t k??vet??en int??zet??nket t??j??koztatni sz??veskedjen.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 '...................................... az elektronikus d??tumb??lyegz?? alapj??n.',
  //               margin: [0, 0, 0, 30],
  //               bold: true,
  //             },
  //             {
  //               text: 'Tisztelettel:',
  //               margin: [0, 0, 100, 20],
  //               bold: true,
  //               alignment: 'right',
  //             },
  //             {
  //               text: item.NyomtatoSzemely,
  //               margin: [0, 0, 0, 0],
  //               bold: true,
  //               alignment: 'right',
  //             },
  //           ],
  //         };
  //       }),
  //     ],
  //     pageBreakBefore: function(
  //       currentNode,
  //       followingNodesOnPage,
  //       nodesOnNextPage,
  //       previousNodesOnPage
  //     ) {
  //       if (
  //         currentNode.id === 'NoBreak' &&
  //         previousNodesOnPage.length != 1 &&
  //         currentNode.pageNumbers.length != 1
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     },
  //     pageSize: 'A4',
  //     pageMargins: [40, 150, 40, 70],
  //     styles: {
  //       header: {
  //         fontSize: 16,
  //         bold: true,
  //         alignment: 'center',
  //         margin: [0, 20, 0, 0],
  //       },
  //       subheader: {
  //         fontSize: 15,
  //         bold: true,
  //       },
  //       quote: {
  //         italics: true,
  //       },
  //       small: {
  //         fontSize: 8,
  //       },
  //       footersmall: {
  //         fontSize: 6,
  //       },
  //       tableExample: {
  //         margin: [-5, 30, 0, 15],
  //       },
  //       tableHeader: {
  //         bold: true,
  //         fontSize: 8,
  //         margin: [0, 10, 5, 10],
  //       },
  //       tableHeader2: {
  //         bold: true,
  //         fontSize: 8,
  //         alignment: 'center',
  //         margin: [0, 10, 0, 10],
  //       },
  //       tableCell: {
  //         fontSize: 8,
  //         alignment: 'right',
  //         margin: [0, 5, 5, 5],
  //       },
  //     },
  //     defaultStyle: {
  //       columnGap: 20,
  //       fontSize: 10.5,
  //     },
  //   };
  //   console.log(docDefinition);
  //
  // pdfMake.fonts = {
  //   TimesNewRoman: {
  //     normal: 'TimesNewRoman.ttf',
  //     bold: 'TimesNewRoman.ttf',
  //     italics: 'TimesNewRoman.ttf',
  //     bolditalics: 'TimesNewRoman.ttf',
  //   },
  // };
  // pdfMake.createPdf(docDefinition).download();

  //   /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
  //   //pdfMake.createPdf(docDefinition).print();
  // }
  async MeghatalmazottVedoKirendeleseNyilatkozatNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.MeghatalmazottVedoKirendeleseNyilatkozatNyomtatasByNaploIds(
        {
          naplobejegyzesIds,
        }
      );
    } else if (iktatasIds != null) {
      model = await apiService.MeghatalmazottVedoKirendeleseNyilatkozatokNyomtatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          return {
            id:
              (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
              (naplobejegyzesIds && naplobejegyzesIds.length > 1 && index >= 1)
                ? 'NoBreak'
                : '',
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'NYILATKOZAT',
                alignment: 'center',
                fontSize: 20,
                margin: [0, 15, 0, 10],
              },
              {
                text: 'V??d?? meghatalmaz??s??hoz',
                alignment: 'center',
                fontSize: 16,
                margin: [0, 5, 0, 100],
              },
              {
                text: 'Alul??rott ' + item.Nev + ' nytsz.: ' + item.FogvAzon,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'a 14/2014. (XII.17.) IM. Rendelet 23.??. (1) bekezd??se alapj??n nyilatkozom, hogy a ' +
                  item.UgySzam +
                  ' sz??m?? fegyelmi ??gy, ??rtes??t?? lapj??nak V. pontj??ban megjel??lt ??gyv??deim k??z??l:',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'V??d?? neve: ' + item.VedoNeve,
                margin: [0, 0, 0, 10],
              },
              {
                text: 'V??d?? c??me: ' + item.VedoCime,
                margin: [0, 0, 0, 10],
              },
              {
                text: 'V??d?? el??rhet??s??ge (tel.:/FAX): ' + item.VedoElerhetosege,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  item.UrAsszony +
                  ' jel??l??m meg vezet?? v??d??k??nt, hogy a fegyelmi elj??r??s sor??n ??gyemben k??pviseljen.',
                margin: [0, 0, 0, 50],
              },
              {
                text:
                  item.Varos +
                  ', ' +
                  item.Ev +
                  '. ' +
                  item.Honap +
                  '. ' +
                  item.Nap +
                  '. ',
                margin: [0, 0, 0, 50],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [60, '*', 150],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 150,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: 'Elj??r??s al?? vont al????r??sa',
                        border: [false, false, false, false],
                        margin: [15, 0, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          previousNodesOnPage.length != 1 &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  // async MeghatalmazottVedoKirendeleseNyomtatas({
  //   naplobejegyzesIds,
  //   iktatasIds,
  // }) {
  //   if (pdfMake.vfs == undefined) {
  //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //   }

  //   var model;

  //   if (naplobejegyzesIds != null) {
  //     model = await apiService.MeghatalmazottVedoKirendeleseNyomtatasByNaploIds(
  //       {
  //         naplobejegyzesIds,
  //       }
  //     );
  //   } else if (iktatasIds != null) {
  //     model = await apiService.MeghatalmazottVedoKirendeleseNyomtatasByIktatasIds(
  //       {
  //         iktatasIds,
  //       }
  //     );
  //   } else return null;

  //   var docDefinition = {
  //     header: function(currentPage, pageCount, pageSize) {
  //       return [
  //         [
  //           model.map(function(item, index) {
  //             return {
  //               margin: [40, 20, 40, 20],
  //               stack: [
  //                 {
  //                   image:
  //                     'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
  //                   alignment: 'center',
  //                   width: 30,
  //                   height: 55,
  //                   opacity: 0.5,
  //                   margin: [0, 0, 0, 10],
  //                 },
  //                 {
  //                   text: item.IntezetNev,
  //                   alignment: 'center',
  //                   fontSize: 12,
  //                   opacity: 0.5,
  //                   margin: [0, 0, 0, 10],
  //                 },
  //                 {
  //                   text: item.Iktatoszam,
  //                   alignment: 'right',
  //                   fontSize: 10,
  //                 },
  //               ],
  //             };
  //           }),
  //         ],
  //       ];
  //     },

  //     footer: function(currentPage, pageCount) {
  //       return {
  //         margin: [40, 20, 40, 20],
  //         text: pageCount >= 2 ? currentPage + '. oldal' : '',
  //         opacity: 0.5,
  //         margin: [0, 10, 0, 10],
  //         alignment: 'center',
  //         fontSize: 10,
  //       };
  //     },
  //     content: [
  //       model.map(function(item, index) {
  //         return {
  //           id:
  //             (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
  //             (naplobejegyzesIds && naplobejegyzesIds.length > 1 && index >= 1)
  //               ? 'NoBreak'
  //               : '',
  //           stack: [
  //             {
  //               margin: [-5, 0, 0, 20],
  //               table: {
  //                 widths: ['*', '200'],
  //                 body: [
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'T??rgy:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: '??.i.:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'Tel.:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                   [
  //                     {
  //                       text: '',
  //                       border: [false, false, false, false],
  //                     },
  //                     {
  //                       text: 'E-mail:',
  //                       border: [false, false, false, false],
  //                       bold: true,
  //                     },
  //                   ],
  //                 ],
  //               },
  //             },
  //             {
  //               text: item.VedoNeve,
  //               bold: true,
  //             },
  //             {
  //               text: '??gyv??d',
  //               margin: [0, 0, 0, 20],
  //               bold: true,
  //             },
  //             {
  //               text: item.VedoCime,
  //               margin: [0, 0, 0, 20],
  //               bold: true,
  //               decoration: 'underline',
  //             },
  //             {
  //               text: 'Tisztelt ' + item.UrAsszony + '!',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'T??j??koztatom, hogy ' +
  //                 item.Nev +
  //                 ' (sz??l.: ' +
  //                 item.SzulDatum +
  //                 ', an.: ' +
  //                 item.AnyjaNeve +
  //                 ') ' +
  //                 item.FogvAzon +
  //                 ' fogvatartott ellen int??zet??nkben ' +
  //                 item.UgySzam +
  //                 ' sz??mon fegyelmi elj??r??s indult, mivel megs??rtette a fogvatart??s rendj??re vonatkoz?? szab??lyokat.\nA fenti sz??m?? ??gyben a fegyelmi t??rgyal??s v??rhat?? id??pontja: ' +
  //                 item.ElsofokuTargyalasIdopont +
  //                 '\nHelye: ' +
  //                 item.IntezetCime,
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'A 14/2014. (XII.17.) IM. Rendelet 23.??. (2) bekezd??se szerint a fogvatartott ??ltal megb??zott jogi k??pvisel?? a fegyelmi vizsg??lat sor??n v??gzett elj??r??si cselekm??nyekn??l, illetve a fegyelmi t??rgyal??son jelen lehet.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'Nevezett v??d??jek??nt ??nt jel??lte meg, err??l ??r??sban is nyilatkozott, melyet mell??kelten csatolok.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 'Felh??vom figyelm??t, hogy v??d?? t??volmarad??sa nem akad??lya a fegyelmi elj??r??s lefolytat??s??nak.',
  //               margin: [0, 0, 0, 10],
  //             },
  //             {
  //               text:
  //                 '...................................... az elektronikus d??tumb??lyegz?? alapj??n.',
  //               margin: [0, 0, 0, 30],
  //               bold: true,
  //             },
  //             {
  //               text: 'Tisztelettel:',
  //               margin: [0, 0, 100, 20],
  //               bold: true,
  //               alignment: 'right',
  //             },
  //             {
  //               text: item.NyomtatoSzemely,
  //               margin: [0, 0, 0, 0],
  //               bold: true,
  //               alignment: 'right',
  //             },
  //           ],
  //         };
  //       }),
  //     ],
  //     pageBreakBefore: function(
  //       currentNode,
  //       followingNodesOnPage,
  //       nodesOnNextPage,
  //       previousNodesOnPage
  //     ) {
  //       if (
  //         currentNode.id === 'NoBreak' &&
  //         previousNodesOnPage.length != 1 &&
  //         currentNode.pageNumbers.length != 1
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     },
  //     pageSize: 'A4',
  //     pageMargins: [40, 150, 40, 70],
  //     styles: {
  //       header: {
  //         fontSize: 16,
  //         bold: true,
  //         alignment: 'center',
  //         margin: [0, 20, 0, 0],
  //       },
  //       subheader: {
  //         fontSize: 15,
  //         bold: true,
  //       },
  //       quote: {
  //         italics: true,
  //       },
  //       small: {
  //         fontSize: 8,
  //       },
  //       footersmall: {
  //         fontSize: 6,
  //       },
  //       tableExample: {
  //         margin: [-5, 30, 0, 15],
  //       },
  //       tableHeader: {
  //         bold: true,
  //         fontSize: 8,
  //         margin: [0, 10, 5, 10],
  //       },
  //       tableHeader2: {
  //         bold: true,
  //         fontSize: 8,
  //         alignment: 'center',
  //         margin: [0, 10, 0, 10],
  //       },
  //       tableCell: {
  //         fontSize: 8,
  //         alignment: 'right',
  //         margin: [0, 5, 5, 5],
  //       },
  //     },
  //     defaultStyle: {
  //       columnGap: 20,
  //       fontSize: 10.5,
  //     },
  //   };
  //   console.log(docDefinition);
  //
  // pdfMake.fonts = {
  //   TimesNewRoman: {
  //     normal: 'TimesNewRoman.ttf',
  //     bold: 'TimesNewRoman.ttf',
  //     italics: 'TimesNewRoman.ttf',
  //     bolditalics: 'TimesNewRoman.ttf',
  //   },
  // };
  // pdfMake.createPdf(docDefinition).download();

  //   /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
  //   //pdfMake.createPdf(docDefinition).print();
  // }
  async KioktatasReintegraciosJogkorbenNyomtatas({
    fegyelmiUgyId,
    iktatasId,
    naploId,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model = await apiService.KioktatasReintegraciosJogkorbenNyomtatas({
      fegyelmiUgyId: fegyelmiUgyId,
      iktatasId: iktatasId,
      naploId: naploId,
      Telefonszam: '12345',
      Fax: '678910',
      Iranyitoszam: '0000',
    });

    var foglalkozas = htmlToPdfMake(
      `
    <div style="margin-left: 20px; text-align: justify;">` +
        model.FoglalkozasText +
        `</div>
`
    );

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAWAAwAwERAAIRAQMRAf/EAJQAAAICAwEAAAAAAAAAAAAAAAgJBgoABQcDAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAAHAQAABgIABgMBAAAAAAECAwQFBgcIABESExQJFRchIkMWGApCIyQyEQACAQIEAwQIBAUFAAAAAAABAhEhAwAxEgRBUWFxIjIT8IGRobFCIwXB0ZIU4fFSYjNyotJDNP/aAAwDAQACEQMRAD8Av8eJiYzxMTFZH7WfsC3XkXqydn8C19/bYumc/wB8T1rIZagalLZ7iK0dnp7LB6VLyNJqdwrj52lJXuuzL15JskyRzJJJBZ4Rm5WSJ0dtZsXduTuAVQOIcGskgRGZoGgSKmeuAYwYGcenpyw8fix1fpHm3OpjR9tpfQ8/PNZSdZ6xn0jGztUsVZlph89qqcdZoiErDC1mjIBZBsrJEi475aqZjC3THz8+exDMSBHMTMHiOlZpwywdeOCn8ViYzxMTGeJiYUt1v9l0nUdXJxpwplf+XvdEs1WcytOZyZ4bEucq6mqVo70XpvU0iKRtSiYx0qBEYFmdaelHIA2TSROomYxIqt3n1CzMFlANYNBNJFJBIzBwJPBY1YTl3Fg+2c8fC3Dv7s2/3E92xqZDYlub4NDOE84qxOjOYKRoCVBsaaDacukZO5/rs3DN4ywNCQEe1dicGaavrdeMu53Vy3eSxtEUJcuWwdUEkFtJJMgCBUkVGnxQIK2BAUtHeevsJz7QI9mWNLzVmR7nvjrBOKes+vsIGo6a2r8s60zTaDsbaBd2bCNH3S05+3Qxi8SGOzFJvsk3g5ly7iX/AOajX4GRKu3FM7bx0RcPkL5qhrbA6TQNQgTME0FADSCTGDAkQJU/D1e/DQ8x746L4x1CA5o+0aoIs6xaBdNcP7loQLWDJr2hGoGcr1zYTNYuKe0a6xbIhlFHi0c0SVZpGcuEgQQcyRwZRdP0VINKZnqeYHGtI4yMWshRrNcPCYP2MoxZycY8aSMbItG7+PkGDhF4xfsXiJHDR4zdtzqN3TR03UKdNQhjEOQwGKIgID4TlQ54LAE/Z122++vTkG79RMKBHaUrUbHQK6atSlp/tJp5X24RNOSkxfEjJd1ILRrqYTUTj26IOH5/JFM5DHAwGi62g0EGvYJ7a5U54mK8X1r6hpXMmOyv2XW+2Pn3PFsscpkXbdDctbAjrEx0/pWnsn9v2uAiXiRCxgY3tt+TyyBpCqR3ZYsjyQ+UL5woi5bubxa41guGFoxAA0rAkAaZB1qyszTyBkqcLVqTpPXn/HswZvCeAM9Zv+Kcpdtwkxomp8I4hotvv9A02ySWh162WTpTYoW75vZLd+cMuw1Cq1+k1RoWLSlE3TNnZ2b8CJ/IikjppKPqO4t6ls91Qad4wdRjMGa8M4ypi1LairVETPby4iBnPPhXBGdq4JzpybqfP++5BnpsitN8ltfwdek8+x8fnzbXL9qHPukQGPkRqldYtq+51xhcUkY6BmitSvWjeTc++qdqmAJEu4ZIsFPMU94A/LBBYjjBEyMjnngWYLcCjxMCfZA/HC5rHD9A6xylD89W+2yrGu/UXRm9h+wiJmL1bT3PctBjIy6zZIXMLa4EZGCi81zGBbaVTLBMHfg8UlIFoZEot3joloj3botoxRLhKgwJgmADpNJ8DxBA1EZjFtXxLJFfXEZcaE8cGj/r29z3jqTna4YJd6iCD7ihnn2St9RWeDFSOrwswW5O6LYnuaOomNkKCm9zKDhJBsHqUaP20iRVsRFECphd615UAZyQRAADDTIEEyK5zSIrEklNMqRjo339Z+w07jvOaZNXCKo8BLdK58pLWC1Q87ZaK3WhKlodnrLS21itgWYnTTVzgY2OhyJKJi3sD1i4AFDokSPVpEuEozBSVMTEkyPDObASYAYkAgCsiGZEc8V7Z3jm+s3+i5q81vSKtSRulK0a8V2159qshE4vc57Rue5sOgOgI+LXa1+4LT8/oEjYIl/F/EftpGrg6duCgi4VR51uwLtk7kaV3CwkMV1MmkkxC91EgI0jVWhymld3E6YOdZ8XaBn16Y6Qny7pMUwntiL1XrK12f1uz1JfoRqXQarS53MaR0hQM3gNlsb5/Jv9RPz1TWupTEs/agq4STeMXLlu8RZKquiaBs9nctpaYk7fUpYAq0NpIKrC1JKgKTJGoahIIxRu3LbKIAdgxOfCPbVuQy642dh4+0CXmSMnnZ927Tk8nvkLP5hrmEykxOU1zfpTDehrq2z2mqyt1vrSt9BQ/wCu2KXyYSYk/KFsiYKJNXCgJqMtfbdqLNxrf0ka3JWQREqJJKglIYiKE5kngZd9QZ4McePX4DHDbPzFoqFO1Ofb9aSejs9Pissba/p0Hne9Fzm3zFkxboN+4wbWoh5LvrJdr+3UyaAq0Yd04+O2b3Jq3dNSqC3br5bO22xv2VuMoUXNIMqAqg0aSImJMGkjxGcFLhSSAK9azxyzw2b6Q8AdYt2r1yopabN897lcFC3DOpOBnK1N1Z7UtTsVBz9ztJpUpGN0u7rPqGgrVX7BNFpHV106akAwHAS6bN5n2ih7RlrjHzCUPggaQFggMSWqDMCs5ptksNTDSQMu2pPtp6jjoH3B0uY3HXDUCz6jqUHnuZxeZ3es0WnTFWj6ktdXWH95XYbRY4edp9kTscqzmMjhRbfJMKDZJBT20yqnBUh27du9Zui5WGiOEHyxEcR3jiI7G444Kwj9M/HCzIfiKgO7oygVNG2csaGsS1OBJJ7kRFyQ6HS36nT9tf8ATQmSff2kYSGVKAet2b3RD/j4w7nY7K3dCrbt6SiE0GZVCficaldzBk8fx/LEEovFWdXGvQ9nnbnpzuZkaTmrp299jFxVUTvOPfXBeLDH+4ti6ywRLue6jtBithOKQIGYJmA3xCmUttrtUFpVtrpfUTSkqzgEDKYX44W9x1dQPmMf7Z+ONDGcKY9D59JOYacucMSr5LfdIgYyJgMEiYaIt8Dz303pbN+wiIzEG7NmU1my6LBUUipqqtRcpGP/AOgwl02tpZvbV9xfWb+hpNagXiigzUgKBQ0mowPmt5vljwxyHp+PPE+muELOwmv7mN+zUcNHqTaudGWjK6nhzyyvFM7tm8Fi1T0AnPib9kkvDUOGjlVhfmUUeNXL0UipOCELhOx2nlT5duShNFHi0kiZERIBOdMq4ZruawpNJ9v5YInhjKVOf+0ec7TnWqaui50Jg0pN9ipCRoRK9bqq9iuZLMav2CKr+d1757SPntTlXTI5lCrsjqEBBQpBXI41C1bsbO1dtIqPcvKDHEFLhMdpQdYHCpxnt3nuhGb5gZ/ST8RhnXTKfACv2H6wTu8cTCMDlvng2cfudZFFn801z6XJaRghdnIzM4/CCIO/PzUBmKn9EVvGj7efuA3t39j5kQs6edNPrzj+WED/ANL6v8fumFj3TjxK3/19RceZFeJxd/IHyEj+N+X8z8oUDeXpce/8384QPP8AqfNAP6oB46mr7wFzuaSY6TGXbHDOOmNH0+mPJu3/ANe8qZPiK8QFQ9tuCXxH8SCIoka1wzIEvYce2KJWCcMKHl/L7BY/0fyA08F5n3uAdV7TEipiK1HTOo69cSLfTCoK2tkJMvyyHuO9oczYhcc+rVIk9gZQMbY2lfzy5czdfwqrZg1tEPNRrBrJ1t0YiT9w3ODJMAVEwCX1eM2zS7etOCuu5DSKVjcsCKHnnHXI5Lot7l3R+Ppyw2mzVfkBfgKv2ST77/F5ot1RfNWa9UhXqUQJbZrldNNTuNPCmrVdSvIgk+tEzH/CLHlWafF9wRAyRjeMgsze8nQZFNMwfDGfrnDw3zE1n07cAPzY5qDjqzmQmf68beqLG6tcYKoa2aEja8NwrlffciQcQ6GMiI6IjQOyYsCNRcIt0SPPZ98AN7nma99aazt7NtlKEbhKTP8A1XjzMdnDphShVdFXwjVH6GwU/wBiv7GsXXOgUfL8E2zbZwmO43bJYcpr9OlI2vRMnlv2AZLFlnX9tvVNKg+kbZpDAEkUSuB+GRysYSgj6TrsX7a+bYM+YWBHZ9P/AIn3YG2R59xfmJB9QUD8RgZoir9QMrm2nl+DeyvgJavJXM4kpmNncfhXXS37XRMCP7zDzejU/wCYUvP+Dv8A6vP/AJeB3IF26GTwhVHrCqD8DjUpgV6/jiI57nnV1ZqsLCynBnYYPGFUy6GXBtUcaXRB7UMf+uKjTAJq/vEnrRLO8s2oET+Qe4gmxU8g+WBUxdQ3lQPAGn1s5EfqGFuCzIRkDJ/THxx64dk2xdJRM7X84u+C5JHq801FOYZ9AntLS7pq77mXVePnSQhqnNtI1spVY+2HcrkOu596Qbi39z2xFUdNp0tfbrdxqi6bq+LSRovsZEhuzp7hBb+qW4wOHMT05/xw1ixcd67K8lQtcS2LnlDTEut9R6beWtwS3Diqn7PsetOl6fHPiThbMZWJZ6UCSbpRcfecNDAKZSn8i4zGhajSKZ9CKHn6o6HDCCXniDOWAEpOSani3cvJFR0m/wCCX8rxNpKw73FXVrVcMfxE7zbnblKyJWSSkU003iVDRcNjImKPuLLpmAQTIJiukfs7KLEDcqM5P+O7HAcM+ZqIwhbYtNbStJFf9DYLXrTo7buWu49X0DKMzzDSo20894PT5trfdBs1EfxUjWYztDYWq0X+EpFvaybGRgc7kWyhlDIKIu1G/kUyZjmKj9vuXuvf2+gAEAlqiO5kAQZlhnQ+o4QFY33dCAwMVE5hTzHLEWYfab2k/sKNdJy/zaRZa4OqUDoehNBMiWUaa4GPqL+2GKAoLI0x5vAN/wDXxQ9Ih7n8PEvLv7LaddgsVU+F/mAOerqBhwG5ORX2dv8Ad0xpav8AbV2RaoljMs+WudGrSQiafNIlddB38Vis7nRuVb6wKoRLFjlBw1jetIVBUoCIe/GPfIRKKImojfrpl7HfmO6/AsDPe/t9/Q4FjfUgSskwKdJ/q5YT7o8fiqecRD/fMip1wtsnzJcoFGxEycmqxVSmD8x9bIxzD+5F6u+m4WEQ0ebYKMXCqKRUnQFeKAiKKiqe/b6b20Fll1XWD6Qc5/cMSRJoIAr2cwMGGK34kadM0y/ngxLpesbPytB4fIYBOMue0/s06XcV3QJDKax/iPJwraa6Ks0Cxg3iTleJQrJlZFqhEv1YlCBdTSIsmjpR4mVMU27Ra35YWCtuiwZJNvuwBlmKmAMzInDGuKG1/KDnn6dmOXcOR2LI9V81vsgymOzkhLVEws3INcmRyxeyKxkDx1/EiKkLCS0vHMZZZ8omdykUPddKLEAQces97i2E2tkMqi8NwgMRP+O8anjXiJB5zkm3rBtq86q+3Q2HBda8kWPqHt2bpUV0PaMMZv8Amii3pFvX83zu7KWl9ASnROMWFYr+8xr9RgnXqnu5iGRblEouJRBY4gZJMDNtFrSsRBRzUGeS9n9I44MKockGrQT6hFMR1t9Peps5hOcbfYHoxXyVqXuJDKc8c/qJhNOtEDUlze3+AIQWw2/zUKn5eRW4+z/EoeYg/wBQd+rwBPGAAAIypA4TTDQSMssauA+mLQ63GM4eM+wDSyMWEbXIhuVbn7AFlvx9TqXP1KhE1Vj17/sXSg+Y6kVVT0h7qiDs4gAuz+myVYKCBKAwa8SSePHUfdgSAxBOYMj2R8MVrNG0XRNTqON5yfE9LtUFCaxSIW82qB2mPy6L1ehZvVuiMh0h1KWDG5s+g0aD0e030zFlDwTeUk15dgpALsSPXLFi+fYazb2wtNcNu9cLBCqwA3nG6oliNNIGo1jvjUCcKZS9wgTkM+lDE+7lgoC7FXpnHIzDHvG0G2oMFr1m6FbJm+wHpFUyeh3bOZhedsRrNG5u5aS2bvG4uHiLZu2WhU4RY9rjW6pWE9+Iwnztrd/b3XuWrhJANJMQCJKiGAyWjalikqWrTKFNRkESe7lwOUR1joTiU/WJH61/ktzfTZ+k/go+I6S2JRo3t22y2p6Qem2dpHa3CfhZaXj5qauFaxSv4Wxrcy5npdtOgnOwz1NspGumzhfduPJezbsAtpTS4MRqYBxzqDrYmBQ+uDC6SC0yD8QRw7ezFgf7ZuWbxt2Owmv4yz02Y2rndpoU1A0jJNOt2S3DVqbcqW/grPQWVlpU7XJR9Kxc2hD2mGj1nXxH03XGzY5P/R6i1YYBtDsBbaJmqyMi3TgTwBJrlgyDmJnFfKsX/nCatUcYexdESgHOrS0GdpM977rXXbatN+ohpRWEzETe1R0zCOmVDTFqqm8SQdIIgY6gFOAnCbtLtq75SINICAkCe8VUkSOJknFppIBPXOnPh7MRjO9AwuSqcE6sPZ18PKuqrlT10Z79hOwNXKktM459as7ZvUiO5I+lVa26loZlk/SAJLupFLyL8ICNxc3VWzcVBoYMSdOcNc0+4DtgYB5DqFyJr2aZ+OOP44lW3OZtIyFWZPoL87pjeGfmmI2wxk3Et7nNxSSi87PpRbCQfmrCsc2cO5s/tSUYs1Zz71zCua9bYRjKLtg2t2FbbsYaAQUbUY1QTEmSrrk+qAGD2yAa3cdrQMXkryMcCOfKcuBx0Zs0Vbyftv13CRwUWdoSny7A1kouRbWf3XL0qi5465pPy3tgUz1BQWdkQsrUFvNhoLf3r2kIQr7L7iGvWyv07mcgDwmMrirVWBKlRIm2ZS0gNqalxTPStJHQ8VPHLhhsX0v4ZarxrNq69esxQxSDosxmOMvlGzJtDaVcZmdj1rdplEZw6TCBNSKPEQ7mvwkpHoGhJQZ2XXg0oiMcfhGTLq3LSiy76jOogioPymZJDEE6wanu6paSTiW1EyOH8PhPLFkzwjBYALWPr5yi06FZdsyNtUMb2e7O2j/RJpXKaFo+f668YolbtnmsZxaY4iM5NEakBH8zFP4SfMkAEO+UTKUgSWgLJ0g0E0ExMdsDnBrE5iVrMmcQM1auOaiVPXfrwxDVYdqUTu9A5bgs5mHRiHcGIRZfG9Tj6hbWZiFXFRVGMl7CqACf0esQ8jAGud43BlJBEmQKgZTqOXKRnXElsopivLhPB3cduiIWAo/KtsqcWeZnXzqd2yYb4NVq5FSlxtU1ENGdfnT3XSmMvWmMsugVCOg3UQgs6Iux9MZIzsG502boF1muFsiCI1aqCawqkNIma901Loj4y3duLtxbiSlxTmPTiMxkRQ1FG34R9J0E4eRtl7Y0qN28GpWbgcIziCkKLgBpBnDEgUjWz8jIyN91Bo1iwFoi1fu2EWeLTaRztk7ZxcWmzjXjoNpR9KCK1MTPKhHCMswZJnVpkkt6en5YevGxsdDRzCIiGDKKiYpk1jYuLjWqDGOjY5igRsyYMGTVNJszZM2yRU0kkylImQoFKAAAB4Tgsf/Z',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        {
          text: 'Kioktat??s reintegr??ci??s tiszti jogk??rben',
          alignment: 'center',
          fontSize: 14,
          margin: [0, 30, 0, 30],
        },
        {
          text: 'A foglalkoz??son r??szt vett fogvatartott adatai:',
          margin: [0, 0, 0, 10],
        },
        {
          margin: [-5, 0, 0, 10],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'N??v',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.Nev,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
              [
                {
                  text: 'Azonos??t??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.FogvAzon,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
              [
                {
                  text: 'Sz??let??si id??',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.SzulDatum,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
              [
                {
                  text: 'Anyja neve',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.AnyjaNeve,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
              [
                {
                  text: 'Elhelyez??se',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.Elhelyezes,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
              [
                {
                  text: 'V??grehajt??si fokozata',
                  border: [false, false, false, false],
                },
                {
                  text: ': ' + model.VegrehajtasFoka,
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
            ],
          },
        },
        {
          margin: [-5, 0, 0, 30],
          table: {
            widths: [150, '*'],
            body: [
              [
                {
                  text: 'A foglalkoz??s t??m??ja',
                  border: [false, false, false, false],
                },
                {
                  text: ': Kioktat??s (fegyelmi)',
                  border: [false, false, false, false],
                  alignment: 'left',
                },
              ],
            ],
          },
        },
        {
          text: 'Foglalkoz??s le??r??sa:',
          margin: [0, 0, 0, 10],
        },
        foglalkozas,
        {
          text:
            model.Hely +
            ', ' +
            model.Ev +
            '. ' +
            model.Honap +
            '. ' +
            model.Nap +
            '.',
          margin: [0, 0, 0, 40],
        },
        {
          margin: [0, 0, 0, 40],
          table: {
            widths: ['*', '*', '150'],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 150,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  text: model.FoglalkozastTartotta,
                  border: [false, false, false, false],
                  alignment: 'center',
                  uppercase: 'true',
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  text: 'Foglalkoz??st tartotta',
                  border: [false, false, false, false],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          margin: [0, 0, 0, 40],
          table: {
            widths: ['*', '*', '150'],
            body: [
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: 0,
                      y1: 12,
                      x2: 150,
                      y2: 12,
                      lineWidth: 1,
                    },
                  ],
                  border: [false, false, false, false],
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  text: model.Nev,
                  border: [false, false, false, false],
                  alignment: 'center',
                  uppercase: 'true',
                },
              ],
              [
                {
                  text: '',
                  border: [false, false, false, false],
                },
                {
                  text: '',
                  border: [false, false, false, false],
                  alignment: '',
                },
                {
                  text: 'R??sztvev??',
                  border: [false, false, false, false],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async VedoTelefonosTajekoztatasaNyomtatas({ naplobejegyzesIds, iktatasIds }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.VedoTelefonosTajekoztatasaNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.VedoTelefonosTajekoztatasaNyomtatasByIktatasIds({
        iktatasIds,
      });
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var tajekoztatoTartalma = htmlToPdfMake(
            '<div style="margin-left: 20px;">' +
              item.TajekoztatoTartalma +
              '</div>'
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'Feljegyz??s',
                alignment: 'center',
                margin: [0, 30, 0, 0],
                bold: 'true',
              },
              {
                text:
                  'v??d?? meghatalmaz??sa, kirendel??se eset??n t??rt??n?? telefonos t??j??koztat??sr??l,',
                margin: [0, 0, 0, 0],
                alignment: 'center',
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben.',
                margin: [0, 0, 0, 10],
                alignment: 'center',
                bold: 'true',
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben.',
                margin: [0, 0, 0, 30],
                alignment: 'center',
              },
              {
                text:
                  'T??j??koztat??st ny??jt?? neve: ' + item.TajekoztatoSzemelyNev,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'T??j??koztatott neve, telefonsz??ma: ' +
                  item.TajekoztatottSzemelyNev +
                  ', ' +
                  item.TajekoztatottSzemelyTel,
                margin: [0, 0, 0, 10],
              },
              {
                text: 'T??j??koztat??s id??pontja: ' + item.TajekoztatoIdopontja,
                margin: [0, 0, 0, 10],
              },
              {
                text: 'T??j??koztat??s tartalma: ',
                margin: [0, 0, 0, 10],
              },
              tajekoztatoTartalma,
              {
                text: item.SikertelenText,
                margin: [0, 0, 10, 50],
                alignment: 'justify',
              },
              {
                margin: [0, 0, 0, 40],
                table: {
                  widths: ['*', '*', '200'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                            dash: { length: 3, space: 1 },
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        text: item.NyomtatoSzemely,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async FegyelmiTargyalasiJegyzokonyvMasodfokNyomtatas({
    naplobejegyzesIds,
    iktatasIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }
    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.MasodfokuTargyalasiJegyzokonyvNyomtatatasByNaploIds(
        {
          naplobejegyzesIds,
        }
      );
    } else if (iktatasIds != null) {
      model = await apiService.MasodfokuTargyalasiJegyzokonyvNyomtatatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var jegyzokonyvText = htmlToPdfMake(
            '<div style="margin-left: 20px; text-align: justify;">' +
              item.JegyzokonyvText +
              '</div>'
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'II. FOK?? FEGYELMI T??RGYAL??SI JEGYZ??K??NYV',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'K??sz??lt a ' +
                  item.IntezetNev +
                  ' hivatalos helyis??g??ben.\n ' +
                  item.Ev +
                  ' ??v ' +
                  item.Honap +
                  '. h??nap ' +
                  item.Nap +
                  '. napon ' +
                  item.Ora +
                  ':' +
                  item.Perc +
                  ' ??rakor.',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Jelen vannak:',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                ul: [
                  'Int??zet parancsnok: ' + item.IntezetParancsnok,
                  'Jegyz??k??nyvvezet??: ' + item.JegyzokonyvVezeto,
                  'Egy??b jelenl??v??: ' + item.Egyeb,
                ],
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Az elj??r??s al?? vont adatai:',
                decoration: 'underline',
              },
              {
                text: 'N??v: ' + item.Fogvatartott + ', ' + item.FogvAzon,
              },
              {
                text:
                  'Sz??let??si helye, ideje: ' +
                  item.FogvatartottSzulHelye +
                  ', ' +
                  item.FogvatartottSzulIdeje,
              },
              {
                text: 'Anyja neve: ' + item.FogvatartottAnyja,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A fegyelmi jogk??r gyakorl??ja meg??llap??tja, hogy a fegyelmi t??rgyal??s megtart??s??nak nincs akad??lya. A fegyelmi jogk??r gyakorl??ja a t??rgyal??st megkezdi ??s ismerteti a fegyelmi elj??r??s alapj??ul szolg??l?? cselekm??nyt.',
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A jegyz??k??nyv felv??tele el??tt felh??vja a fogvatartott figyelm??t a hamis v??d t??rv??nyes k??vetkezm??nyeire, r??szletesen ismerteti a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:',
              },
              {
                text: '268. ?? (1) Aki',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,',
                margin: [10, 0, 0, 0],
              },
              {
                text:
                  'b) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
                margin: [10, 0, 0, 0],
              },
              {
                text:
                  'T??j??koztatom, hogy az olyan k??rd??sekben, amelyben saj??t mag??t vagy k??zvetlen hozz??tartoz??j??t b??ncselekm??ny, szab??lys??rt??s vagy fegyelems??rt??s elk??vet??s??vel v??doln?? a vallom??st??telt megtagadhatja, de a v??dekez??s ezen m??dj??r??l ezzel lemond.',
              },
              {
                text:
                  'T??j??koztatom tov??bb??, hogy a fegyelmi elj??r??s sor??n felmer??l?? k??lts??gek terh??t viselnie kell, amennyiben a fegyelmi jogk??r gyakorl??ja a fegyelmi cselekm??ny elk??vet??s??ben a felel??ss??g??t meg??llap??tja.',
              },
              {
                text:
                  'Felh??vja figyelm??t arra, hogy a vallom??st??tel megtagad??sa nem akad??lya az elj??r??s lefolytat??s??nak ??s a fegyelmi felel??ss??g meg??llap??t??s??nak.',
              },
              {
                text:
                  'Figyelmeztetem, hogy a jegyz??k??nyvbe foglaltak felhaszn??lhat??k ??n ellen.',
              },
              {
                text:
                  'A b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet 15. ??. (1) bekezd??se alapj??n t??j??koztatom a fogvatartottat a fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaira, azaz:',
              },
              {
                ul: [
                  'v??d??t b??zhat meg, illetve k??rheti kirendel??s??t,',
                  'a 14/2014. (XII.17.) IM rendelet 36. ??.-ban foglaltak fenn??ll??sa eset??n k??zvet??t??i elj??r??s lefolytat??s??t kezdem??nyezheti,',
                  'anyanyelv??t, vagy az ??n ??ltal ismert nyelvet haszn??lhatja,',
                  'v??dekez??s??t sz??ban vagy ??r??sban adhatja el??,',
                  'bizony??t??si ind??tv??nyt tehet,',
                  'a vizsg??lat befejez??se ut??n az elj??r??si iratait tanulm??nyozhatja, azokr??l m??solatot k??rhet,',
                  'panasszal ??lhet, illetve b??r??s??gi fel??lvizsg??lati k??relmet terjeszthet el?? a fegyelmi hat??rozattal szemben.',
                ],
                margin: [30, 0, 0, 0],
              },
              {
                text:
                  'Meg??rtettem a fegyelmi ??gy kivizsg??l??j??nak figyelmeztet??s??t a hamis v??d t??rv??nyes k??vetkezm??nyeire.',
              },
              {
                text:
                  'Kijelentem, hogy a fegyelmi elj??r??ssal kapcsolatos jogaimr??l ??s k??telezetts??geimr??l kioktattak.',
                margin: [0, 0, 0, 30],
              },
              {
                pageBreak: 'after',
                margin: [0, 0, 0, 40],
                table: {
                  widths: [200, '*', 200],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Fegyelmi jogk??r gyakorl??ja',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        text: item.Fogvatartott + ', ' + item.FogvAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'A fegyelmi jogk??r gyakorl??ja meg??llap??tja, hogy a fegyelmi t??rgyal??s megtart??s??nak nincs akad??lya. A fegyelmi jogk??r gyakorl??ja a az elj??r??s al?? vont fogvatartottat kioktatja a jogair??l ??s k??telezetts??geir??l, felh??vja a figyelm??t a hamis v??d t??rv??nyi k??vetkezm??nyeire. A fegyelmi jogk??r gyakorl??ja ismerteti az elk??vetett fegyelems??rt??st a jelenl??v??kkel.',
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'Nevezett fogvatartott az II. fok?? fegyelmi t??rgyal??son t??rt??n?? meghallgat??sa sor??n a k??vetkez??ket mondta el:',
                margin: [0, 0, 0, 10],
              },
              jegyzokonyvText,
              // {
              //   text: item.JegyzokonyvText,
              //   margin: [20, 0, 0, 50],
              // },
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 0, 20, 30],
              },
              {
                text: 'Kelt, mint fent',
                margin: [0, 0, 0, 30],
                alignment: 'center',
              },
              {
                margin: [0, 0, 0, 40],
                table: {
                  widths: [130, 200],
                  body: [
                    [
                      {
                        text: 'Elj??r??s al?? vont al????r??sa:',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        alignment: 'left',
                        margin: [10, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: item.Fogvatartott + ', ' + item.FogvAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [10, 0, 0, 0],
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'Tekintettel a fentiekre a m??sodfok?? fegyelmi hat??rozat rendelkez?? r??sz??ben le??rtak szerint hat??roztam.',
                margin: [0, 0, 0, 30],
              },
              {
                margin: [0, 0, 0, 0],
                table: {
                  widths: [200, '*', 200],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Jegyz??k??nyvvezet??',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        text: item.Fogvatartott + ', ' + item.FogvAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 30, 0, 0],
                table: {
                  widths: ['*', 200, '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Fegyelmi jogk??r gyakorl??ja',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                ? {
                    margin: [-5, 0, 0, 40],
                    table: {
                      widths: [120, '*', 180],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 180,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: item.Egyeb.split(', ')[0],
                            border: [false, false, false, false],
                            alignment: 'center',
                            margin: [0, -4, 0, 0],
                          },
                        ],
                      ],
                    },
                  }
                : null,
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async SzembesitesiJegyzokonyvNyomtatas({ naplobejegyzesIds, iktatasIds }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.SzembesitesiJegyzokonyvNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.SzembesitesiJegyzokonyvNyomtatasByIktatasIds({
        iktatasIds,
      });
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index) {
          var jegyzokonyvText = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.JegyzokonyvText +
              `</div>
              `
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAWAAwAwERAAIRAQMRAf/EAJQAAAICAwEAAAAAAAAAAAAAAAgJBgoABQcDAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAAHAQAABgIABgMBAAAAAAECAwQFBgcIABESExQJFRchIkMWGApCIyQyEQACAQIEAwQIBAUFAAAAAAABAhEhAwAxEgRBUWFxIjIT8IGRobFCIwXB0ZIU4fFSYjNyotJDNP/aAAwDAQACEQMRAD8Av8eJiYzxMTFZH7WfsC3XkXqydn8C19/bYumc/wB8T1rIZagalLZ7iK0dnp7LB6VLyNJqdwrj52lJXuuzL15JskyRzJJJBZ4Rm5WSJ0dtZsXduTuAVQOIcGskgRGZoGgSKmeuAYwYGcenpyw8fix1fpHm3OpjR9tpfQ8/PNZSdZ6xn0jGztUsVZlph89qqcdZoiErDC1mjIBZBsrJEi475aqZjC3THz8+exDMSBHMTMHiOlZpwywdeOCn8ViYzxMTGeJiYUt1v9l0nUdXJxpwplf+XvdEs1WcytOZyZ4bEucq6mqVo70XpvU0iKRtSiYx0qBEYFmdaelHIA2TSROomYxIqt3n1CzMFlANYNBNJFJBIzBwJPBY1YTl3Fg+2c8fC3Dv7s2/3E92xqZDYlub4NDOE84qxOjOYKRoCVBsaaDacukZO5/rs3DN4ywNCQEe1dicGaavrdeMu53Vy3eSxtEUJcuWwdUEkFtJJMgCBUkVGnxQIK2BAUtHeevsJz7QI9mWNLzVmR7nvjrBOKes+vsIGo6a2r8s60zTaDsbaBd2bCNH3S05+3Qxi8SGOzFJvsk3g5ly7iX/AOajX4GRKu3FM7bx0RcPkL5qhrbA6TQNQgTME0FADSCTGDAkQJU/D1e/DQ8x746L4x1CA5o+0aoIs6xaBdNcP7loQLWDJr2hGoGcr1zYTNYuKe0a6xbIhlFHi0c0SVZpGcuEgQQcyRwZRdP0VINKZnqeYHGtI4yMWshRrNcPCYP2MoxZycY8aSMbItG7+PkGDhF4xfsXiJHDR4zdtzqN3TR03UKdNQhjEOQwGKIgID4TlQ54LAE/Z122++vTkG79RMKBHaUrUbHQK6atSlp/tJp5X24RNOSkxfEjJd1ILRrqYTUTj26IOH5/JFM5DHAwGi62g0EGvYJ7a5U54mK8X1r6hpXMmOyv2XW+2Pn3PFsscpkXbdDctbAjrEx0/pWnsn9v2uAiXiRCxgY3tt+TyyBpCqR3ZYsjyQ+UL5woi5bubxa41guGFoxAA0rAkAaZB1qyszTyBkqcLVqTpPXn/HswZvCeAM9Zv+Kcpdtwkxomp8I4hotvv9A02ySWh162WTpTYoW75vZLd+cMuw1Cq1+k1RoWLSlE3TNnZ2b8CJ/IikjppKPqO4t6ls91Qad4wdRjMGa8M4ypi1LairVETPby4iBnPPhXBGdq4JzpybqfP++5BnpsitN8ltfwdek8+x8fnzbXL9qHPukQGPkRqldYtq+51xhcUkY6BmitSvWjeTc++qdqmAJEu4ZIsFPMU94A/LBBYjjBEyMjnngWYLcCjxMCfZA/HC5rHD9A6xylD89W+2yrGu/UXRm9h+wiJmL1bT3PctBjIy6zZIXMLa4EZGCi81zGBbaVTLBMHfg8UlIFoZEot3joloj3botoxRLhKgwJgmADpNJ8DxBA1EZjFtXxLJFfXEZcaE8cGj/r29z3jqTna4YJd6iCD7ihnn2St9RWeDFSOrwswW5O6LYnuaOomNkKCm9zKDhJBsHqUaP20iRVsRFECphd615UAZyQRAADDTIEEyK5zSIrEklNMqRjo339Z+w07jvOaZNXCKo8BLdK58pLWC1Q87ZaK3WhKlodnrLS21itgWYnTTVzgY2OhyJKJi3sD1i4AFDokSPVpEuEozBSVMTEkyPDObASYAYkAgCsiGZEc8V7Z3jm+s3+i5q81vSKtSRulK0a8V2159qshE4vc57Rue5sOgOgI+LXa1+4LT8/oEjYIl/F/EftpGrg6duCgi4VR51uwLtk7kaV3CwkMV1MmkkxC91EgI0jVWhymld3E6YOdZ8XaBn16Y6Qny7pMUwntiL1XrK12f1uz1JfoRqXQarS53MaR0hQM3gNlsb5/Jv9RPz1TWupTEs/agq4STeMXLlu8RZKquiaBs9nctpaYk7fUpYAq0NpIKrC1JKgKTJGoahIIxRu3LbKIAdgxOfCPbVuQy642dh4+0CXmSMnnZ927Tk8nvkLP5hrmEykxOU1zfpTDehrq2z2mqyt1vrSt9BQ/wCu2KXyYSYk/KFsiYKJNXCgJqMtfbdqLNxrf0ka3JWQREqJJKglIYiKE5kngZd9QZ4McePX4DHDbPzFoqFO1Ofb9aSejs9Pissba/p0Hne9Fzm3zFkxboN+4wbWoh5LvrJdr+3UyaAq0Yd04+O2b3Jq3dNSqC3br5bO22xv2VuMoUXNIMqAqg0aSImJMGkjxGcFLhSSAK9azxyzw2b6Q8AdYt2r1yopabN897lcFC3DOpOBnK1N1Z7UtTsVBz9ztJpUpGN0u7rPqGgrVX7BNFpHV106akAwHAS6bN5n2ih7RlrjHzCUPggaQFggMSWqDMCs5ptksNTDSQMu2pPtp6jjoH3B0uY3HXDUCz6jqUHnuZxeZ3es0WnTFWj6ktdXWH95XYbRY4edp9kTscqzmMjhRbfJMKDZJBT20yqnBUh27du9Zui5WGiOEHyxEcR3jiI7G444Kwj9M/HCzIfiKgO7oygVNG2csaGsS1OBJJ7kRFyQ6HS36nT9tf8ATQmSff2kYSGVKAet2b3RD/j4w7nY7K3dCrbt6SiE0GZVCficaldzBk8fx/LEEovFWdXGvQ9nnbnpzuZkaTmrp299jFxVUTvOPfXBeLDH+4ti6ywRLue6jtBithOKQIGYJmA3xCmUttrtUFpVtrpfUTSkqzgEDKYX44W9x1dQPmMf7Z+ONDGcKY9D59JOYacucMSr5LfdIgYyJgMEiYaIt8Dz303pbN+wiIzEG7NmU1my6LBUUipqqtRcpGP/AOgwl02tpZvbV9xfWb+hpNagXiigzUgKBQ0mowPmt5vljwxyHp+PPE+muELOwmv7mN+zUcNHqTaudGWjK6nhzyyvFM7tm8Fi1T0AnPib9kkvDUOGjlVhfmUUeNXL0UipOCELhOx2nlT5duShNFHi0kiZERIBOdMq4ZruawpNJ9v5YInhjKVOf+0ec7TnWqaui50Jg0pN9ipCRoRK9bqq9iuZLMav2CKr+d1757SPntTlXTI5lCrsjqEBBQpBXI41C1bsbO1dtIqPcvKDHEFLhMdpQdYHCpxnt3nuhGb5gZ/ST8RhnXTKfACv2H6wTu8cTCMDlvng2cfudZFFn801z6XJaRghdnIzM4/CCIO/PzUBmKn9EVvGj7efuA3t39j5kQs6edNPrzj+WED/ANL6v8fumFj3TjxK3/19RceZFeJxd/IHyEj+N+X8z8oUDeXpce/8384QPP8AqfNAP6oB46mr7wFzuaSY6TGXbHDOOmNH0+mPJu3/ANe8qZPiK8QFQ9tuCXxH8SCIoka1wzIEvYce2KJWCcMKHl/L7BY/0fyA08F5n3uAdV7TEipiK1HTOo69cSLfTCoK2tkJMvyyHuO9oczYhcc+rVIk9gZQMbY2lfzy5czdfwqrZg1tEPNRrBrJ1t0YiT9w3ODJMAVEwCX1eM2zS7etOCuu5DSKVjcsCKHnnHXI5Lot7l3R+Ppyw2mzVfkBfgKv2ST77/F5ot1RfNWa9UhXqUQJbZrldNNTuNPCmrVdSvIgk+tEzH/CLHlWafF9wRAyRjeMgsze8nQZFNMwfDGfrnDw3zE1n07cAPzY5qDjqzmQmf68beqLG6tcYKoa2aEja8NwrlffciQcQ6GMiI6IjQOyYsCNRcIt0SPPZ98AN7nma99aazt7NtlKEbhKTP8A1XjzMdnDphShVdFXwjVH6GwU/wBiv7GsXXOgUfL8E2zbZwmO43bJYcpr9OlI2vRMnlv2AZLFlnX9tvVNKg+kbZpDAEkUSuB+GRysYSgj6TrsX7a+bYM+YWBHZ9P/AIn3YG2R59xfmJB9QUD8RgZoir9QMrm2nl+DeyvgJavJXM4kpmNncfhXXS37XRMCP7zDzejU/wCYUvP+Dv8A6vP/AJeB3IF26GTwhVHrCqD8DjUpgV6/jiI57nnV1ZqsLCynBnYYPGFUy6GXBtUcaXRB7UMf+uKjTAJq/vEnrRLO8s2oET+Qe4gmxU8g+WBUxdQ3lQPAGn1s5EfqGFuCzIRkDJ/THxx64dk2xdJRM7X84u+C5JHq801FOYZ9AntLS7pq77mXVePnSQhqnNtI1spVY+2HcrkOu596Qbi39z2xFUdNp0tfbrdxqi6bq+LSRovsZEhuzp7hBb+qW4wOHMT05/xw1ixcd67K8lQtcS2LnlDTEut9R6beWtwS3Diqn7PsetOl6fHPiThbMZWJZ6UCSbpRcfecNDAKZSn8i4zGhajSKZ9CKHn6o6HDCCXniDOWAEpOSani3cvJFR0m/wCCX8rxNpKw73FXVrVcMfxE7zbnblKyJWSSkU003iVDRcNjImKPuLLpmAQTIJiukfs7KLEDcqM5P+O7HAcM+ZqIwhbYtNbStJFf9DYLXrTo7buWu49X0DKMzzDSo20894PT5trfdBs1EfxUjWYztDYWq0X+EpFvaybGRgc7kWyhlDIKIu1G/kUyZjmKj9vuXuvf2+gAEAlqiO5kAQZlhnQ+o4QFY33dCAwMVE5hTzHLEWYfab2k/sKNdJy/zaRZa4OqUDoehNBMiWUaa4GPqL+2GKAoLI0x5vAN/wDXxQ9Ih7n8PEvLv7LaddgsVU+F/mAOerqBhwG5ORX2dv8Ad0xpav8AbV2RaoljMs+WudGrSQiafNIlddB38Vis7nRuVb6wKoRLFjlBw1jetIVBUoCIe/GPfIRKKImojfrpl7HfmO6/AsDPe/t9/Q4FjfUgSskwKdJ/q5YT7o8fiqecRD/fMip1wtsnzJcoFGxEycmqxVSmD8x9bIxzD+5F6u+m4WEQ0ebYKMXCqKRUnQFeKAiKKiqe/b6b20Fll1XWD6Qc5/cMSRJoIAr2cwMGGK34kadM0y/ngxLpesbPytB4fIYBOMue0/s06XcV3QJDKax/iPJwraa6Ks0Cxg3iTleJQrJlZFqhEv1YlCBdTSIsmjpR4mVMU27Ra35YWCtuiwZJNvuwBlmKmAMzInDGuKG1/KDnn6dmOXcOR2LI9V81vsgymOzkhLVEws3INcmRyxeyKxkDx1/EiKkLCS0vHMZZZ8omdykUPddKLEAQces97i2E2tkMqi8NwgMRP+O8anjXiJB5zkm3rBtq86q+3Q2HBda8kWPqHt2bpUV0PaMMZv8Amii3pFvX83zu7KWl9ASnROMWFYr+8xr9RgnXqnu5iGRblEouJRBY4gZJMDNtFrSsRBRzUGeS9n9I44MKockGrQT6hFMR1t9Peps5hOcbfYHoxXyVqXuJDKc8c/qJhNOtEDUlze3+AIQWw2/zUKn5eRW4+z/EoeYg/wBQd+rwBPGAAAIypA4TTDQSMssauA+mLQ63GM4eM+wDSyMWEbXIhuVbn7AFlvx9TqXP1KhE1Vj17/sXSg+Y6kVVT0h7qiDs4gAuz+myVYKCBKAwa8SSePHUfdgSAxBOYMj2R8MVrNG0XRNTqON5yfE9LtUFCaxSIW82qB2mPy6L1ehZvVuiMh0h1KWDG5s+g0aD0e030zFlDwTeUk15dgpALsSPXLFi+fYazb2wtNcNu9cLBCqwA3nG6oliNNIGo1jvjUCcKZS9wgTkM+lDE+7lgoC7FXpnHIzDHvG0G2oMFr1m6FbJm+wHpFUyeh3bOZhedsRrNG5u5aS2bvG4uHiLZu2WhU4RY9rjW6pWE9+Iwnztrd/b3XuWrhJANJMQCJKiGAyWjalikqWrTKFNRkESe7lwOUR1joTiU/WJH61/ktzfTZ+k/go+I6S2JRo3t22y2p6Qem2dpHa3CfhZaXj5qauFaxSv4Wxrcy5npdtOgnOwz1NspGumzhfduPJezbsAtpTS4MRqYBxzqDrYmBQ+uDC6SC0yD8QRw7ezFgf7ZuWbxt2Owmv4yz02Y2rndpoU1A0jJNOt2S3DVqbcqW/grPQWVlpU7XJR9Kxc2hD2mGj1nXxH03XGzY5P/R6i1YYBtDsBbaJmqyMi3TgTwBJrlgyDmJnFfKsX/nCatUcYexdESgHOrS0GdpM977rXXbatN+ohpRWEzETe1R0zCOmVDTFqqm8SQdIIgY6gFOAnCbtLtq75SINICAkCe8VUkSOJknFppIBPXOnPh7MRjO9AwuSqcE6sPZ18PKuqrlT10Z79hOwNXKktM459as7ZvUiO5I+lVa26loZlk/SAJLupFLyL8ICNxc3VWzcVBoYMSdOcNc0+4DtgYB5DqFyJr2aZ+OOP44lW3OZtIyFWZPoL87pjeGfmmI2wxk3Et7nNxSSi87PpRbCQfmrCsc2cO5s/tSUYs1Zz71zCua9bYRjKLtg2t2FbbsYaAQUbUY1QTEmSrrk+qAGD2yAa3cdrQMXkryMcCOfKcuBx0Zs0Vbyftv13CRwUWdoSny7A1kouRbWf3XL0qi5465pPy3tgUz1BQWdkQsrUFvNhoLf3r2kIQr7L7iGvWyv07mcgDwmMrirVWBKlRIm2ZS0gNqalxTPStJHQ8VPHLhhsX0v4ZarxrNq69esxQxSDosxmOMvlGzJtDaVcZmdj1rdplEZw6TCBNSKPEQ7mvwkpHoGhJQZ2XXg0oiMcfhGTLq3LSiy76jOogioPymZJDEE6wanu6paSTiW1EyOH8PhPLFkzwjBYALWPr5yi06FZdsyNtUMb2e7O2j/RJpXKaFo+f668YolbtnmsZxaY4iM5NEakBH8zFP4SfMkAEO+UTKUgSWgLJ0g0E0ExMdsDnBrE5iVrMmcQM1auOaiVPXfrwxDVYdqUTu9A5bgs5mHRiHcGIRZfG9Tj6hbWZiFXFRVGMl7CqACf0esQ8jAGud43BlJBEmQKgZTqOXKRnXElsopivLhPB3cduiIWAo/KtsqcWeZnXzqd2yYb4NVq5FSlxtU1ENGdfnT3XSmMvWmMsugVCOg3UQgs6Iux9MZIzsG502boF1muFsiCI1aqCawqkNIma901Loj4y3duLtxbiSlxTmPTiMxkRQ1FG34R9J0E4eRtl7Y0qN28GpWbgcIziCkKLgBpBnDEgUjWz8jIyN91Bo1iwFoi1fu2EWeLTaRztk7ZxcWmzjXjoNpR9KCK1MTPKhHCMswZJnVpkkt6en5YevGxsdDRzCIiGDKKiYpk1jYuLjWqDGOjY5igRsyYMGTVNJszZM2yRU0kkylImQoFKAAAB4Tgsf/Z',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'JEGYZ??K??NYV',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 0],
              },
              {
                text: 'fogvatartottak szembes??t??s??r??l',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.UgySzam + ' sz??m?? fegyelmi ??gyben',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'K??sz??lt a ' +
                  item.IntezetNev +
                  ' hivatalos helyis??g??ben.\n' +
                  item.Ev +
                  '. ??v ' +
                  item.Honap +
                  '. h??nap ' +
                  item.Nap +
                  '. napon ' +
                  item.Ora +
                  ':' +
                  item.Perc +
                  ' ??rakor.',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Jelen vannak:',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 20],
              },
              {
                text: 'Meghallgat??: ' + item.Meghallgato,
              },
              {
                text: 'Jegyz??k??nyvvezet??: ' + item.JegyzokonyvVezeto,
              },
              {
                text:
                  item.ElsoSzembesitettTipus +
                  ' ??? ' +
                  item.ElsoSzembesitett +
                  ', ' +
                  item.ElsoSzembesitettAzon,
                margin: [20, 0, 0, 0],
              },
              {
                text:
                  item.MasodikSzembesitettTipus +
                  ' ??? ' +
                  item.MasodikSzembesitett +
                  ', ' +
                  item.MasodikSzembesitettAzon,
                margin: [20, 0, 0, 0],
              },
              {
                text: 'Egy??b jelenl??v??: ' + item.EgyebJelenlevo,
                margin: [0, 0, 0, 30],
              },
              {
                margin: [0, 0, 0, 20],
                table: {
                  widths: ['*', '*'],
                  body: [
                    [
                      {
                        text: item.ElsoSzembesitettTipus,
                        border: [false, false, false, false],
                        decoration: 'underline',
                      },
                      {
                        text: item.MasodikSzembesitettTipus,
                        border: [false, false, false, false],
                        decoration: 'underline',
                      },
                    ],
                    [
                      {
                        text: 'N??v: ' + item.ElsoSzembesitett,
                        border: [false, false, false, false],
                      },
                      {
                        text: 'N??v: ' + item.MasodikSzembesitett,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text:
                          'Nyilv??ntart??si sz??m: ' + item.ElsoSzembesitettAzon,
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          'Nyilv??ntart??si sz??m: ' +
                          item.MasodikSzembesitettAzon,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text:
                          'Sz??let??si helye, ideje: ' +
                          item.ElsoSzembesitettSzulHelye +
                          ', ' +
                          item.ElsoSzembesitettSzulIdeje,
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          'Sz??let??si helye, ideje: ' +
                          item.MasodikSzembesitettSzulHelye +
                          ', ' +
                          item.MasodikSzembesitettSzulIdeje,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'A hamis v??d ??s hamis tan??z??s t??rv??nyes k??vetkezm??nyeivel kapcsolatosan r??szletesen ismertettem a B??ntet?? T??rv??nyk??nyvr??l sz??l?? 2012. ??vi C. t??rv??ny al??bbi vonatkoz?? r??szeit:',
              },
              {
                text: '268. ?? (1) Aki',
              },
              {
                text:
                  'a) m??st hat??s??g el??tt b??ncselekm??ny elk??vet??s??vel hamisan v??dol,',
                margin: [10, 0, 0, 0],
              },
              {
                text:
                  'b) m??s ellen b??ncselekm??nyre vonatkoz?? koholt bizony??t??kot hoz a hat??s??g tudom??s??ra, b??ntett miatt h??rom ??vig terjed?? szabads??gveszt??ssel b??ntetend??.',
                margin: [10, 0, 0, 0],
              },
              {
                text:
                  '272. ?? A tan??, aki hat??s??g el??tt az ??gy l??nyeges k??r??lm??ny??re val??tlan vallom??st tesz, vagy a val??t elhallgatja, hamis tan??z??st k??vet el.',
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaimr??l ??s k??teless??geimr??l t??j??koztat??st kaptam, azokat tudom??sul vettem.',
                margin: [0, 0, 0, 20],
              },
              {
                margin: [0, 0, 0, 20],
                table: {
                  widths: [200, '*'],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                    ],
                    [
                      {
                        text: item.ElsoSzembesitettTipus + ' al????r??sa, neve',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'A fegyelmi elj??r??s sor??n ??rv??nyes??thet?? jogaimr??l ??s k??teless??geimr??l t??j??koztat??st kaptam, azokat tudom??sul vettem.',
                margin: [0, 0, 0, 20],
              },
              {
                pageBreak: 'after',
                margin: [0, 0, 0, 0],
                table: {
                  widths: [200, '*'],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                    ],
                    [
                      {
                        text: item.MasodikSzembesitettTipus + ' al????r??sa, neve',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'A szembes??tett felek a meghallgat??son az al??bbi meg??llap??t??sokat tett??k.',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              jegyzokonyvText,
              {
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A jegyz??k??nyv az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
                margin: [0, 0, 30, 30],
              },
              {
                text: 'Jegyz??k??nyv lez??rva: ' + item.Ora + ':' + item.Perc,
                margin: [0, 0, 0, 30],
              },
              {
                margin: [0, 0, 0, 30],
                table: {
                  widths: [130, 200],
                  body: [
                    [
                      {
                        text: item.ElsoSzembesitettTipus + ' al????r??sa: ',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.ElsoSzembesitett +
                          ', ' +
                          item.ElsoSzembesitettAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, 0, 0, 0],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 80],
                table: {
                  widths: [130, 200],
                  body: [
                    [
                      {
                        text: item.MasodikSzembesitettTipus + ' al????r??sa: ',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          item.MasodikSzembesitett +
                          ', ' +
                          item.MasodikSzembesitettAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, 0, 0, 0],
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 40],
                table: {
                  widths: [200, '*', 200],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 200,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Meghallgat??',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: '',
                      },
                      {
                        text: 'Jegyz??k??nyvvezet??',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              item.EgyebJelenlevo != null && item.EgyebJelenlevo != ''
                ? {
                    margin: [-5, 0, 0, 40],
                    table: {
                      widths: [120, '*', 180],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 180,
                                y2: 12,
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: item.EgyebJelenlevo.split(', ')[0],
                            border: [false, false, false, false],
                            alignment: 'center',
                            margin: [0, -4, 0, 0],
                          },
                        ],
                      ],
                    },
                  }
                : null,
              // {
              //   margin: [0, 0, 0, 0],
              //   table: {
              //     widths: [200, '*'],
              //     body: [
              //       [
              //         {
              //           canvas: [
              //             {
              //               type: 'line',
              //               x1: 0,
              //               y1: 12,
              //               x2: 200,
              //               y2: 12,
              //               lineWidth: 1,
              //             },
              //           ],
              //           border: [false, false, false, false],
              //         },
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //           alignment: '',
              //         },
              //       ],
              //       [
              //         {
              //           text: 'Egy??b jelenl??v??',
              //           border: [false, false, false, false],
              //           alignment: 'center',
              //         },
              //         {
              //           text: '',
              //           border: [false, false, false, false],
              //           alignment: '',
              //         },
              //       ],
              //     ],
              //   },
              // },
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };
    console.log(docDefinition);

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async MasodfokuFegyelmiHatarozatMegszunteteseNyomtatas({
    iktatasIds,
    naplobejegyzesIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.MasodfokuFegyelmiHatarozatMegszunteteseNyomtatasByNaploIds(
        {
          naplobejegyzesIds,
        }
      );
    } else if (iktatasIds != null) {
      model = await apiService.MasodfokuFegyelmiHatarozatMegszunteteseNyomtatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else return null;

    /*var model = await apiService.FegyelmiHatarozatNyomtatas(
      fegyelmiUgyId,
      iktatasId,
      naploId
    );

    var indoklas = htmlToPdfMake(
      `
    <div style="margin-left: 20px;">` +
        model.IndoklasText +
        `</div>
`
    );*/

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index, pageCount) {
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'FEGYELMI HAT??ROZAT',
                alignment: 'center',
                fontSize: 14,
                bold: true,
                margin: [0, 15, 0, 10],
              },
              {
                text:
                  'A b??ntet??s-v??grehajt??si int??zetben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet rendelkez??seire figyelemmel',
                margin: [0, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*'],
                  body: [
                    [
                      {
                        text: 'N??v',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.Fogvatartott,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Azonos??t??',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvAzon,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si hely',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottSzulHelye,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si id??',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottSzulIdeje,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Anyja neve',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottAnyjaNeve,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Elhelyez??se',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.Elhelyezes,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'V??grehajt??si fokozat',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.VegrehajtasiFok,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Szabadul??s aktu??lis d??tuma',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvSzabadul,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'fogvatartott ellen kezdem??nyezett fegyelmi ??gyben a fegyelmi elj??r??st hat??lyon k??v??l helyezem.',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Indokl??s:',
                margin: [0, 0, 0, 10],
              },
              // {
              //   text: item.MegszuntetesOka,
              //   margin: [20, 0, 0, 10],
              // },
              {
                text: item.IndoklasText,
                margin: [20, 0, 0, 30],
                alignment: 'justify',
              },
              {
                text: 'E fegyelmi hat??rozat joger??s ??s v??grehajthat??.',
                margin: [0, 0, 0, 20],
              },
              {
                text:
                  'E fegyelmi ??gyben keletkezett hat??rozatot a fogvatartott el??tt sz??ban kihirdettem, indokoltam.\n A hat??rozat egy p??ld??ny??t a fogvatartottnak ??tadtam.',
                margin: [0, 0, 0, 30],
              },
              {
                text:
                  'Kelt: ' + item.HatarozatHely + ', ' + item.HatarozatDatum,
                margin: [0, 0, 0, 30],
              },
              {
                margin: [-5, 0, 0, 15],
                table: {
                  widths: ['*', 90, 180],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Hat??rozathoz??: ',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text:
                          item.Torvenyszek && item.Torvenyszek != ''
                            ? item.Torvenyszek + '\n'
                            : (item.HatarozathozoNev &&
                              item.HatarozathozoNev != ''
                                ? item.HatarozathozoNev + '\n'
                                : '') +
                              (item.HatarozathozoRang &&
                              item.HatarozathozoRang != ''
                                ? item.HatarozathozoRang + '\n'
                                : '') +
                              (item.HatarozathozoTitulus &&
                              item.HatarozathozoTitulus != ''
                                ? item.HatarozathozoTitulus + '\n'
                                : item.HatarozathozoSzam &&
                                  item.HatarozathozoSzam != ''
                                ? item.HatarozathozoSzam + '\n'
                                : ''),
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -5, 0, 0],
                        bold: 'true',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async MasodfokuFegyelmiHatarozatNyomtatas({
    iktatasIds,
    naplobejegyzesIds,
    fegyelmiUgyIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;
    if (naplobejegyzesIds != null) {
      model = await apiService.MasodfokuFegyelmiHatarozatNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.MasodfokuFegyelmiHatarozatNyomtatasByIktatasIds({
        iktatasIds,
      });
    } else if (fegyelmiUgyIds != null) {
      model = await apiService.MasodfokuFegyelmiHatarozatNyomtatasByFegyelmiUgyIds(
        {
          fegyelmiUgyIds,
        }
      );
    } else return null;
    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index, currentPage) {
          let indoklasText = htmlToPdfMake(
            '<div style="margin-left: 20px; text-align: justify;">' +
              item.IndoklasText +
              '</div>'
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'II. FOK?? \n FEGYELMI HAT??ROZAT',
                alignment: 'center',
                fontSize: 14,
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'A b??ntet??s-v??grehajt??si int??zetben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet rendelkez??seire figyelemmel',
                margin: [0, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*'],
                  body: [
                    [
                      {
                        text: 'N??v',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.Fogvatartott,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Azonos??t??',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvAzon,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si hely',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottSzulHelye,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Sz??let??si id??',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottSzulIdeje,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Anyja neve',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvatartottAnyjaNeve,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Elhelyez??se',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.Elhelyezes,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'V??grehajt??si fokozat',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.TartozkodasFokaJogcime,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Szabadul??s aktu??lis d??tuma',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FogvSzabadul,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text:
                  'fogvatartott ellen kezdem??nyezett fegyelmi ??gyben: ' +
                  item.FegyelmiUgy,
                margin: [0, 0, 0, 10],
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*'],
                  body: [
                    [
                      {
                        text: 'Fegyelmi v??ts??g',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FegyVetseg,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Fegyelmi feny??t??s',
                        border: [false, false, false, false],
                      },
                      {
                        text: ': ' + item.FenyTipus,
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: 'Feny??t??s tartama',
                        border: [false, false, false, false],
                      },
                      {
                        text:
                          ': ' + item.FenyIdotart + item.KietkezesCsokkentes,
                        border: [false, false, false, false],
                      },
                    ],
                  ],
                },
              },
              {
                text: 'Indokl??s:',
                margin: [0, 0, 0, 10],
              },
              indoklasText,
              {
                text: 'E fegyelmi hat??rozat joger??s ??s v??grehajthat??.',
                margin: [0, 0, 0, 20],
              },
              {
                text:
                  'E fegyelmi ??gyben keletkezett hat??rozatot a fogvatartott el??tt sz??ban kihirdettem, indokoltam.\n A hat??rozat egy p??ld??ny??t a fogvatartottnak ??tadtam.',
                margin: [0, 0, 0, 20],
              },
              {
                text:
                  'Kelt: ' + item.HatarozatHely + ', ' + item.HatarozatDatum,
                fontSize: 12,
                margin: [0, 0, 0, 20],
              },
              {
                margin: [-5, 0, 0, 15],
                table: {
                  widths: ['*', 90, 180],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: 'Hat??rozathoz??: ',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text:
                          item.Torvenyszek && item.Torvenyszek != ''
                            ? item.Torvenyszek + '\n'
                            : (item.HatarozathozoNev &&
                              item.HatarozathozoNev != ''
                                ? item.HatarozathozoNev + '\n'
                                : '') +
                              (item.HatarozathozoRang &&
                              item.HatarozathozoRang != ''
                                ? item.HatarozathozoRang + '\n'
                                : '') +
                              (item.HatarozathozoTitulus &&
                              item.HatarozathozoTitulus != ''
                                ? item.HatarozathozoTitulus + '\n'
                                : ''),
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -5, 0, 0],
                        bold: 'true',
                      },
                    ],
                  ],
                },
              },
              {
                margin: [-5, 0, 0, 0],
                table: {
                  widths: ['*', 150, 180],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '1 pld-t a hat??rozatb??l ??tvettem: ',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 180,
                            y2: 12,
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        margin: [0, 0, 0, 0],
                      },
                      {
                        text: 'fogvatartott',
                        border: [false, false, false, false],
                        alignment: 'center',
                        margin: [0, -5, 0, 0],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async VegrehajtasiLapNyomtatas({
    iktatasIds,
    naplobejegyzesIds,
    fegyelmiUgyIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.MaganelzarasMegkezdesenekRogziteseNyomtatasByNaploIds(
        {
          naplobejegyzesIds,
        }
      );
    } else if (iktatasIds != null) {
      model = await apiService.MaganelzarasMegkezdesenekRogziteseNyomtatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else if (fegyelmiUgyIds != null) {
      model = await apiService.MaganelzarasMegkezdesenekRogziteseNyomtatasByFegyelmiUgyIds(
        {
          fegyelmiUgyIds,
        }
      );
    } else return null;
    console.log('VegrehajtasiLapNyomtatas model', model);
    // var model = [
    //   {
    //     IntezetNev: 'V??ci fegyh??z ??s b??rt??n',
    //     Iktatoszam: 46843278,
    //     UgySzam: '18859/99214',
    //     Fogvatartott: 'Teszt Elek',
    //     FogvAzon: 'ZW-7961',
    //     SzulDatum: '1996.07.25.',
    //   },
    // ];

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index, currentPage) {
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'V??GREHAJT??SI LAP',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Mell??klet a ' + item.UgySzam + ' sz. fegyelmi ??gyh??z',
                margin: [0, 0, 0, 10],
                alignment: 'center',
              },
              {
                text:
                  'N??v: ' +
                  item.Fogvatartott +
                  ', Nytsz.: ' +
                  item.FogvAzon +
                  ', sz??l. id??(??v, h??, nap): ' +
                  item.SzulDatum,
                margin: [0, 0, 0, 10],
                alignment: 'center',
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'I/a. A mag??nelz??r??s feny??t??s v??grehajt??sa eg??szs??g??gyi szempontb??l',
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'a) nem ellenjavallt.',
                                margin: [40, 0, 0, 0],
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'b) ideiglenesen ellenjavallt, el??rel??that??lag ??????.. ??v ??????????????????. h?? ??????.. napj??ig.',
                                margin: [40, 0, 0, 0],
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'c) v??glegesen ellenjavallt.',
                                margin: [40, 0, 0, 10],
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'orvos al????r??sa',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'I/b. A mag??nelz??r??s feny??t??s v??grehajt??sa pszichol??giai szempontb??l',
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'a) nem ellenjavallt.',
                                margin: [40, 0, 0, 0],
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'b) ideiglenesen ellenjavallt, el??rel??that??lag ??????.. ??v ??????????????????. h?? ??????.. napj??ig.',
                                margin: [40, 0, 0, 0],
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'c) v??glegesen ellenjavallt.',
                                margin: [40, 0, 0, 10],
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'pszichol??gus al????r??sa',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'II/a. A mag??nelz??r??s feny??t??s v??grehajt??sa az orvos/pszichol??gus (megfelel?? r??sz al??h??zand??) nyilatkozata alapj??n nem hajthat?? v??gre.',
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },

                              {
                                italics: true,
                                fontSize: 10,
                                alignment: 'center',
                                margin: [0, -5, 0, 10],
                                text: 'fegyelmi jogk??r gyakorl??ja',
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'II/b. A mag??nelz??r??s feny??t??s v??grehajt??s??t ????????? ??v ??????????????????.. h?? ?????? nap ?????????.. ??rakor kell megkezdeni.',
                                margin: [0, 0, 0, 10],
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'fegyelmi jogk??r gyakorl??ja',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                pageBreak: 'after',
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'III. A mag??nelz??r??s feny??t??s v??grehajt??sa',
                              },
                              {},
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  '????????? ??v ?????????????????????.h?? ?????????.. nap ???????????????.??rakor megkezd??d??tt.',
                                margin: [0, 0, 0, 10],
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'f??fel??gyel?? al????r??sa',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [50, 100, 235, 82],
                          body: [
                            [
                              {
                                text: 'IV/a. Eg??szs??g??gyi vizsg??latok',
                                italics: true,
                                colSpan: 4,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                              },
                              {},
                              {},
                              {},
                            ],
                            [
                              {
                                text: '',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                              },
                              {
                                text: 'id??pont',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                              {
                                text: 'feljegyz??s',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                              {
                                text: 'orvos al????r??sa',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, 0, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                // pageBreak: 'after',
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [50, 100, 235, 82],
                          body: [
                            [
                              {
                                text: 'IV/b. Pszichol??giai ??llapot felm??r??s',
                                italics: true,
                                colSpan: 4,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                              },
                              {},
                              {},
                              {},
                            ],
                            [
                              {
                                text: '',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                              },
                              {
                                text: 'id??pont',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                              {
                                text: 'feljegyz??s',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                              {
                                text: 'pszichol??gus al????r??sa',
                                italics: true,
                                fontSize: 10,
                                border: [0, 0, 0, 0],
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 50,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 100,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 235,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                              },
                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 82,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, 0, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'V. A mag??nelz??r??s f??lbeszak??t??s??t ????????????????????????????????????????????????????????????????????????????????????.............................................................???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.. miatt javaslom.',
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'orvos/pszichol??gus al????r??sa',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [334.5, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'VI. A mag??nelz??r??s feny??t??s v??grehajt??s??t orvosi /pszichol??gusi (megfelel?? r??sz al??h??zand??) javaslat alapj??n f??lbeszak??tom.',
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'fegyelmi jogk??r gyakorl??ja',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [116.5, 116.5, 116.5, 116.5],
                          body: [
                            [
                              {
                                colSpan: 4,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                margin: [0, 0, 0, 5],
                                text:
                                  'VII. A mag??nelz??r??s feny??t??s v??grehajt??sa',
                              },
                              {},
                              {},
                              {},
                            ],
                            [
                              {
                                margin: [0, 0, 0, 5],
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'kezdete',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'v??ge',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'kezdete',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'v??ge',
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '...... ??v ... h?? ... nap ... ??ra ',
                                alignment: 'center',
                                margin: [0, 0, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                // pageBreak: 'after',
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [30, 203.5, 30, 203.5],
                          body: [
                            [
                              {
                                colSpan: 4,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                margin: [0, 0, 0, 5],
                                text:
                                  'VIII. A mag??nelz??r??s v??grehajt??sa alatt reintegr??ci??s tiszt ??ltal t??rt??n?? ellen??rz??sek',
                              },
                              {},
                              {},
                              {},
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                            ],
                            [
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '20 ??????.',
                              },
                              {
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: '????????????????????????????????????????????????????????????????????????????????????????????????.',
                                margin: [0, 0, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'IX. A mag??nelz??r??s v??grehajt??sa megt??rt??nt.',
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },

                              {
                                italics: true,
                                fontSize: 10,
                                alignment: 'center',
                                margin: [0, -5, 0, 10],
                                text: 'f??fel??gyel?? al????r??sa',
                                border: [false, false, false, false],
                              },
                            ],
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text: 'Ellen??rizte:',
                                margin: [0, 0, 0, 30],
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },
                              {
                                text: 'fegyelmi jogk??r gyakorl??ja',
                                border: [false, false, false, false],
                                fontSize: 10,
                                alignment: 'center',
                                italics: true,
                                margin: [0, -5, 0, 10],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                width: ['*'],
                table: {
                  body: [
                    [
                      {
                        table: {
                          widths: [335, 150],
                          body: [
                            [
                              {
                                colSpan: 2,
                                border: [false, false, false, false],
                                italics: true,
                                fontSize: 10,
                                text:
                                  'X. A mag??nelz??r??s nem hajthat?? v??gre, mert a feny??t??s kiszab??sa ??ta eltelt 6 h??nap.',
                              },
                              {},
                            ],
                            [
                              {
                                text:
                                  '..................................,  ..................................',
                                border: [false, false, false, false],
                              },

                              {
                                canvas: [
                                  {
                                    type: 'line',
                                    x1: 0,
                                    y1: 12,
                                    x2: 150,
                                    y2: 12,
                                    lineWidth: 1,
                                    dash: { length: 1.5, space: 2 },
                                  },
                                ],
                                border: [false, false, false, false],
                                margin: [0, -2, 0, 0],
                              },
                            ],
                            [
                              {
                                text: '',
                                border: [false, false, false, false],
                              },

                              {
                                italics: true,
                                fontSize: 10,
                                alignment: 'center',
                                margin: [0, -5, 0, 10],
                                text: 'bv. int??zet parancsnoka',
                                border: [false, false, false, false],
                              },
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                },
              },
            ],
          };
        }),
      ],
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async MegallapodasEsFeljegyzesNyomtatas({ iktatasIds, naplobejegyzesIds }) {
    console.log('MegallapodasEsFeljegyzesNyomtatas kezd');
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    var content = [];

    if (naplobejegyzesIds != null) {
      model = await apiService.MegallapodasEsFeljegyzesNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.MegallapodasEsFeljegyzesNyomtatasByIktatasIds({
        iktatasIds,
      });
    } else return null;
    console.log('MegallapodasEsFeljegyzesNyomtatas model', model);

    // var model = [
    //   {
    //     IntezetNev: 'V??ci fegyh??z ??s b??rt??n',
    //     Iktatoszam: 46843278,
    //     UgySzam: '18859/99214',
    //     EljarasAlaVontFogvatartott: 'Teszt Elek',
    //     EljarasAlaVontFogvAzon: 'ZW-7961',
    //     SertettFogvatartott: 'Teszt Elek',
    //     SertettFogvAzon: 'ZW-7961',
    //     EljarasAlaVontkepviselo:'Nagy J??nos',
    //     Sertettkepviselo:'Nagy J??nos',
    //     Sertettkepviselo:'Nagy J??nos',
    //     FegyelmiUgyId: 348,
    //     EljarasAlaVontatErintoKoltsegek:'1 000 Ft',
    //     SertettetErintoKoltsegek:'1 000 Ft',
    //     ReintegraciosTiszt:'Nagy J??nos',
    //     FeljegyzesMegbeszelesrol:'Lorem ipsum hablatyikum',
    //     //Megallapodas:'Lorem ipsum hablatyikum',
    //     Hatarido:'2019. 12. 24.',
    //     Kozvetito:'Nyomi B??la',
    //   },
    // ];

    var Megallapodas = model[0].Megallapodas ? true : false;
    var Feljegyzes = model[0].FeljegyzesMegbeszelesrol ? true : false;

    if (Megallapodas) {
      model[0].Megallapodas = htmlToPdfMake(
        '<div style="margin-left: 20px; text-align: justify;">' +
          model[0].Megallapodas +
          '</div>'
      );
    }
    if (Feljegyzes) {
      model[0].FeljegyzesMegbeszelesrol = htmlToPdfMake(
        '<div style="margin-left: 20px; text-align: justify;">' +
          model[0].FeljegyzesMegbeszelesrol +
          '</div>'
      );
    }

    var Osszefuzni = Megallapodas && Feljegyzes;

    function megallapodasContent() {
      var megallapodascontent = content.push(
        model.map(function(item, index, currentPage) {
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'MEG??LLAPOD??S',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 5],
              },
              {
                text: 'K??zvet??t??i elj??r??s eredm??ny??r??l',
                bold: true,
                margin: [0, 0, 0, 15],
                alignment: 'center',
              },
              {
                text:
                  'A meg??llapod??s a b??ntet??s-v??grehajt??si int??zetekben fogvatartott el??t??ltek ??s egy??b jogc??men fogvatartottak fegyelmi felel??ss??g??r??l sz??l?? 14/2014. (XII.17.) IM rendelet, k??zvet??t?? elj??r??st tartalmaz?? r??sz??ben szab??lyozott felt??telek alapj??n j??tt l??tre az al??bbi el??t??ltek k??z??tt.',

                margin: [0, 0, 0, 10],
              },
              {
                text:
                  'L??tre j??n ' +
                  item.SertettFogvatartott +
                  ' n??v ' +
                  item.SertettFogvAzon +
                  ' nytsz., mint s??rtett\n ??s ' +
                  item.EljarasAlaVontFogvatartott +
                  ' n??v ' +
                  item.EljarasAlaVontFogvAzon +
                  ' nytsz., mint elj??r??s al?? vont, a k??zvet??t??i elj??r??sban r??szt vett el??t??ltek k??z??tt.',
                margin: [0, 0, 0, 10],
                lineHeight: 2,
              },
              {
                margin: [0, 0, 0, 10],
                text:
                  'A k??zvet??t??i elj??r??sban r??sztvev?? felek meg??llapodnak abban, hogy:',
              },
              // {
              //   margin: [0, 0, 0, 10],
              //   text: item.Megallapodas,
              // },
              item.Megallapodas,
              {
                margin: [0, 0, 0, 10],
                text: 'A teljes??t??s hat??rideje: ' + item.Hatarido,
              },
              {
                margin: [0, 0, 0, 10],
                text: 'A k??zvet??t??s sor??n felmer??lt k??lts??gek:',
              },
              {
                margin: [0, 0, 0, 10],
                layout: 'noBorders',
                table: {
                  body: [
                    [
                      { text: 'Elj??r??s al?? vont:' },
                      {
                        alignment: 'right',
                        text: item.EljarasAlaVontatErintoKoltsegek,
                      },
                    ],
                    [
                      { text: 'S??rtett:' },
                      {
                        alignment: 'right',
                        text: item.SertettetErintoKoltsegek,
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 10],
                text:
                  'Az elj??r??sban r??szt vett fogvatartottak tudom??sul veszik, hogy',
              },
              {
                margin: [10, 0, 0, 10],
                separator: ')',
                type: 'lower-alpha',
                ol: [
                  'A v??llalt k??telezetts??g nem lehet ellent??tes a jogszab??lyokkal, a b??ntet??s-v??grehajt??s rendj??t, biztons??g??t nem s??rtheti vagy vesz??lyeztetheti.',
                  'A meg??llapod??s a k??zvet??t??i elj??r??s c??ljain t??li joghat??s kiv??lt??s??ra nem vehet?? ig??nybe, a k??zvet??t??i elj??r??s sor??n tett nyilatkozatok, keletkezett iratok m??s elj??r??sban bizony??t??kk??nt nem haszn??lhat??k fel.',
                  'A k??zvet??t??i elj??r??s eredm??nyesen fejez??dik be, ha az elj??r??s al?? vont fogvatartott a meg??llapod??sban foglalt k??telezetts??g??t teljes??tette. Ha a s??rtett magatart??sa miatt hi??sul meg a teljes??t??s, a k??zvet??t??i elj??r??st eredm??nyesen befejezettnek kell tekinteni.',
                  'A meg??llapod??sban foglalt k??telezetts??gek teljes??t??s??t az elj??r??s al?? vont fogvatartott reintegr??ci??s tisztje ellen??rzi.',
                  'A k??zvet??t??i elj??r??s sor??n felmer??lt k??lts??geket az elj??r??s al?? vont fogvatartott viseli, kiv??ve azokat, amelyek a s??rtett fogvatartott ??rdekk??r??ben mer??ltek fel.',
                ],
              },
              {
                margin: [0, 0, 0, 10],
                text:
                  'Meg??llapod??s helye: ' +
                  item.IntezetNev +
                  ', kelte: ' +
                  item.MegallapodasKelte,
              },

              {
                margin: [0, 0, 0, 10],
                text:
                  'A meg??llapod??sban le??rtakat megismertem, meg??rtettem ??s elfogadom:',
              },
              {
                margin: [-5, 0, 0, 0],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: item.EljarasAlaVontFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: item.SertettFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },

              {
                pageBreak: 'after',
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 190,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: item.Kozvetito,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                  ],
                },
              },

              {
                margin: [0, 0, 0, 15],
                text:
                  'A k??zvet??t??i elj??r??s sor??n k??t??tt meg??llapod??sban szerepl?? v??llal??sok hat??rid??n bel??l ??rv??nyes??ltek.',
              },
              {
                columns: [
                  { width: 150, alignment: 'center', text: 'igen' },
                  { width: '*', alignment: 'center', text: '-' },
                  { width: 150, alignment: 'center', text: 'nem' },
                ],
              },
              {
                margin: [-5, 0, 0, 15],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 190,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: item.ReintegraciosTiszt,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                  ],
                },
              },

              {
                margin: [-5, 0, 0, 15],
                id:
                  (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
                  (naplobejegyzesIds &&
                    naplobejegyzesIds.length > 1 &&
                    index >= 1)
                    ? 'NoBreak'
                    : '',
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        colSpan: 3,
                        margin: [0, 0, 0, 10],
                        text:
                          'A k??zvet??t??i elj??r??st: eredm??nyesnek / eredm??nytelennek  min??s??tem.',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 190,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: item.FegyelmiJogkorGyakorloja,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        })
      );
      return megallapodascontent;
    }

    function feljegyzesContent(osszefuzni) {
      var feljegyzescontent = content.push(
        model.map(function(item, index, currentPage) {
          return {
            id: osszefuzni ? 'NoBreak' : '',
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAWAAwAwERAAIRAQMRAf/EAJQAAAICAwEAAAAAAAAAAAAAAAgJBgoABQcDAQACAwEAAAAAAAAAAAAAAAACAwABBAUQAAAHAQAABgIABgMBAAAAAAECAwQFBgcIABESExQJFRchIkMWGApCIyQyEQACAQIEAwQIBAUFAAAAAAABAhEhAwAxEgRBUWFxIjIT8IGRobFCIwXB0ZIU4fFSYjNyotJDNP/aAAwDAQACEQMRAD8Av8eJiYzxMTFZH7WfsC3XkXqydn8C19/bYumc/wB8T1rIZagalLZ7iK0dnp7LB6VLyNJqdwrj52lJXuuzL15JskyRzJJJBZ4Rm5WSJ0dtZsXduTuAVQOIcGskgRGZoGgSKmeuAYwYGcenpyw8fix1fpHm3OpjR9tpfQ8/PNZSdZ6xn0jGztUsVZlph89qqcdZoiErDC1mjIBZBsrJEi475aqZjC3THz8+exDMSBHMTMHiOlZpwywdeOCn8ViYzxMTGeJiYUt1v9l0nUdXJxpwplf+XvdEs1WcytOZyZ4bEucq6mqVo70XpvU0iKRtSiYx0qBEYFmdaelHIA2TSROomYxIqt3n1CzMFlANYNBNJFJBIzBwJPBY1YTl3Fg+2c8fC3Dv7s2/3E92xqZDYlub4NDOE84qxOjOYKRoCVBsaaDacukZO5/rs3DN4ywNCQEe1dicGaavrdeMu53Vy3eSxtEUJcuWwdUEkFtJJMgCBUkVGnxQIK2BAUtHeevsJz7QI9mWNLzVmR7nvjrBOKes+vsIGo6a2r8s60zTaDsbaBd2bCNH3S05+3Qxi8SGOzFJvsk3g5ly7iX/AOajX4GRKu3FM7bx0RcPkL5qhrbA6TQNQgTME0FADSCTGDAkQJU/D1e/DQ8x746L4x1CA5o+0aoIs6xaBdNcP7loQLWDJr2hGoGcr1zYTNYuKe0a6xbIhlFHi0c0SVZpGcuEgQQcyRwZRdP0VINKZnqeYHGtI4yMWshRrNcPCYP2MoxZycY8aSMbItG7+PkGDhF4xfsXiJHDR4zdtzqN3TR03UKdNQhjEOQwGKIgID4TlQ54LAE/Z122++vTkG79RMKBHaUrUbHQK6atSlp/tJp5X24RNOSkxfEjJd1ILRrqYTUTj26IOH5/JFM5DHAwGi62g0EGvYJ7a5U54mK8X1r6hpXMmOyv2XW+2Pn3PFsscpkXbdDctbAjrEx0/pWnsn9v2uAiXiRCxgY3tt+TyyBpCqR3ZYsjyQ+UL5woi5bubxa41guGFoxAA0rAkAaZB1qyszTyBkqcLVqTpPXn/HswZvCeAM9Zv+Kcpdtwkxomp8I4hotvv9A02ySWh162WTpTYoW75vZLd+cMuw1Cq1+k1RoWLSlE3TNnZ2b8CJ/IikjppKPqO4t6ls91Qad4wdRjMGa8M4ypi1LairVETPby4iBnPPhXBGdq4JzpybqfP++5BnpsitN8ltfwdek8+x8fnzbXL9qHPukQGPkRqldYtq+51xhcUkY6BmitSvWjeTc++qdqmAJEu4ZIsFPMU94A/LBBYjjBEyMjnngWYLcCjxMCfZA/HC5rHD9A6xylD89W+2yrGu/UXRm9h+wiJmL1bT3PctBjIy6zZIXMLa4EZGCi81zGBbaVTLBMHfg8UlIFoZEot3joloj3botoxRLhKgwJgmADpNJ8DxBA1EZjFtXxLJFfXEZcaE8cGj/r29z3jqTna4YJd6iCD7ihnn2St9RWeDFSOrwswW5O6LYnuaOomNkKCm9zKDhJBsHqUaP20iRVsRFECphd615UAZyQRAADDTIEEyK5zSIrEklNMqRjo339Z+w07jvOaZNXCKo8BLdK58pLWC1Q87ZaK3WhKlodnrLS21itgWYnTTVzgY2OhyJKJi3sD1i4AFDokSPVpEuEozBSVMTEkyPDObASYAYkAgCsiGZEc8V7Z3jm+s3+i5q81vSKtSRulK0a8V2159qshE4vc57Rue5sOgOgI+LXa1+4LT8/oEjYIl/F/EftpGrg6duCgi4VR51uwLtk7kaV3CwkMV1MmkkxC91EgI0jVWhymld3E6YOdZ8XaBn16Y6Qny7pMUwntiL1XrK12f1uz1JfoRqXQarS53MaR0hQM3gNlsb5/Jv9RPz1TWupTEs/agq4STeMXLlu8RZKquiaBs9nctpaYk7fUpYAq0NpIKrC1JKgKTJGoahIIxRu3LbKIAdgxOfCPbVuQy642dh4+0CXmSMnnZ927Tk8nvkLP5hrmEykxOU1zfpTDehrq2z2mqyt1vrSt9BQ/wCu2KXyYSYk/KFsiYKJNXCgJqMtfbdqLNxrf0ka3JWQREqJJKglIYiKE5kngZd9QZ4McePX4DHDbPzFoqFO1Ofb9aSejs9Pissba/p0Hne9Fzm3zFkxboN+4wbWoh5LvrJdr+3UyaAq0Yd04+O2b3Jq3dNSqC3br5bO22xv2VuMoUXNIMqAqg0aSImJMGkjxGcFLhSSAK9azxyzw2b6Q8AdYt2r1yopabN897lcFC3DOpOBnK1N1Z7UtTsVBz9ztJpUpGN0u7rPqGgrVX7BNFpHV106akAwHAS6bN5n2ih7RlrjHzCUPggaQFggMSWqDMCs5ptksNTDSQMu2pPtp6jjoH3B0uY3HXDUCz6jqUHnuZxeZ3es0WnTFWj6ktdXWH95XYbRY4edp9kTscqzmMjhRbfJMKDZJBT20yqnBUh27du9Zui5WGiOEHyxEcR3jiI7G444Kwj9M/HCzIfiKgO7oygVNG2csaGsS1OBJJ7kRFyQ6HS36nT9tf8ATQmSff2kYSGVKAet2b3RD/j4w7nY7K3dCrbt6SiE0GZVCficaldzBk8fx/LEEovFWdXGvQ9nnbnpzuZkaTmrp299jFxVUTvOPfXBeLDH+4ti6ywRLue6jtBithOKQIGYJmA3xCmUttrtUFpVtrpfUTSkqzgEDKYX44W9x1dQPmMf7Z+ONDGcKY9D59JOYacucMSr5LfdIgYyJgMEiYaIt8Dz303pbN+wiIzEG7NmU1my6LBUUipqqtRcpGP/AOgwl02tpZvbV9xfWb+hpNagXiigzUgKBQ0mowPmt5vljwxyHp+PPE+muELOwmv7mN+zUcNHqTaudGWjK6nhzyyvFM7tm8Fi1T0AnPib9kkvDUOGjlVhfmUUeNXL0UipOCELhOx2nlT5duShNFHi0kiZERIBOdMq4ZruawpNJ9v5YInhjKVOf+0ec7TnWqaui50Jg0pN9ipCRoRK9bqq9iuZLMav2CKr+d1757SPntTlXTI5lCrsjqEBBQpBXI41C1bsbO1dtIqPcvKDHEFLhMdpQdYHCpxnt3nuhGb5gZ/ST8RhnXTKfACv2H6wTu8cTCMDlvng2cfudZFFn801z6XJaRghdnIzM4/CCIO/PzUBmKn9EVvGj7efuA3t39j5kQs6edNPrzj+WED/ANL6v8fumFj3TjxK3/19RceZFeJxd/IHyEj+N+X8z8oUDeXpce/8384QPP8AqfNAP6oB46mr7wFzuaSY6TGXbHDOOmNH0+mPJu3/ANe8qZPiK8QFQ9tuCXxH8SCIoka1wzIEvYce2KJWCcMKHl/L7BY/0fyA08F5n3uAdV7TEipiK1HTOo69cSLfTCoK2tkJMvyyHuO9oczYhcc+rVIk9gZQMbY2lfzy5czdfwqrZg1tEPNRrBrJ1t0YiT9w3ODJMAVEwCX1eM2zS7etOCuu5DSKVjcsCKHnnHXI5Lot7l3R+Ppyw2mzVfkBfgKv2ST77/F5ot1RfNWa9UhXqUQJbZrldNNTuNPCmrVdSvIgk+tEzH/CLHlWafF9wRAyRjeMgsze8nQZFNMwfDGfrnDw3zE1n07cAPzY5qDjqzmQmf68beqLG6tcYKoa2aEja8NwrlffciQcQ6GMiI6IjQOyYsCNRcIt0SPPZ98AN7nma99aazt7NtlKEbhKTP8A1XjzMdnDphShVdFXwjVH6GwU/wBiv7GsXXOgUfL8E2zbZwmO43bJYcpr9OlI2vRMnlv2AZLFlnX9tvVNKg+kbZpDAEkUSuB+GRysYSgj6TrsX7a+bYM+YWBHZ9P/AIn3YG2R59xfmJB9QUD8RgZoir9QMrm2nl+DeyvgJavJXM4kpmNncfhXXS37XRMCP7zDzejU/wCYUvP+Dv8A6vP/AJeB3IF26GTwhVHrCqD8DjUpgV6/jiI57nnV1ZqsLCynBnYYPGFUy6GXBtUcaXRB7UMf+uKjTAJq/vEnrRLO8s2oET+Qe4gmxU8g+WBUxdQ3lQPAGn1s5EfqGFuCzIRkDJ/THxx64dk2xdJRM7X84u+C5JHq801FOYZ9AntLS7pq77mXVePnSQhqnNtI1spVY+2HcrkOu596Qbi39z2xFUdNp0tfbrdxqi6bq+LSRovsZEhuzp7hBb+qW4wOHMT05/xw1ixcd67K8lQtcS2LnlDTEut9R6beWtwS3Diqn7PsetOl6fHPiThbMZWJZ6UCSbpRcfecNDAKZSn8i4zGhajSKZ9CKHn6o6HDCCXniDOWAEpOSani3cvJFR0m/wCCX8rxNpKw73FXVrVcMfxE7zbnblKyJWSSkU003iVDRcNjImKPuLLpmAQTIJiukfs7KLEDcqM5P+O7HAcM+ZqIwhbYtNbStJFf9DYLXrTo7buWu49X0DKMzzDSo20894PT5trfdBs1EfxUjWYztDYWq0X+EpFvaybGRgc7kWyhlDIKIu1G/kUyZjmKj9vuXuvf2+gAEAlqiO5kAQZlhnQ+o4QFY33dCAwMVE5hTzHLEWYfab2k/sKNdJy/zaRZa4OqUDoehNBMiWUaa4GPqL+2GKAoLI0x5vAN/wDXxQ9Ih7n8PEvLv7LaddgsVU+F/mAOerqBhwG5ORX2dv8Ad0xpav8AbV2RaoljMs+WudGrSQiafNIlddB38Vis7nRuVb6wKoRLFjlBw1jetIVBUoCIe/GPfIRKKImojfrpl7HfmO6/AsDPe/t9/Q4FjfUgSskwKdJ/q5YT7o8fiqecRD/fMip1wtsnzJcoFGxEycmqxVSmD8x9bIxzD+5F6u+m4WEQ0ebYKMXCqKRUnQFeKAiKKiqe/b6b20Fll1XWD6Qc5/cMSRJoIAr2cwMGGK34kadM0y/ngxLpesbPytB4fIYBOMue0/s06XcV3QJDKax/iPJwraa6Ks0Cxg3iTleJQrJlZFqhEv1YlCBdTSIsmjpR4mVMU27Ra35YWCtuiwZJNvuwBlmKmAMzInDGuKG1/KDnn6dmOXcOR2LI9V81vsgymOzkhLVEws3INcmRyxeyKxkDx1/EiKkLCS0vHMZZZ8omdykUPddKLEAQces97i2E2tkMqi8NwgMRP+O8anjXiJB5zkm3rBtq86q+3Q2HBda8kWPqHt2bpUV0PaMMZv8Amii3pFvX83zu7KWl9ASnROMWFYr+8xr9RgnXqnu5iGRblEouJRBY4gZJMDNtFrSsRBRzUGeS9n9I44MKockGrQT6hFMR1t9Peps5hOcbfYHoxXyVqXuJDKc8c/qJhNOtEDUlze3+AIQWw2/zUKn5eRW4+z/EoeYg/wBQd+rwBPGAAAIypA4TTDQSMssauA+mLQ63GM4eM+wDSyMWEbXIhuVbn7AFlvx9TqXP1KhE1Vj17/sXSg+Y6kVVT0h7qiDs4gAuz+myVYKCBKAwa8SSePHUfdgSAxBOYMj2R8MVrNG0XRNTqON5yfE9LtUFCaxSIW82qB2mPy6L1ehZvVuiMh0h1KWDG5s+g0aD0e030zFlDwTeUk15dgpALsSPXLFi+fYazb2wtNcNu9cLBCqwA3nG6oliNNIGo1jvjUCcKZS9wgTkM+lDE+7lgoC7FXpnHIzDHvG0G2oMFr1m6FbJm+wHpFUyeh3bOZhedsRrNG5u5aS2bvG4uHiLZu2WhU4RY9rjW6pWE9+Iwnztrd/b3XuWrhJANJMQCJKiGAyWjalikqWrTKFNRkESe7lwOUR1joTiU/WJH61/ktzfTZ+k/go+I6S2JRo3t22y2p6Qem2dpHa3CfhZaXj5qauFaxSv4Wxrcy5npdtOgnOwz1NspGumzhfduPJezbsAtpTS4MRqYBxzqDrYmBQ+uDC6SC0yD8QRw7ezFgf7ZuWbxt2Owmv4yz02Y2rndpoU1A0jJNOt2S3DVqbcqW/grPQWVlpU7XJR9Kxc2hD2mGj1nXxH03XGzY5P/R6i1YYBtDsBbaJmqyMi3TgTwBJrlgyDmJnFfKsX/nCatUcYexdESgHOrS0GdpM977rXXbatN+ohpRWEzETe1R0zCOmVDTFqqm8SQdIIgY6gFOAnCbtLtq75SINICAkCe8VUkSOJknFppIBPXOnPh7MRjO9AwuSqcE6sPZ18PKuqrlT10Z79hOwNXKktM459as7ZvUiO5I+lVa26loZlk/SAJLupFLyL8ICNxc3VWzcVBoYMSdOcNc0+4DtgYB5DqFyJr2aZ+OOP44lW3OZtIyFWZPoL87pjeGfmmI2wxk3Et7nNxSSi87PpRbCQfmrCsc2cO5s/tSUYs1Zz71zCua9bYRjKLtg2t2FbbsYaAQUbUY1QTEmSrrk+qAGD2yAa3cdrQMXkryMcCOfKcuBx0Zs0Vbyftv13CRwUWdoSny7A1kouRbWf3XL0qi5465pPy3tgUz1BQWdkQsrUFvNhoLf3r2kIQr7L7iGvWyv07mcgDwmMrirVWBKlRIm2ZS0gNqalxTPStJHQ8VPHLhhsX0v4ZarxrNq69esxQxSDosxmOMvlGzJtDaVcZmdj1rdplEZw6TCBNSKPEQ7mvwkpHoGhJQZ2XXg0oiMcfhGTLq3LSiy76jOogioPymZJDEE6wanu6paSTiW1EyOH8PhPLFkzwjBYALWPr5yi06FZdsyNtUMb2e7O2j/RJpXKaFo+f668YolbtnmsZxaY4iM5NEakBH8zFP4SfMkAEO+UTKUgSWgLJ0g0E0ExMdsDnBrE5iVrMmcQM1auOaiVPXfrwxDVYdqUTu9A5bgs5mHRiHcGIRZfG9Tj6hbWZiFXFRVGMl7CqACf0esQ8jAGud43BlJBEmQKgZTqOXKRnXElsopivLhPB3cduiIWAo/KtsqcWeZnXzqd2yYb4NVq5FSlxtU1ENGdfnT3XSmMvWmMsugVCOg3UQgs6Iux9MZIzsG502boF1muFsiCI1aqCawqkNIma901Loj4y3duLtxbiSlxTmPTiMxkRQ1FG34R9J0E4eRtl7Y0qN28GpWbgcIziCkKLgBpBnDEgUjWz8jIyN91Bo1iwFoi1fu2EWeLTaRztk7ZxcWmzjXjoNpR9KCK1MTPKhHCMswZJnVpkkt6en5YevGxsdDRzCIiGDKKiYpk1jYuLjWqDGOjY5igRsyYMGTVNJszZM2yRU0kkylImQoFKAAAB4Tgsf/Z',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'FELJEGYZ??S',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 5],
              },
              {
                text: 'K??zvet??t??i megbesz??l??sr??l',
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 5],
                alignment: 'center',
              },
              {
                text:
                  'K??sz??lt a ' + item.IntezetNev + ' hivatalos helyis??g??ben.',
                alignment: 'center',
              },
              {
                text:
                  item.MegbeszelesEv +
                  ' ??v ' +
                  item.MegbeszelesHonap +
                  ' h??nap ' +
                  item.MegbeszelesNap +
                  ' napon ' +
                  item.MegbeszelesOra +
                  +':' +
                  item.MegbeszelesPerc +
                  ' ??rakor.',
                margin: [0, 0, 0, 20],
                alignment: 'center',
              },
              {
                margin: [0, 0, 0, 10],
                text: 'Fegyelmi elj??r??s ??gysz??ma: ' + item.UgySzam,
              },
              {
                margin: [0, 0, 0, 10],
                text: 'K??zvet??t??i megbesz??l??sen r??szt vev??k:',
              },
              {
                type: 'none',
                margin: [0, 0, 0, 10],
                ol: [
                  {
                    text:
                      'N??v: ' +
                      item.EljarasAlaVontFogvatartott +
                      ', nytsz: ' +
                      item.EljarasAlaVontFogvAzon +
                      ', mint elj??r??s al?? vont.',
                    margin: [0, 0, 0, 5],
                  },
                  {
                    text:
                      'N??v: ' +
                      item.SertettFogvatartott +
                      ', nytsz: ' +
                      item.SertettFogvAzon +
                      ', mint elj??r??s al?? vont.',
                    margin: [0, 0, 0, 5],
                  },
                  {
                    text:
                      'V??d??: ' +
                      (item.EljarasAlaVontkepviselo
                        ? item.EljarasAlaVontkepviselo +
                          ', mint az elj??r??s al?? vont meghatalmazottja.'
                        : ''),
                    margin: [0, 0, 0, 5],
                  },
                  {
                    text:
                      'K??pvisel??: ' +
                      (item.Sertettkepviselo
                        ? item.Sertettkepviselo +
                          ', mint a s??rtett meghatalmazott k??pvisel??je.'
                        : ''),
                    margin: [0, 0, 0, 5],
                  },
                  {
                    stack: [
                      {
                        text: 'Egy??b:',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 35,
                            y1: 0,
                            x2: 500,
                            y2: 0,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                      },
                    ],
                    margin: [0, 0, 0, 5],
                  },
                  {
                    text:
                      'K??zvet??t??: ' +
                      item.Kozvetito +
                      ', mint az elj??r??s lefolytat??s??ra kijel??lt szem??ly.',
                    margin: [0, 0, 0, 5],
                  },
                ],
              },
              {
                text:
                  'A k??zvet??t?? t??j??koztatja a megbesz??l??sen r??sztvev??ket a k??zvet??t??i elj??r??s l??nyeg??r??l, jogk??vetkezm??nyeir??l, valamint jogaikr??l ??s k??telezetts??geikr??l.',
              },
              {
                text:
                  'A k??zvet??t??i elj??r??s m??s fogvatartott s??relm??re elk??vetett fegyelmi cselekm??ny ??ltal kiv??ltott konfliktust kezel?? elj??r??s, amelynek c??lja, hogy egy k??zvet??t??, harmadik szem??ly bevon??s??val a s??rtett ??s a fegyelmi elj??r??s al?? vont fogvatartott k??z??tti konfliktus rendez??s??nek megold??s??t tartalmaz??, a fegyelems??rt??s k??vetkezm??nyeinek j??v??t??tel??t ??s az elj??r??s al?? vont fogvatartott j??v??beni szab??lyk??vet?? magatart??s??t el??seg??t?? ??r??sbeli meg??llapod??s j??jj??n l??tre.',
              },
              {
                text:
                  'A k??zvet??t??nek biztos??tania kell, hogy a r??sztvev??k egym??ssal szemben tisztelettel j??rjanak el.',
              },
              {
                text:
                  'A k??zvet??t??i elj??r??s a fegyelmi jogk??r gyakorl??j??nak k??zvet??t??i elj??r??sra utal?? d??nt??se napj??n kezd??dik. A fegyelmi jogk??r gyakorl??ja k??zvet??t??i elj??r??sra utal?? d??nt??s??ben kijel??li a k??zvet??t??t ??s sz??ks??g szerint rendelkezik a kiszabott feny??t??s v??grehajt??s??nak felf??ggeszt??s??r??l.',
              },
              {
                text:
                  'Az elj??r??s sor??n az elj??r??s al?? vont jogosult v??d??, a s??rtett, k??pvisel?? meghatalmaz??s??ra.',
              },
              {
                text:
                  'Amennyiben a 14/2014. (XII.17) IM rendeletben foglalt kiz??r??si okok fenn??llnak, a fogvatartottak b??rmelyike azt bejelentheti.',
              },

              {
                text:
                  'A s??rtett ??s az elj??r??s al?? vont fogvatartott ind??tv??nyozhatja, hogy ??rdek??ben legfeljebb egy-egy, ??ltala megjel??lt fogvatartott a k??zvet??t??i megbesz??l??sen jelen legyen ??s felsz??lalhasson. A k??zvet??t?? az ind??tv??nyt csak abban az esetben utas??thatja el, ha a fogvatartott jelenl??te a k??zvet??t??i elj??r??s c??lj??val ellent??tes. A d??nt??s ellen jogorvoslatnak nincs helye.',
              },
              {
                text:
                  'A k??zvet??t??i megbesz??l??st a k??zvet??t?? vezeti, aki meghat??rozza a k??zvet??t??i megbesz??l??s menet??t, valamint a k??zvet??t??i megbesz??l??sen r??sztvev??k felsz??lal??s??nak rendj??t.',
              },

              {
                margin: [0, 0, 0, 10],
                text:
                  'A s??rtett ??s az elj??r??s al?? vont fogvatartott az ??ggyel kapcsolatos ??ll??spontj??t sz??ban kifejtheti, ??s a rendelkez??s??re ??ll?? iratokat is bemutathatja.',
              },
              {
                margin: [0, 0, 0, 10],
                text:
                  'A k??zvet??t?? ??ltal, a k??zvet??t??i elj??r??s l??nyeg??r??l, jogk??vetkezm??nyeir??l, jogaimr??l, k??telezetts??geimr??l sz??l?? t??j??koztat??st meg??rtettem.',
              },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: item.EljarasAlaVontFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: item.SertettFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
                pageBreak: 'after',
              },

              {
                margin: [0, 0, 0, 15],
                text:
                  'A k??zvet??t??i megbesz??l??s sor??n az al??bbi a jelenl??v??k r??sz??r??l az al??bbiak hangzottak el:',
              },
              // {
              //   margin: [0, 0, 0, 10],
              //   text: item.FeljegyzesMegbeszelesrol,
              // },
              item.FeljegyzesMegbeszelesrol,
              {
                margin: [0, 0, 0, 10],
                text:
                  'Az ??ggyel kapcsolatban egyebet elmondani nem tudok ??s nem is k??v??nok. A feljegyz??s az ??ltalam elmondottakat helyesen ??s j??l tartalmazza, melyet elolvas??s ut??n helybenhagy??lag al????rok.',
              },
              { alignment: 'center', text: 'Kelt, mint fent' },
              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: item.EljarasAlaVontFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: item.SertettFogvatartott,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },

              {
                margin: [-5, 0, 0, 15],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: item.Kozvetito,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                    ],
                  ],
                },
              },
            ],
          };
        })
      );
      return feljegyzescontent;
    }
    if (Megallapodas && !Osszefuzni) {
      megallapodasContent();
    }
    if (Feljegyzes == true && !Osszefuzni) {
      feljegyzesContent(Osszefuzni);
    }

    if (Osszefuzni) {
      megallapodasContent();
      feljegyzesContent(Osszefuzni);
    }
    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: content,
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download('Meg??llapod??s_Feljegyz??s');

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }
  async KozvetitoiEljarasonReszvetelNyomtatas({
    iktatasIds,
    naplobejegyzesIds,
  }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    var model;

    if (naplobejegyzesIds != null) {
      model = await apiService.KozvetitoiEljarasonReszvetelNyomtatasByNaploIds({
        naplobejegyzesIds,
      });
    } else if (iktatasIds != null) {
      model = await apiService.KozvetitoiEljarasonReszvetelNyomtatasByIktatasIds(
        {
          iktatasIds,
        }
      );
    } else return null;
    console.log('KozvetitoiEljarasonReszvetelNyomtatas model', model);
    // var model = [
    //   {
    //     IntezetNev: 'V??ci fegyh??z ??s b??rt??n',
    //     Iktatoszam: 46843278,
    //     UgySzam: '18859/99214',
    //     Fogvatartott: 'Teszt Elek',
    //     FogvAzon: 'ZW-7961',
    //     SzulDatum: '1996.07.25.',
    //     IsSertett: true,
    //     Javaslat:
    //       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    //     ReintegraciosTiszt: 'Teszt B??la',
    //   },
    // ];

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        model.map(function(item, index, currentPage) {
          var javaslat = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.Javaslat +
              `</div>
              `
          );
          return {
            stack: [
              {
                image:
                  'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
                alignment: 'center',
                width: 30,
                height: 55,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.IntezetNev,
                alignment: 'center',
                fontSize: 12,
                opacity: 0.5,
                margin: [0, 0, 0, 10],
              },
              {
                text: item.Iktatoszam,
                alignment: 'right',
                fontSize: 10,
              },
              {
                text: 'NYILATKOZAT',
                alignment: 'center',
                fontSize: 12,
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 5],
              },
              {
                text: 'K??zvet??t??i elj??r??son val?? r??szv??telr??l',
                bold: true,
                decoration: 'underline',
                margin: [0, 0, 0, 5],
                alignment: 'center',
              },
              {
                text: item.ErintettsegFoka,
                margin: [0, 0, 0, 20],
                alignment: 'center',
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'Alul??rott ' +
                  item.Fogvatartott +
                  ' (n??v), ' +
                  item.FogvAzon +
                  ' nytsz. el??t??lt, mint ' +
                  item.ErintettsegFoka +
                  ' kezdem??nyezem, hogy a ' +
                  item.UgySzam +
                  ' sz??m?? fegyelmi elj??r??sban k??zvet??t??i elj??r??s ker??lj??n lefolytat??sra.',
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'Alul??rott ' +
                  item.Fogvatartott +
                  ' (n??v), ' +
                  item.FogvAzon +
                  ' nytsz. el??t??lt, mint ' +
                  item.ErintettsegFoka +
                  ' hozz??j??rulok, hogy a ' +
                  item.UgySzam +
                  ' sz??m?? fegyelmi elj??r??sban k??zvet??t??i elj??r??s ker??lj??n lefolytat??sra.',
              },
              {
                margin: [0, 0, 0, 5],
                text:
                  'Jelen nyilatkozatommal tudom??sul veszem, hogy k??zvet??t??i elj??r??s lefolytat??sa enged??lyezhet??, ha',
              },
              {
                margin: [15, 0, 0, 15],
                type: 'lower-alpha',
                separator: ')',
                italics: true,
                ol: [
                  'a fegyelmi elj??r??s al?? vont fogvatartott a fegyelems??rt??s elk??vet??s??t beismerte,',
                  'a fegyelmi elj??r??s al?? vont fogvatartott ??s a s??rtett a k??zvet??t??i elj??r??shoz hozz??j??rult, ??s',
                  'a fegyelems??rt??s jelleg??re, a fegyelmi elj??r??s al?? vont fogvatartott szem??ly??re tekintettel a fegyelmi elj??r??s lefolytat??sa vagy a feny??t??s v??grehajt??sa mell??zhet??.',
                ],
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'B??ntet??elj??r??s gyan??j??t megalapoz??, tov??bb?? olyan fegyelems??rt??s eset??n, amely miatt a s??rtett mag??nind??tv??nyt tett, k??zvet??t??i elj??r??s nem alkalmazhat??. Nem alkalmazhat?? a k??zvet??t?? elj??r??s akkor sem, ha a fegyelmi elj??r??s al?? vont fogvatartott vagy a s??rtett el??zetes letart??ztat??sban l??v?? terhelt.',
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'A k??zvet??t??i elj??r??s sor??n felmer??lt k??lts??geket az elj??r??s al?? vont fogvatartott viseli, kiv??ve azokat, amelyek a s??rtett fogvatartott ??rdekk??r??ben mer??ltek fel.',
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'A jelen k??zvet??t??i elj??r??s lefolytat??s??ra ir??nyul?? sz??nd??knyilatkozatot elolvas??s ??s ??rtelmez??st k??vet??en, mint akaratommal mindenben megegyez??t, j??v??hagy??lag al????rok.',
              },
              {
                margin: [0, 0, 0, 15],
                text:
                  'A jelen k??zvet??t??i elj??r??s lefolytat??s??ra ir??nyul?? sz??nd??knyilatkozatot elolvas??s ??s ??rtelmez??st k??vet??en, mint akaratommal mindenben megegyez??t, j??v??hagy??lag al????rok.',
              },
              {
                margin: [-5, 0, 0, 0],
                table: {
                  body: [
                    [
                      {
                        text: item.Telepules + ', ' + item.IktatasDatum,
                        border: [false, false, false, false],
                      },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 50,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 20,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 20,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                    ],
                  ],
                },
              },

              {
                margin: [-5, 0, 0, 10],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: item.Fogvatartott + ', ' + item.FogvAzon,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                margin: [0, 0, 0, 15],
                text: 'Reintegr??ci??s tiszt javaslata:',
              },
              javaslat,
              {
                margin: [-5, 0, 0, 0],
                table: {
                  body: [
                    [
                      {
                        text: item.Telepules + ', ' + item.IktatasDatum,
                        border: [false, false, false, false],
                      },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 50,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 20,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   canvas: [
                      //     {
                      //       type: 'line',
                      //       x1: 0,
                      //       y1: 12,
                      //       x2: 20,
                      //       y2: 12,
                      //       dash: { length: 2 },
                      //       lineWidth: 1,
                      //     },
                      //   ],
                      //   border: [false, false, false, false],
                      // },
                      // {
                      //   margin: [-5, 0, 0, 0],
                      //   text: '.',
                      //   border: [false, false, false, false],
                      // },
                    ],
                  ],
                },
              },

              {
                margin: [-5, 0, 0, 15],
                table: {
                  widths: [150, '*', '*'],
                  body: [
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 12,
                            x2: 170,
                            y2: 12,
                            dash: { length: 2 },
                            lineWidth: 1,
                          },
                        ],
                        border: [false, false, false, false],
                      },
                    ],
                    [
                      {
                        text: '',
                        border: [false, false, false, false],
                      },
                      {
                        text: '',
                        border: [false, false, false, false],
                        alignment: 'right',
                      },
                      {
                        text: item.ReintegraciosTiszt,
                        border: [false, false, false, false],
                        alignment: 'center',
                      },
                    ],
                  ],
                },
              },
              {
                id:
                  (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
                  (naplobejegyzesIds &&
                    naplobejegyzesIds.length > 1 &&
                    index >= 1)
                    ? 'NoBreak'
                    : '',
                margin: [0, 0, 0, 0],
                text: [
                  {
                    text:
                      'Alul??rott kijelentem, tudom??somra hozt??k, hogy a fegyelmi elj??r??st k??zvet??t??i elj??r??sra utalt??k, k??zvet??t??nek n??v: ???????????????????????????...... rendfokozat: ????????????????????????. beoszt??s: ???????????????????????????. b??zt??k meg.',
                  },
                  {
                    text:
                      'A k??zvet??t?? szem??ly??t elfogadom ??? kiz??r??s??t ind??tv??nyozom.',
                  },
                ],
              },
              {
                id:
                  (iktatasIds && iktatasIds.length > 1 && index >= 1) ||
                  (naplobejegyzesIds &&
                    naplobejegyzesIds.length > 1 &&
                    index >= 1)
                    ? 'NoBreak'
                    : '',
                stack: [
                  {
                    margin: [-5, 15, 0, 0],
                    table: {
                      body: [
                        [
                          {
                            text: item.Telepules + ',',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 50,
                                y2: 12,
                                dash: { length: 2 },
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                          {
                            margin: [-5, 0, 0, 0],
                            text: '.',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 20,
                                y2: 12,
                                dash: { length: 2 },
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                          {
                            margin: [-5, 0, 0, 0],
                            text: '.',
                            border: [false, false, false, false],
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 20,
                                y2: 12,
                                dash: { length: 2 },
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                          {
                            margin: [-5, 0, 0, 0],
                            text: '.',
                            border: [false, false, false, false],
                          },
                        ],
                      ],
                    },
                  },

                  {
                    margin: [-5, 0, 0, 15],
                    table: {
                      widths: [150, '*', '*'],
                      body: [
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                            alignment: 'right',
                          },
                          {
                            canvas: [
                              {
                                type: 'line',
                                x1: 0,
                                y1: 12,
                                x2: 170,
                                y2: 12,
                                dash: { length: 2 },
                                lineWidth: 1,
                              },
                            ],
                            border: [false, false, false, false],
                          },
                        ],
                        [
                          {
                            text: '',
                            border: [false, false, false, false],
                          },
                          {
                            text: '',
                            border: [false, false, false, false],
                            alignment: 'right',
                          },
                          {
                            text: item.Fogvatartott + ', ' + item.FogvAzon,
                            border: [false, false, false, false],
                            alignment: 'center',
                          },
                        ],
                      ],
                    },
                  },
                ],
              },
            ],
          };
        }),
      ],
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          previousNodesOnPage.length != 1 &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();

    /********* Ezzel tudjuk egyb??l nyomtat??ra k??ldeni ********/
    //pdfMake.createPdf(docDefinition).print();
  }

  async OsszefoglaloJelentesNyomtatas({ naplobejegyzesId, iktatasId }) {
    if (pdfMake.vfs == undefined) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }

    // var model = await apiService.OsszefoglaloJelentesNyomtatasByFegyelmiUgyId({
    //   fegyelmiUgyId: fegyelmiUgyId,
    // });

    var model;

    if (naplobejegyzesId != null) {
      model = await apiService.OsszefoglaloJelentesNyomtatasByNaplobejegyzesId({
        naplobejegyzesId,
      });
    } else if (iktatasId != null) {
      model = await apiService.OsszefoglaloJelentesNyomtatasByIktatasId({
        iktatasId,
      });
    } else return null;

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
          margin: [40, 20, 40, 20],
          text: pageCount >= 2 ? currentPage + '. oldal' : '',
          opacity: 0.5,
          margin: [0, 10, 0, 10],
          alignment: 'center',
          fontSize: 10,
        };
      },
      content: [
        {
          image:
            'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDODQ1MkJGRkUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODQ1MkMwMEUzN0UxMUU5QTNFOUUzMkYyMjNGNUMyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4NDUyQkZERTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4NDUyQkZFRTM3RTExRTlBM0U5RTMyRjIyM0Y1QzIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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',
          alignment: 'center',
          width: 30,
          height: 55,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.IntezetNev,
          alignment: 'center',
          fontSize: 12,
          opacity: 0.5,
          margin: [0, 0, 0, 10],
        },
        {
          text: model.Iktatoszam,
          alignment: 'right',
          fontSize: 10,
        },
        model.Naplok.map(function(item, index, currentPage) {
          var fejlec = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.Fejlec +
              `</div>
              `
          );
          var jegyzokonyvTartalma = htmlToPdfMake(
            `
          <div style="text-align: justify;">` +
              item.JegyzokonyvTartalma +
              `</div>
              `
          );
          return {
            stack: [
              // {
              //   widths: ['auto', 'auto'],
              //   style: 'tableExample',
              //   table: {
              //     body: [
              //       [
              //         {
              //           margin: [0, 0, 0, 0],
              //           text: model.IntezetNev,
              //           opacity: 0.5,
              //           border: [false, false, false, false],
              //         },
              //         {
              //           margin: [0, 0, 0, 0],
              //           text: model.Iktatoszam,
              //           opacity: 0.5,
              //           border: [false, false, false, false],
              //           alignment: 'right',
              //         },
              //       ],
              //       [
              //         {
              //           border: [false, false, false, false],
              //           colSpan: 2,
              //           margin: [0, 0, 0, 0],
              //           canvas: [
              //             {
              //               type: 'line',
              //               x1: 0,
              //               y1: 0,
              //               x2: 505,
              //               y2: 0,
              //               lineWidth: 0.5,
              //               opacity: 0.5,
              //             },
              //           ],
              //         },
              //       ],
              //     ],
              //   },
              // },
              {
                text:
                  index == 0
                    ? model.Ugyszam + ' sz??m?? ??gy ??sszefoglal?? jelent??se'
                    : '',
                alignment: 'center',
                fontSize: 14,
                bold: true,
                decoration: 'underline',
                margin: [0, 15, 0, 15],
              },
              // {
              //   text: '',
              //   fontSize: 12,
              //   bold: true,
              //   margin: [0, 10, 0, 4],
              // },
              fejlec,
              // {
              //   text: '',
              //   fontSize: 12,
              //   bold: true,
              //   margin: [0, 10, 0, 4],
              // },
              {
                border: [false, false, false, false],
                colSpan: 2,
                margin: [0, 0, 0, 0],
                canvas: [
                  {
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 509,
                    y2: 0,
                    lineWidth: 0.5,
                    strokeOpacity: 0.5,
                  },
                ],
              },

              //  {
              //    text: item.JegyzokonyvTartalma,
              //    fontSize: 12,
              //    margin: [10, 5, 0, 4],
              //  },
              jegyzokonyvTartalma,
              // {
              //   border: [false, false, false, false],
              //   colSpan: 2,
              //   margin: [0, 0, 0, 0],
              //   canvas: [
              //     {
              //       type: 'line',
              //       x1: 0,
              //       y1: 0,
              //       x2: 505,
              //       y2: 0,
              //       lineWidth: 0.5,
              //       opacity: 0.5,
              //     },
              //   ],
              // },
            ],
          };
        }),
      ],
      pageBreakBefore: function(
        currentNode,
        followingNodesOnPage,
        nodesOnNextPage,
        previousNodesOnPage
      ) {
        if (
          currentNode.id === 'NoBreak' &&
          currentNode.pageNumbers.length != 1
        ) {
          return true;
        }
        return false;
      },
      pageSize: 'A4',
      pageMargins: [40, 20, 40, 40],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        footersmall: {
          fontSize: 6,
        },
        tableExample: {
          margin: [-5, 30, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          margin: [0, 10, 5, 10],
        },
        tableHeader2: {
          bold: true,
          fontSize: 8,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        },
        tableCell: {
          fontSize: 8,
          alignment: 'right',
          margin: [0, 5, 5, 5],
        },
      },
      defaultStyle: {
        columnGap: 20,
        font: 'TimesNewRoman',
        fontSize: 10.5,
      },
    };

    pdfMake.fonts = {
      TimesNewRoman: {
        normal: 'TimesNewRoman.ttf',
        bold: 'TimesNewRoman.ttf',
        italics: 'TimesNewRoman.ttf',
        bolditalics: 'TimesNewRoman.ttf',
      },
    };
    pdfMake.createPdf(docDefinition).download();
  }
}
export const NyomtatvanyFunctions = new Nyomtatvany();
