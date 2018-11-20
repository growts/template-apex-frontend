
import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent {
  public translates: any = {
    titles: 'titles.home'
  }

  constructor(
    private _translateService: TranslateService
  ) {
  }

}
