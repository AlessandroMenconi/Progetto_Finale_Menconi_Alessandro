import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { ClientData } from '../interfaces/client-data';





@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
 

  // tentantID='fe_0621';
  // bearerToken='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNSwiZXhwIjoxNjQzOTA1MTI1fQ.okXPBLbUly1c99vo7e6LUfDGFcD708Kx1zd-m5vuSIjvtSomHRlAsIpTPslJgTFQFVA86tHRg3HuDKDg6Pklow';
  // headers= new HttpHeaders();
 
  constructor(private http:HttpClient) { 
    // this.headers=this.headers
    // .set("Authorization",this.bearerToken)
    // .set("X-TENANT-ID", this.tentantID)
  }

  getAllClient(){
    //return this.http.get(this.urlAPI +'api/clienti?page=0&size=20&sort=id,ASC',{headers:this.headers})
    return this.http.get<Client>(environment.clienti +'api/clienti?page=0&size=20&sort=id,DESC')
  } 

  getClientById(id:number){
    return this.http.get<Client>(environment.clienti + 'api/clienti/' + id)
  }

  getTipoClient(){
    return this.http.get<string[]>(environment.clienti +'api/clienti/tipicliente')
  }

  createNewClient(client:Client){
    return this.http.post<Client>(environment.clienti + 'api/clienti', client);
  }

  updateClient(client:Client){
    return this.http.put<Client>(environment.clienti + 'api/clienti/'+ client.id,client)
  }

  removeClient(client:Client){
    return this.http.delete(environment.clienti + 'api/clienti/' + client.id)
  }
  

}
