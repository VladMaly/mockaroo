const path = require(`path`)

module.exports = {
    siteMetadata: {
        title: "Jamie",
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-189099564-1",
            },
        },
        // "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                // path: "./src/images/",
                path: path.join(__dirname, `src`, `images`),
            },
            __key: "images",
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-W5CNBCN",
        
              // Include GTM in development.
              //
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: true,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },
        
              // Specify optional GTM environment details.
            //   gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
            //   gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
            //   dataLayerName: "YOUR_DATA_LAYER_NAME",
        
              // Name of the event that is triggered
              // on every Gatsby route change.
              //
              // Defaults to gatsby-route-change
            //   routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
            },
          },
    ],
}
