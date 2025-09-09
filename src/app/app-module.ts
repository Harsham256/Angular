import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ContactViewComponent } from './Components/contact-view/contact-view';
import { NewContactComponent } from './Components/new-contact/new-contact';
import { EditContactComponent } from './Components/edit-contact/edit-contact';
import { ContactListComponent } from './Components/contact-list/contact-list';
import { ErrorPage } from './Components/error-page/error-page';
import { Navbar} from './Components/navbar/navbar';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactFilterPipe } from './Pipe/contactfilter-pipe';

@NgModule({
  declarations: [
    App,
    ContactViewComponent,
    NewContactComponent,
    EditContactComponent,
    ContactListComponent,
    ErrorPage,
    Navbar,
    ContactFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }