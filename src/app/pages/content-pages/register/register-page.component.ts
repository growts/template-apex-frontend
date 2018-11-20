// import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import {TranslateService} from '@ngx-translate/core';
// import {UserService} from "../../../services/user.service";
// import {MessagesService} from "../../../services/messages.service";
//
// @Component({
//     selector: 'app-register-page',
//     templateUrl: './register-page.component.html',
//     styleUrls: ['./register-page.component.scss'],
//     providers: [TranslateService, UserService, MessagesService]
// })
//
// export class RegisterPageComponent {
//   @ViewChild('f') registerForm: NgForm;
//
//   public translates: any = {
//     register: {
//       title:'register.title',
//       button: {
//         send: 'buttons.send',
//         cancel: 'buttons.cancel'
//       },
//       terms: 'register.terms',
//       terms1: 'register.terms1',
//       error: {
//         password: 'register.error.password'
//       }
//     }
//   };
//   public editingUser: any = {};
//   public editingRole: any = {};
//   public franchise_id: any;
//   public errorMessage: any;
//   public title: string;
//   public message: string;
//   public error: any = {};
//
//   constructor(
//       private _translateService: TranslateService,
//       private _usersService: UserService,
//       private _messagesService: MessagesService
//   ) { }
//
//     ngOnInit() {
//       this.franchise_id = 128;
//       this.editingUser.realm = null;
//       this.editingUser.fulladdress = null;
//       this.editingUser.cityId = null;
//       this.editingUser.countryId = null;
//       this.editingUser.stateId = null;
//       this.editingUser.cantonId = null;
//       this.editingUser.neighbourhoodId = null;
//       this.editingUser.verificationToken = null;
//       this.editingUser.role = 0;
//       this.editingUser.franchisesId = this.franchise_id;
//       this.editingRole.name = ''
//       this.editingUser.Role = this.editingRole;
//     }
//
//     //  On submit click, reset field value
//     onSubmit() {
//       this.error.password = false;
//       console.log(this.registerForm.value);
//       if (this.registerForm.value.inputPass === this.registerForm.value.inputPass1) {
//         this.editingUser.password = this.registerForm.value.inputPass;
//         this.editingUser.username = this.registerForm.value.fuser;
//         this.editingUser.fullname = this.registerForm.value.fname;
//         this.editingUser.email = this.registerForm.value.inputEmail;
//         this.editingUser.phone = this.registerForm.value.inputPhone;
//         this.editingUser.enabled = 1;
//         this._usersService.save(this.editingUser).subscribe(
//           result => {
//
//           },
//           error => {
//             this.errorMessage = <any> error.error;
//             console.log('saveUser - ' + JSON.stringify(this.errorMessage));
//             this._translateService.get(this.translates.error.title).subscribe((title: string) => {
//               this.title = title;
//             })
//             this._translateService.get(this.translates.error.message).subscribe((message: string) => {
//               this.message = 'saveUser - ' + message;
//             })
//             this._messagesService.showAlert({
//               title: this.title,
//               message: this.message
//             }, null)
//           });
//       } else {
//         this.error.password = true;
//       }
//     }
// }
