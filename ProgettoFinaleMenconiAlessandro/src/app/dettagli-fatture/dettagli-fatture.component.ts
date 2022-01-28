import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettagli-fatture',
  templateUrl: './dettagli-fatture.component.html',
  styleUrls: ['./dettagli-fatture.component.css']
})
export class DettagliFattureComponent implements OnInit {

  fatture!:Fatture;
  statoFatture:string[]=[]


  constructor(
    private route:ActivatedRoute,
    private fattureService:FattureService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.fattureService.getTipoStato().subscribe(data=>{
      this.statoFatture=data;
    })
    this.route.params.subscribe(data=>{
      this.fattureService.getFattureById(data['id']).subscribe(response=>this.fatture=response)
    })
  }

  saveEnvoice(){
    this.fattureService.updateFatture(this.fatture).subscribe(data=>{
      this.fatture=data;
      this.router.navigate(['Fatture'])
    })
  }
}
