import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NewComponent } from './Components/new/new.component';
import { FormComponent } from './Components/form/form.component';
import { EditionComponent } from './Components/edition/edition.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewComponent,
    FormComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditionComponent]
})
export class AppModule { }
