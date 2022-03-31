import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express(); 

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('hello full stack!');
});

interface Response {
  weight: number;
  height: number;
  bmi: string;
}

app.get('/bmi', (req, res) => {
  const weight: number = Number(req.query.weight);
  const height: number = Number(req.query.height);
  const bmi: string = calculateBmi(weight, height);
  const response: Response = {
    weight,
    height,
    bmi
  }

  console.log(height);

  if ( !(weight && height) || Number.isNaN(weight) || Number.isNaN(height) ) {
    res.json({ error: 'malformed request parameters' });
  }

  res.json(response);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});