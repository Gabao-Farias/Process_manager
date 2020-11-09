function PagesTableGenerator(qpf : number) {
  const objetoDoTipoPageTable = [];

  for (let i = 0; i < qpf; i++) {
    objetoDoTipoPageTable.push(
    {
      pageNumber: String(i),
      npf: (i >>> 0).toString(2),
      used: ((i % 2 === 0)? true : false)
    });
  }

  return objetoDoTipoPageTable;
}

export default PagesTableGenerator;
