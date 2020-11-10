import { Process } from "../Models";

const DestroyProcess = (PID : string, processes : Process[]) : Process[] => {
  const newProcessesArray : Process[] = [];

  processes.map((process) => {
    if(process.pid !== PID){
      newProcessesArray.push(process);
    }
  })

  return(newProcessesArray);
}

export default DestroyProcess;

// matemátics
// Limpar o used;
// E eliminar do array o PID do elemento a ser elimnado pela eliminação dos eliminadores
