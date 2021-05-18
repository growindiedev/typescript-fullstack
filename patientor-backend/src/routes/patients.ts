import express from 'express';
import patientService from '../services/patientService';
import patientsService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSsnEntries());
});

router.post('/', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {name, dateOfBirth, gender, occupation, ssn} = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newPatient = patientService.addEntry({name, dateOfBirth, gender, occupation,ssn});
  res.json(newPatient);
});

export default router;