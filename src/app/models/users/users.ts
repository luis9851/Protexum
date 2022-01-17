import { Time } from "@angular/common";

export class Users {
    _id:number;
    Nombre:string;
    Ap_mat:string;
    Ap_pat:string;
    RFC:string;
    correo:string;
    Telefono:number;
    TelefonoAdicional: number;
    Fecha_nac: Time;
    Nivelestudios: string;
    Pensionado: boolean;
    TallasUniforme: string;
    EstadoCivil: string;
    No_S_S: string;
    CreditoInfonavit:string;
    Domicilio: string;
    RutaImagen: string;
    activo: boolean;
}