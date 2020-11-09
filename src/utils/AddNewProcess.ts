import { GetNpfRefs, VerifyAmmountPageProcess } from ".";
import { PageTable, Process } from "../Models";
import PIDGenarator from "./PIDGenerator";

const AddNewProcess = (tamp: number, newProcessSize : number, processes : Process[] , tablePageConfig : PageTable[]) : Process[] => {
  const existentProcess = processes;

  const newProcess = {
    pid: String(PIDGenarator(processes)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(VerifyAmmountPageProcess(1849, tamp), tablePageConfig),
    busyPages: VerifyAmmountPageProcess(1849, tamp)
  }

  existentProcess.push(newProcess);

  return(existentProcess);
}

export default AddNewProcess;

// matemátics
// Células utilizadas = tamanho Processo / tamp
// Fragmentação = tamanho processo - tamp (módulo)
