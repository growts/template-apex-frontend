import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import * as globales from '../../../shared/config/config';
import {AuthResponse} from "../../../interfaces/authresponse";
// import {GeneralService} from "../../../services/general.service";
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from "../../../services/storage.service";
// import {UserService} from "../../../services/user.service";
// import {MessagesService} from "../../../services/messages.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    // providers: [GeneralService, UserService, MessagesService, TranslateService]
    providers: [TranslateService, StorageService]
})

export class LoginPageComponent {

  @ViewChild('f') loginForm: NgForm;

  public translates: any = {
    titles: {
      title: 'titles.login'
    },
    buttons: {
      send: 'buttons.send',
      login: 'buttons.login'
    },
    links: {
      forgotPassword: 'links.forgotPassword',
      newUser: 'links.newUser'
    }
  };
  public usuario:string;
  public password:string;
  public version:string;
  public token: string;
  public currentUser: any = {};
  public userLogin: any = {};
  public franchise_id: any;
  public errorMessage: any;
  public title: any;
  public message: any;

    constructor(
      private translate: TranslateService,
      private router: Router,
      private route: ActivatedRoute,
      private _service: AuthService,
      // private _generalService: GeneralService,
      // private _usersService: UserService,
      // private _messagesService: MessagesService,
      private _translateService: TranslateService,
      private _storageService: StorageService
    ) {
      this.version = globales.version;
      const language = 'es';
      this.translate.setDefaultLang(language);
      this.translate.use(language);
    }

    // On submit button click
    onSubmit() {
      //////////////////////////// para probar la navegacion, luego hay que llamar al servicio comentado de abajo//////////////////////////////////
      console.log('login');
      var response: AuthResponse = <AuthResponse>  this._service.signinUser(this.usuario,this.password);
      console.log('response' + JSON.stringify(response));
      if(response != null){
        this.router.navigate(['/home']);
      }else {
        console.log('error al loguearse')
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // this._service.signinUser(this.usuario,this.password).subscribe(
        //   result => {
        //     // login successful if there's a jwt token in the response
        //     console.log('result')
        //     var response: AuthResponse = <AuthResponse>result;
        //     //noinspection TypeScriptUnresolvedVariable
        //     this.token = response && response.id;
        //     if (this.token) {
        //       // store username and jwt token in local storage to keep user logged in between page refreshes
        //       this._storageService.setCurrentUser(JSON.stringify(response));
        //       // this.getUser(response.userId);
        //
        //       const language = 'es';
        //       console.log('language - user: ' + language);
        //
        //       this._storageService.setLocalStorage('defaultLanguage', language);
        //
        //       // this language will be used as a fallback when a translation isn't found in the current language
        //       this.translate.setDefaultLang(language);
        //       this.translate.use(language);
        //
        //       // return true to indicate successful login
        //       this.router.navigate(['/full-layout']);
        //     }
        //   },
        //   error => {
        //     var errorMessage = <any>error;
        //   });
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['/home']);
    }

    getUser(userId: number) {
      // this._usersService.getByUsuarioId(userId).subscribe(
      //   result => {
      //     this.currentUser = <any> result;
      //     this.franchise_id = this.currentUser.franchisesId;
      //     this._service.signinUser(this.franchise_id);
      //   },
      //   error => {
      //     this.errorMessage = <any> error.error;
      //     console.log('login page getUser - ' + JSON.stringify(this.errorMessage));
      //     this._translateService.get(this.translates.error.title).subscribe((title: string) => {
      //       this.title = title;
      //     })
      //     this._translateService.get(this.translates.error.message).subscribe((message: string) => {
      //       this.message = 'login page getUser - ' + message;
      //     })
      //     this._messagesService.showAlert({
      //       title: this.title,
      //       message: this.message
      //     }, null)
      //   }
      // );
    }
}
