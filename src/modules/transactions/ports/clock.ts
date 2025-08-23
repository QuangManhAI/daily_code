export interface IClock {
  now(): Date;
}
export const CLOCK = Symbol("CLOCK");

export class SystemClock implements IClock {
  now(): Date {
    return new Date();
  }
}