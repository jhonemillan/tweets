import { Injectable } from '@nestjs/common';
import Twitter from 'twitter';

@Injectable()
export class TokenService {
    async   getClientTweet(): Promise<Twitter> {
        const client = new Twitter({
            consumer_key: 'KRy7l0v8wex3w8Sy5zThai3Ea',
            consumer_secret: 'X2eBm0Y21kYEuR74W3Frqc2JVIizOj8Q1EVGatDsEVVEJo0ucu',
            access_token_key: '1220032047516921859-otvXjhExyUTZ5GLxssc9h5ORqtPZja',
            access_token_secret: 'tmJKqM4ORfQW6CH7wIVV8uKNpmSEmeFAP8lYwGb19uYjj'
          });

         return client;
    } 
}

export default TokenService;
