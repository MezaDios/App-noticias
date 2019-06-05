import { Component, OnInit } from '@angular/core';
import { NewService } from '../../services/new.service';
import { NgForm } from '@angular/forms';
import { New } from 'src/app/models/New.model';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [NewService]
})
export class FormComponent implements OnInit {

  constructor(private model: NewService, private parent: AppComponent) { }

  ngOnInit() {
  }

  addNew(form: NgForm) {
    console.log(form.value);
    const values = {
      id: '',
      title: form.value.title,
      author: form.value.author,
      place: form.value.place,
      date: form.value.date,
      description: form.value.description,
      image: this.changeImageFormat(form.value.image)
    };
    this.model.postNew(values)
      .subscribe(res => {
        console.log(res);
        alert(res.status);
        this.clearForm(form);
        this.parent.getNews();
      }, err => {
        console.error(err);
        alert(err);
      });
  }

  clearForm(form: NgForm) {
    if (form) {
      form.reset();
      this.model.selectedNew = new New();
    }
  }

  changeImageFormat(image: string) {
    let path = `./IMGs/${image.substring(image.lastIndexOf('\\') + 1)}`;
    return path;
  }

}
