import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-table-fatture',
  templateUrl: './table-fatture.component.html',
  styleUrls: ['./table-fatture.component.css']
})
export class TableFattureComponent implements OnInit {
  
  statoFatture:string[]=[]
  fatture:Fatture[]=[];

  constructor(private service:FattureService,
    private router:Router) { }

  ngOnInit(): void {
    this.service.getFatture().subscribe(data=>this.fatture=data.content)
    this.service.getFatture().subscribe(data=>{this.statoFatture})
  }
  dettagli(item:Fatture){
    this.router.navigate(['AddFatture',item.id])
  }
  removeFattura(item:Fatture){
    this.service.removeFattura(item).subscribe(data=>{
      this.fatture=this.fatture.filter(ele=>ele!==item)
    })

  }

}
