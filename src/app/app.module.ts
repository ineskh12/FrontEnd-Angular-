import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import { VedioComponent } from './vedio/vedio.component';

@NgModule({
  declarations: [
    AppComponent,
    VedioComponent
  ],
  imports: [
    BrowserModule, NgxYoutubePlayerModule.forRoot(), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

