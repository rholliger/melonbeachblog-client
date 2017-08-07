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

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ArticlesModule,
    MediaModule,
    SharedModule
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
