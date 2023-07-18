import type {
  Event
} from "./types.ts";
import * as eventPing from "./events/ping.ts";

export const events: Event[] = [eventPing];
