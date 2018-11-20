// import { Component, ViewChild, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router, ActivatedRoute, Params } from "@angular/router";
// import {TranslateService} from '@ngx-translate/core';
// import {GeneralService} from "../../../services/general.service";
// import {MessagesService} from "../../../services/messages.service";
//
// @Component({
//     selector: 'app-recovery-password-page',
//     templateUrl: './recovery-password-page.component.html',
//     styleUrls: ['./recovery-password-page.component.scss'],
//     providers: [TranslateService, GeneralService, MessagesService]
// })
//
// export class RecoveryPasswordPageComponent implements OnInit {
//   @ViewChild('f') forogtPasswordForm: NgForm;
//
//   public translates: any = {
//     recoveryPassword: {
//       title:'recoveryPassword.title',
//       invalidTokenMessage: 'recoveryPassword.invalidTokenMessage',
//       invalidTokenMessage1: 'recoveryPassword.invalidTokenMessage1',
//       button: {
//         send: 'buttons.send',
//         cancel: 'buttons.cancel'
//       },
//       error: {
//         title: 'recoveryPassword.error.title',
//         message: 'recoveryPassword.error.message',
//         inputNewPassBis: 'recoveryPassword.error.inputNewPassBis',
//         inputNewPass: 'recoveryPassword.error.inputNewPass',
//         equals: 'recoveryPassword.error.equals',
//         length: 'recoveryPassword.error.length'
//       },
//       succes: {
//         title: 'recoveryPassword.succes.title',
//         message: 'recoveryPassword.succes.message'
//       }
//     },
//     login: {
//       links: {
//         forgotPassword: 'login.links.forgotPassword',
//       }
//     }
//   };
//   public validToken = false;
//   public setNewPassword = false;
//   public errorMessage: any;
//   public title: string;
//   public message: string;
//   public error: any = {};
//   public token: any;
//   public id: any;
//   public object: any = {};
//
//   constructor(private router: Router,
//     private route: ActivatedRoute,
//     private _translateService: TranslateService,
//     private _generalService: GeneralService,
//     private _messagesService: MessagesService
//   ) {
//     const language = 'es';
//     this._translateService.setDefaultLang(language);
//     this._translateService.use(language);
//   }
//
//   ngOnInit() {
//     //validar el token recibido
//     this.route.params.forEach((params: Params) => {
//       this.token = params ['token'];
//     })
//     this.validateToken();
//     this.error.length = true;
//   }
//
//   validateToken() {
//     this._generalService.validateRecoveryPasswordToken(this.token).subscribe(
//       result => {
//         if (result.status == '200') {
//           this.validToken = true;
//           this.id = result.data.userId;
//         } else {
//           this.validToken = false;
//         }
//       },
//       error => {
//         this.errorMessage = <any> error.error;
//         console.log('validateToken - ' + JSON.stringify(this.errorMessage));
//         this._translateService.get(this.translates.error.title).subscribe((title: string) => {
//           this.title = title;
//         })
//         this._translateService.get(this.translates.error.message).subscribe((message: string) => {
//           this.message = 'validateToken - ' + message;
//         })
//         this._messagesService.showAlert({
//           title: this.title,
//           message: this.message
//         }, null)
//       }
//     )
//   }
//
//   // On submit click, reset form fields
//   onSubmit() {
//     // llamar al servicio que resetea el password
//     this.error = {};
//     if (this.forogtPasswordForm.value.inputNewPass != null && this.forogtPasswordForm.value.inputNewPass != ''){
//       if (this.forogtPasswordForm.value.inputNewPassBis != null && this.forogtPasswordForm.value.inputNewPassBis != ''){
//         if (this.forogtPasswordForm.value.inputNewPass === this.forogtPasswordForm.value.inputNewPassBis) {
//           this.object.id = this.id;
//           this.object.password = this.forogtPasswordForm.value.inputNewPass;
//           this._generalService.setNewPasswordRecovery(this.object).subscribe(
//             result => {
//               this._translateService.get(this.translates.recoveryPassword.succes.title).subscribe((title: string) => {
//                 this.title = title;
//               })
//               this._translateService.get(this.translates.recoveryPassword.succes.message).subscribe((message: string) => {
//                 this.message = message;
//               })
//               this._messagesService.showAlert({
//                 title: this.title,
//                 message: this.message
//               }, null)
//           },
//             error => {
//               this.errorMessage = <any> error.error;
//               console.log(JSON.stringify(this.errorMessage));
//               this._translateService.get(this.translates.recoveryPassword.error.title).subscribe((title: string) => {
//                 this.title = title;
//               })
//               this._translateService.get(this.translates.recoveryPassword.error.message).subscribe((message: string) => {
//                 this.message = message;
//               })
//               this._messagesService.showAlert({
//                 title: this.title,
//                 message: this.message
//               }, null)
//             }
//           )
//         } else {
//           this.error.equals = true;
//         }
//       } else {
//         this.error.inputNewPassBis = true;
//       }
//     } else {
//       this.error.inputNewPass = true;
//     }
//   }
//
//   validatePasswordLength() {
//     this.error.length = false;
//     if (this.forogtPasswordForm.value.inputNewPass.length < 6) {
//       this.error.length = true;
//     }
//   }
//
//   // On Forgot password link click
//   onForgotPassword() {
//     this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
//   }
// }
