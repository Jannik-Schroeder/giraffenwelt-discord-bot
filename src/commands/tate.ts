import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';
import { commandType } from "../types/Interactions";

const tate: commandType = {
    data: new SlashCommandBuilder()
        .setName('tate')
        .setDescription('Ein zufälliges Andrew Tate Zitat'),
    run: async (interaction: ChatInputCommandInteraction, client: Client) => {
        // Array of sentences
        const tateQuotes = [
            "Close your eyes. Focus on making yourself feel excited, powerful. Imagine yourself destroying goals with ease.",
            "Find a person who is as successful as you’d like to be, ask them what to do, do it and work hard.",
            "The temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody.",
            "Your mind must be stronger than your feelings.",
            "Absolutely every single one of my actions is intentional. Divine purpose. If your day is full of mindless action, you act without thought.",
            "Success is always stressful.",
            "Freedom will only come when you no longer trade your time for money.",
            "Cost is the enemy of the poor man, so the poor try to save money. Time is the enemy of the rich man, so the rich try to save time.",
            "You must put in the effort to get the life you want.",
            "You are exactly where you deserve to be. Change who you are and you will change how you live.",
            "Arrogance breeds complacency and complacency breeds failure.",
            "Do the impossible and you’ll never doubt yourself ever again.",
            "The internet is the new battleground of earth, the wild west, the place of truth and opportunity.",
            "Arrogance is the cause of most first world poverty.",
            "Today you can act as an amateur or you can be a professional. Decide what you will do right now.",
            "Emotional control isn’t a lack of emotion; it’s a necessary function of maturity.",
            "High standards protect you from low-quality experiences.",
            "Aspire to be a superhero. Not a normal person with a bigger house and nicer car.",
            "Intellect is nothing without energy. Ideas are nothing without energy. High energy people win.",
            "The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.",
            "There is no joy without pain.",
            "The amount of stress you can tolerate while remaining effective is directly correlated to the level of success you will enjoy.",
            "Reject weakness in any form.",
            "You can become rich, you can become strong, you can take care of your loved ones and enjoy the fact it will be very difficult.",
            "No exceptional person ever lived like an average person.",
            "If failure makes you stronger, you can never lose.",
            "The harder you work, the more important you become.",
            "Show me a man with one friend and I’ll see a man who’s honest.",
            "Don’t listen to the advice of people who are living lives you don’t want to live.",
            "You are never going to have any of the things you want if you do not get them yourself. Nobody cares about you enough to do it for you.",
            "Focus on what’s best for yourself.",
            "My biggest victories in life were when I was sad.",
            "I always win because I genuinely can’t take losing.",
            "The faster you work, the more work you get done.",
            "Your only option to level up is to begin talking to winners.",
            "There is no light without dark. There is no joy without pain.",
            "A man without a vision for his future always returns to his past.",
            "Searching for my favorite feeling has built me an exceptional life.",
            "Stress tolerance is the best indicator of a person’s likelihood of success.",
            "Adversity builds men. It is your duty to challenge yourself and craft your own world.",
            "You could be worth 100 million dollars, and go into the war room, and go into a specific room, and the fact that you’re worth 100 million dollars will no longer matter. If you’re sending a girl flowers, and she’s going on a girls trip, then you will get shut down.",
            "They want to get rich, but they have no plan to get rich! And a hope and a plan are two different things.",
            "Money is always moving. If you get in the right place at the right time, then you’re going to get some!",
            "Money will fix all your problems. If money was so bad and did not bring happiness all the billionaires would be giving it away. Wake up.",
            "If you truly wanted money, you wouldn’t be able to sleep until you had it.",
            "You have to look at your business ideas and your plans, and find a way to remove your need for money to attempt the plan.",
            "If you’re surrounded by people who have a plan to get rich, and you provide value to them, sooner or later you’re going to begin to make money.",
            "My unmatched perspicacity, coupled with sheer indefatigability, makes me a feared opponent in any realm of human endeavor.",
            ];

        // Choosing a random sentence
        const selectedSentence = tateQuotes[Math.floor(Math.random() * tateQuotes.length)];

        // Sending the message
        await interaction.reply({ content: selectedSentence });
    },
};

export = tate;
