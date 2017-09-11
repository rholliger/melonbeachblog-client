import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";

/* Uncomment to load module synchronously */
// import { CoreModule } from "./core/core.module";

/* Uncomment to load module synchronously */
// export function loadCoreModule() {
//     return CoreModule;
// }

const appRoutes: Routes = [
    /* Uncomment to load module synchronously */
    // { path: '', loadChildren: loadCoreModule },
    /* Comment to disable lazy loading */
    { path: '', loadChildren: 'app/core/core.module#CoreModule' },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}