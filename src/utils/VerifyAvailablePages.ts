const VerifyAvailablePages = (pageTable : PageTable[]) : Number => {
  var availablePages = 0;
  const objetoDoTipoPageTable = pageTable;

  for (let i = 0; i < objetoDoTipoPageTable.length; i++){
    if(objetoDoTipoPageTable[i].used === false){
      availablePages++;
    }
  }
  return(availablePages);
}

export default VerifyAvailablePages;
