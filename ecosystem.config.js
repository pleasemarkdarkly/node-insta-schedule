/* eslint-disable */
module.exports = {
  apps : [{
    name: 'Instagram Schedule',
    script: 'src/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: 'src/cookies',
    env: {
      NODE_ENV: 'production',
      PORT: 4480,
    },
  }],
};