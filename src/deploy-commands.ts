import {
  RouteBases,
  Routes,
  type RESTPutAPIApplicationCommandsJSONBody
} from "discord_api_types";
import { 
  commands as manifestCommands
} from "./manifest";

const commands: RESTPutAPIApplicationCommandsJSONBody = manifestCommands.map(ctx => ctx.data);

const deploy = await fetch(RouteBases.api + Routes.applicationCommands(Deno.env.get("DISCORD_ID")), {
  headers: new Headers(
    { "authorization": Deno.env.get("DISCORD_TOKEN") }
  ),
  body: JSON.stringify(commands)
})
  .then(res => res.json());
console.log(deploy);
