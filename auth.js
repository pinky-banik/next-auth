import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { userModel } from "./models/user-model";
import mongoClientPromise from "./db/mongoClientPromise";

const handler = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise),
    providers: [
        CredentialsProvider({
            credentials:{
                credentials:{
                    email:{},
                    password:{}
                },
                async authorize(credentials) {
                    if (credentials == null) return nulll
                    try {
                        const user = await userModel.findOne({
                            email: credentials.email
                        })


                        if (user) {
                            const isMatch = user.email === credentials.email;
                            if (isMatch) {
                                return user;
                            } else {
                                throw new Error('Email of password mismatch')
                            }
                        } else {
                            throw new Error('User not found')
                        }
                    } catch (error) {
                        throw new Error(error)
                    }
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
    ]
})
export { handler as GET, handler as POST };