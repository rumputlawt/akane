import {
  type APIPingInteraction,
  APIInteractionResponsePong,
  InteractionResponseType,
  InteractionType
} from "discord_api_types";

export const type = InteractionType.Ping;

export async function execute (requestEvent: Deno.RequestEvent, interaction: APIPingInteraction): Promise<void> {
  const pong: APIInteractionResponsePong = {
    type: InteractionResponseType.Pong
  }

  requestEvent.respondWith(
    new Response(JSON.stringify(pong))
  );
}
