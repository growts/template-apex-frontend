import {Component, OnInit} from '@angular/core';
import {PersonasService} from "../../services/personas.service";

@Component({
  selector: 'app-full-layout-page',
  templateUrl: './full-layout-page.component.html',
  styleUrls: ['./full-layout-page.component.scss'],
  providers: [PersonasService]
})
export class FullLayoutPageComponent implements OnInit {
  constructor(
    private _personasService: PersonasService
  ){

  }

  ngOnInit() {
  }
}
