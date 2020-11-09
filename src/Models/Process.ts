interface Process {
  pid: string;
  processSize: number;
  busyPages: number;
  fragmentSize: number;
}

export default Process;
