import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fatture } from '../classes/fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-add-fatture',
  templateUrl: './add-fatture.component.html',
  styleUrls: ['./add-fatture.component.css']
})
export class AddFattureComponent implements OnInit {
  fatture:Fatture=new Fatture()
  tipoFattura:string[]=[];


  constructor(
    private fattureService:FattureService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fattureService.getTipoFatture().subscribe(data=>{
      this.tipoFattura=data;
    })
  }
  addNewFattura(){
    this.fattureService.createNewFattura(this.fatture).subscribe(response=>{
      console.log(response);
      this.router.navigate(['Fatture'])
    })
  }

}
