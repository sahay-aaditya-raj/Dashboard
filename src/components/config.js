const config = {
    server: {
      port: 4000,
      hostname: 'http://localhost'
    },
    apiKeys: {
      login: '/api/login',
      authenticate: '/api/authenticate',
      addTenantUser: '/api/add-tenant-user',
      addDevice: '/api/add-device'
    }
  };


module.exports = config;
