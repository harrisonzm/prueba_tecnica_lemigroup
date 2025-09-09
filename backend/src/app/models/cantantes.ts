export interface postCantante{
    nombre: string;
    edad: number;
    generoMusica: string;
    exito:string;
}

export interface Cantante extends postCantante{
    id:number;
    createdAt:Date;
    updatedAt:Date;
}

export interface updateCantante extends Partial<Cantante>{
    id?:number;
};