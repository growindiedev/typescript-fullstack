import express from 'express';
import bmiCalculator from './bmiCalculator';
import calculateExercise from './exerciseCalculator';


const app = express();
app.use(express.json());

interface Body {
  daily_exercises: number[];
  target: number
}

app.get('/', (_req, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  if (
    req.query &&
    Object.keys(req.query).includes('weight') &&
    Object.keys(req.query).includes('height')
  )
    res.json(bmiCalculator(Number(req.query.weight), Number(req.query.height)));
  else {
    res.status(400).json({
      error: 'malformatted parameters'
    });
  }
});

app.post('/calculate', (req, res) => {
  const { daily_exercises, target }: Body = req.body as Body;
  if (!daily_exercises || !target) {
    res.status(400).json({
      error: 'parameters missing'
    });
  }

  if (
    !daily_exercises.every((de) => !isNaN(Number(de))) ||
    isNaN(Number(target))
  ) {
    res.status(400).json({
      error: 'malformatted parameters'
    });
  }

  res.json(
    calculateExercise(
      daily_exercises.map((de) => Number(de)),
      Number(target)
    )
  );
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});