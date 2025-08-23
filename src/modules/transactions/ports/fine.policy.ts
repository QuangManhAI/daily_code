export interface IFinePolicy {
  computeFine(due: Date, returned: Date): number;
}
export const FINE_POLICY = Symbol("FINE_POLICY");