import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.DATABASE_URL || "";

let db: Db;

export const connectToMongo = async (): Promise<Db> => {
    if (!db) {
        try {
            const client = new MongoClient(uri);
            await client.connect();
            db = client.db("giraffenwelt"); // Entferne `const` hier, um die globale Variable `db` zu verwenden
            console.log("MongoDB verbunden!");
        } catch (error) {
            console.error("MongoDB Verbindung fehlgeschlagen: ", error);
            throw error;
        }
    }
    return db;
};

export const getDb = (): Db => {
    if (!db) {
        throw new Error("Datenbank nicht initialisiert. Rufe zuerst connectToMongo auf.");
    }
    return db;
};
