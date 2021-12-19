module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e89f1940325b0b6314e31940896a56d5'),
  },
});
