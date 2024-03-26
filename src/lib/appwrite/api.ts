import { Avatars, ID } from "appwrite";
import { INewUser } from "@/types";
import { account, appwriteconfig, avatar, databases } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email, 
            user.name,
            user.password
        );

        if (!newAccount) {
            throw new Error("Failed to create user account");
        }

        const avatarUrl = avatar.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            username: newAccount.name,
            email: newAccount.email,
            imageUrl:avatarUrl  
        });

        return newUser ;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    username: string;
    email: string; 
    imageUrl:URL;  
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteconfig.databaseid,
            appwriteconfig.userCollectionid,
            ID.unique(),
            user,
         )
         return newUser
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function signInAccount(user: { email: string; password: string; }) {
    try {
        const session = await account.createSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log(error);
    }
}
