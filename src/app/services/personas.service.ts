import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as globales from 'app/shared/config/config';
import { environment } from '../../environments/environment'

@Injectable()
export class PersonasService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url + '/' + globales.persona.path + '/' + globales.persona.getPersonas;
  }

  getPesonas() {
    return this._http.get<any>(this.url);
  }
}
