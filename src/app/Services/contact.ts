import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/contact';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // url: string = "http://localhost:3000/contacts";
  url: string ="http://localhost:3000/Contacts";
  constructor(private httpClient: HttpClient){

  }
  public getAllContacts() :Observable<Contact[]>{
    debugger;
    return this.httpClient.get<Contact[]>(this.url);
  }

  public getContact(id: string) : Observable<Contact>{
    const temp: string = `${this.url}/${id}`
    return this.httpClient.get<Contact>(temp)
  }
  public updateContact(contact: any) : Observable<Contact>{
    const url=`${this.url}/${contact.id}`
    return this.httpClient.put<Contact>(url,contact);
  }
  public addContact(contact : any) : Observable<Contact>{
    return this.httpClient.post<Contact>(this.url,contact);
  }
  public deleteContact(id: number): Observable<Contact>{
    const temp  = `${this.url}/${id}`
    return this.httpClient.delete<Contact>(temp);
  }
}