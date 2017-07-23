import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "../app-routing.module";
import { ArticlesModule } from "../articles/articles.module";
import { MediaModule } from "../media/media.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ArticlesModule,
    MediaModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
