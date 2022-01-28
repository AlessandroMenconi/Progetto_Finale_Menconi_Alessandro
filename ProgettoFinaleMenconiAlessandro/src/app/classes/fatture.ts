import { Client } from "./client";
import { StatoFatture } from "./stato-fatture";

export class Fatture {
    
    id!: number;
    data!: number;
    numero!: number;
    anno!: number;
    importo!: number;
    statoFatture!:StatoFatture;
    cliente!:Client;
    dataInserimento!: number;
    dataUltimoContatto!: number;
    fatturatoAnnuale!: null;
    content!: Fatture[];

    constructor(){

        this.statoFatture=new StatoFatture();
        this.cliente=new Client();
    }
}
