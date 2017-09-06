import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesModule } from '../articles/articles.module';
import { MediaModule } from '../media/media.module';
import { MessagingService } from './messaging.service';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from "../auth/auth.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { WildcardRoutingModule } from "./wildcard-routing.module";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [
    CommonModule,
    // MediaModule,
    // ArticlesModule,
    SharedModule,
    AuthModule,
    CoreRoutingModule,
    // WildcardRoutingModule
    // AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ],
  providers: [MessagingService],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
