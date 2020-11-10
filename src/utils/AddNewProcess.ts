import { GetNpfRefs, VerifyAmmountPageProcess } from ".";
import { PageTable, Process } from "../Models";
import PIDGenarator from "./PIDGenerator";

const AddNewProcess = (tamp: number, newProcessSize : number, processes : Process[] , tablePageConfig : PageTable[]) : Process[] => {
  const existentProcess = processes;

  const newProcess = {
    pid: String(PIDGenarator(processes)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(VerifyAmmountPageProcess(newProcessSize, tamp), tablePageConfig),
    busyPages: VerifyAmmountPageProcess(newProcessSize, tamp)
  }

  existentProcess.push(newProcess);

  return(existentProcess);
}

export default AddNewProcess;

// matemátics
// Células utilizadas = tamanho Processo / tamp
// Fragmentação = tamanho processo - tamp (módulo)
