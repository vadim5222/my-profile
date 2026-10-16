import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service.js";
import { Prisma, Profile } from "src/generated/prisma/client.js";

@Injectable()
export class ProfileService{
    constructor(private readonly prismaservice: PrismaService){}

    async getAll(): Promise<Profile[]>{
        return this.prismaservice.profile.findMany({
            include:{
                skills: true,
                projects: true,
                experience: true
            }
        })
    }
}