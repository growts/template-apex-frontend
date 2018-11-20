import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as globales from 'app/shared/config/config';
import { environment } from '../../environments/environment'

@Injectable()
export class UsersService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = environment.url + '/' + globales.persona.path + '/' + globales.persona.getPersonas;
  }

  validateEmail(email: string) {
    // aqui hay que llamar al servicio que valide si existe mail y en caso de existir que realice el envío del mail.
    return true;
  }
}
