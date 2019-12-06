import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { 
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
 } from 'react-native'
import { Input,Item,Form,Label,Button } from 'native-base'
import { fetchRepoInfo,fetchMoreRepo } from './../action/repoActions'
import Loading from './../components/loading'
const MainScreen = () =>{
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repo)
    const {loading} = useSelector(state => state.load)
    const [user,setUser] = useState("")
    const [page,setPage] = useState(1)
    const [isLoadMore,setLoadMore] = useState(false)
  
    _handleGetRepo = () =>{
        setLoadMore(false)
        setPage(1)
        if(!user){
             alert('Bạn Chưa Nhập Username') 
             return 
            }
        dispatch(fetchRepoInfo(user,1))
    }
    _handleLoadMoreRepos = () =>{
        setLoadMore(true)
        setPage(page+1)
        dispatch(fetchMoreRepo(user,page+1))
    }

    const _renderLoadMore = () =>{
        return(
            <TouchableOpacity 
             style={styles.loadMore}
             onPress={() => _handleLoadMoreRepos()}
             >
              {(loading && isLoadMore) ? 
                    <ActivityIndicator size="small" color="red" /> :
                   <Text style={{color: '#0000EE',fontSize: 18}}>Load More</Text>} 
            </TouchableOpacity>
        )
    }

    const _renderListRepo = () =>{
        return (
                <View style={{flex:1,paddingHorizontal: 32}}>
                                    <FlatList 
                                        showsVerticalScrollIndicator={false}
                                        data={repos.repos}
                                        onEndReachedThreshold={0.2}
                                
                                        renderItem ={({item,index}) =>{
                                            return(
                                                <View style={{flexDirection:'row',alignItems:'center',paddingVertical: 8,borderBottomColor: 'grey',borderBottomWidth: StyleSheet.hairlineWidth}}>
                                                    <Text style={{marginRight: 20,fontWeight:'bold'}}>{index + 1}</Text>
                                                    <View>
                                                        <View style={{flexDirection: 'row',justifyContent: 'flex-start',marginBottom: 8}}>
                                                            <Text style={{marginRight: 10,fontWeight: 'bold'}}>Id: </Text>
                                                            <Text>{item.node_id}</Text>
                                                        </View>
                                                        <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                                                            <Text style={{marginRight: 10,fontWeight: 'bold'}}>Name: </Text>
                                                            <Text style={{color: 'grey'}}>{item.name}</Text>
                                                        </View>
                                                    </View>
                                                   
                                                </View>
                                            )
                                        }}
                                        keyExtractor={(item,index) => `${index}`}

                                        />
                                      {repos.reposInfo && (repos.reposInfo.public_repos > repos.repos.length) ? _renderLoadMore() : null}
                            </View>
           
        )
    }
    _rederUserInfo = () =>{
        return(
            <View style={styles.infoUser}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Name</Text>
                    <Text style={{color: 'grey',textAlign: 'center'}}>{repos.reposInfo.name}</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Loaded Repos</Text>
                    <Text style={{color: 'grey',textAlign: 'center'}}>{repos.repos.length}</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Public Repos</Text>
                    <Text style={{color: 'grey',textAlign: 'center'}}>{repos.reposInfo.public_repos}</Text>
                </View>
               
            </View>
        )
    }

    return(
         <View style={styles.container}>
        <View style={styles.formInput}>
            <Text style={{textAlign: 'center',fontWeight: 'bold',marginBottom: 16,fontSize: 20}}>Github Repositorys</Text>
            <Form>
                <Item fixedLabel>
                <Label>Username</Label>
                <Input value={user} onChangeText={value => setUser(value)} />
                </Item>
            </Form>
            <Button 
                bordered primary block 
                style={{marginHorizontal: 50,marginTop: 16}}
                onPress={() => _handleGetRepo()}
                >
                    {(loading && !isLoadMore) ? <ActivityIndicator size="small" color="red" /> : <Text style={{fontWeight: '500'}}>Get Repositorys</Text>}
            </Button>
        </View>
        {!repos.reposInfo ? null : _rederUserInfo() }
        {repos.repos.length > 0 ?_renderListRepo() : null }
        {!repos.messageFailed  ?  null : <Text style={{textAlign: 'center', fontSize: 18}}>{repos.messageFailed}</Text> }
    </View>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formInput: {
        paddingHorizontal: 16,
        marginTop: 64,
        marginBottom: 16
    },
    infoUser: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        marginVertical: 16,
        justifyContent: 'space-between',
        borderBottomColor: 'grey',
        paddingBottom: 16,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    loadMore: {
        marginVertical: 16,
        marginBottom:32,
        justifyContent: 'center',
        alignItems:'center'
    }
})
export default MainScreen