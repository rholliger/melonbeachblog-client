import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./auth/auth.guard";
import { ArticlesModule } from "./articles/articles.module";
import { CoreModule } from "./core/core.module";

const appRoutes: Routes = [
    { path: '', loadChildren: () => CoreModule },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}