import { ObjectType, Field } from "type-graphql";

@ObjectType() // User entity (so people don't have to put in there zermelo api key every time they login)
export class User {
    @Field()
    id: String;

    @Field()
    name: String;

    password: String;

    @Field()
    zermeloApiKey: String;
}
