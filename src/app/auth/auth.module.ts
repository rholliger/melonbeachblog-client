import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [AuthService],
    exports: [
        LoginComponent
    ]
})
export class AuthModule {}