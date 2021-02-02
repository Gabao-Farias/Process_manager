const GetNpfRefs = (processAmmountPagesUsed : number, tpso : PageTable[]) => {
  var npfRefs = [];
  var i = 0;
  var flag = false;

  while(i < tpso.length && flag === false){
    if(tpso[i].used === false){
      npfRefs.push(tpso[i].npf);
    }

    if(npfRefs.length === processAmmountPagesUsed){
      flag = true;
    }
      
    i++;
  }

  return(npfRefs);
}

export default GetNpfRefs;
