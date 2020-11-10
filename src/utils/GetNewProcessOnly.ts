import { GetNpfRefs, VerifyAmmountPageProcess } from ".";
import { PageTable, Process } from "../Models";
import PIDGenarator from "./PIDGenerator";

const GetNewProcessOnly = (tamp: number, newProcessSize : number, processes : Process[] , tablePageConfig : PageTable[]) : Process => {
  const newProcess = {
    pid: String(PIDGenarator(processes)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(VerifyAmmountPageProcess(newProcessSize, tamp), tablePageConfig),
    busyPages: VerifyAmmountPageProcess(newProcessSize, tamp)
  }    
  return(newProcess);
}

export default GetNewProcessOnly;
