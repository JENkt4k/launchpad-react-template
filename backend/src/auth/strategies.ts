import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { Strategy as TwitterStrategy } from 'passport-twitter';

export const setupAuthStrategies = () => {
  passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID!,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    callbackURL: '/api/auth/linkedin/callback',
    scope: ['r_emailaddress', 'r_liteprofile'],
  }, async (accessToken, refreshToken, profile, done) => {
    // Handle LinkedIn auth
    return done(null, profile);
  }));

  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_API_KEY!,
    consumerSecret: process.env.TWITTER_API_SECRET!,
    callbackURL: '/api/auth/twitter/callback',
  }, async (token, tokenSecret, profile, done) => {
    // Handle Twitter auth
    return done(null, profile);
  }));

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};