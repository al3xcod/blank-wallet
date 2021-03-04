import format from 'date-fns/format';

export const ellipsis = (str: string, start = 7, end = 4) => {
  return (
    str.substring(0, start) +
    '...' +
    str.substring(str.length - end, str.length)
  );
};

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatDate = (date: Date) => {
  return format(date, 'MM-dd-yyyy HH:mm:ss');
};
