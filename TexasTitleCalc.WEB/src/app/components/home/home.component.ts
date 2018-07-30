import { Component, OnInit } from '@angular/core';

import { HomeService } from "../../core/services/home.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  result: any = [];
  blogging: any = [];


  constructor(private hserv: HomeService) {
    this.hserv.GetHomeMessage().subscribe(data => this.result = data);

    this.hserv.GetAPIMessage().subscribe(data => this.blogging = data[0]);

  }

  ngOnInit(): void {
  }

}