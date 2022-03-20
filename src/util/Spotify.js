const clientId = "1e06e94171ce48bea012377c9bb3b5f3";
const redirectUrl = "http://localhost:3000/"
let accessToken;

const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        
    }
}