
import React, { useState, useEffect }from 'react';
import {Image,FlatList,StyleSheet,View,ScrollView,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../../common/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SwipeUpDown from '../../component/swipe/swipe_updown';

export default function SearchView(props) {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: false,
        showCloseButton: true,
        onClose: () => console.log('tt'),
        onPressCloseButton: () => console.log('tt'),
        // ...or any prop you want
    });

    const [isPanelActive, setIsPanelActive] = useState(true);
    const [items, setItems] = useState([{},{}]);


    useEffect(() => {
    });

    onSwipeUp = (gestureState) => {
        console.log('You swiped up');
    }
     
    onSwipeDown = (gestureState) => {
        console.log('You swiped down');
    }

    renderItem = (item) => {
        return (
            <View style={{backgroundColor:'#fff',marginTop:5,marginBottom:5,flexDirection:'row',height:120,alignItems:'center'}}>
                <Image 
                    style={styles.itemImg}
                    source={require('../../assets/placeholder.jpg')}
                    resizeMode="stretch"
                />
                <View style={{flex:1,marginLeft:10,paddingTop:10,paddingBottom:10}}>
                    <Text style={styles.itemTitle}>HSBC Laberth North</Text>
                    <Text style={styles.itemDescription,{marginTop:10}}>Lorem ipsum dolor sit arnet consec tetur</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <Text style={[styles.itemStarText,{marginRight:10}]}>4.5</Text>
                            <Image 
                                style={styles.itemIcon}
                                source={require('../../assets/star.png')}
                                resizeMode="stretch"
                            />
                            
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                            <Text style={[styles.itemTimeText,{marginRight:10}]}>25 mins</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }


    renderExpand = () => {
        return(
            <View style={{padding:10}}>
                 <View style={{flexDirection:'row',marginTop:10,padding:10,alignItems:'center'}}>
                    <TextInput
                        style={[styles.primaryInput,{marginTop:0,flex:1}]}
                    />

                    <TouchableOpacity style={{marginLeft:10}}>
                        <View style={{padding:13,backgroundColor:'#fff'}}>
                            <Image 
                                style={{width:20,height:20}}
                                source={require('../../assets/mag.png')}
                                resizeMode="stretch"
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:10}}>
                        <View style={{padding:13,backgroundColor:'#fff'}}>
                            <Image 
                                style={{width:20,height:20}}
                                source={require('../../assets/mag.png')}
                                resizeMode="stretch"
                            />
                        </View>
                    </TouchableOpacity>

                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{marginTop:10}}
                    keyExtractor={(item, index) => index.toString()}
                    data={items}
                    renderItem={({item}) => renderItem(item)}
                    // refreshing={this.state.refreshing}
                    // onRefresh={this.handleRefresh}
                />
            </View>
        );
    }

    return (
        <View style={{flex:1,backgroundColor:'#888'}}>

            <SwipeUpDown		
                itemMini={
                    <View style={{backgroundColor:'#fff',marginTop:5,marginBottom:5,flexDirection:'row',height:120,alignItems:'center'}}>
                        <Image 
                            style={styles.itemImg}
                            source={require('../../assets/placeholder.jpg')}
                            resizeMode="stretch"
                        />
                        <View style={{flex:1,marginLeft:10,paddingTop:10,paddingBottom:10}}>
                            <Text style={styles.itemTitle}>HSBC Laberth North</Text>
                            <Text style={styles.itemDescription,{marginTop:10}}>Lorem ipsum dolor sit arnet consec tetur</Text>
                            <View style={{flexDirection:'row',marginTop:10}}>
                                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                    <Text style={[styles.itemStarText,{marginRight:10}]}>4.5</Text>
                                    <Image 
                                        style={styles.itemIcon}
                                        source={require('../../assets/star.png')}
                                        resizeMode="stretch"
                                    />
                                    
                                </View>
                                <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                                    <Text style={[styles.itemTimeText,{marginRight:10}]}>25 mins</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                } // Pass props component when collapsed
                itemFull={
                    renderExpand()
                } // Pass props component when show full
                onShowMini={() => console.log('mini')}
                onShowFull={() => console.log('full')}
                onMoveDown={() => console.log('down')}
                onMoveUp={() => console.log('up')}
                disablePressToShow={false} // Press item mini to show full
                swipeHeight={150}
                animation="easeInEaseOut" 
                style={{ backgroundColor: '#f2f3f4' }} // style for swipe
            />

        </View>
    );
}