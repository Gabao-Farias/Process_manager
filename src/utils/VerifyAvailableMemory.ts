import VerifyAvailablePages from "./VerifyAvailablePages";

const VerifyAvailableMemory = (pageTable : PageTable[], tamp : number) => {
  return(tamp * Number(VerifyAvailablePages(pageTable)));
}

export default VerifyAvailableMemory;
