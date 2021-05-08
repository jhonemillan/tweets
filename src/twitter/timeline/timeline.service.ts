import { Injectable } from '@nestjs/common';
import TokenService from '../token/token.service';
import TweetDTO from '../types/tweet.dto';

@Injectable()
export class TimelineService {
    constructor(private readonly tokenService: TokenService) {}

    async   getTimeLine(): Promise<TweetDTO[]> {
        let mappedTweets = [] as TweetDTO[];
        const client = await this.tokenService.getClientTweet();
        const params = { screen_name: 'nodejs', count: 1 };
        const tweets  =  await client.get('statuses/user_timeline', params);
          if (Array.isArray(tweets)) {
              tweets.map((tweet) => {
                const newTweet: TweetDTO = {
                    created_at: new Date(tweet.created_at),
                    favorite_count: tweet.favorite_count,
                    favorited: tweet.favorite,
                    is_quote_status: tweet.is_quote_status,
                    possibly_sensitive: tweet.possibly_sensitive,
                    retweet_count: tweet.retweet_count,
                    retweeted: tweet.retweeted,
                    text: tweet.text,
                    id_str: tweet.id_str,
                    source: tweet.source,
                    truncated: tweet.truncated                    
                  };

                  mappedTweets.push(newTweet);
              });
          }
          return mappedTweets;       
    } 

}

export default TimelineService;
