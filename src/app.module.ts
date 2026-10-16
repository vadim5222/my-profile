import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import {GraphQLModule} from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProfileResolver } from './profile/profile.resolver.js';
import { ProfileService } from './profile/profile.service.js';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context:({req, res}) => ({req, res}),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProfileResolver, ProfileService],
  exports: [PrismaService]
})
export class AppModule {}
