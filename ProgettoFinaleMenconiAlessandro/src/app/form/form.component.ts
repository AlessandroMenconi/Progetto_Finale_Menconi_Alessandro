import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { IndirizzoSedeLegale } from '../classes/indirizzo-sede-legale';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  client!:Client;
  tipoCliente:string[]=[]
  

  constructor(
    private route:ActivatedRoute,
    private clientService:ClientService,
    private router:Router) { }

  ngOnInit(): void {
    this.clientService.getTipoClient().subscribe(data=>{
      this.tipoCliente=data;
    })
    this.route.params.subscribe(data=>{
      this.clientService.getClientById(data['id']).subscribe(response=> this.client=response)
    })
  }
  Save(){
    this.clientService.updateClient(this.client).subscribe(data=>{
      this.client=data;
      this.router.navigate(['Tabella'])
    })
  }

}
