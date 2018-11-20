import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
// import { RecoveryPasswordPageComponent } from "./recovery-password/recovery-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
// import { RegisterPageComponent } from "./register/register-page.component";

import { TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        // RecoveryPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        // RegisterPageComponent
    ]
})
export class ContentPagesModule {
}
