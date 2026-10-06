import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Skills {
    @Field(type => Int)
    id: number

    @Field({nullable: true})
    name?: string

    @Field({nullable: true})
    profileId: number
}