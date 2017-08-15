import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}