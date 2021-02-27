const ProcessExists = (PID: string, processes: Process[]) : boolean => {
  var i = 0;
  while(i < processes.length){
    if(PID === processes[i].pid){
      return(true);
    }
    i++;
  }
  return(false);
}

export default ProcessExists;
