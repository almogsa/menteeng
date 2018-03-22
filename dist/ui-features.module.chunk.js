webpackJsonp(["ui-features.module"],{

/***/ "./src/app/pages/ui-features/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Grid System\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h5 class=\"grid-h\">Stacked to horizontal</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-8\">\r\n            <div>.col-md-8</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-6\">\r\n            <div>.col-md-6</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div>.col-md-6</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Mobile and desktop</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-12 col-md-8\">\r\n            <div>.col-12 .col-md-8</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>col-6 .col-md-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>.col-6</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>.col-6</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Mobile, tablet, desktop</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-12 col-sm-6 col-md-8\">\r\n            <div>.col-12 .col-sm-6 .col-md-8</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Column wrapping</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-9\">\r\n            <div>.col-9</div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div>.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>.col-6<br>Subsequent columns continue along the new line.</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Responsive column resets</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3\r\n              <p>Resize your viewport or check it out on your phone for an example.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Offsetting columns</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4 offset-md-4\">\r\n            <div>.col-md-4 .offset-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-3 offset-md-3\">\r\n            <div>.col-md-3 .offset-md-3</div>\r\n          </div>\r\n          <div class=\"col-md-3 offset-md-3\">\r\n            <div>.col-md-3 .offset-md-3</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div>.col-md-6 .offset-md-3</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Grid options</h5>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th> Extra small devices\r\n                  <small>Phones (&lt;576px)</small>\r\n                </th>\r\n                <th> Small devices\r\n                  <small>Tablets (≥576px)</small>\r\n                </th>\r\n                <th> Medium devices\r\n                  <small>Desktops (≥768px)</small>\r\n                </th>\r\n                <th> Large devices\r\n                  <small>Desktops (≥992px)</small>\r\n                </th>\r\n                <th> Large devices\r\n                  <small>Desktops (≥1200px)</small>\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\r\n                <td>Horizontal at all times</td>\r\n                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Container width</th>\r\n                <td>None (auto)</td>\r\n                <td>540px</td>\r\n                <td>720px</td>\r\n                <td>960px</td>\r\n                <td>1140px</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\r\n                <td><code>.col-</code></td>\r\n                <td><code>.col-sm-</code></td>\r\n                <td><code>.col-md-</code></td>\r\n                <td><code>.col-lg-</code></td>\r\n                <td><code>.col-xl-</code></td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\r\n                <td colspan=\"5\">12</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\r\n                <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/grid/grid.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .show-grid .row {\n  margin: -0.5rem; }\n:host-context(.nb-theme-default) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n:host-context(.nb-theme-default) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n:host-context(.nb-theme-default) .grid-h {\n  margin-top: 1.5rem; }\n:host-context(.nb-theme-default) .grid-h:first-child {\n    margin-top: 0; }\n:host-context(.nb-theme-default) .table-responsive {\n  margin-top: 1rem; }\n:host-context(.nb-theme-cosmic) .show-grid .row {\n  margin: -0.5rem; }\n:host-context(.nb-theme-cosmic) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n:host-context(.nb-theme-cosmic) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n:host-context(.nb-theme-cosmic) .grid-h {\n  margin-top: 1.5rem; }\n:host-context(.nb-theme-cosmic) .grid-h:first-child {\n    margin-top: 0; }\n:host-context(.nb-theme-cosmic) .table-responsive {\n  margin-top: 1rem; }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-grid',
            styles: [__webpack_require__("./src/app/pages/ui-features/grid/grid.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/grid/grid.component.html"),
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <nb-card class=\"nb-icons\">\r\n      <nb-card-header>\r\n        Nebular\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.nebular\"><i class=\"{{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"https://www.npmjs.com/package/nebular-icons\" target=\"_blank\">See all Nebular icons</a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Font awesome icons\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.fontAwesome\"><i class=\"fa {{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\">\r\n          See all Font Awesome icons\r\n        </a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Ionicons\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.ionicons\"><i class=\"{{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"http://ionicons.com/\" target=\"_blank\">See all ionicons icons</a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.scss":
/***/ (function(module, exports) {

module.exports = ".icon {\n  display: inline-block;\n  width: 4rem;\n  padding: 1.25rem 0;\n  text-align: center;\n  font-size: 1.25rem; }\n\n.nb-icons .icon {\n  padding: 0.75rem 0;\n  font-size: 1.75rem; }\n\nnb-card-body {\n  padding: 0; }\n\nnb-card-footer {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icons = {
            nebular: ['nb-alert', 'nb-angle-double-left', 'nb-arrow-down', 'nb-arrow-dropdown', 'nb-arrow-dropleft',
                'nb-arrow-dropright', 'nb-arrow-dropup', 'nb-arrow-left', 'nb-arrow-retweet', 'nb-arrow-right',
                'nb-arrow-thin-down', 'nb-arrow-thin-left', 'nb-arrow-thin-right', 'nb-arrow-thin-up',
                'nb-arrow-up', 'nb-audio', 'nb-bar-chart', 'nb-chekmark', 'nb-chevron-down',
                'nb-chevron-down-outline', 'nb-chevron-left', 'nb-chevron-left-outline', 'nb-chevron-right',
                'nb-chevron-right-outline', 'nb-chevron-up', 'nb-chevron-up-outline', 'nb-close',
                'nb-close-circled', 'nb-cloudy', 'nb-coffee-maker', 'nb-compose', 'nb-edit', 'nb-email',
                'nb-flame-circled', 'nb-gear', 'nb-grid-a', 'nb-grid-a-outline', 'nb-grid-b', 'nb-grid-b-outline',
                'nb-heart', 'nb-home', 'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column',
                'nb-layout-sidebar-left', 'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb',
                'nb-list', 'nb-location', 'nb-locked', 'nb-loop', 'nb-loop-circled', 'nb-menu', 'nb-notifications',
                'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-pause-outline', 'nb-person', 'nb-phone',
                'nb-play', 'nb-play-outline', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-power-circled',
                'nb-rainy', 'nb-roller-shades', 'nb-search', 'nb-shuffle', 'nb-skip-backward',
                'nb-skip-backward-outline', 'nb-skip-forward', 'nb-skip-forward-outline', 'nb-snowy-circled',
                'nb-square', 'nb-square-outline', 'nb-star', 'nb-sunny', 'nb-sunny-circled', 'nb-tables', 'nb-title',
                'nb-trash', 'nb-volume-high', 'nb-volume-mute'],
            ionicons: [
                'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
                'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap',
                'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up',
                'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon',
                'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled',
                'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help',
                'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled',
                'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star',
                'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle',
                'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b',
                'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel',
                'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive',
                'ion-reply', 'ion-reply-all', 'ion-forward',
            ],
            fontAwesome: [
                'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h',
                'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank',
                'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
                'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars',
                'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o',
                'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn',
            ],
        };
    }
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-icons',
            styles: [__webpack_require__("./src/app/pages/ui-features/icons/icons.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/icons/icons.component.html"),
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/modals/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.modalContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy\n    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis\n    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
    }
    ModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-modal',
            template: "\n    <div class=\"modal-header\">\n      <span>{{ modalHeader }}</span>\n      <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{ modalContent }}\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-md btn-primary\" (click)=\"closeModal()\">Save changes</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card>\r\n      <nb-card-header>Modals</nb-card-header>\r\n      <nb-card-body>\r\n        <button class=\"btn btn-success\" (click)=\"showLargeModal()\">Large modal</button>\r\n        <button class=\"btn btn-warning\" (click)=\"showSmallModal()\">Small modal</button>\r\n        <button class=\"btn btn-primary\" (click)=\"showStaticModal()\">Static modal</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.scss":
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 0 0.75rem 2rem 0; }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_component__ = __webpack_require__("./src/app/pages/ui-features/modals/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.showLargeModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    ModalsComponent.prototype.showSmallModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    ModalsComponent.prototype.showStaticModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__modal_modal_component__["a" /* ModalComponent */], {
            size: 'sm',
            backdrop: 'static',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    ModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-modals',
            styles: [__webpack_require__("./src/app/pages/ui-features/modals/modals.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/modals/modals.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popover-examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgxPopoverTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxPopoverFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPopoverCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgxPopoverTabsComponent = /** @class */ (function () {
    function NgxPopoverTabsComponent() {
    }
    NgxPopoverTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-popover-tabs',
            template: "\n    <nb-tabset>\n      <nb-tab tabTitle=\"What's up?\">\n        <div class=\"p-4\">\n          Such a wonderful day!\n        </div>\n      </nb-tab>\n      <nb-tab tabTitle=\"Second Tab\">\n        <div class=\"p-4\">\n          Indeed!\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  ",
        })
    ], NgxPopoverTabsComponent);
    return NgxPopoverTabsComponent;
}());

var NgxPopoverFormComponent = /** @class */ (function () {
    function NgxPopoverFormComponent() {
    }
    NgxPopoverFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-popover-form',
            template: "\n    <div class=\"p-4\">\n      <form>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary w-100\">Send</button>\n      </form>\n    </div>\n  ",
        })
    ], NgxPopoverFormComponent);
    return NgxPopoverFormComponent;
}());

var NgxPopoverCardComponent = /** @class */ (function () {
    function NgxPopoverCardComponent() {
    }
    NgxPopoverCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-popover-card',
            template: "\n    <nb-card class=\"popover-card\">\n      <nb-card-header status=\"warning\">\n        Hello!\n      </nb-card-header>\n      <nb-card-body>\n        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n        there live the blind texts.\n        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\n      </nb-card-body>\n    </nb-card>\n  ",
        })
    ], NgxPopoverCardComponent);
    return NgxPopoverCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-card-header>Popover Position</nb-card-header>\r\n      <nb-card-body>\r\n        <p>When popover has not enough space based on the configured placement, it will adjust accordingly trying to fit the screen.</p>\r\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"left\">Left</button>\r\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"top\">Top</button>\r\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"bottom\">Bottom</button>\r\n        <button class=\"btn btn-danger with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\" nbPopoverPlacement=\"right\">Right</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-card-header>Simple Popovers</nb-card-header>\r\n      <nb-card-body>\r\n        <p>In a simples form popover can take a string of text to render.</p>\r\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\">on click</button>\r\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hover\">on hover</button>\r\n        <button class=\"btn btn-success with-margins\" nbPopover=\"Hello, how are you today?\" nbPopoverMode=\"hint\">on hint</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n\r\n    <ng-template #tabs>\r\n      <nb-tabset>\r\n        <nb-tab tabTitle=\"What's up?\">\r\n          <div class=\"p-4\">\r\n            Such a wonderful day!\r\n          </div>\r\n        </nb-tab>\r\n        <nb-tab tabTitle=\"Second Tab\">\r\n          <div class=\"p-4\">\r\n            Indeed!\r\n          </div>\r\n        </nb-tab>\r\n      </nb-tabset>\r\n    </ng-template>\r\n\r\n    <ng-template #form>\r\n      <div class=\"p-4\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary w-100\">Send</button>\r\n        </form>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template #card>\r\n      <nb-card class=\"popover-card\">\r\n        <nb-card-header status=\"warning\">\r\n          Hello!\r\n        </nb-card-header>\r\n        <nb-card-body>\r\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.\r\n          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\r\n        </nb-card-body>\r\n      </nb-card>\r\n    </ng-template>\r\n\r\n    <nb-card size=\"small\">\r\n      <nb-card-header>Template Popovers</nb-card-header>\r\n      <nb-card-body>\r\n        <p>You can pass a refference to `ng-template` to be rendered.</p>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"tabs\">With tabs</button>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"form\">With form</button>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"card\">With card</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-card-header>Component Popovers</nb-card-header>\r\n      <nb-card-body>\r\n        <p>Same way popover can render any angular compnoent.</p>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"tabsComponent\">With tabs</button>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"formComponent\">With form</button>\r\n        <button class=\"btn btn-warning with-margins\" [nbPopover]=\"cardComponent\">With card</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card>\r\n      <nb-card-header>Event Debouncing</nb-card-header>\r\n      <nb-card-body>\r\n        <p>Quickly move mouse cursor over the buttons, only the last popover will be created. It allows us to avoid excess white improving page performance.</p>\r\n\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n        <button class=\"btn btn-outline-secondary\" nbPopover=\"Popover!\" nbPopoverMode=\"hint\">\r\n          show hint\r\n        </button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.scss":
/***/ (function(module, exports) {

module.exports = "button.with-margins {\n  margin: 0 0.75rem 2rem 0; }\n\n/deep/ nb-card.popover-card {\n  margin-bottom: 0;\n  width: 300px;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n:host /deep/ .btn-outline-secondary {\n  margin: 0 0.5rem 0.5rem 0; }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/popovers/popovers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoversComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_examples_component__ = __webpack_require__("./src/app/pages/ui-features/popovers/popover-examples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PopoversComponent = /** @class */ (function () {
    function PopoversComponent() {
        this.tabsComponent = __WEBPACK_IMPORTED_MODULE_1__popover_examples_component__["c" /* NgxPopoverTabsComponent */];
        this.cardComponent = __WEBPACK_IMPORTED_MODULE_1__popover_examples_component__["a" /* NgxPopoverCardComponent */];
        this.formComponent = __WEBPACK_IMPORTED_MODULE_1__popover_examples_component__["b" /* NgxPopoverFormComponent */];
    }
    PopoversComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-popovers',
            styles: [__webpack_require__("./src/app/pages/ui-features/popovers/popovers.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/popovers/popovers.component.html"),
        })
    ], PopoversComponent);
    return PopoversComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/search-fields/search-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Layout Rotate Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"rotate-layout\" tag=\"rotate-layout\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Zoomin Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-zoomin\" tag=\"modal-zoomin\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Move Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-move\" tag=\"modal-move\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Drop Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-drop\" tag=\"modal-drop\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Half Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-half\" tag=\"modal-half\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Curtain Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"curtain\" tag=\"curtain\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Column Curtain Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"column-curtain\" tag=\"column-curtain\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/search-fields/search-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-search-fields',
            template: __webpack_require__("./src/app/pages/ui-features/search-fields/search-fields.component.html"),
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-tabset>\r\n        <nb-tab tabTitle=\"Simple Tab #1\">\r\n          <p>In 1975, the first general purpose home automation network technology, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, was developed. It is a communication protocol for electronic devices. It primarily uses <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_transmission\" title=\"Electric power transmission\">electric power transmission</a> wiring for signalling and control, where the signals involve brief <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Radio_frequency\" title=\"Radio frequency\">radio frequency</a> bursts of <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Digital_data\" title=\"Digital data\">digital data</a>, and remains the most widely available.<sup id=\"cite_ref-8\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-8\">[8]</a></sup> By 1978, X10 products included a 16 channel command console, a lamp module, and an appliance module. Soon after came the wall switch module and the first X10 timer.</p>\r\n        </nb-tab>\r\n        <nb-tab tabTitle=\"Simple Tab #2\">\r\n          <span>Content #2</span>\r\n        </nb-tab>\r\n        <nb-tab tabTitle=\"Simple Tab #3\">\r\n          <span>Content #3</span>\r\n        </nb-tab>\r\n      </nb-tabset>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-tabset fullWidth>\r\n        <nb-tab tabTitle=\"Full width tab #1\">\r\n          <p><b>Home automation</b> or <b>smart home</b><sup id=\"cite_ref-Smart_Home_1-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-Smart_Home-1\">[1]</a></sup> (also known as <b>domotics</b><sup id=\"cite_ref-t3_2-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-t3-2\">[2]</a></sup>) is <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Building_automation\" title=\"Building automation\">building automation</a> for the home. It involves the control and automation of lighting, heating (such as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Smart_thermostat\" title=\"Smart thermostat\">smart thermostats</a>), ventilation, air conditioning (<a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/HVAC\" title=\"HVAC\">HVAC</a>), and security, as well as <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliance\" title=\"Home appliance\">home appliances</a> such as washer/dryers, ovens or refrigerators/freezers. <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Wi-Fi\" title=\"Wi-Fi\">Wi-Fi</a> is often used for remote monitoring and control. Home devices, when remotely monitored and controlled via the Internet, are an important constituent of the <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Internet_of_Things\" class=\"mw-redirect\" title=\"Internet of Things\">Internet of Things</a>. Modern systems generally consist of switches and sensors connected to a central hub sometimes called a \"gateway\" from which the system is controlled with a <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/User_interface\" title=\"User interface\">user interface</a> that is interacted either with a wall-mounted terminal, mobile phone software, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Tablet_computer\" title=\"Tablet computer\">tablet computer</a> or a web interface, often but not always via Internet cloud services.</p>\r\n          <p>While there are many competing vendors, there are very few worldwide accepted industry standards and the smart home space is heavily fragmented.<sup id=\"cite_ref-3\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-3\">[3]</a></sup> Popular <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Communications_protocol\" title=\"Communications protocol\">communications protocol</a> for products include <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/X10_(industry_standard)\" title=\"X10 (industry standard)\">X10</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Ethernet\" title=\"Ethernet\">Ethernet</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/RS-485\" title=\"RS-485\">RS-485</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/6LoWPAN\" title=\"6LoWPAN\">6LoWPAN</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Bluetooth_low_energy\" class=\"mw-redirect\" title=\"Bluetooth low energy\">Bluetooth LE (BLE)</a>, <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/ZigBee\" class=\"mw-redirect\" title=\"ZigBee\">ZigBee</a> and <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Z-Wave\" title=\"Z-Wave\">Z-Wave</a>, or other proprietary protocols all of which are incompatible with each other.<sup id=\"cite_ref-crhomephone_4-0\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-crhomephone-4\">[4]</a></sup> Manufacturers often prevent independent implementations by withholding documentation and by litigation.<sup id=\"cite_ref-5\" class=\"reference\"><a target=\"_blank\" href=\"https://en.wikipedia.org#cite_note-5\">[5]</a></sup></p>\r\n        </nb-tab>\r\n        <nb-tab tabTitle=\"Full width tab #2\">\r\n          <span>Content #2</span>\r\n        </nb-tab>\r\n        <nb-tab tabTitle=\"Full width tab #3\">\r\n          <span>Content #3</span>\r\n        </nb-tab>\r\n      </nb-tabset>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <nb-card size=\"small\">\r\n      <nb-route-tabset [tabs]=\"tabs\"></nb-route-tabset>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n:host-context(.nb-theme-default) nb-tab {\n  padding: 1.25rem; }\n:host-context(.nb-theme-default) /deep/ ngx-tab1, :host-context(.nb-theme-default) /deep/ ngx-tab2 {\n  display: block;\n  padding: 1.25rem; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n:host-context(.nb-theme-cosmic) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n:host-context(.nb-theme-cosmic) nb-tab {\n  padding: 1.25rem; }\n:host-context(.nb-theme-cosmic) /deep/ ngx-tab1, :host-context(.nb-theme-cosmic) /deep/ ngx-tab2 {\n  display: block;\n  padding: 1.25rem; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Tab1Component = /** @class */ (function () {
    function Tab1Component() {
    }
    Tab1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tab1',
            template: "\n    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliances\">home appliances</a>\n      became viable in the 1900s with the introduction of\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_distribution\">electric power distribution\n      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,\n      dishwashers, and clothes dryers.\n    </p>\n  ",
        })
    ], Tab1Component);
    return Tab1Component;
}());

var Tab2Component = /** @class */ (function () {
    function Tab2Component() {
    }
    Tab2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tab2',
            template: "\n    <p>Tab 2 works!</p>\n  ",
        })
    ], Tab2Component);
    return Tab2Component;
}());

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/ui-features/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/ui-features/tabs/tab2',
            },
        ];
    }
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tabs',
            styles: [__webpack_require__("./src/app/pages/ui-features/tabs/tabs.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/tabs/tabs.component.html"),
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xxxl-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-xxl-7\">\r\n        <nb-card size=\"medium\">\r\n          <nb-card-header>\r\n            Used Fonts\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <div class=\"font-row font-secondary\">\r\n              <div class=\"header\">\r\n                <div class=\"name bold\">Exo</div>\r\n\r\n                <div class=\"variants\">\r\n                  <span class=\"font-w-bold\">Bold</span>\r\n                  <span class=\"font-w-regular\">Regular</span>\r\n                  <span class=\"font-w-light\">Light</span>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\r\n                there live the blind texts.\r\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"font-row font-main\">\r\n              <div class=\"header\">\r\n                <div class=\"name bold\">Roboto</div>\r\n\r\n                <div class=\"variants\">\r\n                  <span class=\"font-w-bold\">Bold</span>\r\n                  <span class=\"font-w-regular\">Regular</span>\r\n                  <span class=\"font-w-light\">Light</span>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\r\n                there live the blind texts.\r\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\r\n              </p>\r\n            </div>\r\n          </nb-card-body>\r\n        </nb-card>\r\n\r\n        <nb-card size=\"small\">\r\n          <nb-card-header>\r\n            Article Example\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <h4>So what's About the grammar?</h4>\r\n            <p class=\"text-indent\">\r\n              Far far away, behind the word mountains, far from the countries <strong>Vokalia</strong> and <strong>Consonantia</strong>,\r\n              there live the blind texts.\r\n              They live in <strong>Bookmarksgrove</strong>.\r\n            </p>\r\n            <p class=\"text-indent\">\r\n              A small <strong>river named Duden</strong> flows by their place and supplies it with the\r\n              necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly\r\n              into your mouth.\r\n              Even the all-powerful Pointing has no control about the blind texts it is an almost\r\n              unorthographic life One day however a small\r\n              line of blind text by the name of\r\n              <a href=\"http://google.com\" target=\"_blank\">Lorem Ipsum</a> decided to leave for\r\n              the far <strong>World of Grammar</strong>.\r\n            </p>\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n      <div class=\"col-md-6 col-xxl-5\">\r\n        <nb-card size=\"medium\" class=\"headings-card\">\r\n          <nb-card-header>\r\n            Headings\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h1>H1. Heading</h1>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 2.5rem (40px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h2>H2. Heading</h2>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 2rem (32px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h3>H3. Heading</h3>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.75rem (28px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h4>H4. Heading</h4>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.5rem (24px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h5>H5. Heading</h5>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.25rem (20px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h6>H6. Heading</h6>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1rem (16px)\r\n              </div>\r\n            </div>\r\n          </nb-card-body>\r\n        </nb-card>\r\n\r\n        <nb-card size=\"small\">\r\n          <nb-card-header>\r\n            Blockquotes\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <blockquote class=\"blockquote\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.\r\n            </blockquote>\r\n            <blockquote class=\"blockquote\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries.</p>\r\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\r\n            </blockquote>\r\n            <blockquote class=\"blockquote-reverse\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains.</p>\r\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\r\n            </blockquote>\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card [size]=\"breakpoint.width >= breakpoints.xxxl ? 'xxlarge' : 'large'\">\r\n      <nb-card-header>\r\n        Font Colors\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"colors\">\r\n          <div class=\"item text-heading\">\r\n            <div class=\"color bg-heading\"></div>\r\n            <div>\r\n              <h5 class=\"text-heading\">Heading Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-body\">\r\n            <div class=\"color bg-body\"></div>\r\n            <div>\r\n              <h5 class=\"text-body\">Body Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-hint\">\r\n            <div class=\"color bg-hint\"></div>\r\n            <div>\r\n              <h5 class=\"text-hint\">Hint Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-link\">\r\n            <div class=\"color bg-link\"></div>\r\n            <div>\r\n              <h5 class=\"text-link\">Link Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-primary\">\r\n            <div class=\"color bg-primary\"></div>\r\n            <div>\r\n              <h5 class=\"text-primary\">Primary Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-success\">\r\n            <div class=\"color bg-success\"></div>\r\n            <div>\r\n              <h5 class=\"text-success\">Success Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-info\">\r\n            <div class=\"color bg-info\"></div>\r\n            <div>\r\n              <h5 class=\"text-info\">Info Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-warning\">\r\n            <div class=\"color bg-warning\"></div>\r\n            <div>\r\n              <h5 class=\"text-warning\">Warning Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-danger\">\r\n            <div class=\"color bg-danger\"></div>\r\n            <div>\r\n              <h5 class=\"text-danger\">Danger Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Alerts\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n        </div>\r\n        <div class=\"alert alert-hint\" role=\"alert\">\r\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n        </div>\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\r\n        </div>\r\n        <div class=\"alert alert-info\" role=\"alert\">\r\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n        </div>\r\n        <div class=\"alert alert-warning\" role=\"alert\">\r\n          <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\r\n        </div>\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Text Types\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h4>Highlighted text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <mark>Consonantia, there live the blind texts.</mark>\r\n        </p>\r\n        <h4>Bold Text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <strong>Consonantia, there live the blind texts.</strong>\r\n        </p>\r\n        <h4>Link Text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <a href=\"http://google.com\" target=\"_blank\">Consonantia, there live the blind texts.</a>\r\n        </p>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Lists\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h4>Ordered List</h4>\r\n        <ol class=\"mb-5\">\r\n          <li>Far far away, behind the word mountains</li>\r\n          <li>Far from the countries Vokalia and Consonantia</li>\r\n          <li>There live the blind texts.</li>\r\n          <li>Right at the coast of the Semantics.</li>\r\n          <li>A small river named Duden flows</li>\r\n        </ol>\r\n\r\n        <h4>Unordered List</h4>\r\n        <ul class=\"mb-5\">\r\n          <li>Far far away, behind the word mountains</li>\r\n          <li>Far from the countries Vokalia and Consonantia</li>\r\n          <li>There live the blind texts.</li>\r\n          <li>Right at the coast of the Semantics.</li>\r\n          <li>A small river named Duden flows</li>\r\n        </ul>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n:host-context(.nb-theme-default) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n:host-context(.nb-theme-default) .font-row:first-child {\n  margin-bottom: 2rem; }\n:host-context(.nb-theme-default) .font-row .header {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n:host-context(.nb-theme-default) .font-row p {\n  margin: 0; }\n:host-context(.nb-theme-default) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n:host-context(.nb-theme-default) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n:host-context(.nb-theme-default) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n:host-context(.nb-theme-default) .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #ebeef2;\n  color: #2a2a2a; }\n:host-context(.nb-theme-default) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n:host-context(.nb-theme-default) .header div:first-child {\n    -webkit-box-flex: 2;\n            flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n:host-context(.nb-theme-default) .header div:first-child h1, :host-context(.nb-theme-default) .header div:first-child h2, :host-context(.nb-theme-default) .header div:first-child h3, :host-context(.nb-theme-default) .header div:first-child h4, :host-context(.nb-theme-default) .header div:first-child h5, :host-context(.nb-theme-default) .header div:first-child h6 {\n      margin-bottom: 0; }\n:host-context(.nb-theme-default) .header .variants {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n:host-context(.nb-theme-default) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n:host-context(.nb-theme-default) .header .detail {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    color: #a4abb3; }\n:host-context(.nb-theme-default) .colors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n:host-context(.nb-theme-default) .colors .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 1.25rem; }\n:host-context(.nb-theme-default) .colors .item:last-child {\n      margin-bottom: 0; }\n:host-context(.nb-theme-default) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n:host-context(.nb-theme-default) .colors h1, :host-context(.nb-theme-default) .colors h2, :host-context(.nb-theme-default) .colors h3, :host-context(.nb-theme-default) .colors h4, :host-context(.nb-theme-default) .colors h5, :host-context(.nb-theme-default) .colors h6 {\n    margin-bottom: 0.25rem; }\n:host-context(.nb-theme-default) .text-link {\n  color: #3dcc6d; }\n:host-context(.nb-theme-default) .bg-link {\n  background: #3dcc6d; }\n:host-context(.nb-theme-cosmic) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n:host-context(.nb-theme-cosmic) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n:host-context(.nb-theme-cosmic) .font-row:first-child {\n  margin-bottom: 2rem; }\n:host-context(.nb-theme-cosmic) .font-row .header {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n:host-context(.nb-theme-cosmic) .font-row p {\n  margin: 0; }\n:host-context(.nb-theme-cosmic) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n:host-context(.nb-theme-cosmic) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n:host-context(.nb-theme-cosmic) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n:host-context(.nb-theme-cosmic) .header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #342e73;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n:host-context(.nb-theme-cosmic) .header div:first-child {\n    -webkit-box-flex: 2;\n            flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n:host-context(.nb-theme-cosmic) .header div:first-child h1, :host-context(.nb-theme-cosmic) .header div:first-child h2, :host-context(.nb-theme-cosmic) .header div:first-child h3, :host-context(.nb-theme-cosmic) .header div:first-child h4, :host-context(.nb-theme-cosmic) .header div:first-child h5, :host-context(.nb-theme-cosmic) .header div:first-child h6 {\n      margin-bottom: 0; }\n:host-context(.nb-theme-cosmic) .header .variants {\n    -webkit-box-flex: 1;\n            flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n:host-context(.nb-theme-cosmic) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n:host-context(.nb-theme-cosmic) .header .detail {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .colors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n:host-context(.nb-theme-cosmic) .colors .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 1.25rem; }\n:host-context(.nb-theme-cosmic) .colors .item:last-child {\n      margin-bottom: 0; }\n:host-context(.nb-theme-cosmic) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n:host-context(.nb-theme-cosmic) .colors h1, :host-context(.nb-theme-cosmic) .colors h2, :host-context(.nb-theme-cosmic) .colors h3, :host-context(.nb-theme-cosmic) .colors h4, :host-context(.nb-theme-cosmic) .colors h5, :host-context(.nb-theme-cosmic) .colors h6 {\n    margin-bottom: 0.25rem; }\n:host-context(.nb-theme-cosmic) .text-link {\n  color: #00f9a6; }\n:host-context(.nb-theme-cosmic) .bg-link {\n  background: #00f9a6; }\n"

/***/ }),

/***/ "./src/app/pages/ui-features/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-typography',
            styles: [__webpack_require__("./src/app/pages/ui-features/typography/typography.component.scss")],
            template: __webpack_require__("./src/app/pages/ui-features/typography/typography.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["r" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["g" /* NbMediaBreakpointsService */]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_features_component__ = __webpack_require__("./src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__ = __webpack_require__("./src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__ = __webpack_require__("./src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__ = __webpack_require__("./src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__ = __webpack_require__("./src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("./src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__ = __webpack_require__("./src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__ = __webpack_require__("./src/app/pages/ui-features/search-fields/search-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popovers_popovers_component__ = __webpack_require__("./src/app/pages/ui-features/popovers/popovers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ui_features_component__["a" /* UiFeaturesComponent */],
        children: [{
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__["a" /* ButtonsComponent */],
            }, {
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__["a" /* GridComponent */],
            }, {
                path: 'icons',
                component: __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__["a" /* IconsComponent */],
            }, {
                path: 'modals',
                component: __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__["a" /* ModalsComponent */],
            }, {
                path: 'popovers',
                component: __WEBPACK_IMPORTED_MODULE_10__popovers_popovers_component__["a" /* PopoversComponent */],
            }, {
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */],
            }, {
                path: 'search-fields',
                component: __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__["a" /* SearchComponent */],
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["c" /* TabsComponent */],
                children: [{
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    }, {
                        path: 'tab1',
                        component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["a" /* Tab1Component */],
                    }, {
                        path: 'tab2',
                        component: __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["b" /* Tab2Component */],
                    }],
            }],
    }];
var UiFeaturesRoutingModule = /** @class */ (function () {
    function UiFeaturesRoutingModule() {
    }
    UiFeaturesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], UiFeaturesRoutingModule);
    return UiFeaturesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiFeaturesComponent = /** @class */ (function () {
    function UiFeaturesComponent() {
    }
    UiFeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ui-features',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], UiFeaturesComponent);
    return UiFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-features/ui-features.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesModule", function() { return UiFeaturesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__ = __webpack_require__("./src/app/pages/ui-features/buttons/buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__ = __webpack_require__("./src/app/pages/ui-features/ui-features-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_features_component__ = __webpack_require__("./src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__ = __webpack_require__("./src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__ = __webpack_require__("./src/app/pages/ui-features/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__("./src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__ = __webpack_require__("./src/app/pages/ui-features/modals/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__ = __webpack_require__("./src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__ = __webpack_require__("./src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_fields_search_fields_component__ = __webpack_require__("./src/app/pages/ui-features/search-fields/search-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popovers_popovers_component__ = __webpack_require__("./src/app/pages/ui-features/popovers/popovers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__ = __webpack_require__("./src/app/pages/ui-features/popovers/popover-examples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var components = [
    __WEBPACK_IMPORTED_MODULE_4__ui_features_component__["a" /* UiFeaturesComponent */],
    __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__["a" /* GridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__modals_modals_component__["a" /* ModalsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__["a" /* ModalComponent */],
    __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__["a" /* TypographyComponent */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["c" /* TabsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["a" /* Tab1Component */],
    __WEBPACK_IMPORTED_MODULE_10__tabs_tabs_component__["b" /* Tab2Component */],
    __WEBPACK_IMPORTED_MODULE_11__search_fields_search_fields_component__["a" /* SearchComponent */],
    __WEBPACK_IMPORTED_MODULE_12__popovers_popovers_component__["a" /* PopoversComponent */],
    __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["a" /* NgxPopoverCardComponent */],
    __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["b" /* NgxPopoverFormComponent */],
    __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["c" /* NgxPopoverTabsComponent */],
];
var UiFeaturesModule = /** @class */ (function () {
    function UiFeaturesModule() {
    }
    UiFeaturesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__["a" /* UiFeaturesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__["a" /* ButtonsModule */],
            ],
            declarations: components.slice(),
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__modals_modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["a" /* NgxPopoverCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["b" /* NgxPopoverFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__popovers_popover_examples_component__["c" /* NgxPopoverTabsComponent */],
            ],
        })
    ], UiFeaturesModule);
    return UiFeaturesModule;
}());



/***/ })

});
//# sourceMappingURL=ui-features.module.chunk.js.map