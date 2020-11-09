const PagesSize = (tamp: number) => {
  const adressSize = 13;
  return(adressSize - Math.log2(tamp));
}

export default PagesSize;
