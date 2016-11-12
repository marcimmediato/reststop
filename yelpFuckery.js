oauth_consumer_key
oauth_token	
oauth_signature_method	
oauth_signature	
oauth_timestamp
oauth_nonce	

var auth = {
  consumerKey: process.env.CONSUMER_KEY
  consumerSecret : process.env.CONSUMER_SECRET,
  accessToken : process.env.TOKEN,
  accessTokenSecret : process.env.TOKEN_SECRET,
  serviceProvider : {
    signatureMethod : "HMAC-SHA1"
  }
}
