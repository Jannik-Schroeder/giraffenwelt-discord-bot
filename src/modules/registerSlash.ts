import fs from "fs/promises";
import path from "path";
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";

import { commandType } from "../types/Interactions";

import dotenv from 'dotenv';
dotenv.config()

const clientId: string = Buffer.from(process.env.token!.split(".")[0], "base64").toString("utf8"); // Gets the client ID from first part of token

const commands: Array<object> = [];

const rest = new REST({ version: "10" }).setToken(process.env.token!);

export default async () => {
    console.log("Starting registerSlash module");

    console.log(`Started refreshing application (/) commands.`);
    const guildId = '1162364564566974544'; // Ersetze dies mit deiner tatsächlichen Guild-ID
    const commandFiles = await fs.readdir(path.join(__dirname, "../commands"));

    commandFiles.forEach(file => {
        console.log(`Loading command file: ${file}`);
    });

    await Promise.all(commandFiles.map(async (file) => {
        if (file.endsWith(".ts") || file.endsWith(".js")) {
            const command: commandType = await import(`../commands/${file}`);

            commands.push(command.data.toJSON());
        }
    }));

    console.log("Commands to be registered:", commands);

    try {
        await rest.put(Routes.applicationCommands(clientId), { body: commands });
    } catch (error) {
        console.error("Error registering commands:", error);
    }

    console.log(`Successfully reloaded application (/) commands.`);
};

