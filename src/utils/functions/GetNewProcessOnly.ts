import { GetNpfRefs, VerifyAmmountPageProcess } from '.';
import PIDGenarator from './PIDGenerator';

const GetNewProcessOnly = (
  tamp: number,
  newProcessSize: number,
  lastPIDAdded: number,
  tablePageConfig: PageTable[]
): Process => {
  const newProcess = {
    pid: String(PIDGenarator(lastPIDAdded)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(
      VerifyAmmountPageProcess(newProcessSize, tamp),
      tablePageConfig
    ),
    busyPages: VerifyAmmountPageProcess(newProcessSize, tamp)
  };
  return newProcess;
};

export default GetNewProcessOnly;
