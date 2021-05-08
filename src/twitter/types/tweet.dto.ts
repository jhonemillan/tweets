import UserDTO from "./user.dto";

export class TweetDTO
{
    created_at: Date;
    id_str?: string
    text: string;
    truncated?: true;
    source?: string;    
    is_quote_status: boolean;
    retweet_count: number;
    favorite_count: number;
    favorited: boolean;
    retweeted: boolean;
    possibly_sensitive: boolean;
    user?: UserDTO
}

export default TweetDTO;