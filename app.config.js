import 'dotenv/config';

export default {
    expo: {
        name: 'feraset-case-study',
        slug: 'feraset-case-study',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'feraset-case-study',
        userInterfaceStyle: 'automatic',
        extra: {
            firebase: {
                apiKey: process.env.FIREBASE_API_KEY,
                authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                projectId: process.env.FIREBASE_PROJECT_ID,
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.FIREBASE_APP_ID,
                measurementId: process.env.FIREBASE_MEASUREMENT_ID
            }
        },
        newArchEnabled: true,
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon.png',
                backgroundColor: '#ffffff'
            },
            edgeToEdgeEnabled: true
        },
        web: {
            bundler: 'metro',
            output: 'static',
            favicon: './assets/images/favicon.png'
        },
        plugins: [
            'expo-router',
            [
                'expo-splash-screen',
                {
                    image: './assets/images/splash-icon.png',
                    imageWidth: 200,
                    resizeMode: 'contain',
                    backgroundColor: '#ffffff'
                }
            ]
        ],
        experiments: {
            typedRoutes: true
        }

    },
};
