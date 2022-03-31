export const calculateBmi = (weight: number, height: number): string => {
  // BMI = (weight in pounds x 703) / (height in inches x height in inches).
  const bmi = (weight * 703) / (height * height);
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi < 25) {
    return 'normal weight';
  } else if (bmi < 30) {
    return 'overweight';
  } else if (bmi < 35) {
    return 'obese';
  } else if (bmi < 40) {
    return 'severely obese';
  } else {
    return 'morbidly obese';
  }
};
