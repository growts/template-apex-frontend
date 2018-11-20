import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {UsersService} from "../../../services/users.service";
// import {MessagesService} from "../../../services/messages.service";

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss'],
    providers: [TranslateService, UsersService /*, MessagesService*/]
})

export class ForgotPasswordPageComponent implements OnInit{
    @ViewChild('f') forogtPasswordForm: NgForm;

    public translates: any = {
      titles: {
        forgotPassword:'titles.forgotPassword'
      },
      buttons: {
        send: 'buttons.send'
      },
      messages: {
        validEmail: 'messages.validEmail',
        invalidEmail: 'messages.invalidEmail'
      }
    };
    public errorMessage: any;
    public title: any;
    public message: any;
    public email: any;
    public validEmail: boolean;
    public emailSend = false;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _translateService: TranslateService,
        private _usersService: UsersService,
        // private _messagesService: MessagesService
    ) { }

    ngOnInit() {

    }

    // On submit click, reset form fields
    onSubmit() {
      ///////////////////////////////////////////////////////////////////////////////////////////////para probar navegacion//////////////////////////////
      let validation = this._usersService.validateEmail(this.forogtPasswordForm.value.inputEmail);
      console.log('validation: ' + validation);
      if (validation){
        this.emailSend = true;
        this.validEmail = true;
      } else {
        this.emailSend = true;
        this.validEmail = false;
      }
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // this._generalService.validateEmail(this.forogtPasswordForm.value.inputEmail).subscribe(
        //   result => {
        //     this.emailSend = true;
        //     if (result.status == '200') {
        //       this.validEmail = true;
        //     } else {
        //       this.validEmail = false;
        //     }
        //   },
        //   error => {
        //     this.errorMessage = <any> error.error;
        //     console.log(JSON.stringify(this.errorMessage));
        //     this._translateService.get(this.translates.error.title).subscribe((title: string) => {
        //       this.title = title;
        //     })
        //     this._translateService.get(this.translates.error.message).subscribe((message: string) => {
        //       this.message = message;
        //     })
        //     this._messagesService.showAlert({
        //       title: this.title,
        //       message: this.message
        //     }, null)
        //   }
        // )
    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    // onRegister() {
    //     this.router.navigate(['register'], { relativeTo: this.route.parent });
    // }
}
