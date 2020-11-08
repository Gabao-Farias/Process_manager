function GeradorTabela(qpf : number) {
  const objetoDoTipoPageTable = [];

  objetoDoTipoPageTable.push(
    {
      pageNumber: "0",
      npf: "0000",
      used: false
    },
    {
      pageNumber: "1",
      npf: "0001",
      used: false
    }
  );

  return objetoDoTipoPageTable;
}

export default GeradorTabela;

// const testParams = [
//   {
//     pageNumber: "0",
//     npf: "0000",
//     used: false
//   },
//   {
//     pageNumber: "1",
//     npf: "0001",
//     used: false
//   },
//   {
//     pageNumber: "2",
//     npf: "0010",
//     used: false
//   },
//   {
//     pageNumber: "3",
//     npf: "0011",
//     used: false
//   },
// ];
