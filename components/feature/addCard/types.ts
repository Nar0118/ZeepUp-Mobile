export interface IFormCard {
  name_on_card: string;
  card_number: string;
  cvv: string;
  card_type: string;
  card_expiry_month: string;
  card_expiry_year: string;
}

export const monthData = [
  { label: 'January', value: '01' },
  { label: 'February', value: '02' },
  { label: 'March', value: '03' },
  { label: 'April', value: '04' },
  { label: 'May', value: '05' },
  { label: 'June', value: '06' },
  { label: 'July', value: '07' },
  { label: 'August', value: '08' },
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
];

export const yearData: Array<{ label: string; value: string }> = [];

const year = new Date().getFullYear();
for (let i = year; i <= year + 10; i++) {
  yearData.push({ label: `${i}`, value: `${i}` });
}
