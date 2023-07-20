import type {
  EventPing
} from "./types.ts";
import * as eventPing from "./events/ping.ts";

export const events: (EventPing)[] = [eventPing];
