const config = {
    server: {
      port: 4000,
      hostname: 'http://localhost'
    },
    apiKeys: {
      login: '/api/login',
      authenticate: '/api/authenticate',
      addTenantUser: '/api/add-tenant-user'
    }
  };


module.exports = config;
