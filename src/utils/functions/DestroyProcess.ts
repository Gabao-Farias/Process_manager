const DestroyProcess = (PID: string, processes: Process[]): Process[] => {
  var i = 0;
  const newProcessesArray: Process[] = [];

  while (i < processes.length) {
    if (processes[i].pid !== PID) {
      newProcessesArray.push(processes[i]);
    }
    i++;
  }

  return newProcessesArray;
};

export default DestroyProcess;

// matemátics
// Limpar o used;
// E eliminar do array o PID do elemento a ser elimnado pela eliminação dos eliminadores
