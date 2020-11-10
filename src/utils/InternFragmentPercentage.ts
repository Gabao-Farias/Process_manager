const InternFragmentPercentage = (tamp: number, usedPages: number, processSize: number) => {
  var full = (usedPages * tamp);
  var part = (usedPages * tamp) - processSize;
  return (Math.round(part * 100 / full));
}

export default InternFragmentPercentage;
