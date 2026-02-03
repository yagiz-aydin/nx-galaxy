import { initFederation } from '@angular-architects/native-federation';

// This loads the manifest and import maps before Angular starts
initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));