import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { MessagingService } from './messaging.service';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from "../auth/auth.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    CoreRoutingModule,
    SimpleNotificationsModule.forRoot()
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
