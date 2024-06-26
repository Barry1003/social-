import { useQuery, useMutation, useInfiniteQuery } from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api" 
import { INewUser } from "@/types"

export const usecreateUserAccountMutation =()=>{
    return useMutation({
        mutationFn: (user: INewUser)=> createUserAccount(user)
    })
}

export const useSignInAccountMutation =()=>{
    return useMutation({
        mutationFn: (user: {email:string; password:string;})=> signInAccount(user)
    })
}