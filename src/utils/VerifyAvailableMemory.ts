import { PageTable } from "../Models";
import VerifyAvailablePages from "./VerifyAvailablePages";

const VerifyAvailableMemory = (pageTable : PageTable[], tamp : number) => {  
  return VerifyAvailablePages(pageTable) * tamp;
}

export default VerifyAvailableMemory;
