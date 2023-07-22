import type {
  ChatInputCommand,
  PingEvent
} from "./types.ts";

import * as customRoleCommand from "./commands/custom-role.ts";
import * as eventPing from "./events/ping.ts";

export const commands: (ChatInputCommand)[] = [customRoleCommand];
export const events: (PingEvent)[] = [eventPing];
