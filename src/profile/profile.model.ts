import { Field, Int, ObjectType } from "@nestjs/graphql";
import {Skills} from '../skills/skills.model'
import {Projects} from '../projects/projects.model'
import { Experience } from "src/experience/experience.model";


@ObjectType()
export class Profile{
    @Field(type => Int)
    id: number

    @Field({nullable: true})
    name: string

    @Field({nullable: true})
    description: string

    @Field({nullable: true})
    links: string

    @Field(type => [Skills], {nullable: true})
    skills: Skills[]

    @Field(type => [Experience], {nullable: true})
    experience: Experience[]

    @Field(type => [Projects], {nullable: true})
    projects: Projects[] 
}