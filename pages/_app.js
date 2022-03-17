import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../src/themes/theme'
import createEmotionCache from '../src/themes/createEmotionCache'
import '@splidejs/splide/dist/css/splide.min.css'
import '../styles/globals.css'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Valorant agents</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            {/* Primary Meta Tags */}
            <meta name="title" content="Valorant agents"/>
            <meta name="description" content=""/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io"/>
            <meta property="og:title" content="Valorant agents"/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content="/assets/VALORANT_JETT_LIGHT.jpg"/>

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Valorant agents"/>
            <meta property="twitter:description" content=""/>
            <meta property="twitter:image" content="/assets/VALORANT_JETT_LIGHT.jpg"/>
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-grid@0.3.18/dist/js/splide-extension-grid.js"></Script>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
}
