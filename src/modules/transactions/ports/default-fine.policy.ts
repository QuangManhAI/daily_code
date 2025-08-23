import { IFinePolicy } from "./fine.policy";

export class DefaultFinePolicy implements IFinePolicy {
  constructor(private readonly finePerDay = 5000) {}

  computeFine(due: Date, returned: Date): number {
    const ms = returned.getTime() - new Date(due).getTime();
    if (ms <= 0) return 0;
    const days = Math.ceil(ms / (24 * 60 * 60 * 1000));
    return days * this.finePerDay;
  }
}