import {
  APIPingInteraction,
  APIInteraction,
  InteractionType
} from "discord_api_types";

export interface ExecuteOptions {
  requestEvent: Deno.RequestEvent;
}

export interface PingExecuteOptions extends ExecuteOptions {
  interaction: APIPingInteraction;
}

export interface Event<T extends InteractionType> {
  type: T;
}

export interface EventPing extends Event<InteractionType.Ping> {
  execute: (data: PingExecuteOptions) => Promise<void>;
}

export interface Manifest {
  events: (EventPing)[]
}
