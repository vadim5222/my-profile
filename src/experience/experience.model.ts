import { ObjectType, Int, Field } from "@nestjs/graphql";

@ObjectType()
export class Experience{
    @Field(type => Int)
    id: number

    @Field({nullable: true})
    company: string

    @Field({nullable: true})
    position: string

    @Field({nullable: true})
    profileId: number


    @Field({nullable: true})
    achievements: string

    @Field({nullable: true})
    period: string
}
