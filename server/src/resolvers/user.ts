import { Resolver, Query } from "type-graphql";

import { User } from "../entities/User";

@Resolver()
export class UserResolver {
    @Query(() => [User]) // Setup query for all users
    users() {
        // Get users from database
        // return users;
    }
}
