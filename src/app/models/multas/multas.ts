export interface Multa {
    multa: MultaClass;
}

export interface MultaClass {
    nombre:        string;
    apellidos:     string;
    fechademulta:  string;
    cantidadmulta: number;
    motivo:        string;
    activo:        boolean;
    _id:           string;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
}



export interface Multaid {
    multas: Multas;
}

export interface Multas {
    _id:                string;
    nombre:             string;
    apellidos:          string;
    curp:               string;
    nsegurosocial:      string;
    rfc:                string;
    domicilio:          string;
    fechadeentrada:     Date;
    fechadenacimiento:  Date;
    telefono:           number;
    telefonoadicional:  number;
    creditodeInfonavit: string;
    estadocivil:        string;
    correoelectronico:  string;
    cdeplayera:         string;
    ddeplayera:         string;
    cdepantalon:        string;
    ddepantalon:        string;
    cdebotas:           string;
    ddebotas:           string;
    cdecachucha:        string;
    ddecachucha:        string;
    cdechamarra:        string;
    ddechamarra:        string;
    cdechaleco:         string;
    ddechaleco:         string;
    cdelentes:          string;
    ddelentes:          string;
    pensionado:         string;
    niveldeescolaridad: string;
    rol:                string;
    contrasena:         string;
    activo:             boolean;
    prestamos:          any[];
    Servicio:           string[];
    Turnos:             string[];
    montoapagartotal:   number;
    createdAt:          Date;
    updatedAt:          Date;
    __v:                number;
    multas:             string[];
}

