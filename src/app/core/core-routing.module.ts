import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ArticlesModule } from "../articles/articles.module";
import { MediaModule } from "../media/media.module";
import { AuthGuard } from "../auth/auth.guard";

const coreRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
        { path: '', redirectTo: 'articles', pathMatch: 'full' },
        { path: 'articles', loadChildren: () => ArticlesModule },
        { path: 'media', loadChildren: () => MediaModule }
    ] },
]

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}