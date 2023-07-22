import {
  ApplicationCommandType,
  type APIApplicationCommandInteraction,
  type APIPingInteraction,
  type APIInteraction,
  type APIChatInputApplicationCommandInteraction,
  type APIMessageApplicationCommandInteraction,
  type APIUserApplicationCommandInteraction,
  InteractionType,
  type RESTPostAPIApplicationCommandsJSONBody,
  type RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord_api_types";

interface Command<D extends RESTPostAPIApplicationCommandsJSONBody> {
  data: D
}

export interface ChatInputCommand
  extends Command<RESTPostAPIChatInputApplicationCommandsJSONBody> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIChatInputApplicationCommandInteraction) => Promise<void>;
  }

interface Event<T extends InteractionType> {
  type: T;
}

export interface PingEvent
  extends Event<InteractionType.Ping> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIPingInteraction) => Promise<void>;
  }
export interface ApplicationCommandEvent
  extends Event<InteractionType.ApplicationCommand> {
    execute: (requestEvent: Deno.RequestEvent, interaction: APIApplicationCommandInteraction, manifest: Manifest) => Promise<void>;
  }

export interface Manifest {
  commands: (ChatInputCommand)[];
  events: (ApplicationCommandEvent | PingEvent)[]
}
