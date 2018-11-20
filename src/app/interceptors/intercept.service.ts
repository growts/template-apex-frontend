import {Injectable} from '@angular/core';
import {AuthService} from '../shared/auth/auth.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {StorageService} from '../services/storage.service';
import {Router} from "@angular/router";


@Injectable()

export class InterceptService implements HttpInterceptor {

  constructor(private authService: AuthService,
              private _storageService: StorageService,
              private router: Router) {
  }

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this._storageService.getCurrentUser();
    // modify request
    if (!currentUser) {
      // redirecciono a login y retorno
      this.goLogin();
      return next.handle(request.clone());
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(currentUser.token)}`
      }
    });

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(' all looks good');
            // http response status code
            console.log(event.status);
          }
        }, error => {
          // http response status code
          if (error.status === 401 || error.status === 403) {
            // redirecciono a login y retorno
            this.goLogin();
            return;
          }
          // veo que hago
        })
      )

  };

  goLogin() {
    this.router.navigate(['/pages/login'])
  };

}
