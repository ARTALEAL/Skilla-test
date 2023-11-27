export const getFormatDate = (date) => {
  const str = date.toLocaleString('default', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });
  return str[0].toUpperCase() + str.slice(1);
};
