import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {View,Text,StyleSheet,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native'
import Loading from './../components/loading'
import {fetchMoreStargazer} from './../action/stargazerAction'

const StargazerScreen = ({navigation}) =>{
    const {loading} = useSelector(state => state.load)
    const stargazer = useSelector(state => state.stargazer)
    const [page,setPage] = useState(1)
    const dispatch = useDispatch()

    const _showMoreStargazer = () =>{
        setPage(page+1)
        const {full_name} = navigation.state.params
        dispatch(fetchMoreStargazer(full_name,page))
    }

    const _renderLoadMore = () =>{
        const {stargarzers} = stargazer

        return(
             <TouchableOpacity 
              style={styles.loadMore}
              onPress ={() => !loading && _showMoreStargazer()}
              >
               {(loading && stargarzers.length >0) ? 
                    <ActivityIndicator size="small" color="red" /> :
                   <Text style={{color: '#0000EE',fontSize: 18}}>Load More</Text>}  
             </TouchableOpacity>
            )
    }

    const _renderItem = (item,index) =>{
        return (
            <View style={{flexDirection: 'row',paddingVertical: 6,paddingHorizontal: 16,borderBottomColor: 'grey',borderBottomWidth: StyleSheet.hairlineWidth}}>
                <Text style={{marginRight: 10}}>{index + 1}</Text>
                <Text>id: {item.id}</Text>
            </View>
        )
    }

    const _renderData = () =>{
        const {stargazers_count} = navigation.state.params
        const {stargarzers} = stargazer
        return (
            <View style={styles.container}>
                <FlatList 
                showsVerticalScrollIndicator={false}
                scrollEnabled
                snapToAlignment ="center"
                data = {stargarzers}
                keyExtractor = {(item,index) => `${index}`}
                renderItem = {({item,index}) => _renderItem(item,index)}
                />
            {  stargazers_count > stargarzers.length && _renderLoadMore() }
            </View>
        )
    }

    return (
        <>
        {stargazer.stargarzers.length === 0 && loading ? <Loading /> : _renderData()}
        </>
    )
}

StargazerScreen.navigationOptions = () =>{
    return {
        title: 'Stargazer'
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    loadMore: {
        marginVertical: 16,
        marginBottom:32,
        justifyContent: 'center',
        alignItems:'center'
    }
})
export default StargazerScreen