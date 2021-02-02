import GetProcessToBeDestroyed from "./GetProcessToBeDestroyed";

const DestroyProcessPageTable = (PID : string, processes : Process[], tablePageConfig : PageTable[]) : PageTable[] => {
  const newPageTableConfig : PageTable[] = [];
  const processToBeEliminated : Process = GetProcessToBeDestroyed(PID, processes);
  var i = 0;
  var flag = false;
  var j;

  while(i < tablePageConfig.length){
    j = 0;
    flag = false;
    while(j < processToBeEliminated.npfRefs.length){
      if(processToBeEliminated.npfRefs[j] === tablePageConfig[i].npf){
        tablePageConfig[i].used = false;
        newPageTableConfig.push(tablePageConfig[i]);
        flag = true;
        j = processToBeEliminated.npfRefs.length;
      }
      j++;
    }

    if(flag === false){
      newPageTableConfig.push(tablePageConfig[i]);
    }
    
    i++;
  }

  return(newPageTableConfig);
}

export default DestroyProcessPageTable;
