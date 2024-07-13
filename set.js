const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'HACKING-MD;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NxOWhKa3VLSFVGNnlpaHYxeGNrZmdGQ2pCSG9GVjNXQm0xNDFKU0cwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3lYTUdxbnhiZ3Q2MktOZ1AwRWdLWVN1N3c1WVg5NXhyS2pYU2VNZURTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ0RtZFVQMGUwQTc2NUZ0OFJLeVprdGlIa3UvZGliSUgyQ3dWSm9IQ2xVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqKytHZDZxNm4zaGcvV1RwaXlSbWpnQ3BudHU5K0FuTnJpaDlKU1BscDJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDVzIvcVNCN3Flc3ZLZEdPWXU3cTBwL3dRZUwyQ1JKUjJOcUFtWS9HVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk2bXUvMmRQRkYwVGZjMUdLdXo0SUgyNCtISDdHL0JEQ21tSWxLVkUrQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0kzSlRpMzVJdHlIamtUcklFUWlISXhxT1dlN2pTMlIyczZvNXUrM3Qzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1FRMU1KSmRQWmRsTGE1bkQ2NXhlYnM0V2x2ejdzanRnMG1PNytkOU5YVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvNXUxTStKVTJmdGRjTTBCdlJpa05LWEhRbGtOQXpaOEk0dnd2bWFYNkkwcW9iM1VBeXh6aXRyckkrV3FJL1NVbXdZS2hVN0xjZ1ovakFtaGNIVkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJZOFZFb0xKeFlCZHlITjJqNHBJcUlTMnlVbE9HcEtuL2hJeGhUZjByRnRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMM0htYmZTWVJHR0F2Q29GcE1VTnZRIiwicGhvbmVJZCI6ImY5YzhmNGRkLWFlNDItNGRkOS1hMjBkLWQwYjdmZWY5ZWNlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQTVvOVdXSGxwZWpVNkZKZ0VVSktiZ1pzVlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickt6T2xCVmVDUnR6K09mYzlyZ3lOZiszdkIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM2RUJXSzc3IiwibWUiOnsiaWQiOiIyNTI2NTM1NTM1ODA6ODhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BHVnBad0hFT1hseUxRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjI3ZVdVTHZxb0M1TWQrYlFqd0RPZjdBblZPS2h1TlB4RDVuVVZJTVZheG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZrSVZiRzVUSGRDb2JDTmZTVzBDZWZESWcrSlhqR0VicjFTSUpWNmJ3UjJlVVJmeHZub1MwLzBpU3QzTFBNaGZuTmV3RjBDUmRXVklLYkFDRFRkdUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtVGhSYm9PeExOVm82QXg0Rk13cmlma0JqNTdDNDlMeTVRaTcwQmRjekRtZG1BTVBFQ2xBTUZ1UC9kZitqKzlrVS83NUZQMFQwNWZDejNtdjlBNWtDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1MjY1MzU1MzU4MDo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdTNsbEM3NnFBdVRIZm0wSThBem4rd0oxVGlvYmpUOFErWjFGU0RGV3NhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODU3MzMwfQ==',
    PREFIXE: process.env.PREFIX || "~",
    OWNER_NAME: process.env.OWNER_NAME || "Zokou-Md",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Djalega",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'Zokou_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   DB: process.env.DB || 'postgres://neoverse:pomrleUMXwlmlpIcW2oFJmMX0CXzaFkf@dpg-combonun7f5s73d7uoog-a.oregon-postgres.render.com/neoverse_wz98',
                  /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
