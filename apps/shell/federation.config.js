const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'terra',
  exposes: {
    // We expose the AppComponent, but usually, you'd expose a specialized RemoteEntryComponent
    './Component': './apps/terra/src/app/app.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});