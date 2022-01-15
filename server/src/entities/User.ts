import { ObjectType, Field } from "type-graphql";

@ObjectType() // User entity (so people don't have to put in there zermelo api key every time they login)
export class User {
    @Field()
    id: number;

    @Field()
    name: string;

    password: string;

    @Field()
    zermeloApiKey: string;
}
