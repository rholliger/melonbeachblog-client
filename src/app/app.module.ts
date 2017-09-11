import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { TokenService } from "./auth/token.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
