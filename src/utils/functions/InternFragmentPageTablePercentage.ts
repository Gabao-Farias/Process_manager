import { InternFragmentPageTable } from '.';

const InternFragmentPageTablePercentage = (
  processes: Process[],
  pageSize: number
) => {
  const availableMemory = 8 * 1024;
  var totalFragment: number = InternFragmentPageTable(processes, pageSize);

  return (totalFragment * 100) / availableMemory;
};

export default InternFragmentPageTablePercentage;
