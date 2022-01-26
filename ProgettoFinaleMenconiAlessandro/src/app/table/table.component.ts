import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';


import { ClientService } from '../client.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  client:Client[]=[];


  constructor(
    private clientService:ClientService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClient().subscribe(client=>{
      this.client=client.content;

    })
  }
  detail(item:Client){
    this.router.navigate(['Tabella', item.id ])
  }
  removeClient(item:Client){
    this.clientService.removeClient(item).subscribe(data=>{
      this.client=this.client.filter(ele=> ele!== item);
    })

  }
  
}
