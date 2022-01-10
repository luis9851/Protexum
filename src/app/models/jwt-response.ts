export interface JwtResponseI {
    dataUser :{
        id: number,
        nombre: string,
        correoelectronico: string,
        accessToken: string,
        expiresIn: string
    }
}
