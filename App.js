import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { createTablesDB } from './src/data';
import Routes from './src/routes';

import OswaldMedium from './assets/fonts/Oswald-Medium.ttf';
import OswaldBold from './assets/fonts/Oswald-Bold.ttf';
import OswaldSemiBold from './assets/fonts/Oswald-SemiBold.ttf';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Oswald-Bold': OswaldBold,
      'Oswald-SemiBold': OswaldSemiBold,
      'Oswald-Medium': OswaldMedium,
    });

    setFontLoaded(true);
  }

  useEffect(() => {
    createTablesDB();
    loadFonts();
  }, []);

  if (fontLoaded) {
    return (
      <Routes />
    );
  }
  return <AppLoading />;
}
