import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '**',
            // component: NotFoundComponent,
            redirectTo: ''
        }])
    ],
    declarations: [
        // NotFoundComponent
    ],
    exports: [
        RouterModule
    ]
})
export class WildcardRoutingModule {}