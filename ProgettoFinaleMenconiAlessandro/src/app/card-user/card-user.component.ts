import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../classes/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  client!:Client

  constructor(private clientservice:ClientService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.clientservice.getClientById(data['id']).subscribe(response=> this.client=response)
    })
  }
  edit(client:Client){
    this.router.navigate(['Tabella', client.id, 'edit'])
  }

}
