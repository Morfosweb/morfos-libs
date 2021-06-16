export const dateRef = (data: string) => {
  // ---------- set Month Format
  const splitExp = data.split('/');
  const yearRef = splitExp[1];
  const n = n => (n > 9 ? '' + n : '0' + n);
  const monthRef: any = splitExp[0];
  const monthZero = n(splitExp[0]);
  const monthYear = `${yearRef}_${monthZero}`;

  // ---------- set year 1 or 2
  const year1A = yearRef === '2019';
  const year1B = yearRef === '2020' && monthRef < 9;
  const condYear1 = year1A || year1B;
  const condYear = condYear1 ? 'year1' : 'year2';

  return { monthYear, condYear };
};
