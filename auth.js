var authURL = 'https://api.yelp.com/oauth2/token'

function auth(authParams){
  return $.ajax({
    method: "POST",
    contentType: 'application/x-www-form-urlencoded',
    dataType: 'jsonp',
    crossDomain: true,
    url: `${authURL}?grant_type=${authParams.grant_type}&client_id=${authParams.app_id}&client_secret=${authParams.app_secret}`
  }).done(function( response ) {
    console.log(response)
  })
}


// https://www.yelp.com/developers/documentation/v2/authentication
// https://www.npmjs.com/package/oauth-signature

// var currentTime = new Date($.now());

// function generateNonce() {
//   // A unique string randomly generated per request.
//     var nonce = '';
//     var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for (var i = 0; i < 16; i++) nonce += chars[Math.floor(Math.random() * chars.length)];
//     return nonce;
// }

// var httpMethod = 'GET'
// var yelpBaseUrl = 'https://api.yelp.com/v2/search'

// var parameters = {
//         oauth_consumer_key : yelpAuth.consumerKey,
//         oauth_token : yelpAuth.accessToken,
//         oauth_nonce : generateNonce(),
//         oauth_timestamp : currentTime,
//         oauth_signature_method : yelpAuth.serviceProvider.signatureMethod,
//         oauth_version : '1.0'
//     }
// var consumerSecret = yelpAuth.consumerSecret
// var tokenSecret = yelpAuth.accessTokenSecret


//     // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash 
// var encodedSignature = oauthSignature.generate(httpMethod, yelpBaseUrl, parameters, consumerSecret, tokenSecret)
// //     // generates a BASE64 encode HMAC-SHA1 hash 
// var signature = oauthSignature.generate(httpMethod, yelpBaseUrl, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
