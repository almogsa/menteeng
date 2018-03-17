webpackJsonp(["forms.module"],{

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Profile</nb-card-header>\r\n      <nb-card-body>\r\n      <!--  <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\r\n        </div>-->\r\n        <div class=\"row full-name-inputs\">\r\n         <!-- <div class=\"col-sm-6 input-group\">\r\n            <input type=\"text\" placeholder=\"Nick\" class=\"form-control\"/>\r\n          </div>-->\r\n          <div class=\"col-sm-6 input-group\">\r\n            <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\" class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Select Class</label>\r\n          <select class=\"form-control\"  id=\"class\"\r\n                  required\r\n                  [(ngModel)]=\"model.class\" name=\"class\">\r\n            <option *ngFor=\"let cls of classes\" [value]=\"cls.id\">{{cls.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label (click)=\"getCurrentType()\"> Select User Type: </label>\r\n        <label class=\"theme-switch\" style=\"display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 215px;\">\r\n          <span [class]=\"!model.isStudent ? 'cosmic' : 'light'\" >Student</span>\r\n          <div class=\"switch\">\r\n            <input type=\"checkbox\"   [checked]=\"!model.isStudent\" (change)=\"model.isStudent = !model.isStudent\" #theme>\r\n            <span class=\"slider\"></span>\r\n          </div>\r\n          <span [class]=\"model.isStudent ? 'cosmic' : 'light'\">Mentor</span>\r\n        </label>\r\n      </div>\r\n\r\n       <!-- <div class=\"input-group\">\r\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\"/>\r\n        </div>-->\r\n        <!--div class=\"input-group has-person-icon\">\r\n          <img [src]=\"model.picture\"  class=\"form-control\"/>\r\n        </div-->\r\n      <!--  <div class=\"input-group input-group-rounded\">\r\n          <input type=\"text\" placeholder=\"Rounded border\" class=\"form-control\"/>\r\n        </div>-->\r\n\r\n\r\n       <!-- <div class=\"form-group\">\r\n\r\n          <div class=\"form-group\">\r\n            <label>Select Categories</label>\r\n            <select multiple class=\"form-control\">\r\n              <option>Football</option>\r\n              <option>Gitar</option>\r\n              <option>Painting</option>\r\n              <option>Drawing</option>\r\n              <option>Cycling</option>\r\n              <option>Climbing</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <input type=\"text\" placeholder=\"Project\" class=\"form-control\"/>\r\n          <small class=\"form-text\">A block of help text that breaks into a new line and may extend beyond one line.\r\n          </small>\r\n        </div>-->\r\n      <!--  <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Disabled input\" class=\"form-control\" disabled/>\r\n        </div>-->\r\n      <!--  <div class=\"input-group\">\r\n          <textarea rows=\"5\"  [(ngModel)]=\"model.remark\" placeholder=\"Text Area\" class=\"form-control\"></textarea>\r\n        </div>-->\r\n       <!-- <div class=\"input-group input-group-sm\">\r\n          <input type=\"text\" placeholder=\"Small Input\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group input-group-lg\">\r\n          <input type=\"text\" placeholder=\"Large Input\" class=\"form-control\"/>\r\n        </div>-->\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <nb-card>\r\n      <nb-card-header>Skills</nb-card-header>\r\n      <nb-card-body>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"category\">Choose Category</label>\r\n          <select class=\"form-control\"  id=\"category\"\r\n                  required\r\n                  [(ngModel)]=\"model.category\" name=\"power\">\r\n            <option *ngFor=\"let cat of categories\" [value]=\"cat.id\">{{cat.name}}</option>\r\n          </select>\r\n        </div>\r\n        <!--div class=\"demo-radio col-sm-4 \" style=\"flex-direction: row;\">\r\n          <label class=\"custom-control custom-radio\">\r\n            <input type=\"radio\" [(ngModel)]=\"model.type\" class=\"custom-control-input\" name=\"customRadio\" checked>\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">Student</span>\r\n          </label>\r\n          <label class=\"custom-control custom-radio\">\r\n            <input type=\"radio\" [(ngModel)]=\"model.type\" class=\"custom-control-input\" name=\"customRadio\" >\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">Mentor</span>\r\n          </label>\r\n\r\n        </div-->\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <nb-card>\r\n      <nb-card-header>Remarks</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group\">\r\n          <textarea rows=\"5\"  [(ngModel)]=\"model.remark\" placeholder=\"Text Area\" class=\"form-control\"></textarea>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <div class=\"input-group\">\r\n   \r\n      <span class=\"input-group-append\">\r\n        <button (click)=\"submit()\" class=\"btn btn-danger input-group-text\">\r\n          SUBMIT\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <nb-card>\r\n      <nb-card-header>Input Groups</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon success\">@</span>\r\n          <input type=\"text\" class=\"form-control\"  [value]=\"user.name\" placeholder=\"Username\"/>\r\n        </div>\r\n\r\n        <div class=\"input-group mail-btn-group\">\r\n          <span class=\"input-group-prepend\">\r\n            <button class=\"btn btn-primary btn-icon input-group-text\">\r\n              <i class=\"ion-ios-email-outline\"></i>\r\n            </button>\r\n          </span>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-primary input-group-text\">\r\n              @example.com\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-danger input-group-text\">\r\n              Search\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <div class=\"dropdown input-group-btn\" ngbDropdown>\r\n            <button type=\"button\" class=\"btn btn-success dropdown-toggle\" ngbDropdownToggle>\r\n              Action\r\n            </button>\r\n            <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <li class=\"dropdown-item\">Action</li>\r\n              <li class=\"dropdown-item\">Another action</li>\r\n              <li class=\"dropdown-item\">Something else here</li>\r\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n              <li class=\"dropdown-item\">Separated link</li>\r\n            </ul>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\">\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    \r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>Input Styles</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"input-group input-group-border-only\">\r\n          <input type=\"text\" placeholder=\"Border Only\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" placeholder=\"Default Input\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group input-group-fill-only\">\r\n          <input type=\"text\" placeholder=\"Fill Only\" class=\"form-control\">\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n   \r\n\r\n    <nb-card>\r\n      <nb-card-body class=\"demo-rating\">\r\n        <span class=\"rating-header\">Rating</span>\r\n        <div>\r\n          <ngb-rating [(rate)]=\"starRate\" max=5>\r\n            <ng-template let-fill=\"fill\">\r\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                <i class=\"ion-android-star\" *ngIf=\"fill === 100\"></i>\r\n                <i class=\"ion-android-star-outline\" *ngIf=\"fill !== 100\"></i>\r\n              </span>\r\n            </ng-template>\r\n          </ngb-rating>\r\n          <span class=\"current-rate\">{{ starRate }}</span>\r\n        </div>\r\n        <div>\r\n          <ngb-rating [(rate)]=\"heartRate\" max=5>\r\n            <ng-template let-fill=\"fill\">\r\n              <span class=\"star fill\" [class.filled]=\"fill === 100\">\r\n                <i class=\"ion-ios-heart\" *ngIf=\"fill === 100\"></i>\r\n                <i class=\"ion-ios-heart-outline\" *ngIf=\"fill !== 100\"></i>\r\n              </span>\r\n            </ng-template>\r\n          </ngb-rating>\r\n          <span class=\"current-rate\">{{ heartRate }}</span>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n:host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease; }\n:host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding: 8px; }\n:host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding: 8px; }\n:host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n:host-context(.nb-theme-default) .switch input {\n    display: none; }\n:host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n:host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n:host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #40dc7e;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    -webkit-box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n@media (max-width: 575.98px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n:host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1.125rem;\n    font-weight: 600;\n    -webkit-transition: opacity 0.3s ease;\n    transition: opacity 0.3s ease; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding: 8px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #a1a1e5;\n      padding: 8px; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #a1a1e5; }\n:host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #d1d1ff; }\n:host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n:host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n:host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n:host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n:host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #00d977;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    -webkit-box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n            box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: -webkit-gradient(linear, left top, right top, from(#ad59ff), to(#7659ff));\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n@media (max-width: 575.98px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n@media (max-width: 399.98px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n"

/***/ }),

/***/ "./src/app/pages/forms/form-inputs/form-inputs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_auth__ = __webpack_require__("./node_modules/@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("./node_modules/@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__ = __webpack_require__("./src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_utils_analytics_service__ = __webpack_require__("./src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent(sidebarService, menuService, userService, analyticsService, router, tokenService, authService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.router = router;
        this.tokenService = tokenService;
        this.authService = authService;
        this.starRate = 2;
        this.heartRate = 4;
        this.categories = [];
        this.classes = [];
        this.model = { name: '', isStudent: true, picture: '', category: '1', remark: '', class: '1' };
        this.authService.onTokenChange()
            .subscribe(function (token) {
            if (token.isValid()) {
                var userName = token.token.split('@')[0];
                _this.userService.getUsers()
                    .subscribe(function (users) {
                    _this.user = users[token.token];
                    _this.model.name = _this.user.name;
                    _this.model.picture = _this.user.picture;
                    _this.model.class = _this.user.class;
                    _this.model.category = _this.user.category;
                    _this.model.isStudent = _this.user.isStudent;
                    _this.model.remark = _this.user.remark;
                });
            }
        });
        this.categories = [{ name: 'Football', id: 1 }, { name: 'Guitar Hero', id: 2 },
            { name: 'Climbing', id: 3 }, { name: 'Books', id: 4 }, { name: 'TV', id: 5 }];
        this.classes = [{ name: 'א', id: 1 }, { name: 'ב', id: 2 }, { name: 'ג', id: 3 },
            { name: 'ד', id: 4 }, { name: 'ה', id: 5 }, { name: 'ו', id: 6 }];
    }
    FormInputsComponent.prototype.toggleType = function () {
        if (this.model.isStudent) {
            this.model.isStudent = false;
        }
        else {
            this.model.isStudent = true;
        }
    };
    FormInputsComponent.prototype.getCurrentType = function () {
        return this.model.isStudent;
    };
    FormInputsComponent.prototype.submit = function () {
        console.log(' USER for submit : ' + JSON.stringify(this.model));
    };
    FormInputsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-inputs',
            styles: [__webpack_require__("./src/app/pages/forms/form-inputs/form-inputs.component.scss")],
            template: __webpack_require__("./src/app/pages/forms/form-inputs/form-inputs.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nebular_theme__["o" /* NbSidebarService */],
            __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["i" /* NbMenuService */],
            __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__core_utils_analytics_service__["a" /* AnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_auth__["m" /* NbTokenService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_auth__["f" /* NbAuthService */]])
    ], FormInputsComponent);
    return FormInputsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card class=\"inline-form-card\">\r\n      <nb-card-header>Inline form</nb-card-header>\r\n      <nb-card-body>\r\n        <form class=\"form-inline\">\r\n          <input type=\"text\" class=\"form-control full-width\" placeholder=\"Jane Doe\">\r\n          <div class=\"input-group full-width\">\r\n            <div class=\"input-group-addon\">@</div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n          </div>\r\n          <nb-checkbox>Remember me</nb-checkbox>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Using the Grid</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputEmail1\" class=\"col-sm-3 col-form-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail1\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword2\" class=\"col-sm-3 col-form-label\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3\">Radios</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" checked>\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option one is this and that&mdash;be sure to include why it's great</span>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\">\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option two can be something else and selecting it will deselect option one</span>\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check disabled\">\r\n                <label class=\"custom-control custom-radio\">\r\n                  <input type=\"radio\" class=\"custom-control-input\" name=\"gridRadios\" disabled>\r\n                  <span class=\"custom-control-indicator\"></span>\r\n                  <span class=\"custom-control-description\">Option three is disabled</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Form without labels</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Basic form</nb-card-header>\r\n      <nb-card-body>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <nb-checkbox>Check me out</nb-checkbox>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>Block form</nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputFirstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputLastName\">Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputEmail\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputWebsite\">Website</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>Horizontal form</nb-card-header>\r\n      <nb-card-body>\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-3 form-control-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-3 form-control-label\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <div class=\"checkbox\">\r\n                <nb-checkbox>Remember me</nb-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"offset-sm-3 col-sm-9\">\r\n              <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/pages/forms/form-layouts/form-layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-layouts',
            styles: [__webpack_require__("./src/app/pages/forms/form-layouts/form-layouts.component.scss")],
            template: __webpack_require__("./src/app/pages/forms/form-layouts/form-layouts.component.html"),
        })
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__("./src/app/pages/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__ = __webpack_require__("./src/app/pages/forms/form-inputs/form-inputs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__ = __webpack_require__("./src/app/pages/forms/form-layouts/form-layouts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
        children: [{
                path: 'inputs',
                component: __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
            }, {
                path: 'layouts',
                component: __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
            }],
    }];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__form_inputs_form_inputs_component__["a" /* FormInputsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__form_layouts_form_layouts_component__["a" /* FormLayoutsComponent */],
];


/***/ }),

/***/ "./src/app/pages/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-form-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("./src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__ = __webpack_require__("./src/app/pages/forms/forms-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["a" /* FormsRoutingModule */],
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__forms_routing_module__["b" /* routedComponents */].slice(),
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ })

});
//# sourceMappingURL=forms.module.chunk.js.map