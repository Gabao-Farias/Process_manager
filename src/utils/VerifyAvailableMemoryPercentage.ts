import { PageTable } from "../Models";
import VerifyAvailablePages from "./VerifyAvailablePages";

const VerifyAvailableMemoryPercentage = (pageTable : PageTable[]) => {
  return((VerifyAvailablePages(pageTable) * 100) / pageTable.length);
}

export default VerifyAvailableMemoryPercentage;
