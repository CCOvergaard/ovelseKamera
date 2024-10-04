import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';

export default function ImageScreen({ route }) {
  // State for the image URI
  const [image, setImage] = useState('');

  // useEffect to set the image URI from the route parameter
  useEffect(() => {
    setImage(route.params.image);

    return () => {
      setImage(''); // Clear image state when component unmounts
    };
  }, []);

  // Get dimensions of the window for full-screen display
  const { width, height } = Dimensions.get('window');

  // Return the image in full screen
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: image ? image : null }}
        style={{ width: width, height: height }}
      />
    </View>
  );
}
