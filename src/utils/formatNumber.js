export default (num) => {
  const format = new Intl.NumberFormat('en-EN');

  return format.format(num);
};
