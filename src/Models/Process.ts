interface Process {
  pid: string;
  processSize: number;
  npfRefs: string[];
  busyPages: number;
}

export default Process;
