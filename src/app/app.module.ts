import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './shared/services/interceptor/auth.interceptor.service';
import { LoaderComponent } from './standalone-components/dump/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { Loader } from '@googlemaps/js-api-loader';

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: environment.googleMapsApiKey,
        libraries: ['places']
      })
    },
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoaderComponent, BrowserAnimationsModule, HttpClientModule,
    NgxGpAutocompleteModule]
})
export class AppModule { }
