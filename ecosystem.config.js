module.exports = {
  apps: [
    {
      name: 'sabbi-pro-api',
      script: './dist/infra/http/server.js',
      watch: false,
      instances: 1,
      out_file: '/var/log/sabbi-pro-api-out.log',
      error_file: '/var/log/sabbi-pro-api-error.log',
      exec_mode: 'cluster',
    },
  ],
}
