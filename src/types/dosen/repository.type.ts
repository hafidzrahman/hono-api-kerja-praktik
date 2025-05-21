export interface FindByEmailParamsInterface {
  email: string;
}

export interface FindByEmailReturnInterface {
  email: string;
  nip: string;
  nama: string;
}

export interface FindByNIPParamsInterface {
  nip: string;
}

export interface FindByNIPReturnInterface {
  email: string;
  nip: string;
  nama: string;
}