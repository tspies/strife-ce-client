// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  env: 'DEFAULT',
  production: false,
  serverBaseUrl: 'http://localhost:1355',
  serverUrl: 'http://localhost:1355/v1',
  PARSE: {
    URL: 'http://localhost:25080/parse',
    APP_ID: 'PSBdEx46ycVok7grEcdOMKPMsLYUl0OZ',
    JS_KEY: 'stnDsBFS454z78FSBFu36bscjxhbv'
  },
  LIVESERVER_URL: 'http://localhost:25081/'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
