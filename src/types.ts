import {
  ApplicationCommandType,
  type APIApplicationCommandInteraction,
  type APIPingInteraction,
  type APIInteraction,
  type APIChatInputApplicationCommandInteraction,
  type APIMessageApplicationCommandInteraction,
  type APIUserApplicationCommandInteraction,
  InteractionType
} from "discord_api_types";

interface Command<T extends ApplicationCommandType> {
  type: T
}

export interface ChatInputCommand
  extends Command<ApplicationCommandType.ChatInput> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIChatInputApplicationCommandInteraction) => Promise<void>;
  }

interface Event<T extends InteractionType> {
  type: T;
}

export interface EventPing
  extends Event<InteractionType.Ping> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIPingInteraction) => Promise<void>;
  }
export interface EventApplicationCommand
  extends Event<InteractionType.ApplicationCommand> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIApplicationCommandInteraction, manifest: Manifest) => Promise<void>;
  }

export interface Manifest {
  events: (EventApplicationCommand | EventPing)[]
}
