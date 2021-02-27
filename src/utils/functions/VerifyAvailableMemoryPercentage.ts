import VerifyAvailablePages from "./VerifyAvailablePages";

const VerifyAvailableMemoryPercentage = (pageTable : PageTable[]) => {
  return((Number(VerifyAvailablePages(pageTable)) * 100) / pageTable.length);
}

export default VerifyAvailableMemoryPercentage;
