import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function BackgroundLayer({ children }) {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#C26CFF', '#1C55FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={StyleSheet.absoluteFill}
    >
      <BlurView intensity={210} tint="default" style={StyleSheet.absoluteFill} />
    </LinearGradient>
    <View style={styles.content}>
        {children}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  content: {
    flex: 1,
    zIndex: 1,
    paddingLeft: 24,
    paddingTop: 80,
  },

});

// import React from 'react';
// import { StyleSheet, View, Image, ImageBackground } from 'react-native';

// export default function BackgroundLayer({ children }) {
//   return (
//     // <View style={styles.container}>
//     //   <View style={styles.darkOverlay} />

//     <ImageBackground
//       source={require('../assets/images/Vector3.png')}
//       style={styles.vectorImage}
//       resizeMode="cover"
//     >

//       <View style={styles.content}>
//         {children}
//       </View>
//     </ImageBackground>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//   },
//   darkOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#09090B',
//     zIndex: 1,
//   },
//   vectorImage: {
//     // ...StyleSheet.absoluteFillObject,
//     // opacity: 0.8,
//     // // borderRadius: 80,
//     // zIndex: 0,
//     flex:1,
//     backgroundColor:'#09090B',
//     opacity:1
//   },
//   content: {
//     flex: 1,
//     // zIndex: 1,
//     paddingLeft: 24,
//     paddingTop: 80,
//   },
// });
