import React from 'react'
import { StyleSheet,Image,View } from 'react-native'
const loading = () =>{
    return (
        <View style={styles.container}>
            <Image source={require('./../../images/load.gif')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default loading