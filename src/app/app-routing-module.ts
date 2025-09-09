import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactViewComponent } from './Components/contact-view/contact-view';
import { NewContactComponent } from './Components/new-contact/new-contact';
import { ErrorPage } from './Components/error-page/error-page';

import { EditContactComponent } from './Components/edit-contact/edit-contact';

import { ContactListComponent} from './Components/contact-list/contact-list';

const routes: Routes = [
  {path: '', redirectTo: 'contacts/viewall',pathMatch: "full"},
 { path: 'contacts/viewall', component: ContactListComponent },
  {path: 'contacts/new', component:NewContactComponent},
  {path: 'contacts/edit/:id',component:EditContactComponent},
  {path: '**', component:ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }