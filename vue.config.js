module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/pwagithubpages/'
    : '/'
    ,
    pwa: {
      name: 'My App',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/sw.js',
        // ...other Workbox options...
      }
    }
}