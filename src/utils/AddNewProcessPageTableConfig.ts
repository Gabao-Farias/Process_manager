import { PageTable, Process } from "../Models";

const AddNewProcessPageTableConfig = (pageTable : PageTable[], newProcess: Process) => {
  var newPageTableConfig = [];
  var i = 0;

  newPageTableConfig = pageTable.map((row) => {
    i = 0;
    while(i < newProcess.npfRefs.length){
      if(row.npf === newProcess.npfRefs[i]){
        row.used = true;
      }
      i++;
    }
  });

  console.log(newPageTableConfig);
}

export default AddNewProcessPageTableConfig;
