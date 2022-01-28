import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-card-fatture',
  templateUrl: './card-fatture.component.html',
  styleUrls: ['./card-fatture.component.css']
})
export class CardFattureComponent implements OnInit {

  fatture!: Fatture
  clientservice: any;
  client: any;

  constructor(
    private fattureService: FattureService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.fattureService.getFattureById(data['id']).subscribe(fatture=> {this.fatture=fatture})
    })
  }
  envoiceDetail(fatture:Fatture){
    this.router.navigate(['AddFatture', fatture.id,'dettagliFatture'])

  }
  

}
