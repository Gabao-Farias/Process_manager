const PagesTableSize = (tamp: number) => {
  const availableMemory = 8 * 1024; // KBytes

  return(Math.round(availableMemory / tamp));
}

export default PagesTableSize;
