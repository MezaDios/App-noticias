import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../models/New.model';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  selectedNew: New;
  News: New[];
  readonly URL_API = 'http://localhost:3000/API';

  constructor(private http: HttpClient) {
    this.selectedNew = new New();
  }

  getNew(paramNew: any) {
    return this.http.get(this.URL_API, paramNew);
  }

  getNews() {
    return this.http.get(this.URL_API);
  }

  postNew(paramNew: New) {
    return this.http.post(this.URL_API, paramNew);
  }

  putNew(paramNew: New) {
    return this.http.put(`${this.URL_API}/${paramNew.id}`, paramNew);
  }

  deleteNew(id: string) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }

}
