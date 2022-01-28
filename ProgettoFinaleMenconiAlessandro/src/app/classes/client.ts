import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";
import { TipoCliente } from "./tipo-cliente";
export class Client {
    id!:number;
    ragioneSociale!:string;
    partitaIva!:string;
    tipoCliente!:TipoCliente;
    email!:string;
    pec!:string;
    telefono!:string;
    nomeContatto!: string;
    cognomeContatto!:string;
    telefonoContatto!:string;
    emailContatto!:string;
    indirizzoSedeOperativa!:IndirizzoSedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    dataInserimento!:string;
    dataUltimoContatto!:string;
    fatturatoAnnuale!:number;
    
    content=[]
  

    constructor(){
        this.tipoCliente= new TipoCliente()
        this.indirizzoSedeOperativa= new IndirizzoSedeOperativa();
        this.indirizzoSedeLegale= new IndirizzoSedeLegale();
        
    }
}
