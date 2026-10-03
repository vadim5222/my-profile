import "dotenv/config"
import {Pool} from 'pg'
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "src/generated/prisma/client"
import { constrainedMemory } from "process"


const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({connectionString})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({adapter})

async function main() {
    const profile = await prisma.profile.create({
        data:{
            name:'Кузнецов Вадим',
            description:'Backend/FullStack Developer'
        }
    })
    console.log(profile)
    const skills = await prisma.skills.createMany({
        data:[
            {name:'Python(FastAPI, Django, Django-rest-framework)', profileId:1},
            {name:'Node.js(javascript)', profileId:1},
            {name:'Node.js(typescript)', profileId:1},
            {name:'Sql', profileId:1},
            {name:'Docker', profileId:1},
            {name:'Nginx', profileId:1},
            {name:'REST-API', profileId:1},
            {name:'GraphQL', profileId:1},
            {name:'PostgeSQL', profileId:1},
            {name:'MongoDB', profileId:1},
            {name:'Kubernetes', profileId:1},
        ]
    })
    console.log(skills)
    const projects = await prisma.projects.createMany({
        data:[
            {name:'FullStack service for detecting phishing attacks', profileId:1},
            {name:'Servie for computer store', profileId:1},
            {name:'End-to-end messenger', profileId:1},
            {name:'Recipes service', profileId:1},
            {name:'FullStack project with include LLM-model', profileId:1}
        ]
    })
    console.log(projects)
    const experience = await prisma.experience.createMany({
        data:[
            {company: 'ПАО Татнефть', position:'FullStack Developer', profileId:1},
            {company: 'ООО ТатАСУ', position:'FullStack Developer', profileId:1},
        ]
    })
    console.log(experience)
}
main()
.then(async() => {
    await prisma.$disconnect
    await pool.end()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    await pool.end()
    process.exit(1)
})