import { ObjectType, Int, Field } from "@nestjs/graphql";


@ObjectType()
export class Projects{
    @Field(type => Int)
    id: number

    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    profileId: number

    @Field({nullable: true})
    link: string
}