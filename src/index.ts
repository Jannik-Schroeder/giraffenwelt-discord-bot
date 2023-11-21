import { BetterClient } from "./Client";
import { connectToMongo } from './mongodb'; // Stelle sicher, dass der Pfad korrekt ist
import dotenv from 'dotenv';

dotenv.config();

export const client = new BetterClient();

client.once("ready", async () => {
    console.log("Successfully logged into discord!");

    try {
        // Verbinde zu MongoDB
        await connectToMongo();
        console.log('Erfolgreich mit MongoDB verbunden!');

        // Andere Initialisierungen, die nach der Datenbankverbindung erfolgen sollten
        client.listen();

    } catch (error) {
        console.error('Fehler beim Verbinden mit MongoDB:', error);
    }

    // Ready here!
});

client.start(process.env.TOKEN!);
