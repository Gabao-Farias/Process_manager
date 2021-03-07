import { GetNpfRefs, VerifyAmmountPageProcess } from '.';
import PIDGenarator from './PIDGenerator';

const AddNewProcess = (
  tamp: number,
  newProcessSize: number,
  processes: Process[],
  lastPIDAdded: number,
  tablePageConfig: PageTable[]
): Process[] => {
  const existentProcess = processes;

  const newProcess = {
    pid: String(PIDGenarator(lastPIDAdded)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(
      VerifyAmmountPageProcess(newProcessSize, tamp),
      tablePageConfig
    ),
    busyPages: VerifyAmmountPageProcess(newProcessSize, tamp)
  };

  existentProcess.push(newProcess);

  return existentProcess;
};

export default AddNewProcess;

// matemátics
// Células utilizadas = tamanho Processo / tamp
// Fragmentação = tamanho processo - tamp (módulo)
