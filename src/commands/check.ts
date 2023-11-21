import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';
import { commandType } from "../types/Interactions";
import { getDb } from '../mongodb'; // Importiere die getDb-Funktion

const check: commandType = {
    data: new SlashCommandBuilder()
        .setName('check')
        .setDescription('Überprüfe, ob ein User in der Giraffenwelt ist')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Der zu überprüfende User')
                .setRequired(true)),
    run: async (interaction: ChatInputCommandInteraction, client: Client) => {
        const user = interaction.options.getUser('user', true);
        const userId = user.id;

        const db = getDb(); // Hole die Datenbank-Instanz

        // Überprüfe, ob der User in der Giraffenwelt ist
        const userInGiraffenwelt = await db.collection('users').findOne({ userId });
        if (userInGiraffenwelt) {
            await interaction.reply({ content: `${`<@${userId}>`} ist in der Giraffenwelt! 🌍🦒` });
        } else {
            await interaction.reply({ content: `${`<@${userId}>`} ist nicht in der Giraffenwelt. 🚫🦒` });
        }
    },
};

export = check;
