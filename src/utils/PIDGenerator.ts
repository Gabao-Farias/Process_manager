import { ProcessArray } from "../Models";

const PIDGenarator = (ProcessesArray : ProcessArray) => {
  let newID = 0;
  let flag = false;
  let i = 0;
  let j = 0;

  while(j < ProcessesArray.processArray.length){
      i = 0;
      flag = false;
      while(i < ProcessesArray.processArray.length && flag === false){  //faz a busca enquanto não encontra...
          if(newID === Number(ProcessesArray.processArray[i].pid)){    //se houver igual
              flag=true;
          }
          i++;
      }

      if(flag === false){ //Não encontrou ID existente...
          return(newID);
      }

      j++;
      newID++;
  }
  return(newID);
}

export default PIDGenarator;
