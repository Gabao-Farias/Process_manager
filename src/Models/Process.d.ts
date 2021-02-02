declare type Process = {
  pid: string;
  processSize: number;
  npfRefs: string[];
  busyPages: number;
}
