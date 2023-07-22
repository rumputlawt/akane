import {
  type APIChatInputCommandInteraction,
  ApplicationCommandType,
  ApplicationCommandOptionType,
  type RESTPostAPIChatInputApplicationCommandsJSONBody
} from "discord_api_types";

export const data: RESTPostAPIChatInputApplicationCommandsJSONBody = {
  name: "custom-role",
  description: "🐑 ゛Atur custom role mu yh dek",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "create",
      description: "🐑 ゛Bikin custom role (kalau udh ada, ga ush bikin lgi)",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "name",
          description: "🐑 ゛Role nya mau dikasih nama apa (jgn yg aneh aneh ya)",
          type: ApplicationCommandOptionType.String,
          required: true
        },
        {
          name: "color",
          description: "🐑 ゛Role ny mau dikasih warna apa (e.g: #FFFFFF)",
          type: ApplicationCommandOptionType.String,
          required: true
        },
        {
          name: "icon",
          description: "🐑 ゛Role ny mau dipasang icon? (selain png/jpg/jpeg/gif, ga gwe terima .)",
          type: ApplicationCommandOptionType.Attachment,
          required: false
        }
      ]
    }
  ]
}

export async function execute (requestEvent: Deno.RequestEvent, interaction: APIChatInputCommandInteraction): Promise<void> {
  
}
