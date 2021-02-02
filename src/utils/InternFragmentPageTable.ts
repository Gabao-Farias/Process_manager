import InternFragment from "./InternFragment";

const InternFragmentPageTable = (processes : Process[], pageSize : number) => {
  var i = 0;
  var totalFragment : number = 0;
  while(i < processes.length){
    totalFragment += InternFragment(pageSize, processes[i].busyPages, processes[i].processSize);
    i++;
  }
  return totalFragment;
}

export default InternFragmentPageTable;
