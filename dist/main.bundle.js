webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"./src/app/pages/charts/charts.module.ts",
		"common"
	],
	"./components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"common"
	],
	"./editors/editors.module": [
		"./src/app/pages/editors/editors.module.ts",
		"editors.module"
	],
	"./forms/forms.module": [
		"./src/app/pages/forms/forms.module.ts",
		"forms.module"
	],
	"./maps/maps.module": [
		"./src/app/pages/maps/maps.module.ts",
		"common",
		"maps.module"
	],
	"./tables/tables.module": [
		"./src/app/pages/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./ui-features/ui-features.module": [
		"./src/app/pages/ui-features/ui-features.module.ts",
		"common",
		"ui-features.module"
	],
	"app/pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"common",
		"pages.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("./src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_module__ = __webpack_require__("./src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
    },
];
var NB_CORE_PROVIDERS = __WEBPACK_IMPORTED_MODULE_6__data_data_module__["a" /* DataModule */].forRoot().providers.concat(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */].forRoot({
    providers: {
        email: {
            service: __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["g" /* NbDummyAuthProvider */],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    __WEBPACK_IMPORTED_MODULE_3__nebular_security__["b" /* NbSecurityModule */].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: __WEBPACK_IMPORTED_MODULE_3__nebular_security__["a" /* NbRoleProvider */],
        useValue: {
            getRole: function () {
                return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])('guest'); // here you could provide any role based on any auth flow
            },
        },
    },
    __WEBPACK_IMPORTED_MODULE_7__utils_analytics_service__["a" /* AnalyticsService */],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */],
            ],
            declarations: [],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__electricity_service__ = __webpack_require__("./src/app/@core/data/electricity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smart_table_service__ = __webpack_require__("./src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_service__ = __webpack_require__("./src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_3__electricity_service__["a" /* ElectricityService */],
    __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */],
    __WEBPACK_IMPORTED_MODULE_5__smart_table_service__["a" /* SmartTableService */],
    __WEBPACK_IMPORTED_MODULE_6__player_service__["a" /* PlayerService */],
];
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule_1 = DataModule;
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    DataModule = DataModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            providers: SERVICES.slice(),
        })
    ], DataModule);
    return DataModule;
    var DataModule_1;
}());



/***/ }),

/***/ "./src/app/@core/data/electricity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = /** @class */ (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    ElectricityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectricityService);
    return ElectricityService;
}());



/***/ }),

/***/ "./src/app/@core/data/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Track */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/@core/data/smart-table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmartTableService = /** @class */ (function () {
    function SmartTableService(userService) {
        this.userService = userService;
        this.realData = [];
        this.data = [{
                id: 1,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }];
    }
    SmartTableService.prototype.getData = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.realData = [];
            for (var curUser in users) {
                if (users.hasOwnProperty(curUser)) {
                    var courseData = _this.getCourseData(users[curUser]);
                    _this.realData.push(courseData);
                }
            }
        });
        return this.data = this.realData;
    };
    SmartTableService.prototype.getCourseData = function (userData) {
        var courseData = {};
        courseData.grade = userData.grade;
        if (!!userData.skills) {
            courseData.category = userData.skills.length > 0 ? userData.skills[0].category : '';
            courseData.skill = userData.skills.length > 0 ? userData.skills[0].sub_category : '';
        }
        else {
            courseData.skill = courseData.category = '';
        }
        courseData.mentor = userData.name;
        courseData.email = userData.email;
        var status = 'unavailable';
        if (!!userData.skills &&
            !!userData.skills[0] && userData.skills[0].status && userData.skills[0].status !== '') {
            status = userData.skills[0].status;
        }
        courseData.status = status;
        return courseData;
    };
    SmartTableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UserService */]])
    ], SmartTableService);
    return SmartTableService;
}());



/***/ }),

/***/ "./src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateService = /** @class */ (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@core/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var counter = 0;
var UserService = /** @class */ (function () {
    function UserService() {
        this.settings = { gradeFilter: 0, classFilter: 0 };
        this.users = {
            'almog@gmail.com': {
                name: 'almog', email: 'almog@gmail.com', picture: 'assets/images/34.png', grade: '3', class: '3', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: '3D printing', meetings: '8', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'NickErwin@gmail.com': {
                name: 'Nick Erwin', email: 'NickErwin@gmail.com', picture: 'assets/images/22.png', grade: '4', class: '3', position: 'mentor',
                skills: [
                    { category: 'Music', sub_category: 'Guitar', meetings: '7', students: '2',
                        image: 'assets/images/sport.png', icon: 'fa fa-headphones',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'CarletonJanette@gmail.com': {
                name: 'Carleton Janette', email: 'CarletonJanette@gmail.com', picture: 'assets/images/46.png', grade: '2', class: '3', position: 'mentor',
                skills: [
                    { category: 'Sport', sub_category: 'Tennis', meetings: '3', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa fa-futbol fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'TeresaAgustin@gmail.com': {
                name: 'Teresa Agustin', email: 'TeresaAgustin@gmail.com', picture: 'assets/images/5.png', grade: '5', class: '2', position: 'mentor',
                skills: [
                    { category: 'Sport', sub_category: 'Basketball', meetings: '9', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-basketball-ball fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MadeleinePhilomena@gmail.com': {
                name: 'Madeleine Philomena', email: 'MadeleinePhilomena@gmail.com', picture: 'assets/images/9.png', grade: '5', class: '2', position: 'mentor',
                skills: [
                    { category: 'Sport', sub_category: 'Football', meetings: '5', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa fa-futbol fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'AngelaElwin@gmail.com': {
                name: 'Angela Elwin', email: 'AngelaElwin@gmail.com', picture: 'assets/images/7.png', grade: '4', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Fishkeeping', meetings: '3', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'DeanJerry@gmail.com': {
                name: 'Dean Jerry', email: 'DeanJerry@gmail.com', picture: 'assets/images/27.png', grade: '4', class: '2', position: 'mentor',
                skills: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting', meetings: '4', students: '5',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'PaulDarlene@gmail.com': {
                name: 'Paul Darlene', email: 'PaulDarlene@gmail.com', picture: 'assets/images/14.png', grade: '2', class: '4', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports', meetings: '9', students: '10',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'YolandaParker@gmail.com': {
                name: 'Yolanda Parker', email: 'YolandaParker@gmail.com', picture: 'assets/images/11.png', grade: '2', class: '4', position: 'mentor',
                skills: [
                    { category: 'Sport', sub_category: 'Basketball', meetings: '7', students: '10',
                        image: 'assets/images/sport.png', icon: 'fa fa-basketball-ball fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'MartyJosie@gmail.com': {
                name: 'Marty Josie', email: 'MartyJosie@gmail.com', picture: 'assets/images/24.png', grade: '2', class: '2', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Auto racing', meetings: '1', students: '4',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'DevanMiguel@gmail.com': {
                name: 'Devan Miguel', email: 'DevanMiguel@gmail.com', picture: 'assets/images/40.png', grade: '4', class: '2', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Crossword puzzles', meetings: '3', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'AdellaAllyson@gmail.com': {
                name: 'Adella Allyson', email: 'AdellaAllyson@gmail.com', picture: 'assets/images/38.png', grade: '1', class: '5', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Martial arts', meetings: '1', students: '6',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MauriceDarci@gmail.com': {
                name: 'Maurice Darci', email: 'MauriceDarci@gmail.com', picture: 'assets/images/19.png', grade: '3', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Pottery', meetings: '8', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'PrinceStephanie@gmail.com': {
                name: 'Prince Stephanie', email: 'PrinceStephanie@gmail.com', picture: 'assets/images/21.png', grade: '5', class: '2', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Drama', meetings: '1', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'AlphaThad@gmail.com': {
                name: 'Alpha Thad', email: 'AlphaThad@gmail.com', picture: 'assets/images/23.png', grade: '3', class: '1', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Beekeeping', meetings: '9', students: '10',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'ChristinAugustine@gmail.com': {
                name: 'Christin Augustine', email: 'ChristinAugustine@gmail.com', picture: 'assets/images/26.png', grade: '2', class: '5', position: 'mentor',
                skills: [
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting', meetings: '3', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'KirbyKurt@gmail.com': {
                name: 'Kirby Kurt', email: 'KirbyKurt@gmail.com', picture: 'assets/images/7.png', grade: '5', class: '3', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Computer programming', meetings: '9', students: '8',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'DollySusanne@gmail.com': {
                name: 'Dolly Susanne', email: 'DollySusanne@gmail.com', picture: 'assets/images/15.png', grade: '2', class: '2', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Snowboarding', meetings: '4', students: '6',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'IsomAnnette@gmail.com': {
                name: 'Isom Annette', email: 'IsomAnnette@gmail.com', picture: 'assets/images/4.png', grade: '3', class: '4', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Breakdancing', meetings: '6', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'EnriqueMyrna@gmail.com': {
                name: 'Enrique Myrna', email: 'EnriqueMyrna@gmail.com', picture: 'assets/images/43.png', grade: '3', class: '1', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy', meetings: '7', students: '2',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'TomekaTiara@gmail.com': {
                name: 'Tomeka Tiara', email: 'TomekaTiara@gmail.com', picture: 'assets/images/37.png', grade: '3', class: '5', position: 'mentor',
                skills: [
                    { category: 'Collection hobbies', sub_category: 'Vintage cars', meetings: '3', students: '2',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'DoreneHilda@gmail.com': {
                name: 'Dorene Hilda', email: 'DoreneHilda@gmail.com', picture: 'assets/images/4.png', grade: '5', class: '5', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing', meetings: '7', students: '4',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'UlyssesDarby@gmail.com': {
                name: 'Ulysses Darby', email: 'UlyssesDarby@gmail.com', picture: 'assets/images/38.png', grade: '1', class: '5', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Philately', meetings: '7', students: '4',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MallieCornelia@gmail.com': {
                name: 'Mallie Cornelia', email: 'MallieCornelia@gmail.com', picture: 'assets/images/41.png', grade: '2', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Quilling', meetings: '3', students: '6',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'JuniorAlphonse@gmail.com': {
                name: 'Junior Alphonse', email: 'JuniorAlphonse@gmail.com', picture: 'assets/images/29.png', grade: '2', class: '3', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Freestyle football', meetings: '3', students: '5',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'SuzetteBeau@gmail.com': {
                name: 'Suzette Beau', email: 'SuzetteBeau@gmail.com', picture: 'assets/images/3.png', grade: '5', class: '2', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Debate', meetings: '9', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'AuroraOllie@gmail.com': {
                name: 'Aurora Ollie', email: 'AuroraOllie@gmail.com', picture: 'assets/images/17.png', grade: '4', class: '2', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Model aircraft', meetings: '1', students: '10',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'JarodTristian@gmail.com': {
                name: 'Jarod Tristian', email: 'JarodTristian@gmail.com', picture: 'assets/images/6.png', grade: '3', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Knitting', meetings: '7', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'TracyBarbra@gmail.com': {
                name: 'Tracy Barbra', email: 'TracyBarbra@gmail.com', picture: 'assets/images/30.png', grade: '2', class: '2', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Creative writing', meetings: '2', students: '4',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'ReedRodger@gmail.com': {
                name: 'Reed Rodger', email: 'ReedRodger@gmail.com', picture: 'assets/images/14.png', grade: '5', class: '2', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Television program', meetings: '4', students: '2',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'SaraAngelo@gmail.com': {
                name: 'Sara Angelo', email: 'SaraAngelo@gmail.com', picture: 'assets/images/29.png', grade: '5', class: '4', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Kite', meetings: '4', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'LoisMelissa@gmail.com': {
                name: 'Lois Melissa', email: 'LoisMelissa@gmail.com', picture: 'assets/images/6.png', grade: '5', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Puzzle', meetings: '1', students: '5',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'ReubenWilbert@gmail.com': {
                name: 'Reuben Wilbert', email: 'ReubenWilbert@gmail.com', picture: 'assets/images/0.png', grade: '4', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Machining', meetings: '9', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'JamieLonie@gmail.com': {
                name: 'Jamie Lonie', email: 'JamieLonie@gmail.com', picture: 'assets/images/16.png', grade: '1', class: '3', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Coloring book', meetings: '8', students: '10',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'RosaTeri@gmail.com': {
                name: 'Rosa Teri', email: 'RosaTeri@gmail.com', picture: 'assets/images/29.png', grade: '4', class: '3', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Table tennis', meetings: '2', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'PriscillaSonny@gmail.com': {
                name: 'Priscilla Sonny', email: 'PriscillaSonny@gmail.com', picture: 'assets/images/18.png', grade: '5', class: '4', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Jukskei', meetings: '8', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'KatarinaKelsie@gmail.com': {
                name: 'Katarina Kelsie', email: 'KatarinaKelsie@gmail.com', picture: 'assets/images/41.png', grade: '4', class: '2', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking', meetings: '10', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'RosellaMargret@gmail.com': {
                name: 'Rosella Margret', email: 'RosellaMargret@gmail.com', picture: 'assets/images/8.png', grade: '4', class: '5', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Mountain biking', meetings: '8', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'CarrieSeymour@gmail.com': {
                name: 'Carrie Seymour', email: 'CarrieSeymour@gmail.com', picture: 'assets/images/28.png', grade: '2', class: '4', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Singing', meetings: '5', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'VeronaLouie@gmail.com': {
                name: 'Verona Louie', email: 'VeronaLouie@gmail.com', picture: 'assets/images/13.png', grade: '5', class: '5', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Climbing', meetings: '7', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'BennettShanika@gmail.com': {
                name: 'Bennett Shanika', email: 'BennettShanika@gmail.com', picture: 'assets/images/32.png', grade: '1', class: '5', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Calligraphy', meetings: '5', students: '5',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'StuartTodd@gmail.com': {
                name: 'Stuart Todd', email: 'StuartTodd@gmail.com', picture: 'assets/images/2.png', grade: '1', class: '3', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'LARPing', meetings: '3', students: '6',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'LillaJeri@gmail.com': {
                name: 'Lilla Jeri', email: 'LillaJeri@gmail.com', picture: 'assets/images/47.png', grade: '2', class: '1', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Marbles', meetings: '2', students: '6',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'DaphneEdith@gmail.com': {
                name: 'Daphne Edith', email: 'DaphneEdith@gmail.com', picture: 'assets/images/24.png', grade: '4', class: '5', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Scuba diving', meetings: '9', students: '1',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'WallaceKatheryn@gmail.com': {
                name: 'Wallace Katheryn', email: 'WallaceKatheryn@gmail.com', picture: 'assets/images/6.png', grade: '3', class: '5', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Music', meetings: '10', students: '1',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'KeatonElma@gmail.com': {
                name: 'Keaton Elma', email: 'KeatonElma@gmail.com', picture: 'assets/images/26.png', grade: '3', class: '2', position: 'mentor',
                skills: [
                    { category: 'Collection hobbies', sub_category: 'Metal detecting', meetings: '5', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'RoscoeAliyah@gmail.com': {
                name: 'Roscoe Aliyah', email: 'RoscoeAliyah@gmail.com', picture: 'assets/images/23.png', grade: '1', class: '1', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Ghost hunting', meetings: '2', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'ImogeneNadine@gmail.com': {
                name: 'Imogene Nadine', email: 'ImogeneNadine@gmail.com', picture: 'assets/images/28.png', grade: '5', class: '1', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Footbag', meetings: '3', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MorrisCandice@gmail.com': {
                name: 'Morris Candice', email: 'MorrisCandice@gmail.com', picture: 'assets/images/37.png', grade: '3', class: '4', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting', meetings: '6', students: '1',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'VevaLeigh@gmail.com': {
                name: 'Veva Leigh', email: 'VevaLeigh@gmail.com', picture: 'assets/images/36.png', grade: '5', class: '4', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing', meetings: '8', students: '1',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'EthyleDee@gmail.com': {
                name: 'Ethyle Dee', email: 'EthyleDee@gmail.com', picture: 'assets/images/3.png', grade: '3', class: '1', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself', meetings: '6', students: '9',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'LettieChase@gmail.com': {
                name: 'Lettie Chase', email: 'LettieChase@gmail.com', picture: 'assets/images/10.png', grade: '3', class: '2', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Driving', meetings: '9', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'KendalBeth@gmail.com': {
                name: 'Kendal Beth', email: 'KendalBeth@gmail.com', picture: 'assets/images/22.png', grade: '2', class: '4', position: 'mentor',
                skills: [
                    { category: 'Outdoor hobbies', sub_category: 'Hooping', meetings: '5', students: '3',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'ArdellGriffin@gmail.com': {
                name: 'Ardell Griffin', email: 'ArdellGriffin@gmail.com', picture: 'assets/images/2.png', grade: '2', class: '2', position: 'mentor',
                skills: [
                    { category: 'Collection hobbies', sub_category: 'Die-cast toy', meetings: '6', students: '2',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MackMaryjo@gmail.com': {
                name: 'Mack Maryjo', email: 'MackMaryjo@gmail.com', picture: 'assets/images/42.png', grade: '2', class: '4', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi', meetings: '3', students: '8',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'JustineChantal@gmail.com': {
                name: 'Justine Chantal', email: 'JustineChantal@gmail.com', picture: 'assets/images/38.png', grade: '3', class: '4', position: 'mentor',
                skills: [
                    { category: 'Sport', sub_category: 'Football', meetings: '9', students: '1',
                        image: 'assets/images/sport.png', icon: 'fa fa fa-futbol fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'TylerErik@gmail.com': {
                name: 'Tyler Erik', email: 'TylerErik@gmail.com', picture: 'assets/images/29.png', grade: '1', class: '2', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Sculling', meetings: '10', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'MorganTom@gmail.com': {
                name: 'Morgan Tom', email: 'MorganTom@gmail.com', picture: 'assets/images/5.png', grade: '4', class: '2', position: 'mentor',
                skills: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling', meetings: '5', students: '5',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'pending',
                    }
                ],
            },
            'AddisonChloe@gmail.com': {
                name: 'Addison Chloe', email: 'AddisonChloe@gmail.com', picture: 'assets/images/11.png', grade: '2', class: '5', position: 'mentor',
                skills: [
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)', meetings: '10', students: '7',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg',
                        color: 'tomato', status: 'approved',
                    }
                ],
            },
            'DollieEli@gmail.com': {
                name: 'Dollie Eli', email: 'DollieEli@gmail.com', picture: 'assets/images/42.png', grade: '1', class: '4', position: 'mentor',
                skills: [],
            },
            'AnnCalvin@gmail.com': {
                name: 'Ann Calvin', email: 'AnnCalvin@gmail.com', picture: 'assets/images/16.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Mountain biking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Rosella Margret', mentorEmail: 'RosellaMargret@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Singing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carrie Seymour', mentorEmail: 'CarrieSeymour@gmail.com',
                    }
                ]
            },
            'LinusHanna@gmail.com': {
                name: 'Linus Hanna', email: 'LinusHanna@gmail.com', picture: 'assets/images/38.png', grade: '3', class: '3', position: 'student',
                skills: []
            },
            'RosalynLoris@gmail.com': {
                name: 'Rosalyn Loris', email: 'RosalynLoris@gmail.com', picture: 'assets/images/9.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Sport', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa fa-futbol fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Maurice Darci', mentorEmail: 'MauriceDarci@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    }
                ]
            },
            'JeanetteLouie@gmail.com': {
                name: 'Jeanette Louie', email: 'JeanetteLouie@gmail.com', picture: 'assets/images/5.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    }
                ]
            },
            'BlakeCalla@gmail.com': {
                name: 'Blake Calla', email: 'BlakeCalla@gmail.com', picture: 'assets/images/15.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Creative writing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Tracy Barbra', mentorEmail: 'TracyBarbra@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    }
                ]
            },
            'FurmanBrittni@gmail.com': {
                name: 'Furman Brittni', email: 'FurmanBrittni@gmail.com', picture: 'assets/images/43.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Mountain biking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Rosella Margret', mentorEmail: 'RosellaMargret@gmail.com',
                    }
                ]
            },
            'LyleEfrain@gmail.com': {
                name: 'Lyle Efrain', email: 'LyleEfrain@gmail.com', picture: 'assets/images/20.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    }
                ]
            },
            'MiguelAbel@gmail.com': {
                name: 'Miguel Abel', email: 'MiguelAbel@gmail.com', picture: 'assets/images/8.png', grade: '3', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Fishkeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Angela Elwin', mentorEmail: 'AngelaElwin@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Philately',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ulysses Darby', mentorEmail: 'UlyssesDarby@gmail.com',
                    }
                ]
            },
            'JulieEvan@gmail.com': {
                name: 'Julie Evan', email: 'JulieEvan@gmail.com', picture: 'assets/images/17.png', grade: '3', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Die-cast toy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ardell Griffin', mentorEmail: 'ArdellGriffin@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Scuba diving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Daphne Edith', mentorEmail: 'DaphneEdith@gmail.com',
                    }
                ]
            },
            'TeresaJames@gmail.com': {
                name: 'Teresa James', email: 'TeresaJames@gmail.com', picture: 'assets/images/37.png', grade: '1', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Freestyle football',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Junior Alphonse', mentorEmail: 'JuniorAlphonse@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    }
                ]
            },
            'MarniBrianne@gmail.com': {
                name: 'Marni Brianne', email: 'MarniBrianne@gmail.com', picture: 'assets/images/40.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Climbing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Verona Louie', mentorEmail: 'VeronaLouie@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    }
                ]
            },
            'CrystalRella@gmail.com': {
                name: 'Crystal Rella', email: 'CrystalRella@gmail.com', picture: 'assets/images/1.png', grade: '3', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Sport', sub_category: 'Football',
                        image: 'assets/images/sport.png', icon: 'fa fa fa-futbol fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Rosa Teri', mentorEmail: 'RosaTeri@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Ghost hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Roscoe Aliyah', mentorEmail: 'RoscoeAliyah@gmail.com',
                    }
                ]
            },
            'CarlyGabriella@gmail.com': {
                name: 'Carly Gabriella', email: 'CarlyGabriella@gmail.com', picture: 'assets/images/19.png', grade: '5', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Calligraphy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Bennett Shanika', mentorEmail: 'BennettShanika@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'MillieJoan@gmail.com': {
                name: 'Millie Joan', email: 'MillieJoan@gmail.com', picture: 'assets/images/4.png', grade: '3', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Triathlon',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Dollie Eli', mentorEmail: 'DollieEli@gmail.com',
                    }
                ]
            },
            'MaynardTrenton@gmail.com': {
                name: 'Maynard Trenton', email: 'MaynardTrenton@gmail.com', picture: 'assets/images/34.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Sculling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tyler Erik', mentorEmail: 'TylerErik@gmail.com',
                    }
                ]
            },
            'HaskellJoseph@gmail.com': {
                name: 'Haskell Joseph', email: 'HaskellJoseph@gmail.com', picture: 'assets/images/29.png', grade: '2', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'DeronCoby@gmail.com': {
                name: 'Deron Coby', email: 'DeronCoby@gmail.com', picture: 'assets/images/16.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Sailing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Yolanda Parker', mentorEmail: 'YolandaParker@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Philately',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ulysses Darby', mentorEmail: 'UlyssesDarby@gmail.com',
                    }
                ]
            },
            'VitoKenny@gmail.com': {
                name: 'Vito Kenny', email: 'VitoKenny@gmail.com', picture: 'assets/images/19.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Ghost hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Roscoe Aliyah', mentorEmail: 'RoscoeAliyah@gmail.com',
                    }
                ]
            },
            'JanelleMelton@gmail.com': {
                name: 'Janelle Melton', email: 'JanelleMelton@gmail.com', picture: 'assets/images/7.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Triathlon',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Dollie Eli', mentorEmail: 'DollieEli@gmail.com',
                    }
                ]
            },
            'ElvaInez@gmail.com': {
                name: 'Elva Inez', email: 'ElvaInez@gmail.com', picture: 'assets/images/9.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    }
                ]
            },
            'CorineTanya@gmail.com': {
                name: 'Corine Tanya', email: 'CorineTanya@gmail.com', picture: 'assets/images/6.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    }
                ]
            },
            'BirdieIsiah@gmail.com': {
                name: 'Birdie Isiah', email: 'BirdieIsiah@gmail.com', picture: 'assets/images/5.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Powerlifting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Justine Chantal', mentorEmail: 'JustineChantal@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Footbag',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Imogene Nadine', mentorEmail: 'ImogeneNadine@gmail.com',
                    }
                ]
            },
            'MarieBarton@gmail.com': {
                name: 'Marie Barton', email: 'MarieBarton@gmail.com', picture: 'assets/images/26.png', grade: '2', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Scuba diving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Daphne Edith', mentorEmail: 'DaphneEdith@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Quilling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Mallie Cornelia', mentorEmail: 'MallieCornelia@gmail.com',
                    }
                ]
            },
            'NeliaFrankie@gmail.com': {
                name: 'Nelia Frankie', email: 'NeliaFrankie@gmail.com', picture: 'assets/images/44.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Hooping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Kendal Beth', mentorEmail: 'KendalBeth@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Fishkeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Angela Elwin', mentorEmail: 'AngelaElwin@gmail.com',
                    }
                ]
            },
            'NancyCarmelita@gmail.com': {
                name: 'Nancy Carmelita', email: 'NancyCarmelita@gmail.com', picture: 'assets/images/21.png', grade: '3', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Genealogy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Nick Erwin', mentorEmail: 'NickErwin@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'StuartGeorgene@gmail.com': {
                name: 'Stuart Georgene', email: 'StuartGeorgene@gmail.com', picture: 'assets/images/39.png', grade: '1', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Pottery',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Maurice Darci', mentorEmail: 'MauriceDarci@gmail.com',
                    }
                ]
            },
            'JanelleKyra@gmail.com': {
                name: 'Janelle Kyra', email: 'JanelleKyra@gmail.com', picture: 'assets/images/40.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: '3D printing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'al mog', mentorEmail: 'almog@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Ghost hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Roscoe Aliyah', mentorEmail: 'RoscoeAliyah@gmail.com',
                    }
                ]
            },
            'IssacSheldon@gmail.com': {
                name: 'Issac Sheldon', email: 'IssacSheldon@gmail.com', picture: 'assets/images/1.png', grade: '3', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Vintage cars',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tomeka Tiara', mentorEmail: 'TomekaTiara@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Crossword puzzles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Devan Miguel', mentorEmail: 'DevanMiguel@gmail.com',
                    }
                ]
            },
            'EveRonny@gmail.com': {
                name: 'Eve Ronny', email: 'EveRonny@gmail.com', picture: 'assets/images/34.png', grade: '1', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    }
                ]
            },
            'TrinidadPalmer@gmail.com': {
                name: 'Trinidad Palmer', email: 'TrinidadPalmer@gmail.com', picture: 'assets/images/21.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    }
                ]
            },
            'DonaldAlfreda@gmail.com': {
                name: 'Donald Alfreda', email: 'DonaldAlfreda@gmail.com', picture: 'assets/images/21.png', grade: '1', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Freestyle football',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Junior Alphonse', mentorEmail: 'JuniorAlphonse@gmail.com',
                    }
                ]
            },
            'ShalondaViolet@gmail.com': {
                name: 'Shalonda Violet', email: 'ShalondaViolet@gmail.com', picture: 'assets/images/5.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Debate',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Suzette Beau', mentorEmail: 'SuzetteBeau@gmail.com',
                    }
                ]
            },
            'ArthurRenee@gmail.com': {
                name: 'Arthur Renee', email: 'ArthurRenee@gmail.com', picture: 'assets/images/26.png', grade: '2', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Pottery',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Maurice Darci', mentorEmail: 'MauriceDarci@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    }
                ]
            },
            'LucindaWilburn@gmail.com': {
                name: 'Lucinda Wilburn', email: 'LucindaWilburn@gmail.com', picture: 'assets/images/1.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    }
                ]
            },
            'SavannaElisabeth@gmail.com': {
                name: 'Savanna Elisabeth', email: 'SavannaElisabeth@gmail.com', picture: 'assets/images/40.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Model aircraft',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Aurora Ollie', mentorEmail: 'AuroraOllie@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hooping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Kendal Beth', mentorEmail: 'KendalBeth@gmail.com',
                    }
                ]
            },
            'FreidaTony@gmail.com': {
                name: 'Freida Tony', email: 'FreidaTony@gmail.com', picture: 'assets/images/13.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Crossword puzzles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Devan Miguel', mentorEmail: 'DevanMiguel@gmail.com',
                    }
                ]
            },
            'MargaretReta@gmail.com': {
                name: 'Margaret Reta', email: 'MargaretReta@gmail.com', picture: 'assets/images/17.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Creative writing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Tracy Barbra', mentorEmail: 'TracyBarbra@gmail.com',
                    }
                ]
            },
            'AldenElisha@gmail.com': {
                name: 'Alden Elisha', email: 'AldenElisha@gmail.com', picture: 'assets/images/48.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    }
                ]
            },
            'AlvinaHellen@gmail.com': {
                name: 'Alvina Hellen', email: 'AlvinaHellen@gmail.com', picture: 'assets/images/47.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Triathlon',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Dollie Eli', mentorEmail: 'DollieEli@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    }
                ]
            },
            'SylviaGavin@gmail.com': {
                name: 'Sylvia Gavin', email: 'SylviaGavin@gmail.com', picture: 'assets/images/40.png', grade: '2', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    }
                ]
            },
            'HarveyKrista@gmail.com': {
                name: 'Harvey Krista', email: 'HarveyKrista@gmail.com', picture: 'assets/images/3.png', grade: '3', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    }
                ]
            },
            'ToniMarilyn@gmail.com': {
                name: 'Toni Marilyn', email: 'ToniMarilyn@gmail.com', picture: 'assets/images/1.png', grade: '2', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Powerlifting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Justine Chantal', mentorEmail: 'JustineChantal@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Footbag',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Imogene Nadine', mentorEmail: 'ImogeneNadine@gmail.com',
                    }
                ]
            },
            'MadelineCorinna@gmail.com': {
                name: 'Madeline Corinna', email: 'MadelineCorinna@gmail.com', picture: 'assets/images/9.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Beekeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Alpha Thad', mentorEmail: 'AlphaThad@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Climbing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Verona Louie', mentorEmail: 'VeronaLouie@gmail.com',
                    }
                ]
            },
            'OmerIdella@gmail.com': {
                name: 'Omer Idella', email: 'OmerIdella@gmail.com', picture: 'assets/images/22.png', grade: '1', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Philately',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ulysses Darby', mentorEmail: 'UlyssesDarby@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: '3D printing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'al mog', mentorEmail: 'almog@gmail.com',
                    }
                ]
            },
            'DomingaJeramy@gmail.com': {
                name: 'Dominga Jeramy', email: 'DomingaJeramy@gmail.com', picture: 'assets/images/38.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Singing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carrie Seymour', mentorEmail: 'CarrieSeymour@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    }
                ]
            },
            'BookerClara@gmail.com': {
                name: 'Booker Clara', email: 'BookerClara@gmail.com', picture: 'assets/images/4.png', grade: '3', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Martial arts',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Adella Allyson', mentorEmail: 'AdellaAllyson@gmail.com',
                    }
                ]
            },
            'GaigeOllie@gmail.com': {
                name: 'Gaige Ollie', email: 'GaigeOllie@gmail.com', picture: 'assets/images/23.png', grade: '3', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Calligraphy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Bennett Shanika', mentorEmail: 'BennettShanika@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    }
                ]
            },
            'PollyRuby@gmail.com': {
                name: 'Polly Ruby', email: 'PollyRuby@gmail.com', picture: 'assets/images/46.png', grade: '5', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    }
                ]
            },
            'IlaErnestine@gmail.com': {
                name: 'Ila Ernestine', email: 'IlaErnestine@gmail.com', picture: 'assets/images/19.png', grade: '2', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Kite',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Sara Angelo', mentorEmail: 'SaraAngelo@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Christin Augustine', mentorEmail: 'ChristinAugustine@gmail.com',
                    }
                ]
            },
            'EthelynMiles@gmail.com': {
                name: 'Ethelyn Miles', email: 'EthelynMiles@gmail.com', picture: 'assets/images/25.png', grade: '5', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Kite',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Sara Angelo', mentorEmail: 'SaraAngelo@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Mountain biking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Rosella Margret', mentorEmail: 'RosellaMargret@gmail.com',
                    }
                ]
            },
            'LucienMichel@gmail.com': {
                name: 'Lucien Michel', email: 'LucienMichel@gmail.com', picture: 'assets/images/46.png', grade: '5', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hiking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Madeleine Philomena', mentorEmail: 'MadeleinePhilomena@gmail.com',
                    }
                ]
            },
            'IlaDestiny@gmail.com': {
                name: 'Ila Destiny', email: 'IlaDestiny@gmail.com', picture: 'assets/images/42.png', grade: '1', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Quilling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Mallie Cornelia', mentorEmail: 'MallieCornelia@gmail.com',
                    }
                ]
            },
            'LewisChristian@gmail.com': {
                name: 'Lewis Christian', email: 'LewisChristian@gmail.com', picture: 'assets/images/4.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Puzzle',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lois Melissa', mentorEmail: 'LoisMelissa@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Snowboarding',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dolly Susanne', mentorEmail: 'DollySusanne@gmail.com',
                    }
                ]
            },
            'HermanJayme@gmail.com': {
                name: 'Herman Jayme', email: 'HermanJayme@gmail.com', picture: 'assets/images/5.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Metal detecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Keaton Elma', mentorEmail: 'KeatonElma@gmail.com',
                    }
                ]
            },
            'LeolaLogan@gmail.com': {
                name: 'Leola Logan', email: 'LeolaLogan@gmail.com', picture: 'assets/images/15.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'TresaBetsy@gmail.com': {
                name: 'Tresa Betsy', email: 'TresaBetsy@gmail.com', picture: 'assets/images/41.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Table tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Rosa Teri', mentorEmail: 'RosaTeri@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'ThelmaEarnest@gmail.com': {
                name: 'Thelma Earnest', email: 'ThelmaEarnest@gmail.com', picture: 'assets/images/8.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Footbag',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Imogene Nadine', mentorEmail: 'ImogeneNadine@gmail.com',
                    }
                ]
            },
            'LianaCameron@gmail.com': {
                name: 'Liana Cameron', email: 'LianaCameron@gmail.com', picture: 'assets/images/45.png', grade: '4', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    }
                ]
            },
            'MauricioVincent@gmail.com': {
                name: 'Mauricio Vincent', email: 'MauricioVincent@gmail.com', picture: 'assets/images/24.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Mack Maryjo', mentorEmail: 'MackMaryjo@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    }
                ]
            },
            'BenJeanie@gmail.com': {
                name: 'Ben Jeanie', email: 'BenJeanie@gmail.com', picture: 'assets/images/19.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Calligraphy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Bennett Shanika', mentorEmail: 'BennettShanika@gmail.com',
                    }
                ]
            },
            'EldoraElliott@gmail.com': {
                name: 'Eldora Elliott', email: 'EldoraElliott@gmail.com', picture: 'assets/images/11.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Music',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Wallace Katheryn', mentorEmail: 'WallaceKatheryn@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    }
                ]
            },
            'CarmellaMason@gmail.com': {
                name: 'Carmella Mason', email: 'CarmellaMason@gmail.com', picture: 'assets/images/15.png', grade: '1', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    }
                ]
            },
            'BusterKeegan@gmail.com': {
                name: 'Buster Keegan', email: 'BusterKeegan@gmail.com', picture: 'assets/images/46.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Footbag',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Imogene Nadine', mentorEmail: 'ImogeneNadine@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Debate',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Suzette Beau', mentorEmail: 'SuzetteBeau@gmail.com',
                    }
                ]
            },
            'BrainPaulo@gmail.com': {
                name: 'Brain Paulo', email: 'BrainPaulo@gmail.com', picture: 'assets/images/17.png', grade: '3', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Snowboarding',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dolly Susanne', mentorEmail: 'DollySusanne@gmail.com',
                    }
                ]
            },
            'DormanLarry@gmail.com': {
                name: 'Dorman Larry', email: 'DormanLarry@gmail.com', picture: 'assets/images/15.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Mack Maryjo', mentorEmail: 'MackMaryjo@gmail.com',
                    }
                ]
            },
            'SeanDane@gmail.com': {
                name: 'Sean Dane', email: 'SeanDane@gmail.com', picture: 'assets/images/17.png', grade: '3', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Singing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carrie Seymour', mentorEmail: 'CarrieSeymour@gmail.com',
                    }
                ]
            },
            'NeilElisabeth@gmail.com': {
                name: 'Neil Elisabeth', email: 'NeilElisabeth@gmail.com', picture: 'assets/images/13.png', grade: '4', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Beekeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Alpha Thad', mentorEmail: 'AlphaThad@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Freestyle football',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Junior Alphonse', mentorEmail: 'JuniorAlphonse@gmail.com',
                    }
                ]
            },
            'CaryGene@gmail.com': {
                name: 'Cary Gene', email: 'CaryGene@gmail.com', picture: 'assets/images/16.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Triathlon',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Dollie Eli', mentorEmail: 'DollieEli@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Christin Augustine', mentorEmail: 'ChristinAugustine@gmail.com',
                    }
                ]
            },
            'CourtneyJonas@gmail.com': {
                name: 'Courtney Jonas', email: 'CourtneyJonas@gmail.com', picture: 'assets/images/9.png', grade: '1', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hiking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Madeleine Philomena', mentorEmail: 'MadeleinePhilomena@gmail.com',
                    }
                ]
            },
            'EdytheClement@gmail.com': {
                name: 'Edythe Clement', email: 'EdytheClement@gmail.com', picture: 'assets/images/6.png', grade: '3', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Climbing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Verona Louie', mentorEmail: 'VeronaLouie@gmail.com',
                    }
                ]
            },
            'RodolfoDarron@gmail.com': {
                name: 'Rodolfo Darron', email: 'RodolfoDarron@gmail.com', picture: 'assets/images/37.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'LARPing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Stuart Todd', mentorEmail: 'StuartTodd@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: '3D printing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'al mog', mentorEmail: 'almog@gmail.com',
                    }
                ]
            },
            'RosiaJeanette@gmail.com': {
                name: 'Rosia Jeanette', email: 'RosiaJeanette@gmail.com', picture: 'assets/images/7.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Mack Maryjo', mentorEmail: 'MackMaryjo@gmail.com',
                    }
                ]
            },
            'MathewEric@gmail.com': {
                name: 'Mathew Eric', email: 'MathewEric@gmail.com', picture: 'assets/images/29.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Sculling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tyler Erik', mentorEmail: 'TylerErik@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Mack Maryjo', mentorEmail: 'MackMaryjo@gmail.com',
                    }
                ]
            },
            'GlyndaEula@gmail.com': {
                name: 'Glynda Eula', email: 'GlyndaEula@gmail.com', picture: 'assets/images/0.png', grade: '3', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: '3D printing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'al mog', mentorEmail: 'almog@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Martial arts',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Adella Allyson', mentorEmail: 'AdellaAllyson@gmail.com',
                    }
                ]
            },
            'JeanieAbel@gmail.com': {
                name: 'Jeanie Abel', email: 'JeanieAbel@gmail.com', picture: 'assets/images/11.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Auto racing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Marty Josie', mentorEmail: 'MartyJosie@gmail.com',
                    }
                ]
            },
            'LidaMable@gmail.com': {
                name: 'Lida Mable', email: 'LidaMable@gmail.com', picture: 'assets/images/19.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Sculling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tyler Erik', mentorEmail: 'TylerErik@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    }
                ]
            },
            'AlbertaDoc@gmail.com': {
                name: 'Alberta Doc', email: 'AlbertaDoc@gmail.com', picture: 'assets/images/6.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Vintage cars',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tomeka Tiara', mentorEmail: 'TomekaTiara@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Snowboarding',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dolly Susanne', mentorEmail: 'DollySusanne@gmail.com',
                    }
                ]
            },
            'ElisaMyra@gmail.com': {
                name: 'Elisa Myra', email: 'ElisaMyra@gmail.com', picture: 'assets/images/27.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Philately',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ulysses Darby', mentorEmail: 'UlyssesDarby@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'DanialSantiago@gmail.com': {
                name: 'Danial Santiago', email: 'DanialSantiago@gmail.com', picture: 'assets/images/13.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Metal detecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Keaton Elma', mentorEmail: 'KeatonElma@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Music',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Wallace Katheryn', mentorEmail: 'WallaceKatheryn@gmail.com',
                    }
                ]
            },
            'ChasMonika@gmail.com': {
                name: 'Chas Monika', email: 'ChasMonika@gmail.com', picture: 'assets/images/34.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Kite',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Sara Angelo', mentorEmail: 'SaraAngelo@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Beekeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Alpha Thad', mentorEmail: 'AlphaThad@gmail.com',
                    }
                ]
            },
            'JackyHector@gmail.com': {
                name: 'Jacky Hector', email: 'JackyHector@gmail.com', picture: 'assets/images/15.png', grade: '1', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    }
                ]
            },
            'PollyScott@gmail.com': {
                name: 'Polly Scott', email: 'PollyScott@gmail.com', picture: 'assets/images/9.png', grade: '5', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Scuba diving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Daphne Edith', mentorEmail: 'DaphneEdith@gmail.com',
                    }
                ]
            },
            'AmbroseAugustine@gmail.com': {
                name: 'Ambrose Augustine', email: 'AmbroseAugustine@gmail.com', picture: 'assets/images/6.png', grade: '4', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Model aircraft',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Aurora Ollie', mentorEmail: 'AuroraOllie@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    }
                ]
            },
            'GabrielleWally@gmail.com': {
                name: 'Gabrielle Wally', email: 'GabrielleWally@gmail.com', picture: 'assets/images/35.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    }
                ]
            },
            'DickJacoby@gmail.com': {
                name: 'Dick Jacoby', email: 'DickJacoby@gmail.com', picture: 'assets/images/5.png', grade: '5', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Music',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Wallace Katheryn', mentorEmail: 'WallaceKatheryn@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Quilling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Mallie Cornelia', mentorEmail: 'MallieCornelia@gmail.com',
                    }
                ]
            },
            'FayetteDalton@gmail.com': {
                name: 'Fayette Dalton', email: 'FayetteDalton@gmail.com', picture: 'assets/images/40.png', grade: '2', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Powerlifting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Justine Chantal', mentorEmail: 'JustineChantal@gmail.com',
                    }
                ]
            },
            'JennetteJed@gmail.com': {
                name: 'Jennette Jed', email: 'JennetteJed@gmail.com', picture: 'assets/images/20.png', grade: '3', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Creative writing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Tracy Barbra', mentorEmail: 'TracyBarbra@gmail.com',
                    }
                ]
            },
            'RoseannLucille@gmail.com': {
                name: 'Roseann Lucille', email: 'RoseannLucille@gmail.com', picture: 'assets/images/33.png', grade: '1', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Martial arts',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Adella Allyson', mentorEmail: 'AdellaAllyson@gmail.com',
                    }
                ]
            },
            'WebsterJoy@gmail.com': {
                name: 'Webster Joy', email: 'WebsterJoy@gmail.com', picture: 'assets/images/17.png', grade: '1', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Vintage cars',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tomeka Tiara', mentorEmail: 'TomekaTiara@gmail.com',
                    }
                ]
            },
            'BartonHobert@gmail.com': {
                name: 'Barton Hobert', email: 'BartonHobert@gmail.com', picture: 'assets/images/44.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Fishkeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Angela Elwin', mentorEmail: 'AngelaElwin@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hooping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Kendal Beth', mentorEmail: 'KendalBeth@gmail.com',
                    }
                ]
            },
            'JuliannaDave@gmail.com': {
                name: 'Julianna Dave', email: 'JuliannaDave@gmail.com', picture: 'assets/images/18.png', grade: '2', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Ghost hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Roscoe Aliyah', mentorEmail: 'RoscoeAliyah@gmail.com',
                    }
                ]
            },
            'GloriaKevon@gmail.com': {
                name: 'Gloria Kevon', email: 'GloriaKevon@gmail.com', picture: 'assets/images/10.png', grade: '2', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Pottery',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Maurice Darci', mentorEmail: 'MauriceDarci@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    }
                ]
            },
            'DarnellRegis@gmail.com': {
                name: 'Darnell Regis', email: 'DarnellRegis@gmail.com', picture: 'assets/images/5.png', grade: '2', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    }
                ]
            },
            'KatieRolland@gmail.com': {
                name: 'Katie Rolland', email: 'KatieRolland@gmail.com', picture: 'assets/images/13.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Metal detecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Keaton Elma', mentorEmail: 'KeatonElma@gmail.com',
                    }
                ]
            },
            'DockTravis@gmail.com': {
                name: 'Dock Travis', email: 'DockTravis@gmail.com', picture: 'assets/images/45.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    }
                ]
            },
            'BettyStanton@gmail.com': {
                name: 'Betty Stanton', email: 'BettyStanton@gmail.com', picture: 'assets/images/2.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Driving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lettie Chase', mentorEmail: 'LettieChase@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Climbing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Verona Louie', mentorEmail: 'VeronaLouie@gmail.com',
                    }
                ]
            },
            'ValentinFlorida@gmail.com': {
                name: 'Valentin Florida', email: 'ValentinFlorida@gmail.com', picture: 'assets/images/19.png', grade: '5', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Kite',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Sara Angelo', mentorEmail: 'SaraAngelo@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    }
                ]
            },
            'EsterTheresa@gmail.com': {
                name: 'Ester Theresa', email: 'EsterTheresa@gmail.com', picture: 'assets/images/44.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Vintage cars',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tomeka Tiara', mentorEmail: 'TomekaTiara@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Marbles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Lilla Jeri', mentorEmail: 'LillaJeri@gmail.com',
                    }
                ]
            },
            'FidelDenver@gmail.com': {
                name: 'Fidel Denver', email: 'FidelDenver@gmail.com', picture: 'assets/images/33.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'EthanCharmaine@gmail.com': {
                name: 'Ethan Charmaine', email: 'EthanCharmaine@gmail.com', picture: 'assets/images/18.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Marbles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Lilla Jeri', mentorEmail: 'LillaJeri@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Christin Augustine', mentorEmail: 'ChristinAugustine@gmail.com',
                    }
                ]
            },
            'JaunitaMarietta@gmail.com': {
                name: 'Jaunita Marietta', email: 'JaunitaMarietta@gmail.com', picture: 'assets/images/2.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Driving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lettie Chase', mentorEmail: 'LettieChase@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Sculling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tyler Erik', mentorEmail: 'TylerErik@gmail.com',
                    }
                ]
            },
            'EasterDeloris@gmail.com': {
                name: 'Easter Deloris', email: 'EasterDeloris@gmail.com', picture: 'assets/images/8.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Crossword puzzles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Devan Miguel', mentorEmail: 'DevanMiguel@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'StephanieMorgan@gmail.com': {
                name: 'Stephanie Morgan', email: 'StephanieMorgan@gmail.com', picture: 'assets/images/18.png', grade: '1', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Singing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carrie Seymour', mentorEmail: 'CarrieSeymour@gmail.com',
                    }
                ]
            },
            'OraliaChas@gmail.com': {
                name: 'Oralia Chas', email: 'OraliaChas@gmail.com', picture: 'assets/images/5.png', grade: '1', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Puzzle',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lois Melissa', mentorEmail: 'LoisMelissa@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Calligraphy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Bennett Shanika', mentorEmail: 'BennettShanika@gmail.com',
                    }
                ]
            },
            'DaisyJudge@gmail.com': {
                name: 'Daisy Judge', email: 'DaisyJudge@gmail.com', picture: 'assets/images/4.png', grade: '5', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Auto racing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Marty Josie', mentorEmail: 'MartyJosie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    }
                ]
            },
            'RettaJeff@gmail.com': {
                name: 'Retta Jeff', email: 'RettaJeff@gmail.com', picture: 'assets/images/10.png', grade: '4', class: '3', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Christin Augustine', mentorEmail: 'ChristinAugustine@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hiking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Madeleine Philomena', mentorEmail: 'MadeleinePhilomena@gmail.com',
                    }
                ]
            },
            'KerrySage@gmail.com': {
                name: 'Kerry Sage', email: 'KerrySage@gmail.com', picture: 'assets/images/39.png', grade: '5', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Snowboarding',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dolly Susanne', mentorEmail: 'DollySusanne@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Creative writing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Tracy Barbra', mentorEmail: 'TracyBarbra@gmail.com',
                    }
                ]
            },
            'MartyArnold@gmail.com': {
                name: 'Marty Arnold', email: 'MartyArnold@gmail.com', picture: 'assets/images/36.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Creative writing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Tracy Barbra', mentorEmail: 'TracyBarbra@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Kabaddi',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Mack Maryjo', mentorEmail: 'MackMaryjo@gmail.com',
                    }
                ]
            },
            'MollyMaxie@gmail.com': {
                name: 'Molly Maxie', email: 'MollyMaxie@gmail.com', picture: 'assets/images/7.png', grade: '1', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Model aircraft',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Aurora Ollie', mentorEmail: 'AuroraOllie@gmail.com',
                    }
                ]
            },
            'VioletSavanna@gmail.com': {
                name: 'Violet Savanna', email: 'VioletSavanna@gmail.com', picture: 'assets/images/48.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'JesseOdie@gmail.com': {
                name: 'Jesse Odie', email: 'JesseOdie@gmail.com', picture: 'assets/images/18.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: '3D printing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'al mog', mentorEmail: 'almog@gmail.com',
                    }
                ]
            },
            'AlexJustyn@gmail.com': {
                name: 'Alex Justyn', email: 'AlexJustyn@gmail.com', picture: 'assets/images/23.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hooping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Kendal Beth', mentorEmail: 'KendalBeth@gmail.com',
                    }
                ]
            },
            'VinceReta@gmail.com': {
                name: 'Vince Reta', email: 'VinceReta@gmail.com', picture: 'assets/images/11.png', grade: '3', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Do it yourself',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ethyle Dee', mentorEmail: 'EthyleDee@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    }
                ]
            },
            'AlysonBernard@gmail.com': {
                name: 'Alyson Bernard', email: 'AlysonBernard@gmail.com', picture: 'assets/images/46.png', grade: '2', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hiking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Madeleine Philomena', mentorEmail: 'MadeleinePhilomena@gmail.com',
                    }
                ]
            },
            'AnastaciaDeron@gmail.com': {
                name: 'Anastacia Deron', email: 'AnastaciaDeron@gmail.com', picture: 'assets/images/3.png', grade: '3', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Machining',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Reuben Wilbert', mentorEmail: 'ReubenWilbert@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    }
                ]
            },
            'AlvaStacie@gmail.com': {
                name: 'Alva Stacie', email: 'AlvaStacie@gmail.com', picture: 'assets/images/42.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Fossil hunting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Christin Augustine', mentorEmail: 'ChristinAugustine@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    }
                ]
            },
            'LillaAnthony@gmail.com': {
                name: 'Lilla Anthony', email: 'LillaAnthony@gmail.com', picture: 'assets/images/42.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Puzzle',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lois Melissa', mentorEmail: 'LoisMelissa@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Hiking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Madeleine Philomena', mentorEmail: 'MadeleinePhilomena@gmail.com',
                    }
                ]
            },
            'CatharineLionel@gmail.com': {
                name: 'Catharine Lionel', email: 'CatharineLionel@gmail.com', picture: 'assets/images/11.png', grade: '5', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Vintage cars',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Tomeka Tiara', mentorEmail: 'TomekaTiara@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'AndrewCarolyn@gmail.com': {
                name: 'Andrew Carolyn', email: 'AndrewCarolyn@gmail.com', picture: 'assets/images/41.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Leather crafting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morris Candice', mentorEmail: 'MorrisCandice@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Motor sports',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Paul Darlene', mentorEmail: 'PaulDarlene@gmail.com',
                    }
                ]
            },
            'CoyRose@gmail.com': {
                name: 'Coy Rose', email: 'CoyRose@gmail.com', picture: 'assets/images/29.png', grade: '5', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Metalworking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Katarina Kelsie', mentorEmail: 'KatarinaKelsie@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Coloring book',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Jamie Lonie', mentorEmail: 'JamieLonie@gmail.com',
                    }
                ]
            },
            'BeckyTyler@gmail.com': {
                name: 'Becky Tyler', email: 'BeckyTyler@gmail.com', picture: 'assets/images/6.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    }
                ]
            },
            'ClayMonte@gmail.com': {
                name: 'Clay Monte', email: 'ClayMonte@gmail.com', picture: 'assets/images/11.png', grade: '1', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Hooping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Kendal Beth', mentorEmail: 'KendalBeth@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    }
                ]
            },
            'StewartBeulah@gmail.com': {
                name: 'Stewart Beulah', email: 'StewartBeulah@gmail.com', picture: 'assets/images/31.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Table tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Rosa Teri', mentorEmail: 'RosaTeri@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    }
                ]
            },
            'WallyCorina@gmail.com': {
                name: 'Wally Corina', email: 'WallyCorina@gmail.com', picture: 'assets/images/3.png', grade: '1', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Die-cast toy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Ardell Griffin', mentorEmail: 'ArdellGriffin@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Martial arts',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Adella Allyson', mentorEmail: 'AdellaAllyson@gmail.com',
                    }
                ]
            },
            'PhoebeJames@gmail.com': {
                name: 'Phoebe James', email: 'PhoebeJames@gmail.com', picture: 'assets/images/24.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Knitting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Jarod Tristian', mentorEmail: 'JarodTristian@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Mountain biking',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Rosella Margret', mentorEmail: 'RosellaMargret@gmail.com',
                    }
                ]
            },
            'JenniferIsai@gmail.com': {
                name: 'Jennifer Isai', email: 'JenniferIsai@gmail.com', picture: 'assets/images/30.png', grade: '1', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Drawing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dorene Hilda', mentorEmail: 'DoreneHilda@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Marbles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Lilla Jeri', mentorEmail: 'LillaJeri@gmail.com',
                    }
                ]
            },
            'LillianJohn@gmail.com': {
                name: 'Lillian John', email: 'LillianJohn@gmail.com', picture: 'assets/images/22.png', grade: '5', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Driving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lettie Chase', mentorEmail: 'LettieChase@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Reading (process)',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Addison Chloe', mentorEmail: 'AddisonChloe@gmail.com',
                    }
                ]
            },
            'AlfredAmanda@gmail.com': {
                name: 'Alfred Amanda', email: 'AlfredAmanda@gmail.com', picture: 'assets/images/5.png', grade: '2', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Table tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Rosa Teri', mentorEmail: 'RosaTeri@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Music',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Wallace Katheryn', mentorEmail: 'WallaceKatheryn@gmail.com',
                    }
                ]
            },
            'SethLauren@gmail.com': {
                name: 'Seth Lauren', email: 'SethLauren@gmail.com', picture: 'assets/images/43.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Outdoor hobbies', sub_category: 'Powerlifting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Justine Chantal', mentorEmail: 'JustineChantal@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Genealogy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Nick Erwin', mentorEmail: 'NickErwin@gmail.com',
                    }
                ]
            },
            'ElbertKeisha@gmail.com': {
                name: 'Elbert Keisha', email: 'ElbertKeisha@gmail.com', picture: 'assets/images/8.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Puzzle',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Lois Melissa', mentorEmail: 'LoisMelissa@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    }
                ]
            },
            'AmaliaJordan@gmail.com': {
                name: 'Amalia Jordan', email: 'AmaliaJordan@gmail.com', picture: 'assets/images/40.png', grade: '2', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Fishkeeping',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Angela Elwin', mentorEmail: 'AngelaElwin@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    }
                ]
            },
            'AltonAlvie@gmail.com': {
                name: 'Alton Alvie', email: 'AltonAlvie@gmail.com', picture: 'assets/images/31.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Coin collecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Dean Jerry', mentorEmail: 'DeanJerry@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Auto racing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Marty Josie', mentorEmail: 'MartyJosie@gmail.com',
                    }
                ]
            },
            'PamelaAugust@gmail.com': {
                name: 'Pamela August', email: 'PamelaAugust@gmail.com', picture: 'assets/images/12.png', grade: '3', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Debate',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Suzette Beau', mentorEmail: 'SuzetteBeau@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Animal fancy',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Enrique Myrna', mentorEmail: 'EnriqueMyrna@gmail.com',
                    }
                ]
            },
            'ElissaHarlan@gmail.com': {
                name: 'Elissa Harlan', email: 'ElissaHarlan@gmail.com', picture: 'assets/images/1.png', grade: '1', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Book restoration',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Teresa Agustin', mentorEmail: 'TeresaAgustin@gmail.com',
                    }
                ]
            },
            'MarianFrederic@gmail.com': {
                name: 'Marian Frederic', email: 'MarianFrederic@gmail.com', picture: 'assets/images/19.png', grade: '4', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Marbles',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Lilla Jeri', mentorEmail: 'LillaJeri@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Music',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Wallace Katheryn', mentorEmail: 'WallaceKatheryn@gmail.com',
                    }
                ]
            },
            'DennyWillie@gmail.com': {
                name: 'Denny Willie', email: 'DennyWillie@gmail.com', picture: 'assets/images/18.png', grade: '2', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Collection hobbies', sub_category: 'Metal detecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Keaton Elma', mentorEmail: 'KeatonElma@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Cycling',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Morgan Tom', mentorEmail: 'MorganTom@gmail.com',
                    }
                ]
            },
            'RalphCedric@gmail.com': {
                name: 'Ralph Cedric', email: 'RalphCedric@gmail.com', picture: 'assets/images/42.png', grade: '4', class: '2', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Computer programming',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Kirby Kurt', mentorEmail: 'KirbyKurt@gmail.com',
                    }
                ]
            },
            'MiguelBrittany@gmail.com': {
                name: 'Miguel Brittany', email: 'MiguelBrittany@gmail.com', picture: 'assets/images/2.png', grade: '4', class: '4', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Jukskei',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Priscilla Sonny', mentorEmail: 'PriscillaSonny@gmail.com',
                    },
                    { category: 'Collection hobbies', sub_category: 'Metal detecting',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Keaton Elma', mentorEmail: 'KeatonElma@gmail.com',
                    }
                ]
            },
            'PabloOpal@gmail.com': {
                name: 'Pablo Opal', email: 'PabloOpal@gmail.com', picture: 'assets/images/48.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Model aircraft',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Aurora Ollie', mentorEmail: 'AuroraOllie@gmail.com',
                    },
                    { category: 'Competitive hobbies', sub_category: 'Tennis',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Carleton Janette', mentorEmail: 'CarletonJanette@gmail.com',
                    }
                ]
            },
            'EvangelineLouvenia@gmail.com': {
                name: 'Evangeline Louvenia', email: 'EvangelineLouvenia@gmail.com', picture: 'assets/images/15.png', grade: '5', class: '5', position: 'student',
                skills: [],
                courses: [
                    { category: 'Competitive hobbies', sub_category: 'Triathlon',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Dollie Eli', mentorEmail: 'DollieEli@gmail.com',
                    },
                    { category: 'Outdoor hobbies', sub_category: 'Scuba diving',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'approved',
                        mentorName: 'Daphne Edith', mentorEmail: 'DaphneEdith@gmail.com',
                    }
                ]
            },
            'MalissaRoss@gmail.com': {
                name: 'Malissa Ross', email: 'MalissaRoss@gmail.com', picture: 'assets/images/6.png', grade: '4', class: '1', position: 'student',
                skills: [],
                courses: [
                    { category: 'Indoor hobbies', sub_category: 'Homebrewing',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Veva Leigh', mentorEmail: 'VevaLeigh@gmail.com',
                    },
                    { category: 'Indoor hobbies', sub_category: 'Drama',
                        image: 'assets/images/sport.png', icon: 'fa fa-camera-retro fa-lg', color: 'tomato', status: 'pending',
                        mentorName: 'Prince Stephanie', mentorEmail: 'PrinceStephanie@gmail.com',
                    }
                ]
            },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.users);
    };
    UserService.prototype.getSettings = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.settings);
    };
    UserService.prototype.changeSettings = function (filter, value) {
        this.settings[filter] = value;
    };
    UserService.prototype.updateUser = function (user) {
        this.users[user.email] = user;
    };
    UserService.prototype.updateUserSkillProperty = function (email, propertyName, newValue) {
        this.users[email].skills[0][propertyName] = newValue;
    };
    UserService.prototype.getUserArray = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userArray);
    };
    UserService.prototype.getUser = function () {
        counter = (counter + 1) % this.userArray.length;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userArray[counter]);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["a" /* filter */].call(this.router.events, function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n:host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n:host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n:host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-footer',
            styles: [__webpack_require__("./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">Created with \u2665 by <b>\n      <a href=\"https://menteeng.com\" target=\"_blank\">Menteeng Team</a></b> 2018</span>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\r\n     [class.left]=\"position === 'normal'\"\r\n     [class.right]=\"position === 'inverse'\">\r\n  <div class=\"logo-containter\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\r\n<!--     <div class=\"logo\" (click)=\"goToHome()\">Menteeng</div>\r\n -->    <img class=\"logo\" style=\"padding:0 0 0 20px; width: 210px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY4AAADGCAYAAADFeGfJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAQdElEQVR42u3dsXIaSR7H8Z9dztf4AYYt+QHWVSg/Bygg8wVSujoCKdxNKBH6MlEkuyEEnC81wTkjEME6F1X2A1hl5gGW2yfgAppalrOge6Zn6B6+nyontiyG6f/Mb7p7pufJcrkUAAC2nrILAAAEBwCA4AAAEBwAAIIDAEBwAABAcAAACA4AAMEBACA4AAAEBwCA4AAAgOAAABAcAACCAwBAcAAACA4AAMEBAADBAQAgOAAABAcAgOAAABAcAAAQHAAAggMAQHAAAAgOAADBAQAgOAAAIDgAAAQHAIDgAAAQHAAAggMAQHAAAPC4ZzFtbKc1ei7ptfnzStL3kupbP/ZZ0ldJnyR96E/an2hmAPDnyXK5jCEwXku6lPRjhv8+l/RO0rv+pP2VJgeACgeHCYy3kv7m6Vf+Kultf9L+L00PABUKDjMk9VbSTwX8+j8kXfYn7Q80PwBUIDg6rdH3kj5I+qHgj/q1P2n/TAkAQMTB0WmNXkn6TdJ3JX3kv/uT9iVlAAD2grkd9wChIUk/dlqjd5QBAEQWHGZO413JobEZHr9QCgAQV4/jnYqf09jlp05r9IZyAID9Dj7HYU7Y/wlgX/wh6Xtu1QWA8HscoQwTfSeJu6wAIOQeR6c1upT0r8D2SY1eBwCE2+N4G+A+odcBACEGh7n9th7gPrmkLAAgzB5HqCfougk1AEBgwfE64P3ymtIAgPCC44eA9wvBAQAhBUcEQ0HPKQ0ACKvHEfqJmTkOAAgsOEL3HbsAAAgOAADBAQAgOMLwkV0AAAEFR3/S/o1dDwAEh6t5wPuFYAOAAIMj5JMzwQEAAQbHh0D3yR8MpQFAgMHRn7Q/aPXWvdB8oCwAIMwehxTO2/9C3yYAIDg2TtIh9To+9iftT5QFAAQaHOYVrSFd4V9SEgAQdo9D/Un7raTPAeyLf/Yn7a+UBAAEHhwbV/qHHLL6aAIMABBDcJh5hcsDffxnSW8oBQCIq8exvj33HyV/7FzSGzPXAgCIKThMeLyT9HeVM2z1WdIr5jUAIOLg2Oh5vFaxE+a/SnpNTwMA3D1ZLpfBblynNXor6Wf5eyPfXNIlS4oAQEWDw4THcxMeeQLks6RfzFAYAKDKwbEVIm+0GsZ6LemHPT/+UatVbj/wNDgAHGlwfCNIXkl6vvXXn5i7AACCAwAQCN45DgAgOAAAxXlW5od1WqMbSQ1J53t+dCGpJ2nan7RnAWzHrD9pTymX8CVJ/UbSjaSa+auxpF6azmfsHcCPUuY4Oq1RQ9LdxsHs4qI/aY89bsudpGaG/zruT9oXlEzQoXFvLgi+5TpN50P2EpBf4UNVndaoJul9xtCQpIH5HT625SpjaEjSuempINyeRmNXHSVJ/YQ9BUQQHOZEneeArWn/kJKtvCf+c0omWDe0H1Cd4Gh4Cp+8vY1GzgCTpIav3g+89jZqlj1aehxAJMHh40R77uGE3Qzo++AwNUZwAJEEhy95T/wMUxAcAI4sODIPeZneSoPmJjgA0OMoq7cCAIixx9FpjbKOUdPbAIAjDA4p+zwFPQ4AqGBw2CwJ4dxzcJjfWFAOABBXcNisBZWl53BlGVoEBwBYeBbQtjyYk/euO2Rqndao4bjwoU1vY6oD3q5rHmBbB9z5jm0er0OOdZfCFWN7UoOINThsT+BN2Q1rufRSZocIDrO+0pXsH0w7X29nktQH5iAepul86vkEsl5hdq1nPufB4eRz+8iPDc1Fwnjf79vxOU3zOa5t1kyS+vKRk2HuFXRDbM/YtjmG+sv4va705/JJjUfOQWPbQE6S+rnZR42t79ZN03nhoyeFr47baY0GshsuujY79nbPz1mvUmuWGbm3+NEX5udsDp6X/Un7IWcR3Sr/ulnbgdv1cOKr7dgPC0mn3zrYzIn8Ru5DiTNzwh47bOO5VotmFuE0yz4MtT1j2+YY6s9DCNrqmW1bOB4DszSdnxYdHKHdVWVz1eKy/IhVb6M/aZcyv5Ek9WaS1L94PmDX3/PeXD3mcbsjPGuSBtsHRpLU32u1ZH6W+aeGpPdJUr9zWLm2yBWKbyrWnrFtcwz159KT+z3Hfr6R9LvpqWyH0WDXdzLBcjzBYeYuFpZFalsYPsLKV1f1TsWul3RrDqSs9g4TmsJdX+V9kZ8hvqakuySpNzy1aVYnFWvP2LY5hvrb28tIkvqdxciJrYH5fZvbWjvgMRJkj8P2RL53x5heiU1RFf5mOHPADkraf+dbhebSrbbpyTXMQZv1xVy7Ttrv1yeGA7XXQ1XaM7Ztjqj+9n2HrL2ffYF5b36/TegX/txaiMEx87RjbHdeoT0O020clLwPm2bi0oXtAbN+m2NRV/z7trtX0GcvbH53RO0Z2zbHUn+73BV4te/yvQtfuy3aHofFPIdNAxY6v2HGTV0KcSGpq9Uk4JP1H60m77uOV9tX2+OjvoYiSrhafTT0zUTmmVZ3oPi6UOlKerlvYjfG9qxgDR60/nbs51sVP0TUKOH7Wwntdlz1J+1ZpzXa9zzHukcxztnjKHp+49Yh/YdpOr9+5GS5vhrubVw92vze2ySpj8u4PU+rWwGn23eoZLjdU1oNMU53hMd08983hi72tneazs+OrD2PpQZLq79vhMb6ri7XC5b1rcyLjd/VMOeumxw9h8LfOxPqWlW5niJ3WGakyNsdm7KfuOs+dsDuuOK2ORA372svysxcnV5/67bGNJ330nT+0jGkg3t3SozteSQ1GEL9uYbGdZrOT822Lba2d2b+/oWKG5atbHDMcjZuCPMbtsU0TNO5U4GYIZVr2+3IM+FncQVv++zDhSwnnyXVfNzhQntWvgYPXn8mnF2Gts5sn7hP03nXYR8THJYn9Jp5wC9rcBQ2v7HR3dxnPZ7szFxdWe0nFXOXxYM5GG23d2GGE4Lpble5PY+gBkOpP5fe1IXrE/YmZLoKTJDB4eF5DpuuZpG9DduDZJhz7Nf2KrGIoZ/rDNvuss9DeqtfjO1Z9Ro8eP2ZXpTt95pmfULd9AanAR0PQb+PI9PzHKYXUvNcRK5siynXnUHm6sXnA5O2ZlnWJjJDCgtfB26JYmzPKtdgKPXn8p3yzlcENd8RcnBkfZ7Dqnven7QLCQ5zFWL1/g9PaxFZDRV4XlJhXHC7BiPG9jyCGgyl/mzn4WZ5F4E0/z+YYyf2Hse35jkOvcxI2RPztsXkMzjyFPCD4hJje1a9BkOpv5OS9/M4lIMi2OBwmOc4z3DQFJncJyUX8CFeQPUQyIFbhhjbs+o1GEr9Wfc4AghMr54FftDavp9DktRpjWwWACu6x2F9q2QRq5+Wocz3GAQgxvasdA0GVH+2AV254HgaeI1YvYd8Y/kR2/mNWQAHbdl4Ne7xtCc1WMGgM3eRBbEPQw8O255B0yE4ir6t7STEA9bjS4Eejuy4j7E9q1yDx1Z/QYZv0MHhMM/RCGGZkYD1BNqTbfamwNUYovA0gm20XbcqiGXUAzR2XU4CtCfbvFtJC4cG61kE2zjT/gnyhuwe/S96fiOUrvTY7LfxkU1k057UIAgOpx5CCPMbkv0YZJeeQBRibE9qsLyLir3zSUlSP/EYnkHMXwU/VOUwz2HbewnloD3huKtUcJywzfRGi9zPIa0Y/TSSBpoG9nuCKSbQntTgwdheiPo64TdD+eJPK9ZAO6/CSpjfcAmnBsddpS5aGmwzwVHwCZ8exwF6CqXcTWXutrApqJp5BadXSVK/TZL60vy5L+IzjkmM7UkNBndeauZd4NH8/2D2YxTB4WmeYxZgQV15PFhrSVK/01/f+taQ9N68pQzZn6iOsT2pwXAuKiT318tuG4T03Z9G1E7TA/9/F7arWDZ9HFDmauRO+V5sFTPrV4IeUXtSg2Ed61dZe15mPbGggjem4MjTYyhrfmN9JTJzCKpBnqdQzZ0Wd9o9/nnUT7keY3tSg6UZOoyGDFxD2oTNbWhf+lh6HId4Wtz2/vgTSXdZDlxTVPfaf3dMpR/AcrhH/iTHCTLG9qQGi6+9hcN+rpn9fGW5bweS3of4vaMJjpzzHLMDFNTUoRvbkHRvezWSJPUTM5ZsW1TDI+gY2NbG+bG0JzVYaq/DJRgHSVL/kiT1m+1J8ySpN8zfL+Vx/sm3Z5E10DTjgX+o9am6Wo1N2lzJra/6pmZ7h5vr4ZirwStzgLvsg+GRLPnwILvbFW+TpL5I0/l4Y99ebbXR9JGVXGNsT2qwhF5HktS7jr2DE62GoG6TpB7dd44tOMYZgqPU+Y3tIZQkqV9oNf5ra71go4+CejAnjmMwtQyOmlZ3+ey7oj7bfk90jO1JDZZ2rI+TpN5T/run9l0EBDHf8TTCk0OWsPE51JFliOP6QEM3F0e0iqfvi4NBVdqTGiwtPLoqbkguqHXFygiOB18/15+0FxnCY+p5O7McuENJFyUfsGeOL85ZeN5PZQf0WH4nYE8ib8/Ytjnq+tvYz9fy/+6RbprOew43LxQe1CEFh22BjV2KpD9pjz1+/syEV9YT26mKn6ifSjp1Pck4PMyUd/tnDt8jS1e+lB5M6O0Z2zZXpP42ex4XHk7g6/BdB9HxBIc5ce8Lj6HtCbk/aQ8dGtWlez729DO7CmqWpvNTc4Lz3bgPkq7TdH6WYyJy6Olndu4Di/abZjlRmhOjryGZbgXaM7Ztjrr+tmsxTecvclzMdNN0/mJ7ni0UZc1xXO8pNtede2Fx5dB16G2oP2k/7NnOaX/S7nk6eHsbRZX3CmpsDtaXZjgiz3YN94TjtaeT2PWOi4lFnp6D+Q5nOYY0ZuYqbxp7e8a2zVWov0f28xNzzuruCK2Z+ffrNJ0/yTmfUXiP48lyuSwlOTqt0fotfVdbV3XDrMM/ndboRqu7rBpbVyTj/qQ9zfg7m1rdGdHcCLahr9B4jFlWQFqNrV/tOUhn66IscFtuNrrGU0k9n1c/Zrx2/TmbbdfzdYVtnkloaPerhTcf4Bp7/Oxg2jO2ba5K/RWwX5qyuztunKbzQuezSgsOAECu4LiS3WKHPTPPUphnNAcAFNJ7Gfq4qWGD7dLslbirCgCqHBr3+v8H/660WsLF57Ihtr+r8Al1ggMAsrvZ0xMY+AiPbyyL82hvw3Mvh+AAAM9slrkZ5HkLolm23napkXEZX5rgAIDivd+4a821p3Ev+4f/SlmFmLuqACB7b+BG7gsPdrUaUhru+J3SX29JtjFN0/kZwQEAYQdHTdIXHf4Nhwutlnkp5RkUhqoAICOzxtZFAJvSLfPBRYIDAPKFx1SrZW4OGRqlvmGR4AAAP+FRxsrD2y4OsVQNcxwA4JG5E2r9it2iDE1P4yAvySI4AKCYAFkvsunrda8P+nMpk4O+VZHgAIDiQ+REq5W8ZcJk3wOBm6s2K6TXxhIcAABnTI4DAAgOAADBAQAgOAAABAcAgOAAAIDgAAAQHAAAggMAQHAAAAgOAADBAQAAwQEAIDgAAAQHAIDgAAAQHAAAggMAAIIDAEBwAAAIDgAAwQEAIDgAACA4AAAEBwCA4AAAEBwAAIIDAEBwAABAcAAACA4AAMEBACA4AAAEBwCA4AAAgOAAABAcAACCAwBAcAAACA4AAMEBAADBAQAgOAAABAcAgOAAABAcAAAQHAAAggMAQHAAAILyP7OxmlEZ0H8aAAAAAElFTkSuQmCC\"/>\r\n  </div>\r\n  <ngx-theme-switcher style=\"margin-left:-55px\"></ngx-theme-switcher>\r\n</div>\r\n\r\n<nb-actions\r\n  size=\"medium\"\r\n  class=\"header-container\"\r\n  [class.right]=\"position === 'normal'\"\r\n  [class.left]=\"position === 'inverse'\">\r\n  <nb-action icon=\"nb-grid-b\" class=\"toggle-layout\" (click)=\"toggleSettings()\"></nb-action>\r\n  <nb-action *nbIsGranted=\"['view', 'user']\"  >\r\n    <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.name\" [picture]=\"user?.picture\"></nb-user>\r\n  </nb-action>\r\n  <nb-action class=\"control-item\" disabled icon=\"nb-notifications\"></nb-action>\r\n  <nb-action class=\"control-item\" icon=\"nb-email\"></nb-action>\r\n  <nb-action class=\"control-item\">\r\n    <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\r\n  </nb-action>\r\n</nb-actions>\r\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n:host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-default) .control-item {\n    display: block; }\n:host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #ebeef2;\n      white-space: nowrap; }\n:host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n:host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n:host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n:host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n:host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n:host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n:host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n:host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap; }\n:host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n:host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n@media (max-width: 991.98px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n@media (max-width: 767.98px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService, router, tokenService, authService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.router = router;
        this.tokenService = tokenService;
        this.authService = authService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                var userName = token.token.split('@')[0];
                _this.userService.getUsers()
                    .subscribe(function (users) {
                    _this.user = users[token.token];
                });
                // here we receive a payload from the token and assigne it to our `user` variable
                //  this.user = token;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.onItemClick().subscribe(function (tag) {
            if (tag.item.title === 'Profile') {
                _this.router.navigate(['pages/forms/inputs']);
            }
            if (tag.item.title === 'Log out') {
                _this.tokenService.clear();
                _this.router.navigate(['auth/login']);
            }
        });
        /*this.userService.getUsers()
          .subscribe((users: any) => this.user = users.almog);*/
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-header',
            styles: [__webpack_require__("./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__("./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["i" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__core_utils_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__nebular_auth__["m" /* NbTokenService */],
            __WEBPACK_IMPORTED_MODULE_4__nebular_auth__["f" /* NbAuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("./src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("./src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__ = __webpack_require__("./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__ = __webpack_require__("./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__ = __webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__ = __webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__["a"]; });








/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    -webkit-transition: width 0.2s ease;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__("./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-default) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-default) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n:host-context(.nb-theme-default) .settings-row a.selected {\n      color: #40dc7e; }\n:host-context(.nb-theme-cosmic) h6 {\n  margin-bottom: 0.5rem; }\n:host-context(.nb-theme-cosmic) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n:host-context(.nb-theme-cosmic) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00d977; }\n:host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00f9a6; }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-settings/theme-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = /** @class */ (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    ThemeSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-theme-settings',
            styles: [__webpack_require__("./src/app/@theme/components/theme-settings/theme-settings.component.scss")],
            template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */]])
    ], ThemeSettingsComponent);
    return ThemeSettingsComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-default) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-default) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-default) .theme-switch > span.light {\n        color: #4b4b4b;\n        padding-right: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span.cosmic {\n        color: #a4abb3;\n        padding-left: 10px; }\n:host-context(.nb-theme-default) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-default) .switch input {\n      display: none; }\n:host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n:host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #40dc7e;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n:host-context(.nb-theme-cosmic) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #d1d1ff;\n        padding-right: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #a1a1e5;\n        padding-left: 10px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #ffffff; }\n:host-context(.nb-theme-cosmic) .theme-switch > span:active {\n        opacity: 0.78; }\n:host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n:host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n:host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n:host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #00d977;\n      -webkit-transition: 0.2s;\n      transition: 0.2s;\n      -webkit-box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n              box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 575.98px) {\n    :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n@media (max-width: 399.98px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
        this.themeService.changeTheme('default');
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    ThemeSwitcherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-theme-switcher',
            styles: [__webpack_require__("./src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
            template: "\n    <label class=\"theme-switch\">\n      <span class=\"light\">Light</span>\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"currentBoolTheme()\" (change)=\"toggleTheme(theme.checked)\" #theme>\n        <span class=\"slider\"></span>\n      </div>\n      <span class=\"cosmic\">Cosmic</span>\n    </label>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["r" /* NbThemeService */], __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */]])
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMCEComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__ = __webpack_require__("./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__sample_sample_layout__["a"]; });






/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-one-column-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/one-column/one-column.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        })
    ], OneColumnLayoutComponent);
    return OneColumnLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("./src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    SampleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>About Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [right]=\"sidebar.id !== 'right'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["i" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["r" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["g" /* NbMediaBreakpointsService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbSidebarService */]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-three-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
        })
    ], ThreeColumnsLayoutComponent);
    return ThreeColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    TwoColumnsLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-two-columns-layout',
            styles: [__webpack_require__("./src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
        })
    ], TwoColumnsLayoutComponent);
    return TwoColumnsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("./src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("./src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("./src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });






/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_security__ = __webpack_require__("./node_modules/@nebular/security/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("./src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes__ = __webpack_require__("./src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts__ = __webpack_require__("./src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_theme_default__ = __webpack_require__("./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_theme_cosmic__ = __webpack_require__("./src/app/@theme/styles/theme.cosmic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["f" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["p" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["s" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["l" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["n" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbPopoverModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbContextMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
    __WEBPACK_IMPORTED_MODULE_5__nebular_security__["b" /* NbSecurityModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__components__["e" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["c" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["d" /* ThemeSettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["f" /* TinyMCEComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["a" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["b" /* SampleLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["c" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__layouts__["d" /* TwoColumnsLayoutComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_7__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["q" /* NbThemeModule */].forRoot({
    name: 'cosmic',
}, [__WEBPACK_IMPORTED_MODULE_9__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_10__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers.concat(__WEBPACK_IMPORTED_MODULE_4__nebular_theme__["n" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["h" /* NbMenuModule */].forRoot().providers);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    ThemeModule = ThemeModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
        })
    ], ThemeModule);
    return ThemeModule;
    var ThemeModule_1;
}());



/***/ }),

/***/ "./src/app/AlmogDummyProvider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmogDummyAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AlmogDummyAuthProvider = /** @class */ (function (_super) {
    __extends(AlmogDummyAuthProvider, _super);
    function AlmogDummyAuthProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlmogDummyAuthProvider.prototype.createDummyResult = function (data) {
        if (this.getConfigValue('alwaysFail')) {
            // TODO we dont call tokenService clear during logout in case result is not success
            return new __WEBPACK_IMPORTED_MODULE_0__nebular_auth__["e" /* NbAuthResult */](false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        // TODO is it missed messages here, is it token should be defined
        return new __WEBPACK_IMPORTED_MODULE_0__nebular_auth__["e" /* NbAuthResult */](true, { data: data, token: '12345' }, '/pages', ['Successfully logged in.'], [], data.email);
    };
    return AlmogDummyAuthProvider;
}(__WEBPACK_IMPORTED_MODULE_0__nebular_auth__["g" /* NbDummyAuthProvider */]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'pages', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]], loadChildren: 'app/pages/pages.module#PagesModule' },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["b" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["h" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["h" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["j" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["i" /* NbLogoutComponent */],
            },
            {
                path: 'request-password',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["k" /* NbRequestPasswordComponent */],
            },
            {
                path: 'reset-password',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["l" /* NbResetPasswordComponent */],
            },
        ],
    },
    { path: '', canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]], redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, config)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
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
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("./src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AlmogDummyProvider__ = __webpack_require__("./src/app/AlmogDummyProvider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_fontawesome_angular2_fontawesome__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__["a" /* ThemeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__nebular_auth__["d" /* NbAuthModule */].forRoot({
                    providers: {
                        email: {
                            service: __WEBPACK_IMPORTED_MODULE_12__AlmogDummyProvider__["a" /* AlmogDummyAuthProvider */],
                            config: {
                                // delay: 3000,
                                login: {
                                    rememberMe: true,
                                    alwaysFail: false,
                                    data: {
                                        almog: true,
                                    },
                                    redirect: {
                                        success: '/pages',
                                        failure: '/pages',
                                    },
                                    defaultErrors: ['Login/Email combination is not correct, please try again.'],
                                    defaultMessages: ['You have been successfully logged in.'],
                                },
                            },
                        },
                    },
                    forms: {},
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__AlmogDummyProvider__["a" /* AlmogDummyAuthProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"], useValue: '/' }, __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__nebular_auth__["a" /* NB_AUTH_PROVIDERS */], useValue: __WEBPACK_IMPORTED_MODULE_10__nebular_auth__["c" /* NbAuthJWTToken */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['auth/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["f" /* NbAuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map