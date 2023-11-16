import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useCustomFonts = (): boolean => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async (): Promise<void> => {
      try {
        await Font.loadAsync({
          PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
          PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
          PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
          PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
          PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFonts;
