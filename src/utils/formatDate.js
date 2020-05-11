export default (date) => {
  const d = new Date(date);
  const format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const [
    { value: mo },
    ,
    { value: da },
  ] = format.formatToParts(d);

  return `${da} ${mo}`;
};
