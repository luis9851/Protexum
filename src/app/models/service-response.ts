import {Services} from '././services/services'
export interface ServiceResponseI {
    dataService :{
        id: string,
        nombre: string,
        contactodelservicio: string,
        telefono: string,
        telefonoprotexum: string,
        tipodeservicio: string,
        domicilio: string,
        turnosguardias: string,
        horariosguardias: Date,
        jefedeservicio: string,
        cantidaddeguardiasporturno: Number,
        cantidaddeguardiasporturnonoche: Number,
        cliente: string
    
       
    }
    services : Services[];

}