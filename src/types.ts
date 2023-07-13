import {
  APIApplicationCommandInteraction,
  APIInteraction,
  InteractionType
} from "discord_api_types";

export interface ExecuteOptions {
  requestEvent: Deno.RequestEvent;
  interaction: APIInteraction;
}

export interface CommandExecuteOptions extends Omit<ExecuteOptions, "interaction"> {
  interaction: APIApplicationCommandInteraction
}

export interface Event {
  type: InteractionType;
  execute: (data: ExecuteOptions) => Promise<void>;
}

export interface Manifest {
  events: Event[]
}
