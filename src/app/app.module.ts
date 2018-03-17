/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NbAuthModule, NbDummyAuthProvider, NbEmailPassAuthProvider} from '@nebular/auth';
import {AuthGuard} from './auth-guard.service';
import {NB_AUTH_PROVIDERS, NbAuthJWTToken} from '@nebular/auth';
import {AlmogDummyAuthProvider} from './AlmogDummyProvider';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Angular2FontawesomeModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: AlmogDummyAuthProvider,
          config: {
            // delay: 3000,
            login: {
              rememberMe: true,
              alwaysFail: false,
              data: {
                almog : true,
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
  bootstrap: [AppComponent],
  providers: [
    AlmogDummyAuthProvider,
    {provide: APP_BASE_HREF, useValue: '/'}, AuthGuard,
    {provide: NB_AUTH_PROVIDERS, useValue: NbAuthJWTToken},
  ],
})
export class AppModule {
}
