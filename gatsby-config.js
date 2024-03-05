require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: "https://zkcloudworker.com",
        title: "zkCloudWorker",
        description: "A fast cloud proving service for zkApps",
        author: "DFST",
        siteLanguage: "en",
        image: "zkCloudWorker.png",
        titleTemplate: "inbio",
        twitterUsername: "@dfst_io",
        getform_url:
            "https://getform.io/f/a80be20b-8b80-40cd-adc9-5e317feb719d",
        socials: [
            {
                id: 1,
                title: "github",
                path: "https://github.com/zkcloudworker",
                icon: "Github.png",
            },
            {
                id: 2,
                title: "X",
                path: "https://twitter.com/dfst_io",
                icon: "X.png",
            },
            {
                id: 3,
                title: "minanft",
                path: "https://minanft.io",
                icon: "minanft.png",
            },
            {
                id: 4,
                title: "socialcap",
                path: "https://socialcap.app",
                icon: "socialcap.png",
            },
        ],
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    process.env.GATSBY_GOOGLE_ID, // Google Analytics / GA
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
