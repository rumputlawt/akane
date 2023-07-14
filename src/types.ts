import {
  APIApplicationCommandInteraction,
  APIInteraction,
  InteractionType
} from "discord_api_types";

export interface ExecuteOptions {
  requestEvent: Deno.RequestEvent;
}

export interface Event<T extends InteractionType> {
  type: T;
}

export interface EventPing extends Event<InteractionType.Ping> {
  execute: (data: ExecuteOptions & { interaction: APIApplicationCommandInteraction }) => Promise<void>;
}

export interface Manifest {
  events: (EventPing)[]
}
