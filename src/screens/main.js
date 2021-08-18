
import React, { useState, useEffect }from 'react';
import {View,ScrollView,Text,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../common/style';
import {Globals} from '../config/globals';
import {Constants} from '../config/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer'
import Topbar from '../component/topbar'
import Sidebar from '../component/sidebar'
import Overlay from '../component/overlay';
import DefaultPreference from 'react-native-default-preference';
import Modal from "react-native-modal";
import ActivityView from './tab/activity';
import SearchView from './tab/search';
import QrView from './tab/qr';
import FavView from './tab/favourite';

export default function MainScreen(props) {

    const [tab, setTab] = useState(1);
    const [isMask, setMask] = useState(false);
    const [iInfo, setIndicator] = useState({isActive:false,msg:""});
    const [errInfo, setError] = useState({isActive:false,msg:""});

    useEffect(() => {
        
    }, []);


    openMenu = () => {
        this._drawer.open();
        setMask(true);
    }

    renderTabBody = () =>
    {
        if (tab == 0)
        {
            return (
                <ActivityView 
                    context={this}
                >

                </ActivityView>
            );
        }
        else if (tab == 1)
        {
            return(
                <SearchView 
                    context={this}
                >

                </SearchView>
            );
        }
        else if (tab == 2)
        {
            return(
                <QrView 
                    context={this}
                >

                </QrView>
            );
        }
        else if (tab == 3)
        {
            return(
                <FavView 
                    context={this}
                >

                </FavView>
            );
        }
    }

    menuClicked = (index) => {
        this._drawer.close();
        setMask(false);
    }

    return (
        <Drawer        
            onClose={() => setMask(false)}
            ref={(ref) => this._drawer = ref}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            content={
                <Sidebar onMenuClicked={(index) => menuClicked(index)}/>
            }
            side="right"
            type="overlay"
            >

            <View style={[styles.primaryFullBG]}>
            <StatusBar hidden={true} />
            {
                iInfo.isActive == true &&
                <View style={styles.loading}>
                    <View style={styles.loaderView}>
                        <ActivityIndicator color="#d84c41" style={styles.activityIndicator}/>
                        <Text style={styles.loadingText}>{iInfo.msg}</Text>
                    </View>
                </View>
            }
            <Topbar/>
            
            <View style={{flex:1}}>
            {
                renderTabBody()
            }
            </View>
            <View style={{height:100,flexDirection:'row'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => setTab(0)}>
                    <View style={[styles.tabButton,{backgroundColor:tab == 0 ? Constants.BASE_COLOR : Constants.BASE_WHITE}]}>
                        <Image source={tab == 0 ? require('../assets/icon_1_e.png') : require('../assets/icon_1.png')} resizeMode="contain" style={[styles.imgTabIcon]} />
                        <Text style={[tab == 0 ? styles.tabTextActive : styles.tabText]}>Activities</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => setTab(1)}>
                    <View style={[styles.tabButton,{backgroundColor:tab == 1 ? Constants.BASE_COLOR : Constants.BASE_WHITE}]}>
                        <Image source={tab == 1 ? require('../assets/icon_2_e.png') : require('../assets/icon_2.png')} resizeMode="contain" style={[styles.imgTabIcon]} />
                        <Text style={[tab == 1 ? styles.tabTextActive : styles.tabText]}>Find</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => setTab(2)}>
                    <View style={{flex:1,alignItems:'center' ,paddingTop:18, backgroundColor:tab == 2 ? Constants.BASE_COLOR : Constants.BASE_WHITE}}>
                        <Image source={tab == 2 ? require('../assets/icon_3_e.png') : require('../assets/icon_3.png')} resizeMode="contain" style={[styles.imgTabIcon]} />
                        <Text style={[tab == 2 ? styles.tabTextActive : styles.tabText]}>QR</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flex:1}} onPress={() => setTab(3)}>
                    <View style={{flex:1,paddingTop:18,alignItems:'center' , backgroundColor:tab == 3 ? Constants.BASE_COLOR : Constants.BASE_WHITE}}>
                        <Image source={tab == 3 ? require('../assets/icon_4_e.png') : require('../assets/icon_4.png')} resizeMode="contain" style={[styles.imgTabIcon]} />
                        <Text style={[tab == 3 ? styles.tabTextActive : styles.tabText]}>Favourites</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            </View>
            <Overlay isVisible={isMask}/>
            <Modal 
                backdropColor="#000"
                isVisible={errInfo.isActive}>
                <View style={{ backgroundColor:"#FC4236",padding:10,borderRadius:10,alignItems:'center',}}>
                    <View style={{marginVertical:0}}>
                        
                        <Text style={{color:'#FFF',fontSize:18,textAlign:"center",marginVertical:20}}>
                            {errInfo.msg}
                        </Text>
                        <TouchableOpacity 
                        style={{alignSelf:'center'}}
                        onPress={()=>setError({isActive:false,msg:''})}>
                            <Text style={{padding:10,textAlign:'center',color:'#fff',fontWeight:'bold'}}> Dismiss </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Drawer>
      
    );
}
