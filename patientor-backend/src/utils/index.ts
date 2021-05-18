import {newPatient, gender} from '../types/patientEntry';

type Fields = {name: unknown, dateOfBirth: unknown, gender: unknown, occupation: unknown, ssn: unknown};

const toNewPatientEantry = ({name, dateOfBirth, gender, occupation, ssn}: Fields): newPatient => {
    const newEntry: newPatient = {
        name: parseName(name),
        dateOfBirth: parseDateOfBirth(dateOfBirth),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation),
        ssn: parseSsn(ssn)
    };
    return newEntry;
};

const parseName = (name: unknown): string => {
    if(!name || !isString(name)){
        throw new Error("incorrect or missing name");
    }
    return name;
};

const parseDateOfBirth = (date: unknown): string => {
    if(!date || !isString(date)){
        throw new Error("incorrect or missing datOfBirth");
    }
    return date;
};

const parseGender = (Gender: unknown): gender => {
    if(!Gender || !isGender(Gender)){
        throw new Error("incorrect or missing gender");
    }
    return Gender;
};

const parseOccupation = (occ: unknown): string => {
    if(!occ || !isString(occ)){
        throw new Error("incorrect or missing occupation");
    }
    return occ;
};

const parseSsn = (ssn: unknown): string => {
    if(!ssn || !isString(ssn)){
        throw new Error("incorrect or missing ssn");
    }
    return ssn;
};


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

const isGender = (text: any): text is gender => {
    return Object.values(gender).includes(text);
};

export default toNewPatientEantry;