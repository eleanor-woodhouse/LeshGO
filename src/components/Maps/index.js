import React, { useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Dimensions, StyleSheet } from 'react-native'

const Maps = ({ markers }) => {
  console.log('Maps.js markers: ', markers)
  return (
    <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{ // showsTraffic="true"
      latitude: -36.872036,
      longitude: 174.763428,
      latitudeDelta: 0.0722,
      longitudeDelta: 0.0421,
    }}>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.latlng}
        />
      ))}
    </MapView>

  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2,
    borderRadius: 20,
  },
})

export default Maps
