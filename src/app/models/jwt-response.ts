
import { Users } from './users/users';
export interface JwtResponseI {
    dataUser :{
        id: number,
        nombre: string,
        correoelectronico: string,
        rol:string;
        accessToken: string,
        expiresIn: string,
        resetToken: string,
        idequip:string
       
    }

  users : Users[];
}