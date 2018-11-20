import {Injectable} from '@angular/core';
import {PersonasService} from "./personas.service";

@Injectable()
export class AppLoadService {
  public loggedUser: any;
  public position: any = {lng: -84.087502, lat: 9.934739};
  public retailers: any[];

  constructor(private _personasService: PersonasService) {
  }

  initializeApp(): Promise<any> {
    return new Promise( (resolve, reject) => {
      console.log('initializeApp')
      this._personasService.getPesonas().subscribe(
        result => {
          console.log('result ok');
          resolve('ok');
        },
        error => {
          resolve("ok")
        }
      )
    });
  }
}
