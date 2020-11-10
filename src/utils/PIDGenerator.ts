import { Process } from "../Models";

const PIDGenarator = (ProcessesArray : Process[]) => {
  let newID = 1;
  let flag = false;
  let i = 0;
  let j = 0;

  while(j < ProcessesArray.length){
      i = 0;
      flag = false;
      while(i < ProcessesArray.length && flag === false){  //faz a busca enquanto não encontra...
          if(newID === Number(ProcessesArray[i].pid)){    //se houver igual
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
