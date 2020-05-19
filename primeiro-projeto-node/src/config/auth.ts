export default {
  jwt: {
    secret: process.env.APP_SECRET || '3a54c53a90981648c60c1d64b021e141',
    expiresIn: '1d',
  },
};
