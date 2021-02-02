const GetProcessToBeDestroyed = (PID : string, processes : Process[]) : Process => {
  var erroneusProcess = {
    pid: "",
    processSize: 0,
    npfRefs: [],
    busyPages: 0,
  };
  var i = 0;
  
  while(i < processes.length){
    if(processes[i].pid === PID){
      return(processes[i]);
    }
    i++;
  }

  return(erroneusProcess);
}

export default GetProcessToBeDestroyed;
