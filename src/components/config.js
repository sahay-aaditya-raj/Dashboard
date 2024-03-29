const config = {
    server: {
      port: 4000,
      hostname: 'http://localhost'
    },
    apiKeys: {
      login: '/api/login',
      authenticate: '/api/authenticate',
      addTenantUser: '/api/add-tenant-user',
      addDevice: '/api/add-device',
      getDevices: '/api/get-devices',
      getMax: '/api/device-max',
      getSensorValue: '/api/get-sensor-value',
      getCurrentDaySensorValue: '/api/current-day-sensor-value'
    }
  };


module.exports = config;
