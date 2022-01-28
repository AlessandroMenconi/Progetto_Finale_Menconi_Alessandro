import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../classes/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  
  

  tentantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNSwiZXhwIjoxNjQzOTA1MTI1fQ.okXPBLbUly1c99vo7e6LUfDGFcD708Kx1zd-m5vuSIjvtSomHRlAsIpTPslJgTFQFVA86tHRg3HuDKDg6Pklow';
  headers= new HttpHeaders();
  constructor(private http:HttpClient) { 
    this.headers=this.headers

    .set("Authorization",'Bearer' + this.bearerToken)
    .set("X-TENANT-ID", this.tentantID)
  }
  getFatture(){
    return this.http.get<Fatture>(environment.fatture+'api/fatture?page=0&size=20&sort=id,DESC')
  }
  getFattureById(id:number){
    return this.http.get<Fatture>(environment.fatture + 'api/fatture/' + id)
  }
  updateFatture(fatture:Fatture){
    return this.http.put<Fatture>(environment.fatture + 'api/fatture/' +fatture.id,fatture)
  }
  getTipoFatture(){
    return this.http.get<string[]>(environment.fatture +'api/statifattura/')
  }
  createNewFattura(fatture:Fatture){
    return this.http.post<Fatture>(environment.fatture + 'api/fatture ',fatture)
    }
  removeFattura(fatture:Fatture){
      return this.http.delete(environment.fatture+ 'api/fatture/'+ fatture.id)
    }
  getTipoStato(){
    return this.http.get<string[]>(environment.fatture+'api/fatture/stato')
  }  

}
