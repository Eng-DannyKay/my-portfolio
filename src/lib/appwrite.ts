import { Client, TablesDB, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject("694acac1001b443257b3"); // Replace with your project ID

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
