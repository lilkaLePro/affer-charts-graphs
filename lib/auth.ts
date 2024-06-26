import GoogleProvider from 'next-auth/providers/google'
import { env } from './env'
import { AuthOptions } from 'next-auth'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { prisma } from './prisma'


export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    adapter : PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_ID,
        clientSecret: env.GOOGLE_SECRET,
      }),
      // ...add more providers here
    ],
}