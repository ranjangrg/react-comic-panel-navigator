"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelViews = exports.ComicData = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
original image sources /w links
Website: comicbookplus.com
1st page: 
https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/59.jpg
2nd page:
https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/60.jpg
3rd page:
https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/61.jpg
*/
var pageLinks = ["https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/59.jpg", "https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/60.jpg", "https://box01.comicbookplus.com/viewer/0f/0f018245506fbefbd70fa046cfe44eaa/61.jpg"];
var comicData = [{
  // "pageUrl": "/comic-sample-0.jpg", 
  "pageUrl": pageLinks[0],
  "panelData": [{
    "id": "1",
    "x": "25",
    "y": "25",
    "width": "359",
    "height": "380"
  }, {
    "id": "2",
    "x": "385",
    "y": "21",
    "width": "147",
    "height": "382"
  }, {
    "id": "3",
    "x": "544",
    "y": "16",
    "width": "329",
    "height": "385"
  }, {
    "id": "4",
    "x": "16",
    "y": "413",
    "width": "373",
    "height": "390"
  }, {
    "id": "5",
    "x": "408",
    "y": "420",
    "width": "465",
    "height": "383"
  }, {
    "id": "6",
    "x": "30",
    "y": "814",
    "width": "316",
    "height": "387"
  }, {
    "id": "7",
    "x": "346",
    "y": "813",
    "width": "191",
    "height": "392"
  }, {
    "id": "8",
    "x": "543",
    "y": "811",
    "width": "331",
    "height": "397"
  }],
  "naturalDims": {
    naturalHeight: 1233,
    naturalWidth: 905
  }
}, {
  // "pageUrl": "/comic-sample-1.jpg", 
  "pageUrl": pageLinks[1],
  "panelData": [{
    "id": "1",
    "x": "30",
    "y": "19",
    "width": "565",
    "height": "395"
  }, {
    "id": "2",
    "x": "599",
    "y": "21",
    "width": "277",
    "height": "396"
  }, {
    "id": "3",
    "x": "24",
    "y": "425",
    "width": "363",
    "height": "427"
  }, {
    "id": "4",
    "x": "394",
    "y": "423",
    "width": "483",
    "height": "392"
  }, {
    "id": "5",
    "x": "29",
    "y": "858",
    "width": "122",
    "height": "358"
  }, {
    "id": "6",
    "x": "159",
    "y": "860",
    "width": "275",
    "height": "358"
  }, {
    "id": "7",
    "x": "448",
    "y": "814",
    "width": "430",
    "height": "405"
  }],
  "naturalDims": {
    naturalHeight: 1233,
    naturalWidth: 905
  }
}, {
  // "pageUrl": "/comic-sample-2.jpg", 
  "pageUrl": pageLinks[2],
  "panelData": [{
    "id": "1",
    "x": "29",
    "y": "22",
    "width": "359",
    "height": "393"
  }, {
    "id": "2",
    "x": "384",
    "y": "21",
    "width": "503",
    "height": "409"
  }, {
    "id": "3",
    "x": "28",
    "y": "428",
    "width": "555",
    "height": "394"
  }, {
    "id": "4",
    "x": "586",
    "y": "432",
    "width": "305",
    "height": "398"
  }, {
    "id": "5",
    "x": "19",
    "y": "827",
    "width": "447",
    "height": "410"
  }, {
    "id": "6",
    "x": "465",
    "y": "824",
    "width": "417",
    "height": "420"
  }],
  "naturalDims": {
    naturalHeight: 1233,
    naturalWidth: 905
  }
}];
var PanelViews = Object.freeze({
  "FULL": 1,
  "PANEL": 2
});
exports.PanelViews = PanelViews;

var ComicData = /*#__PURE__*/function () {
  function ComicData() {
    _classCallCheck(this, ComicData);

    this.comicData = comicData;
  }

  _createClass(ComicData, [{
    key: "getPageUrl",
    value: function getPageUrl(pageIdx) {
      return this.comicData[pageIdx].pageUrl;
    }
  }, {
    key: "getPageNaturalDims",
    value: function getPageNaturalDims(pageIdx) {
      return this.comicData[pageIdx].naturalDims;
    }
  }, {
    key: "getPanelData",
    value: function getPanelData(pageIdx, panelIdx) {
      return this.comicData[pageIdx].panelData.find(function (pd) {
        return pd.id === String(panelIdx);
      });
    }
  }, {
    key: "getAllPanelData",
    value: function getAllPanelData(pageIdx) {
      return this.comicData[pageIdx].panelData;
    }
  }, {
    key: "getPageCount",
    value: function getPageCount() {
      return this.comicData.length;
    }
  }, {
    key: "getPanelCount",
    value: function getPanelCount(pageIdx) {
      var count = 0;

      if (this.comicData[pageIdx] && this.comicData[pageIdx].panelData) {
        count = this.comicData[pageIdx].panelData.length;
      }

      return count;
    }
  }]);

  return ComicData;
}();

exports.ComicData = ComicData;