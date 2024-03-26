import { Client, Account, Databases,Storage, Avatars} from 'appwrite'
 

export const appwriteconfig = {
    projectid: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL,
    databaseid: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageid: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionid: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postcollectionid: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savescollectionid: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID
}

export const client = new Client ()
client.setProject(appwriteconfig.projectid)
client.setEndpoint(appwriteconfig.url)
export const account = new Account (client) 
export const  databases = new Databases (client)
export const storage = new Storage (client)
export const  avatar = new  Avatars (client)