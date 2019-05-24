import { Component, OnInit } from '@angular/core';
import { New } from '../models/New.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  model = new New('', '', '', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  getNew() {
    return JSON.stringify(this.model);
  }

}
