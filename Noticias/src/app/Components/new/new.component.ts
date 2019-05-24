import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() title: string;
  @Input() author: string;
  @Input() date: string;
  @Input() description: string;
  @Input() image: string;
  @Input() place: string;

  constructor() {

  }

  ngOnInit() {
  }

}
