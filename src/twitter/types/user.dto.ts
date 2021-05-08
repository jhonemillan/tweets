export class UserDTO
{
    id_str: string;
    name: string;
    screen_name: string;
    description: string;   
    url: string;
    protected: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    created_at: Date;
    favourites_count: number;
    geo_enabled: boolean;
    verified: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_banner_url: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    has_extended_profile: boolean;
    default_profile: boolean;
    default_profile_image: boolean;
  }

  export default UserDTO;