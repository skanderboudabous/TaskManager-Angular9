import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLayoutComponent } from './core/layout/page-layout/page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    LoginComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      LayoutModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
