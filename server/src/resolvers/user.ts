import { Resolver, Query, Mutation, Ctx, Arg } from "type-graphql";
import { getDocs, addDoc, collection } from "firebase/firestore";
import argon2 from "argon2";

import { context } from "../types";
import { User } from "../entities/User";

@Resolver()
export class UserResolver {
    // Get all users from database
    @Query(() => [User])
    async users(@Ctx() { db }: context) {
        // Get users from database
        const usersQuery = await getDocs(collection(db, "users"));
        let users: User[] = [];
        usersQuery.forEach((doc) => {
            // Put results in array
            users.push({
                id: doc.id,
                name: doc.data().name,
                password: doc.data().password,
                zermeloApiKey: doc.data().zermeloApiKey,
            });
        });
        return users;
    }

    // Add user to database
    @Mutation(() => Boolean)
    async createUser(
        @Ctx() { db }: context,
        @Arg("name", () => String) name: string,
        @Arg("password", () => String) password: string,
        @Arg("zermeloApiKey", () => String) zermeloApiKey: string
    ) {
        const passwordEncrypted = await argon2.hash(password);
        try {
            // Try to add user to database
            await addDoc(collection(db, "users"), {
                name: name,
                password: passwordEncrypted,
                zermeloApiKey: zermeloApiKey,
            });
        } catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }
}
