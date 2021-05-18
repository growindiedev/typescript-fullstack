import diagnosesData from '../../data/diagnoses';
import { diagnoses } from '../types/diagnosesEntry';

const getEntries = (): Array<diagnoses> => {
    return diagnosesData;
  };
  
  const addEntry = () => {
    return null;
  };

  export default {
    getEntries,
    addEntry
  };