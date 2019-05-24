import { Component } from '@angular/core';
import { news } from '../news.json';
// import fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  news: Array<object>;
  currentNew;

  constructor() {
    this.news = news;
  }

  set News(News: Array<object>) {
    this.news = News;
  }

  get News() {
    return this.news;
  }

  addNew(New: object) {
    this.news.push(New);
    // updateJSON();
  }

  deleteNew(index: number) {
    if (window.confirm('Estás seguro de eliminar la noticia?')) {
      const array: Array<object> = [];
      for (let i = 0; i < this.news.length; i++) {
        if (i !== index) {
          array.push(this.news[i]);
        }
      }
      this.News = array;

      // updateJSON();
    }
  }

  updateNew(index: number, New: object) {
    this.News[index] = New;
    // updateJSON();
  }

  /*updateJSON() {
    fs.writeFile('../news.json', JSON.stringify(this.news), (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      }
    });
  }*/
}
