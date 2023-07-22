import type {
  ChatInputCommand,
  PingEvent
} from "./types.ts";
import * as eventPing from "./events/ping.ts";

export const commands: (ChatInputCommand)[] = [];
export const events: (PingEvent)[] = [eventPing];
