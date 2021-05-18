import patientsData from '../../data/patients';
import {patient, nonSsnPatient, newPatient } from '../types/patientEntry';
import {v4} from 'uuid';

  const getEntries = (): Array<patient> => patientsData;

  const getNonSsnEntries = (): Array<nonSsnPatient> => {
    return patientsData.map( ({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation})) ;
  };
  
  const addEntry = (entry: newPatient ): patient => {
    const NewPatient = {
      id: v4(),
      ...entry
    };
    patientsData.push(NewPatient);
    return NewPatient;
  };

//   const addEntries = (entry: Omit<patient, 'id'>): patient => {
//     const newPatientEntry = {
//         id: v4(),
//         ...entry
//     };
//     patientsData.push(newPatientEntry);
//     return newPatientEntry;
// };

  export default {
    getNonSsnEntries,
    getEntries,
    addEntry
  };