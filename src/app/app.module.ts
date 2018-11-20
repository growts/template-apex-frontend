import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth-guard.service';

import * as $ from 'jquery';
import {InterceptService} from './interceptors/intercept.service';
import {AppLoadService} from './services/load.service';
import {PersonasService} from "./services/personas.service";
import {StorageService} from "./services/storage.service";
import {StorageMemory} from "./injectables/storageMemory";

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpLoaderFactory} from "./shared/config/config";

export function init_app(appLoadService: AppLoadService) {
  return () => appLoadService.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    AppLoadService,
    PersonasService,
    StorageService,
    StorageMemory,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppLoadService],
      multi: true
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
