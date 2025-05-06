import 'dotenv/config';

export default {
  expo: {
    name: 'KinetixIQ',
    slug: 'kinetixiq',
    sdkVersion: '53.0.0',
    android: {
      package: 'com.ultraweir.kinetixiq', // ✅ REQUIRED for EAS Android builds
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,

      eas: {
        projectId: '0c3615dc-e995-44da-8046-f6364703f142',
      },
    },
  },
};
