import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Models/contact';
import { ContactService } from '../../Services/contact';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactListComponent implements OnInit {
  contactList : any = [];
  searchCriteria : string = ""
  constructor(private service : ContactService) {
    
  }
  ngOnInit(): void {
    let observable = this.service.getAllContacts();
    observable.subscribe((data : Contact[]) =>{
      this.contactList = data;
    })
  }   
}