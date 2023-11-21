import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';
import { commandType } from "../types/Interactions";
import { getDb } from '../mongodb';

const remove: commandType = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Entferne einen User aus der Giraffenwelt')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Der zu entfernende User')
                .setRequired(true)),
    run: async (interaction: ChatInputCommandInteraction, client: Client) => {
        const user = interaction.options.getUser('user', true);
        const userId = user.id;

        // Verbinde mit der Datenbank und entferne den User
        try {
            const db = getDb();
            const result = await db.collection('users').deleteOne({ userId });

            if (result.deletedCount > 0) {
                await interaction.reply({ content: `${user.username} ist erfolgreich aus der Giraffenwelt entkommen.` });
            } else {
                await interaction.reply({ content: `${user.username} ist schon entkommen.` });
            }
        } catch (error) {
            console.error('Fehler beim Entfernen des Users:', error);
            await interaction.reply({ content: 'Es gab ein Problem beim Entfernen des Users.' });
        }
    },
};

export = remove;
