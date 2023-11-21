import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';
import { commandType } from "../types/Interactions";
import { getDb } from '../mongodb'; // Importiere die getDb-Funktion

const add: commandType = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('Füge einen User zur Giraffenwelt hinzu')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Der hinzuzufügende User')
                .setRequired(true)),
    run: async (interaction: ChatInputCommandInteraction, client: Client) => {
        const user = interaction.options.getUser('user', true);
        const userId = user.id;
        const userName = user.username;

        const db = getDb(); // Hole die Datenbank-Instanz

        // Überprüfe, ob der User bereits in der Giraffenwelt ist
        const existingUser = await db.collection('users').findOne({ userId });
        if (existingUser) {
            await interaction.reply({ content: `${`<@${userId}>`} ist schon in der Giraffenwelt! 🦒` });
            return;
        }

        // Füge den neuen User zur Giraffenwelt hinzu
        await db.collection('users').insertOne({ userId, userName });
        await interaction.reply({ content: `${`<@${userId}>`} ist jetzt in der Giraffenwelt! 🌍🦒` });
    },
};

export = add;
