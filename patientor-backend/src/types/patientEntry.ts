//type gender = 'male' | 'female';

export enum gender {
    Male = 'male',
    Female = 'female',
    //Other = 'other'
  }

export interface patient {
    id: string,
    name: string
    dateOfBirth: string,
    ssn: string,
    gender: gender
    occupation: string
}



export type nonSsnPatient = Omit<patient, 'ssn' >;
export type newPatient = Omit<patient, 'id'>;
