const AddNewProcessPageTableConfig = (tablePageConfig : PageTable[], newProcess: Process) : PageTable[] =>  {
  const newPageTableConfig : PageTable[] = [];
  const processToBeAdded : Process = newProcess;
  var i = 0;
  var flag = false;
  var j;

  while(i < tablePageConfig.length){
    j = 0;
    flag = false;
    while(j < processToBeAdded.npfRefs.length){
      if(processToBeAdded.npfRefs[j] === tablePageConfig[i].npf){
        tablePageConfig[i].used = true;
        newPageTableConfig.push(tablePageConfig[i]);
        flag = true;
        j = processToBeAdded.npfRefs.length;
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

export default AddNewProcessPageTableConfig;
