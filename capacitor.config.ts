import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.buficrafts.app',
  appName: 'Bufi Crafts',
  webDir: 'dist',
  server: {
    url: 'https://shopwithbuficrafts.netlify.app',
    cleartext: false,
    allowNavigation: ['shopwithbuficrafts.netlify.app', '*.supabase.co', 'accounts.google.com']
  }
};

export default config;
