import type {
  PingExecuteOptions
} from "../types.ts";
import {
  APIInteractionResponsePong,
  InteractionResponseType,
  InteractionType
} from "discord_api_types";

export const type = InteractionType.Ping;

export async function execute (data: PingExecuteOptions): Promise<void> {
  const pong: APIInteractionResponsePong = {
    type: InteractionResponseType.Pong
  }

  data.requestEvent.respondWith(
    new Response(JSON.stringify(pong))
  );
}
