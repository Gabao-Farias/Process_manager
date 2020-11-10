const InternFragment = (tamp: number, usedPages: number, processSize: number) => {
  return ((usedPages * tamp) - processSize);
}

export default InternFragment;
