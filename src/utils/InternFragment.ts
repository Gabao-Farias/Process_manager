const InterFragment = (tamp: number, usedPages: number, processSize: number) => {
  return ((usedPages * tamp) - processSize);
}

export default InterFragment;
