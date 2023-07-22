import {
  RouteBases,
  Routes,
  type RESTPutAPIApplicationCommandsJSONBody
} from "discord_api_types";
import { 
  commands as manifestCommands
} from "./manifest.ts";

const commands: RESTPutAPIApplicationCommandsJSONBody = manifestCommands.map(ctx => ctx.data);

const deploy = await fetch(RouteBases.api + Routes.applicationCommands(Deno.env.get("DISCORD_ID")!), {
  method: "PUT",
  headers: new Headers({
    "authorization": "Bot " + Deno.env.get("DISCORD_TOKEN")!,
    "content-type": "application/json"
  }),
  body: JSON.stringify(commands)
})
  .then(res => res.json());
console.log(deploy);
