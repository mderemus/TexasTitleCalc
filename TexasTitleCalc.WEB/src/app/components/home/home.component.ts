import { Component, OnInit } from '@angular/core';

import { HomeService } from "../../core/services/home.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  result: any[] = [];
  blogging: any[] = [];


  constructor(private hserv: HomeService) {
    this.hserv.GetHomeMessage().subscribe(response => this.result = response);

    this.hserv.GetAPIMessage().subscribe(resp => this.blogging = resp);

  }

  ngOnInit(): void {
  }

}