import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.html',
  styleUrl: './contact-view.css'
})
export class ContactViewComponent implements OnInit {
  id : string | null = "" ;
  foundContact : any = {}
  constructor(private service : ContactService, private activatedRoute : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param : ParamMap) =>{
      this.id = param.get("id");
    })
    if(this.id != null){
      this.service.getContact(this.id).subscribe((data)=>{
        this.foundContact = data
      })
    }
  }
}