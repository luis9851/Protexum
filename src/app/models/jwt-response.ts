export interface JwtResponseI {
    dataUser :{
        id: number,
        nombre: string,
        correoelectronico: string,
        rol:string;
        accessToken: string,
        expiresIn: string,
       
    }
}
