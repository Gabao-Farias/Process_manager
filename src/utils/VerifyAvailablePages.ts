import { PageTable } from "../Models";

const VerifyAvailablePages = (pageTable : PageTable[]) => {
  var availablePages = 0;
  const objetoDoTipoPageTable = pageTable;

  for (let i = 0; i < objetoDoTipoPageTable.length; i++)
    objetoDoTipoPageTable[i].used ? null : availablePages++

  return availablePages;
}

export default VerifyAvailablePages;
