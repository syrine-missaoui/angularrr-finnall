
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-endnav',
  templateUrl: './endnav.component.html',
  styleUrls: ['./endnav.component.css' ,
  '../../../../assets/back/css/paper-dashboard.css',
  '../../../../assets/back/demo/demo.css',
  '../../../../assets/back/css/bootstrap.min.css',
],
encapsulation: ViewEncapsulation.None,
})
export class EndnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
