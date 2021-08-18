
import React, { useState, useEffect }from 'react';
import {ScrollView,KeyboardAvoidingView,View,ActivityIndicator,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { AppRegistry ,StatusBar} from 'react-native';
import styles from '../common/style';
import { Picker } from 'native-base';
import {serviceRegister} from '../service/api';
import Modal from "react-native-modal";
import {Globals} from '../config/globals';
import DefaultPreference from 'react-native-default-preference';
import Switch from 'react-native-switch-pro'

export default function RegisterScreen(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [isTip, setTip] = useState(false);
    const [isTerms, setTerms] = useState(false);
    const [iInfo, setIndicator] = useState({isActive:false,msg:"Signing User..."});
    const [errInfo, setError] = useState({isActive:false,msg:""});

    useEffect(() => {
        
    },[]);

    actionCreate = () =>{
        // if (userName == '')
        // {
        //     setError({isActive:true,msg:"Please fill username"});
        //     return;
        // }
        // if (password == '')
        // {
        //     setError({isActive:true,msg:"Please fill password"});
        //     return;
        // }

        // if (fname == '')
        // {
        //     setError({isActive:true,msg:"Please fill firstname"});
        //     return;
        // }

        // if (lname == '')
        // {
        //     setError({isActive:true,msg:"Please fill lastname"});
        //     return;
        // }

        // if (password != confirm)
        // {
        //     setError({isActive:true,msg:"Please check password"});
        //     return;
        // }

        // if (!isTip)
        // {
        //     setError({isActive:true,msg:"Please check tips"});
        //     return;
        // }


        // if (!isTerms)
        // {
        //     setError({isActive:true,msg:"Please check terms and policy"});
        //     return;
        // }
        
        // let params = {
        //     email:userName,
        //     password:password,
        //     firstname:fname,
        //     lastname:lname
        // };
        // console.log(params);
        // setIndicator({isActive:true,msg:'Creating Player'});
        // serviceRegister(params)
        // .then(res=>{ 
        //     setIndicator({isActive:false,msg:''});
        //     successRegister(res);
        // })
        // .catch(err=>{
        //   setIndicator({isActive:false,msg:''});
        // });
        props.navigation.navigate('Main');
    }

    successRegister = (res) => {
        DefaultPreference.setMultiple({userNo:res.data.no.toString(),userName:res.data.firstname + ' ' + res.data.lastname,userEmail:res.data.email}).then(function(values) 
        {          
            Globals.userNo = res.data.no.toString();
            Globals.userName = res.data.firstname + ' ' + res.data.lastname;
            Globals.userEmail = res.data.email;
            props.navigation.navigate('Menu');
            
        })
        .catch(err=>{
            
        });
    }

    return (
        <ScrollView style={[styles.primaryFullBG]}>
            <KeyboardAvoidingView style={[styles.primaryFullBG,{alignItems:'center'}]}>
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
                <View style={[styles.vwTopLogo]}>
                    <Image style={styles.imgTopLogo}
                        source={require('../assets/2c2q.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.vwInputContainer}>
                    <Text style={[styles.primaryText]}>Name</Text>
                    <TextInput
                        style={[styles.primaryInput]}
                    />
                    <Text style={[styles.primaryText,{marginTop:20}]}>Email</Text>
                    <TextInput
                        style={[styles.primaryInput]}
                        value={userName} 
                        onChangeText={text => setUserName(text)}
                    />
                    <Text style={[styles.primaryText,{marginTop:20}]}>Password</Text>
                    <TextInput
                        style={[styles.primaryInput]}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <Text style={[styles.primaryText,styles.topMarginLarge]}>Phone</Text>
                    <View style={{flexDirection:'row'}}>
                        <Picker
                            selectedValue={"2"}
                            style={[styles.primaryInput,{borderRadius:0,width:100,height:47}]}
                            textStyle={{color:'#000'}}
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
                        >
                            <Picker.Item label="+44" value="2" />
                            <Picker.Item label="+45" value="3" />
                            <Picker.Item label="+46" value="4" />
                            <Picker.Item label="+47" value="5" />
                            <Picker.Item label="+48" value="6" />
                        </Picker>
                        <TextInput
                            style={[styles.primaryInput,{flex:1}]}
                        />
                    </View>

                    <Text style={[styles.primaryText,{marginTop:20}]}>Verification Code</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <TextInput
                            style={[styles.primaryInput,{marginTop:0,flex:1}]}
                        />

                        <TouchableOpacity style={{flex:1,marginLeft:10}}>
                            <View style={[styles.primaryBtn]}>
                                <Text style={[styles.btnText]}>Send Code</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Switch 
                                style={{}}
                                circleColorActive={'#FFFFFF'}
                                circleColorInactive={'#FFFFFF'}
                                backgroundActive={'#0D97DF'}
                                backgroundInactive={'#7E7E7E'}
                            />
                            <Text style={[styles.primaryLightText,{marginLeft:10}]}>Terms & Conditions</Text>
                        </View>
                    </View>



                    <TouchableOpacity style={{marginTop:50}} onPress={() => actionCreate()}>
                        <View style={[styles.primaryBtn]}>
                            <Text style={[styles.btnText]}>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>

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
            </KeyboardAvoidingView>
      </ScrollView>
    );
}
