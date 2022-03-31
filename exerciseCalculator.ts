type Rating = 1 | 2 | 3;

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  // rating: 1 | 2 | 3;
  rating: Rating;
  ratingDesc: string;
  target: number;
  average: number;
}

const calculateExercises = (target: number, days: number[]): Result => {

  const ratings: string[] = [
    'do better fool',
    'not too shabby',
    'o shit waddup!'
  ];

  const periodLength: number = days.length;
  const trainingDays: number = (() => {
    return days.filter(item => item > 0).length;
  })();
  const success: boolean = (() => {
    return days.every(item => item >= target);
  })();
  const average: number = (() => {
    return days.reduce((acc, curr) => {
      return (acc + curr);
    }, 0) / periodLength;
  })();
  let rating: Rating;
  if (average >= target) {
    rating = 3;
  } else if (average <= target) {
    rating = 1;
  } else {
    rating = 2;
  }
  const ratingDesc = ratings[rating - 1];

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDesc,
    target,
    average
  };
};

console.log(calculateExercises(2, [3, 0, 2, 4.5, 0, 3, 1]));