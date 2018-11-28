webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalpage_modalpage__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_toolbox_description_toolbox_description__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ToolboxHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToolboxHomePage = /** @class */ (function () {
    function ToolboxHomePage(navCtrl, navParams, popoverCtrl, db, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.myToolBox = [];
        this.viewToolBox();
    }
    ToolboxHomePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ToolboxHomePage');
        // this.viewCtrl.showBackButton(false);
    };
    // images=[
    //   {'url':"../assets/imgs/download (1).jfif",
    //   'title':" Metal Step Cases"},
    //   {'url':"../../assets/imgs/48228426.png",
    //   'title':"Trolley cases"},
    //   {'url':"../../assets/imgs/R8782810-01.jpg",
    //   'title':"RS Components"},
    //   {'url':"../../assets/imgs/98220_150dpi_midres_1_2.jpg",
    //   'title':"Aviation Mantinance Kits"},
    //   {'url':"../../assets/imgs/s-l300.jpg",
    //   'title':"WorkShow CabinateKit"},
    //   {'url':"../../assets/imgs/48228426.png",
    //   'title':"Aircraft maintinance kit"},
    //   {'url':"../../assets/imgs/98220_150dpi_midres_1_2.jpg",
    //   'title':"workshow kit"}
    //  ]
    ToolboxHomePage.prototype.openmodel = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modalpage_modalpage__["a" /* ModalpagePage */]);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function () {
            _this.viewToolBox();
        });
    };
    ToolboxHomePage.prototype.viewToolBox = function () {
        var _this = this;
        this.db.getToolBox().subscribe(function (response) {
            _this.myToolBox = [];
            console.log(response);
            for (var i in response) {
                _this.myToolBox.push({
                    toolboxImage: response[i]['tb_image'],
                    toolboxName: response[i]['tb_name'],
                    toolboxId: response[i]['tb_id']
                });
            }
        });
    };
    ToolboxHomePage.prototype.nextPage = function (toolboxId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_toolbox_description_toolbox_description__["a" /* ToolboxDescriptionPage */], {
            toolboxId: toolboxId
        });
    };
    ToolboxHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toolbox-home',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-home\toolbox-home.html"*/'<!-- <ion-header>\n\n    <ion-navbar color="blue">\n\n        <ion-title>Tool Box Home</ion-title>\n\n        <a class="icon-circle">\n\n            <i class="ion-alert"></i>\n\n        </a>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <button ion-button style="background-color:#E8B92E;" (click)="openmodel($event)">+ Add Tool Box</button><br><br>\n\n    <ion-card class="bg-content" *ngFor="let i of images">\n\n        <ion-card-content>\n\n            <img src={{i.url}} class="imgurl"/>\n\n            <h6>{{i.title}}</h6>\n\n            \n\n        </ion-card-content>            \n\n    </ion-card>           \n\n</ion-content> -->\n\n<ion-header >\n\n        <ion-navbar class="toolbar-content">\n\n            <ion-buttons start>\n\n                    <img ion-button src="../../assets/imgs/Home.PNG">\n\n            </ion-buttons>\n\n            <ion-buttons end>\n\n                        <img ion-button src="../../assets/imgs/logout.PNG">\n\n            </ion-buttons>\n\n            <ion-title>Tool Box Home</ion-title>\n\n            <!-- <a class="icon-circle">\n\n                <i class="ion-alert"></i>\n\n            </a> -->\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n<ion-content>\n\n    <button ion-button style="background-color:#E8B92E;" (click)="openmodel($event)">+ Add Tool Box</button><br><br>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 *ngFor = \'let box of myToolBox\'>    \n\n                <ion-card (click)="nextPage(box.toolboxId)">\n\n                    <img src="{{ box.toolboxImage }}">\n\n                    <ion-card-content>  \n\n                        <ion-card-title>{{ box.toolboxName }}</ion-card-title>\n\n                    </ion-card-content>            \n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <!-- <button ion-button (click)="go()">go</button> -->\n\n</ion-content>'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-home\toolbox-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__services_database_service__["a" /* DBService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ToolboxHomePage);
    return ToolboxHomePage;
}());

//# sourceMappingURL=toolbox-home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AircraftScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AircraftScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AircraftScanPage = /** @class */ (function () {
    function AircraftScanPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.count = 0;
        this.myTool = [];
        this.rfid = ['To1', 'to3', 'To4'];
        // this.db.getAllTools();
        this.viewTool();
    }
    AircraftScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AircraftScanPage');
    };
    AircraftScanPage.prototype.viewTool = function () {
        var _this = this;
        this.scanStatus = 'Scanning';
        this.db.getAllTools().subscribe(function (response) {
            _this.myTool = [];
            console.log(response);
            for (var i in response) {
                if (_this.rfid.includes(response[i]['tool_id'])) {
                    _this.myTool.push({
                        toolImage: response[i]['tool_image'],
                        toolName: response[i]['tool_name'],
                        toolDescription: response[i]['tool_desc'],
                        toolId: response[i]['tool_id']
                    });
                    _this.count++;
                }
            }
        });
        this.scanStatus = 'Scan Completed';
    };
    AircraftScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aircraft-scan',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\aircraft-scan\aircraft-scan.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Aircraft Scan</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!-- <span style="color: lightgrey;"><span (click)="gotoHome()">Home</span> >> <span>{{ toolboxName }}</span> >> <span style="color: #0066ff">Scan</span></span> -->\n  \n    <!-- <ion-card>\n        <ion-card-content>\n            <img src="{{ toolboxImage }}" float-left class="toolbox-image" /> \n            <p class="toolbox-para"><span style="color: #0066ff">{{ toolboxDescription }}</span><br>\n            Type: {{ toolboxType }}</p>\n        </ion-card-content>\n    </ion-card>    -->\n    <span style="color: lightgrey;">{{ scanStatus }}</span><span style="color: red;float: right;">Found# {{ count }}</span>\n    <hr style="display: block;  overflow: hidden;  border-style: unset;  border-width: 1px; border-color: lightgray;">\n    <ion-card *ngFor = \'let tool of myTool\'>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col   col-4 >\n            <img src="{{ tool.toolImage }}" float-left class="tool-image" style="width:45px; height: 45px;"/> </ion-col>\n           <ion-col col-4>\n            <p class="tool-para">{{ tool.toolName }}<br>\n                <span class="txt">{{ tool.toolDescription | slice:0:25 }}</span><span *ngIf="tool.toolDescription.length > 25">...</span></p></ion-col>\n            <!-- <ion-col col-4>\n                <img class="status_img" src="../../assets/imgs/Found.PNG" *ngIf="tool.status == \'found\'">\n                <img class="status_img" src="../../assets/imgs/Missing.PNG" *ngIf="tool.status == \'missing\'">\n            </ion-col> -->\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>   '/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\aircraft-scan\aircraft-scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */]])
    ], AircraftScanPage);
    return AircraftScanPage;
}());

//# sourceMappingURL=aircraft-scan.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditToolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditToolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditToolPage = /** @class */ (function () {
    function EditToolPage(navCtrl, navParams, db, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.db.getToolById({ 'toolId': navParams.get('toolId') }).subscribe(function (response) {
            // console.log("toolbox"+response);
            _this.toolName = response[0]['tool_name'];
            _this.toolId = response[0]['tool_id'];
            _this.toolType = response[0]['tool_type'];
            _this.toolDescription = response[0]['tool_desc'];
            _this.captureDataURL = response[0]['tool_image'];
        });
    }
    EditToolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditToolPage');
    };
    EditToolPage.prototype.capture = function () {
        // const cameraOptions: CameraOptions = {
        //   quality: 50,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(cameraOptions)
        // .then((imageData) => {
        //   this.captureDataURL = 'data:image/jpeg;base64,' + imageData;
        //   console.log(this.captureDataURL);
        // })
        // .catch(err => {
        //   console.log(err);
        // });
        // this.captureDataURL = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6192516.jpg';
        // this.captureDataURL = 'data:image/jpeg;base64,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';
        this.captureDataURL = 'https://img.freepik.com/free-vector/carpentry-tools-collecti_1096-325.jpg?size=338&ext=jpg';
    };
    EditToolPage.prototype.saveToDB = function () {
        // console.log(this.user);
        // if(this.owner == 'Team') {
        //   this.user = 'Team';
        // }
        this.db.editTool({
            'toolName': this.toolName,
            'toolId': this.toolId,
            'toolType': this.toolType,
            'toolDescription': this.toolDescription,
            'toolImage': this.captureDataURL
        })
            .subscribe(function (response) {
            console.log(response);
        });
        console.log(this.toolType);
        this.close();
    };
    EditToolPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EditToolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-tool',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\edit-tool\edit-tool.html"*/'<ion-grid class="content">\n  <ion-row>\n      <ion-col col-10></ion-col>\n      <ion-col col-2><span (click)="close()" style="float: right;"><img src="../../assets/imgs/close.PNG" class="close-img"></span></ion-col>\n    <ion-col col-4 >\n    </ion-col>\n    <ion-col col-4>\n      <h5>Edit Tool</h5>\n    </ion-col>\n    <ion-col col-4>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-4>\n    <ion-label>Tool Name</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <ion-input type=\'text\' [(ngModel)]=\'toolName\' class="text-input-md" ></ion-input>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Tool Id</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <ion-input type=\'text\' [(ngModel)]=\'toolId\'class="text-input-md" disabled ></ion-input>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Type</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <!-- <ion-input type=\'text\' [(ngModel)]=\'toolType\' class="text-input-md" ></ion-input> -->\n  <ion-select [(ngModel)]=\'toolType\' placeholder="Select" placeholder-color="White" multiple="false">\n    <ion-option value=\'common\'>Common</ion-option>\n    <ion-option value=\'critical\'>Critical</ion-option>\n  </ion-select>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Description</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <textarea [(ngModel)]=\'toolDescription\' class="text-input-md"></textarea>  \n</ion-col>\n<!-- <ion-col col-4>\n  <ion-label>Owner</ion-label>\n</ion-col>\n<ion-col col-2>\n  <p  class="icon">:</p>\n</ion-col> -->\n<!-- <ion-col col-6>\n  <input type="radio" value="Employee" name="group1" (click)="radioFunction(\'Employee\')" checked><span>Employee</span>\n  <input type="radio" value="Team" name="group1" (click)="radioFunction(\'Team\')"><span>Team</span>\n</ion-col>\n<ion-col col-6>\n</ion-col>\n<ion-col col-6>\n    <ion-select [(ngModel)]=\'user\' placeholder="Select" placeholder-color="White" *ngIf="owner==\'Employee\'" multiple="false">\n        <ion-option *ngFor=\'let u of users\' class="u">{{ u }}</ion-option>\n      </ion-select>\n</ion-col> -->\n  <ion-col col-6>\n      <ion-content class="imgcontent"><img [src]=\'captureDataURL\' *ngIf=\'captureDataURL\'></ion-content>\n      \n</ion-col>\n<ion-col col-6>\n<a href="#" (click)=\'capture()\'>+Add Tool Image</a>\n</ion-col>\n<ion-col col-6>\n    \n  </ion-col>\n  <ion-col col-6>\n      <button ion-button style="background-color:#E8B92E;" (click)="saveToDB()">Proceed</button>\n</ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\edit-tool\edit-tool.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], EditToolPage);
    return EditToolPage;
}());

//# sourceMappingURL=edit-tool.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_scan_toolbox_scan__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aircraft_scan_aircraft_scan__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ScanModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanModalPage = /** @class */ (function () {
    function ScanModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScanModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanModalPage');
    };
    ScanModalPage.prototype.toolboxScan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__toolbox_scan_toolbox_scan__["a" /* ToolboxScanPage */], {
            toolboxId: this.navParams.get('toolboxId')
        });
    };
    ScanModalPage.prototype.aircraftScan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aircraft_scan_aircraft_scan__["a" /* AircraftScanPage */]);
    };
    ScanModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan-modal',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\scan-modal\scan-modal.html"*/'<!--\n  Generated template for the ScanModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-grid class="content">\n  <ion-row>\n    <!-- <ion-col col-4></ion-col> -->\n    <ion-col col-12>\n      <button ion-button full style="background-color: #E8B92E" (click)="toolboxScan()">Scan Tool Box</button>\n    </ion-col>\n    <!-- <ion-col col-4></ion-col> -->\n    <!-- <ion-col col-4></ion-col> -->\n    <ion-col col-12>\n      <button ion-button full style="background-color: #E8B92E" (click)=\'aircraftScan()\'>Aircraft Scan</button>\n    </ion-col>\n    <!-- <ion-col col-4></ion-col> -->\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\scan-modal\scan-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScanModalPage);
    return ScanModalPage;
}());

//# sourceMappingURL=scan-modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aircraft-scan/aircraft-scan.module": [
		286,
		3
	],
	"../pages/edit-tool/edit-tool.module": [
		287,
		2
	],
	"../pages/header/header.module": [
		288,
		0
	],
	"../pages/scan-modal/scan-modal.module": [
		289,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LoginDataProvider } from '../../providers/login-data/login-data';
//import { RestProvider } from '../../providers/rest/rest';
var ToolboxScanPage = /** @class */ (function () {
    function ToolboxScanPage(navCtrl, navParams, modalCtrl, db) {
        /*this.restProvider.getCall(this.toolboxurl,"")
          .then(data => {
              this.toolboxsdata = [{"name":"tool1","id":1001,"dec":"sss","size":"2X4X5","image":["path1","path2"],"type":"somewhat"},{"name":"tool2","id":1002,"dec":"sss","size":"2X4X5","image":["path1","path2"],"type":"somewhat"},{"name":"tool3","id":1003,"dec":"sss","size":"2X4X5","image":["path1","path2"],"type":"somewhat"},{"name":"tool4","id":1004,"dec":"sss","size":"2X4X5","image":["path1","path2"],"type":"somewhat"}];
              console.log("result", this.toolboxsdata);
              console.log("type", typeof(this.toolboxsdata));
            });*/
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.myTool = [];
        this.rfid = ['To1'];
        this.count = 0;
        this.toolboxId = navParams.get('toolboxId');
        this.viewToolBox();
        this.viewTool();
    }
    // doRefresh(refresher) {
    //   /*this.restProvider.getCall(this.toolboxurl,undefined)
    //   .then(data => {
    //       // this.toolboxdata = JSON.parse(data['_body']);
    //       // this.logindata.setairportData( this.toolboxdata);
    //       //   this.toolboxdata = this.logindata.getairportData();
    //       //   refresher.complete();
    //   });*/
    // }
    ToolboxScanPage.prototype.viewTool = function () {
        var _this = this;
        this.scanStatus = 'Scanning';
        this.db.getToolsById({ toolboxId: this.toolboxId }).subscribe(function (response) {
            _this.myTool = [];
            console.log(response);
            for (var i in response) {
                if (_this.rfid.includes(response[i]['tool_id'])) {
                    _this.status = 'found';
                }
                else {
                    _this.status = 'missing';
                    _this.count++;
                }
                _this.myTool.push({
                    toolImage: response[i]['tool_image'],
                    toolName: response[i]['tool_name'],
                    toolDescription: response[i]['tool_desc'],
                    toolId: response[i]['tool_id'],
                    status: _this.status
                });
            }
        });
        this.scanStatus = 'Scan Completed';
    };
    ToolboxScanPage.prototype.viewToolBox = function () {
        var _this = this;
        this.db.getToolBoxById({ 'toolboxId': this.toolboxId }).subscribe(function (response) {
            _this.toolboxName = response[0]['tb_name'];
            _this.toolboxId = response[0]['tb_id'];
            _this.toolboxType = response[0]['tb_type'];
            _this.toolboxDescription = response[0]['tb_desc'];
            _this.toolboxImage = response[0]['tb_image'];
        });
    };
    ToolboxScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toolbox-scan',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-scan\toolbox-scan.html"*/'<!-- <ion-header>\n    <ion-navbar color="primary">\n            <ion-buttons left>\n              <button ion-button menuToggle >\n                <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n              </button>\n            </ion-buttons>\n            <ion-title>Toolbox Scan </ion-title>  \n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher > -->\n    <!--(ionRefresh)="doRefresh($event)">-->\n      <!-- <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n<ion-list style="background-color: #BEC2C7"  *ngFor = "let data of this.toolboxsdata let index = index ">\n<ion-item-sliding>\n<ion-item color="light">\n  <ion-row>\n    <ion-col col-2>\n        <ion-icon name="cube" style="font-size:2.2em; margin-top:25px;"></ion-icon>\n    </ion-col>\n    <ion-col col-8>\n  <h3 style="margin-top: 0.7rem !important;">Id : {{data.id}} </h3>\n  <h4>Tool Name : {{data.name}}</h4>\n  <h4>Toolbox Description : {{data.dec}} </h4>\n  <h4>Tools Count : </h4>\n  </ion-col>\n  <ion-col col-2>\n      <ion-icon name="qr-scanner" style="font-size:2.2em; margin-top:25px;"></ion-icon>\n  </ion-col>\n  </ion-row>\n</ion-item>\n\n \n<ion-item-options>\n      <button ion-button color="primary" (click)="edit($event, data)">\n              <ion-icon name="add-circle"></ion-icon> Add\n            </button>\n      <button ion-button color="light" (click)="edit($event, data)">\n      <ion-icon name="create"></ion-icon> Edit\n    </button>\n     <button ion-button color="danger" (click)="delete(data)">\n      <ion-icon name="trash"></ion-icon>  Delete\n    </button>\n </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n\n<ion-fab right bottom>\n    <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n\n</ion-content> -->\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Tool Box Scan</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <span style="color: lightgrey;"><span (click)="gotoHome()">Home</span> >> <span>{{ toolboxName }}</span> >> <span style="color: #0066ff">Scan</span></span>\n  \n    <ion-card>\n        <ion-card-content>\n            <img src="{{ toolboxImage }}" float-left class="toolbox-image" /> \n            <p class="toolbox-para"><span style="color: #0066ff">{{ toolboxDescription }}</span><br>\n            Type: {{ toolboxType }}</p>\n        </ion-card-content>\n    </ion-card>   \n    <!-- <button ion-button style="background-color:#E8B92E;justify-content: flex-start;width:130px;height:35px;" (click)="editmodel($event)">Edit Tool Box</button>\n    <button ion-button style="background-color:#E8B92E;justify-content: flex-start;width:130px;height:35px;margin-left:18px;" (click)="openmodel($event)">Add New Tool</button>\n    <br> -->\n    <span style="color: lightgrey;">{{ scanStatus }}</span><span style="color: red;float: right;">Missing: {{ count }}</span>\n    <hr style="display: block;  overflow: hidden;  border-style: unset;  border-width: 1px; border-color: lightgray;">\n    <!-- <ion-grid>\n        <ion-row>\n            <ion-col col-12 *ngFor = \'let box of myTool\'>    \n                <ion-card>\n                    <ion-list>\n                        <span ion-item>\n                            <img src="{{ box.toolImage }}" style="width:55px;" item-start><ion-label style="margin-top:-40px;" style="color: blue">{{ box.toolName }}</ion-label>\n                            <ion-label><br>{{ box.toolDescription }}</ion-label>\n                           \n                        </span> -->\n                    <!-- <ion-card-content>  \n                        <ion-card-title></ion-card-title>\n                    </ion-card-content>  -->\n                    <!-- </ion-list>           \n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-content> -->\n  <ion-card *ngFor = \'let tool of myTool\'>\n    <ion-card-content>\n        \n        <!-- <img src="{{ tool.toolImage }}" float-left class="tool-image" style="width:55px; height: 55px;"/> \n        <p class="tool-para"><span style="color: #0066ff"><b>{{ tool.toolName }}</b></span><br>\n            {{ tool.toolDescription | slice:0:25 }}<span *ngIf="tool.toolDescription.length > 25">...</span> -->\n        <!-- <ion-icon float-right name="checkmark" *ngIf="tool.status == \'found\'"></ion-icon> -->\n        <!-- <img src="../../assets/imgs/Found.PNG">\n        <ion-icon float-right name="close" *ngIf="tool.status == \'missing\'"></ion-icon>\n        </p> -->\n        <!-- <ion-item>\n            {{ box.toolName }}\n        </ion-item>\n        <ion-item text-wrap>\n            {{ box.toolDescription | slice:0:30 }}<span *ngIf="box.toolDescription.length > 30">...</span>\n        </ion-item> -->\n        <!-- <ion-fab right bottom>\n            <button ion-fab (click)="scanModal($event)"><ion-icon name="qr-scanner"></ion-icon></button>\n        </ion-fab> -->\n        <ion-grid>\n                <ion-row>\n                    <ion-col   col-4 >\n            <img src="{{ tool.toolImage }}" float-left class="tool-image" style="width:45px; height: 45px;"/> </ion-col>\n           <ion-col col-4>\n            <p class="tool-para">{{ tool.toolName }}<br>\n                <span class="txt">{{ tool.toolDescription | slice:0:25 }}</span><span *ngIf="tool.toolDescription.length > 25">...</span></p></ion-col>\n            <ion-col col-4>\n                <img class="status_img" src="../../assets/imgs/Found.PNG" *ngIf="tool.status == \'found\'">\n                <img class="status_img" src="../../assets/imgs/Missing.PNG" *ngIf="tool.status == \'missing\'">\n            </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>   '/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-scan\toolbox-scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */]])
    ], ToolboxScanPage);
    return ToolboxScanPage;
}());

//# sourceMappingURL=toolbox-scan.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DBService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DBService = /** @class */ (function () {
    function DBService(http) {
        this.http = http;
    }
    DBService.prototype.addToolBox = function (toolbox) {
        return this.http.post("https://localhost:8080/toolbox/add", toolbox);
    };
    DBService.prototype.getToolBox = function () {
        return this.http.get("http://localhost:8080/toolbox/viewToolbox");
    };
    DBService.prototype.getUsers = function () {
        return this.http.get("https://toolbox-server-code.herokuapp.com/users/userDetails");
    };
    DBService.prototype.loginUser = function (credentials) {
        return this.http.post("https://toolbox-server-code.herokuapp.com/users/userLogin", credentials);
    };
    DBService.prototype.getToolBoxById = function (id) {
        return this.http.post("http://localhost:8080/toolbox/viewToolboxByID", id);
    };
    DBService.prototype.editToolBox = function (toolbox) {
        return this.http.post("http://localhost:8080/toolbox/edit", toolbox);
    };
    DBService.prototype.addTool = function (tool) {
        return this.http.post("http://localhost:8080/tool/add", tool);
    };
    DBService.prototype.getToolsById = function (id) {
        return this.http.post("http://localhost:8080/tool/viewToolById", id);
    };
    DBService.prototype.editTool = function (tool) {
        return this.http.post("http://localhost:8080/tool/edit", tool);
    };
    DBService.prototype.getToolById = function (id) {
        return this.http.post("http://localhost:8080/tool/getToolById", id);
    };
    DBService.prototype.getAllTools = function () {
        return this.http.get("http://localhost:8080/tool/getAllTools");
    };
    DBService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DBService);
    return DBService;
}());

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbox_home_toolbox_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage }from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.gotopage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__toolbox_home_toolbox_home__["a" /* ToolboxHomePage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.db.loginUser({
            'email': this.email,
            'password': this.password
        })
            .subscribe(function (response) {
            if (response) {
                _this.gotopage();
            }
            else {
                alert('Invalid User');
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <img src="../../assets/imgs/united.jpg " style="padding:30px 30px 0px 50px;">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="content"> -->\n<!-- <ion-icon name="md-remove-circle" class="icon"></ion-icon> -->\n<!-- <ion-input type="text" placeholder="UserName"class="ion-input"></ion-input>\n<br>\n<ion-input type="text" placeholder="PassWord" class="ion-input2"></ion-input>\n<h6 (click)="gotopage()">Forget/Change password</h6>\n<button ion-button full class="btn">login</button>\n</ion-content> -->\n<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="../../assets/imgs/united.jpg " style="padding:30px 30px 0px 50px;">\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="content">\n<!-- <ion-icon name="md-remove-circle" class="icon"></ion-icon> -->\n  <ion-list>\n    <ion-item>\n      <ion-label><ion-icon name=\'person\'></ion-icon></ion-label>\n      <ion-input type="email" value=\'user1@user.com\' [(ngModel)]="email" placeholder="User Name"class="ion-input"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name=\'lock\'></ion-icon></ion-label>\n      <ion-input type="password" value=\'password\' [(ngModel)]="password" placeholder="Password" class="ion-input2"></ion-input>\n    </ion-item>\n    <h6 (click)="gotopage()">Forget/Change password</h6>\n    <button ion-button full class="btn" (click)="login()">Login</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_database_service__["a" /* DBService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalpagePage = /** @class */ (function () {
    function ModalpagePage(navCtrl, navParams, viewCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.owner = 'Employee';
        this.users = [];
        // this.text ='hello world';
        this.db.getUsers().subscribe(function (response) {
            // console.log(response);
            for (var i in response) {
                _this.users.push(response[i]['emp_id']);
            }
        });
    }
    ModalpagePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalpagePage');
    };
    ModalpagePage.prototype.capture = function () {
        // const cameraOptions: CameraOptions = {
        //   quality: 50,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(cameraOptions)
        // .then((imageData) => {
        //   this.captureDataURL = 'data:image/jpeg;base64,' + imageData;
        //   console.log(this.captureDataURL);
        // })
        // .catch(err => {
        //   console.log(err);
        // });
        this.captureDataURL = 'https://images.homedepot-static.com/productImages/9a85624b-ca37-4c10-8444-261189871011/svn/black-husky-portable-tool-boxes-235580-64_1000.jpg';
    };
    ModalpagePage.prototype.saveToDB = function () {
        // console.log(this.user);
        if (this.owner == 'Team') {
            this.user = 'Team';
        }
        this.db.addToolBox({
            'toolboxName': this.toolboxName,
            'toolboxId': this.toolboxId,
            'toolboxType': this.toolboxType,
            'toolboxDescription': this.toolboxDescription,
            'toolboxImage': this.captureDataURL,
            'toolboxOwner': this.user
        })
            .subscribe(function (response) {
            console.log(response);
        });
        this.close();
    };
    ModalpagePage.prototype.radioFunction = function (value) {
        this.owner = value;
        // console.log(this.owner);
    };
    ModalpagePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpage',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\modalpage\modalpage.html"*/'<!--\n  Generated template for the ModalpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  <ion-header>  <ion-navbar> </ion-navbar></ion-header>\n-->\n\n<!-- <ion-content class="content"padding>  \n  <ion-title class="toolbar-title">New Tool Box</ion-title><br>\n  <ion-list>\n  <ion-label style="display: inline;font-size:1.2rem;">Tool Box Name : </ion-label>\n  <ion-input type="text" [(ngModel)]=\'toolboxName\' style="border-bottom: 1px solid white;width:125px;height:26px;display:inline-block;color:white;color:white;"></ion-input><br>\n  <ion-label style="display: inline;font-size:1.2rem;">Tool Box ID : </ion-label>\n  <ion-input [(ngModel)]=\'toolboxId\' style="border-bottom: 1px solid white;width:105px;height:26px;display:inline-block;margin-left:21px;color:white;"> </ion-input>\n  <br>\n  <ion-label style="display: inline;font-size:1.2rem;">Type : </ion-label>\n  <ion-input [(ngModel)]=\'toolboxType\' style="border-bottom: 1px solid white;width:125px;height:26px;display:inline-block;margin-left:55px; color:white;"></ion-input><br><br>\n  <ion-label style="display: inline;font-size:1.2rem;">Description : </ion-label>\n  <textarea class="textarea"[(ngModel)]=\'toolboxDescription\' ></textarea><br><br>  \n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <span>Owner</span>\n        </ion-col>\n        <ion-col col-8>\n            <input type="radio" value="Employee" name="group1" (click)="radioFunction(\'Employee\')" checked><span>Employee</span>\n            <input type="radio" value="Team" name="group1" (click)="radioFunction(\'Team\')"><span>Team</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n    <div>\n      <ion-select [(ngModel)]=\'user\' placeholder="Select" placeholder-color="White" *ngIf="owner==\'Employee\'" multiple="false">\n        <ion-option *ngFor=\'let u of users\'>{{ u }}</ion-option>\n      </ion-select>\n    </div>\n  <img [src]=\'captureDataURL\' *ngIf=\'captureDataURL\'>\n  <button ion-button (click)=\'capture()\'>Add Tool Image</button> -->\n  <!-- <ion-label style="display:inline;font-size:1.2rem;">Image URL</ion-label>\n  <ion-input type="url" [(ngModel)]=\'ImageUrl\' style="border-bottom: 1px solid white;width:125px;height:26px;display:inline-block;color:white;color:white;"></ion-input>\n  <img [src]=\'ImageUrl\'> -->\n  <!-- <button ion-button style="background-color:#E8B92E;" (click)="saveToDB()">Proceed</button>\n</ion-list>\n</ion-content> -->\n\n\n<ion-grid class="content">\n  <ion-row>\n    <ion-col col-10></ion-col>\n    <ion-col col-2><span (click)="close()" style="float: right;"><img src="../../assets/imgs/close.PNG" class="close-img"></span></ion-col>\n    <ion-col col-4 >\n    </ion-col>\n    <ion-col col-4>\n      <h5>New Tool Box</h5>\n    </ion-col>\n    <ion-col col-4>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-4>\n    <ion-label>Toolbox Name</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <ion-input type=\'text\' [(ngModel)]=\'toolboxName\' class="text-input-md" ></ion-input>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Toolbox Id</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <ion-input type=\'text\' [(ngModel)]=\'toolboxId\'class="text-input-md" ></ion-input>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Type</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <!-- <ion-input type=\'text\' [(ngModel)]=\'toolboxType\' class="text-input-md" ></ion-input> -->\n  <ion-select [(ngModel)]=\'toolboxType\' placeholder="Select" placeholder-color="White" multiple="false">\n    <ion-option value=\'standard\'>Standard</ion-option>\n    <ion-option value=\'critical\'>Critical</ion-option>\n  </ion-select>\n</ion-col>\n<ion-col col-4>\n    <ion-label>Description</ion-label>\n  </ion-col>\n  <ion-col col-2>\n      <p  class="icon">:</p>\n  </ion-col>\n  <ion-col col-6>\n  <textarea [(ngModel)]=\'toolboxDescription\' class="text-input-md"></textarea>  \n</ion-col>\n<ion-col col-4>\n  <ion-label>Owner</ion-label>\n</ion-col>\n<ion-col col-2>\n  <p  class="icon">:</p>\n</ion-col>\n<ion-col col-6>\n  <input type="radio" value="Employee" name="group1" (click)="radioFunction(\'Employee\')" checked><span>Employee</span>\n  <input type="radio" value="Team" name="group1" (click)="radioFunction(\'Team\')"><span>Team</span>\n</ion-col>\n<ion-col col-6>\n</ion-col>\n<ion-col col-6>\n    <ion-select [(ngModel)]=\'user\' placeholder="Select" placeholder-color="White" *ngIf="owner==\'Employee\'" multiple="false">\n        <ion-option *ngFor=\'let u of users\' class="u">{{ u }}</ion-option>\n      </ion-select>\n</ion-col>\n  <ion-col col-6>\n      <ion-content class="imgcontent"><img [src]=\'captureDataURL\' *ngIf=\'captureDataURL\'></ion-content>\n      \n</ion-col>\n<ion-col col-6>\n<a href="#" (click)=\'capture()\'>+Add Tool Image</a>\n</ion-col>\n<ion-col col-6>\n    \n  </ion-col>\n  <ion-col col-6>\n      <button ion-button style="background-color:#E8B92E;" (click)="saveToDB()">Proceed</button>\n</ion-col>\n  </ion-row>\n</ion-grid>\n\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\modalpage\modalpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */]])
    ], ModalpagePage);
    return ModalpagePage;
}());

//# sourceMappingURL=modalpage.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_tool_add_tool__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_edit_toolbox_edi__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_database_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbox_home_toolbox_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_tool_edit_tool__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scan_modal_scan_modal__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ToolboxDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToolboxDescriptionPage = /** @class */ (function () {
    function ToolboxDescriptionPage(navCtrl, viewCtrl, navParams, popoverCtrl, db) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.db = db;
        this.myTool = [];
        this.toolboxId = navParams.get('toolboxId');
        this.viewToolBox();
        this.viewTool();
    }
    ToolboxDescriptionPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ToolboxDescriptionPage');
        this.viewCtrl.showBackButton(false);
    };
    ToolboxDescriptionPage.prototype.openmodel = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_tool_add_tool__["a" /* AddtoolPage */], {
            toolboxId: this.toolboxId
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function () {
            _this.viewTool();
        });
    };
    ToolboxDescriptionPage.prototype.editmodel = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__toolbox_edit_toolbox_edi__["a" /* EditToolBox */], {
            toolboxId: this.toolboxId
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function () {
            _this.viewToolBox();
        });
    };
    ToolboxDescriptionPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__toolbox_home_toolbox_home__["a" /* ToolboxHomePage */]);
    };
    ToolboxDescriptionPage.prototype.viewToolBox = function () {
        var _this = this;
        this.db.getToolBoxById({ 'toolboxId': this.toolboxId }).subscribe(function (response) {
            _this.toolboxName = response[0]['tb_name'];
            _this.toolboxId = response[0]['tb_id'];
            _this.toolboxType = response[0]['tb_type'];
            _this.toolboxDescription = response[0]['tb_desc'];
            _this.toolboxImage = response[0]['tb_image'];
        });
    };
    ToolboxDescriptionPage.prototype.viewTool = function () {
        var _this = this;
        this.db.getToolsById({ toolboxId: this.toolboxId }).subscribe(function (response) {
            _this.myTool = [];
            console.log(response);
            for (var i in response) {
                _this.myTool.push({
                    toolImage: response[i]['tool_image'],
                    toolName: response[i]['tool_name'],
                    toolDescription: response[i]['tool_desc'],
                    toolId: response[i]['tool_id']
                });
            }
        });
    };
    ToolboxDescriptionPage.prototype.editToolModal = function (myEvent, id) {
        var _this = this;
        console.log(id);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__edit_tool_edit_tool__["a" /* EditToolPage */], {
            toolId: id
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function () {
            _this.viewTool();
        });
    };
    ToolboxDescriptionPage.prototype.scanModal = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__scan_modal_scan_modal__["a" /* ScanModalPage */], {
            toolboxId: this.toolboxId
        });
        popover.present({
            ev: myEvent
        });
    };
    ToolboxDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toolbox-description',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-description\toolbox-description.html"*/'<!--\n  Generated template for the ToolboxDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n        <ion-navbar class="toolbar-content">\n            <ion-buttons start>\n                    <img ion-button src="../../assets/imgs/Home.PNG">\n            </ion-buttons>\n            <ion-buttons end>\n                        <img ion-button src="../../assets/imgs/logout.PNG">\n            </ion-buttons>\n            <ion-title>Tool Box Description</ion-title>\n            <!-- <a class="icon-circle">\n                <i class="ion-alert"></i>\n            </a> -->\n        </ion-navbar>\n    </ion-header>\n  \n  <ion-content padding>\n    <span style="color: lightgrey;"><span (click)="gotoHome()">Home</span> >> <span style="color: #0066ff">{{ toolboxName }}</span></span>\n  \n    <ion-card>\n        <ion-card-content>\n            <img src="{{ toolboxImage }}" float-left class="toolbox-image" /> \n            <p class="toolbox-para"><span style="color: #0066ff">{{ toolboxDescription }}</span><br>\n            Type: {{ toolboxType }}</p>\n        </ion-card-content>\n    </ion-card>   \n    <button ion-button style="background-color:#E8B92E;justify-content: flex-start;width:130px;height:35px;" (click)="editmodel($event)">Edit Tool Box</button>\n    <button ion-button style="background-color:#E8B92E;justify-content: flex-start;width:130px;height:35px;margin-left:18px;" (click)="openmodel($event)">Add New Tool</button>\n    <br>\n    <span style="color: lightgrey;">Tools List</span><span style="color: lightgrey;float: right;">Items:{{ myTool. length }}</span>\n    <hr style="display: block;  overflow: hidden;  border-style: unset;  border-width: 1px; border-color: lightgray;">\n    <!-- <ion-grid>\n        <ion-row>\n            <ion-col col-12 *ngFor = \'let box of myTool\'>    \n                <ion-card>\n                    <ion-list>\n                        <span ion-item>\n                            <img src="{{ box.toolImage }}" style="width:55px;" item-start><ion-label style="margin-top:-40px;" style="color: blue">{{ box.toolName }}</ion-label>\n                            <ion-label><br>{{ box.toolDescription }}</ion-label>\n                           \n                        </span> -->\n                    <!-- <ion-card-content>  \n                        <ion-card-title></ion-card-title>\n                    </ion-card-content>  -->\n                    <!-- </ion-list>           \n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-content> -->\n  <ion-card *ngFor = \'let tool of myTool\'>\n    <ion-card-content>\n        <!-- <img src="{{ tool.toolImage }}" float-left class="tool-image" style="width:55px; height: 55px;"/> \n        <p class="tool-para"><span style="color: #0066ff"><b>{{ tool.toolName }}</b></span><br>\n            {{ tool.toolDescription | slice:0:25 }}<span *ngIf="tool.toolDescription.length > 25">...</span>\n        <ion-icon float-right name="create" (click)="editToolModal($event, tool.toolId)"></ion-icon>\n        </p> -->\n        <!-- <ion-item>\n            {{ tool.toolName }}\n        </ion-item>\n        <ion-item text-wrap>\n            {{ tool.toolDescription | slice:0:30 }}<span *ngIf="tool.toolDescription.length > 30">...</span>\n        </ion-item> -->\n        <ion-grid>\n            <ion-row>\n                <ion-col   col-4 >\n        <img src="{{ tool.toolImage }}" float-left class="tool-image" style="width:45px; height: 45px;"/> </ion-col>\n       <ion-col col-4>\n        <p class="tool-para">{{ tool.toolName }}<br>\n            <span class="txt">{{ tool.toolDescription | slice:0:25 }}</span><span *ngIf="tool.toolDescription.length > 25">...</span></p></ion-col>\n        <ion-col col-4>\n            <img class="edit-img" src="../../assets/imgs/edit img.PNG" (click)="editToolModal($event, tool.toolId)">\n        </ion-col>\n    </ion-row>\n    </ion-grid>\n    </ion-card-content>\n</ion-card>   \n\n<ion-fab right bottom>\n        <button ion-fab style="background-color: #022146" (click)="scanModal($event)"><img src="../../assets/imgs/scan img.PNG"></button>\n    </ion-fab>\n  '/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-description\toolbox-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__services_database_service__["a" /* DBService */]])
    ], ToolboxDescriptionPage);
    return ToolboxDescriptionPage;
}());

//# sourceMappingURL=toolbox-description.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ModalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtoolPage = /** @class */ (function () {
    function AddtoolPage(navCtrl, navParams, viewCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        // this.text ='hello world';
        this.toolboxId = navParams.get('toolboxId');
        // this.db.getUsers().subscribe((response) => {
        //   // console.log(response);
        //   for(let i in response) {
        //     this.users.push(response[i]['emp_id']);
        //   }
        // });
    }
    AddtoolPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModalpagePage');
    };
    AddtoolPage.prototype.capture = function () {
        // const cameraOptions: CameraOptions = {
        //   quality: 50,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(cameraOptions)
        // .then((imageData) => {
        //   this.captureDataURL = 'data:image/jpeg;base64,' + imageData;
        //   console.log(this.captureDataURL);
        // })
        // .catch(err => {
        //   console.log(err);
        // });
        // this.captureDataURL = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6192516.jpg';
        // this.captureDataURL = 'data:image/jpeg;base64,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';
        this.captureDataURL = 'https://img.freepik.com/free-vector/carpentry-tools-collecti_1096-325.jpg?size=338&ext=jpg';
    };
    AddtoolPage.prototype.saveToDB = function () {
        // console.log(this.user);
        // if(this.owner == 'Team') {
        //   this.user = 'Team';
        // }
        this.db.addTool({
            'toolName': this.toolName,
            'toolId': this.toolId,
            'toolboxId': this.toolboxId,
            'toolType': this.toolType,
            'toolDescription': this.toolDescription,
            'toolImage': this.captureDataURL
        })
            .subscribe(function (response) {
            console.log(response);
        });
        console.log(this.toolType);
        this.close();
    };
    AddtoolPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddtoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalpage',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\add-tool\add-tool.html"*/'<ion-grid class="content">\n\n    <ion-row>\n\n        <ion-col col-10></ion-col>\n\n        <ion-col col-2><span (click)="close()" style="float: right;"><img src="../../assets/imgs/close.PNG" class="close-img"></span></ion-col>\n\n      <ion-col col-4 >\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <h5>New Tool</h5>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n      <ion-label>Tool Name</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <ion-input type=\'text\' [(ngModel)]=\'toolName\' class="text-input-md" ></ion-input>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Tool Id</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <ion-input type=\'text\' [(ngModel)]=\'toolId\'class="text-input-md" ></ion-input>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Type</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <!-- <ion-input type=\'text\' [(ngModel)]=\'toolType\' class="text-input-md" ></ion-input> -->\n\n    <ion-select [(ngModel)]=\'toolType\' placeholder="Select" placeholder-color="White" multiple="false">\n\n      <ion-option value=\'common\'>Common</ion-option>\n\n      <ion-option value=\'critical\'>Critical</ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Description</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <textarea [(ngModel)]=\'toolDescription\' class="text-input-md"></textarea>  \n\n  </ion-col>\n\n  <!-- <ion-col col-4>\n\n    <ion-label>Owner</ion-label>\n\n  </ion-col>\n\n  <ion-col col-2>\n\n    <p  class="icon">:</p>\n\n  </ion-col> -->\n\n  <!-- <ion-col col-6>\n\n    <input type="radio" value="Employee" name="group1" (click)="radioFunction(\'Employee\')" checked><span>Employee</span>\n\n    <input type="radio" value="Team" name="group1" (click)="radioFunction(\'Team\')"><span>Team</span>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n      <ion-select [(ngModel)]=\'user\' placeholder="Select" placeholder-color="White" *ngIf="owner==\'Employee\'" multiple="false">\n\n          <ion-option *ngFor=\'let u of users\' class="u">{{ u }}</ion-option>\n\n        </ion-select>\n\n  </ion-col> -->\n\n    <ion-col col-6>\n\n        <ion-content class="imgcontent"><img [src]=\'captureDataURL\' *ngIf=\'captureDataURL\'></ion-content>\n\n        \n\n  </ion-col>\n\n  <ion-col col-6>\n\n  <a href="#" (click)=\'capture()\'>+Add Tool Image</a>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n      \n\n    </ion-col>\n\n    <ion-col col-6>\n\n        <button ion-button style="background-color:#E8B92E;" (click)="saveToDB()">Proceed</button>\n\n  </ion-col>\n\n    </ion-row>\n\n  </ion-grid>'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\add-tool\add-tool.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */]])
    ], AddtoolPage);
    return AddtoolPage;
}());

//# sourceMappingURL=add-tool.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditToolBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import { Camera, CameraOptions } from '@ionic-native/camera'; */
var EditToolBox = /** @class */ (function () {
    function EditToolBox(navCtrl, navParams, viewCtrl, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.users = [];
        // this.text ='hello world';
        // console.log("ID"+navParams.get('toolboxId'))
        this.db.getToolBoxById({ 'toolboxId': navParams.get('toolboxId') }).subscribe(function (response) {
            // console.log("toolbox"+response);
            _this.toolboxName = response[0]['tb_name'];
            _this.toolboxId = response[0]['tb_id'];
            _this.toolboxType = response[0]['tb_type'];
            _this.toolboxDescription = response[0]['tb_desc'];
            _this.captureDataURL = response[0]['tb_image'];
            _this.user = response[0]['tb_user'];
            // console.log(this.user);
            if (_this.user == "Team") {
                _this.owner = "Team";
            }
            else {
                _this.owner = "Employee";
            }
        });
        // console.log(this.toolboxDescription);
        this.db.getUsers().subscribe(function (response) {
            // console.log(response);
            for (var i in response) {
                _this.users.push(response[i]['emp_id']);
            }
        });
    }
    EditToolBox.prototype.capture = function () {
        // const cameraOptions: CameraOptions = {
        //   quality: 50,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(cameraOptions)
        // .then((imageData) => {
        //   this.captureDataURL = 'data:image/jpeg;base64,' + imageData;
        //   console.log(this.captureDataURL);
        // })
        // .catch(err => {
        //   console.log(err);
        // });
        this.captureDataURL = 'https://images.homedepot-static.com/productImages/9a85624b-ca37-4c10-8444-261189871011/svn/black-husky-portable-tool-boxes-235580-64_1000.jpg';
    };
    EditToolBox.prototype.saveToDB = function () {
        // console.log(this.user);
        if (this.owner == 'Team') {
            this.user = 'Team';
        }
        this.db.editToolBox({
            'toolboxName': this.toolboxName,
            'toolboxId': this.toolboxId,
            'toolboxType': this.toolboxType,
            'toolboxDescription': this.toolboxDescription,
            'toolboxImage': this.captureDataURL,
            'toolboxOwner': this.user
        })
            .subscribe(function (response) {
            console.log(response);
        });
        this.close();
    };
    EditToolBox.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EditToolBox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toolboxedit',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-edit\toolbox-edit.html"*/'<ion-grid class="content">\n\n    <ion-row>\n\n        <ion-col col-10></ion-col>\n\n        <ion-col col-2><span (click)="close()" style="float: right;"><img src="../../assets/imgs/close.PNG" class="close-img"></span></ion-col>\n\n      <ion-col col-4 >\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <h5>Edit Tool Box</h5>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n      <ion-label>Toolbox Name</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <ion-input type=\'text\' [(ngModel)]=\'toolboxName\' class="text-input-md" ></ion-input>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Toolbox Id</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <ion-input type=\'text\' [(ngModel)]=\'toolboxId\'class="text-input-md" disabled></ion-input>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Type</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <!-- <ion-input type=\'text\' [(ngModel)]=\'toolboxType\' class="text-input-md" ></ion-input> -->\n\n    <ion-select [(ngModel)]=\'toolboxType\' placeholder="Select" placeholder-color="White" multiple="false">\n\n      <ion-option value=\'standard\'>Standard</ion-option>\n\n      <ion-option value=\'critical\'>Critical</ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <ion-label>Description</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n        <p  class="icon">:</p>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n    <textarea [(ngModel)]=\'toolboxDescription\' class="text-input-md"></textarea>  \n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <ion-label>Owner</ion-label>\n\n  </ion-col>\n\n  <ion-col col-2>\n\n    <p  class="icon">:</p>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n    <input type="radio" value="Employee" name="group1" (click)="radioFunction(\'Employee\')" [checked] = "owner == \'Employee\' ? true : false"><span>Employee</span>\n\n    <input type="radio" value="Team" name="group1" (click)="radioFunction(\'Team\')" [checked] = "owner == \'Team\' ? true : false"><span>Team</span>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n      <ion-select [(ngModel)]=\'user\' placeholder="{{user == null ? Select : user}}" placeholder-color="White" *ngIf="owner==\'Employee\'" multiple="false">\n\n          <ion-option *ngFor=\'let u of users\' class="u">{{ u }}</ion-option>\n\n        </ion-select>\n\n  </ion-col>\n\n    <ion-col col-6>\n\n        <ion-content class="imgcontent"><img [src]=\'captureDataURL\' *ngIf=\'captureDataURL\'></ion-content>\n\n        \n\n  </ion-col>\n\n  <ion-col col-6>\n\n  <a href="#" (click)=\'capture()\'>+Add Tool Image</a>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n      \n\n    </ion-col>\n\n    <ion-col col-6>\n\n        <button ion-button style="background-color:#E8B92E;" (click)="saveToDB()">Edit</button>\n\n  </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  '/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\toolbox-edit\toolbox-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* DBService */]])
    ], EditToolBox);
    return EditToolBox;
}());

//# sourceMappingURL=toolbox-edi.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_memlogin_memlogin__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_toolbox_home_toolbox_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modalpage_modalpage__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_database_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_toolbox_description_toolbox_description__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_tool_add_tool__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_toolbox_edit_toolbox_edi__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_tool_edit_tool__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_scan_modal_scan_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_toolbox_scan_toolbox_scan__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_aircraft_scan_aircraft_scan__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { HeaderPage } from '../pages/header/header';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_memlogin_memlogin__["a" /* MemloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_toolbox_home_toolbox_home__["a" /* ToolboxHomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modalpage_modalpage__["a" /* ModalpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_toolbox_description_toolbox_description__["a" /* ToolboxDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_tool_add_tool__["a" /* AddtoolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_toolbox_edit_toolbox_edi__["a" /* EditToolBox */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_tool_edit_tool__["a" /* EditToolPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_scan_modal_scan_modal__["a" /* ScanModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_toolbox_scan_toolbox_scan__["a" /* ToolboxScanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aircraft_scan_aircraft_scan__["a" /* AircraftScanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aircraft-scan/aircraft-scan.module#AircraftScanPageModule', name: 'AircraftScanPage', segment: 'aircraft-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-tool/edit-tool.module#EditToolPageModule', name: 'EditToolPage', segment: 'edit-tool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan-modal/scan-modal.module#ScanModalPageModule', name: 'ScanModalPage', segment: 'scan-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_memlogin_memlogin__["a" /* MemloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_toolbox_home_toolbox_home__["a" /* ToolboxHomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modalpage_modalpage__["a" /* ModalpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_toolbox_description_toolbox_description__["a" /* ToolboxDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_tool_add_tool__["a" /* AddtoolPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_toolbox_edit_toolbox_edi__["a" /* EditToolBox */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_tool_edit_tool__["a" /* EditToolPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_scan_modal_scan_modal__["a" /* ScanModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_toolbox_scan_toolbox_scan__["a" /* ToolboxScanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_aircraft_scan_aircraft_scan__["a" /* AircraftScanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_database_service__["a" /* DBService */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    // LoginPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MemloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemloginPage = /** @class */ (function () {
    function MemloginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MemloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemloginPage');
    };
    MemloginPage.prototype.gotopage = function () {
    };
    MemloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memlogin',template:/*ion-inline-start:"C:\Source Code - Work\application client\tool-management\src\pages\memlogin\memlogin.html"*/'<!--\n  Generated template for the MemloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>memlogin</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n______ <img src="../../assets/imgs/united1.png "> _______\n\n<br>\n<ion-card class="bg-content">\n<ion-card-header>\n  <h6>Member Login</h6>\n</ion-card-header>\n<ion-card-content>\n  <img class="img-icon" src="../../assets/imgs/person.png">\n  <ion-input type="text"></ion-input><br>\n  <img class="img-icon1" src="../../assets/imgs/lock.jfif">\n  <ion-input type="text"></ion-input>\n\n  <button ion-button full class="btn">login</button>\n  <h5 (click)="gotopage()">Forget/Change password</h5>\n</ion-card-content>\n\n</ion-card>\n\n</ion-content>\n<!-- <ion-content>\n<ion-item>      \n    <ion-icon name="person" item-start></ion-icon>\n    \n    <ion-input type="email" name="email" required></ion-input>\n  </ion-item>\n</ion-content> -->\n\n'/*ion-inline-end:"C:\Source Code - Work\application client\tool-management\src\pages\memlogin\memlogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MemloginPage);
    return MemloginPage;
}());

//# sourceMappingURL=memlogin.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map