const VerifyAmmountPageProcess = (processSize : number, pageSize : number) => {
  var ammountPage = 0;

  while(ammountPage * pageSize < processSize)
    ammountPage++;

  return(ammountPage);
}

export default VerifyAmmountPageProcess;
