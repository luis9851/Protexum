import {Clients} from './clients/client'
export interface ClientResponseI {
    dataClient :{
        id: string,
        nombre: string,
        correoelectronico: string,
        fechadefacturacion: Date
      
        
       
    }
    clients : Clients[];

}