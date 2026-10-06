import { Resolver , Query} from '@nestjs/graphql'
import { ProfileService } from './profile.service'
import { Profile } from './profile.model'


@Resolver(() => Profile)
export class ProfileResolver{
    constructor(
        private readonly profileservice: ProfileService
    ) {}

    @Query(() => [Profile], {name: 'profile'})
    async profile(){
        return this.profileservice.getAll()
    }
}