module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/pwagithubpages/'
    : '/'
    ,
    pwa: {
      name: 'My App',
      theme_color: '#4DBA89',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/sw.js',
        swDest: "service-worker.js"
        // ...other Workbox options...
      }
    }
}