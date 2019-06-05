import { Component, OnInit } from '@angular/core';
import { NewService } from './services/new.service';
import { New } from 'src/app/models/New.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public news: New[];
  constructor(private model: NewService) {
    this.news = [];
  }

  getNews() {
    this.model.getNews()
      .subscribe(res => {
        console.log(this.news);

        this.news = res as New[];

        console.log(this.news);
      });
  }

  ngOnInit() {
    this.getNews();
  }
}
