import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import 'rxjs/add/operator/map';
import {isPlatformBrowser} from '@angular/common';
import {StorageMemory} from '../injectables/storageMemory';

@Injectable()
export class StorageService {

  constructor(private _storageMemory: StorageMemory) {
  }

  isLogged() {
    const loggedUser = this.getLoggedUser();
    return loggedUser && loggedUser.username && loggedUser.username != 'ceekfront';
  }

  getLoggedUser() {
    if (this._storageMemory.loggedUser) {
      return this._storageMemory.loggedUser;
    } else {
      if (sessionStorage.getItem('l099ed')) {
        this._storageMemory.loggedUser = JSON.parse(sessionStorage.getItem('l099ed'));
        return this._storageMemory.loggedUser;
      } else {
        return undefined;
      }
    }
  }

  setLoggedUser(userlogged: any) {
    this._storageMemory.loggedUser = userlogged;
    const encrypt = JSON.stringify(userlogged);
    sessionStorage.setItem('l099ed', encrypt);
  }

  removeLoggedUser() {
    this._storageMemory.loggedUser = undefined;
    sessionStorage.removeItem('l099ed');
  }

  // CURRENT USER
  getCurrentUser() {
    if (this._storageMemory.currentUser) {
      return this._storageMemory.currentUser;
    } else {
      if (sessionStorage.getItem('cr3d')) {
        this._storageMemory.currentUser = JSON.parse(sessionStorage.getItem('cr3d'));
        return this._storageMemory.currentUser;
      } else {
        return undefined;
      }
    }
  }

  setCurrentUser(credentials: any) {
    this._storageMemory.currentUser = credentials;
    const encrypt = JSON.stringify(credentials);
    sessionStorage.setItem('cr3d', encrypt);
  }

  removeCurrentUser() {
    this._storageMemory.currentUser = undefined;
    sessionStorage.removeItem('cr3d');
  }

  setLocalStorage(key: string, object: string) {
    const string64 =object;
    const key64 = key;
    localStorage.setItem(key64, string64);
  }

  getLocalStorage(key: string) {
    const key64 = key;
    const string64 = localStorage.getItem(key64);
    return JSON.parse(string64);
  }

  getLocalStorageString(key: string) {
    const key64 = key;
    const string64 = localStorage.getItem(key64);
    return string64;
  }
}
