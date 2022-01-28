import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {
  client:Client=new Client();
  tipoCliente:string[]=[];

  constructor(
    private clientService : ClientService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.clientService.getTipoClient().subscribe(data=>{
      this.tipoCliente=data;
    })
  }
  addNewClient(){
    this.clientService.createNewClient(this.client).subscribe(response=>{
      console.log(response);
      this.router.navigate(['Tabella'])
    })
  }

}
