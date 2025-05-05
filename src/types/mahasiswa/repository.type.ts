export interface FindByEmailParamsInterface {
    email: string;
}

export interface FindByEmailReturnInterface {
    email: string;
    nim: string;
    nama: string;
}

export interface FindByNIMParamsInterface {
    nim: string;
}

export interface FindByNIMReturnInterface {
    email: string;
    nim: string;
    nama: string;
}