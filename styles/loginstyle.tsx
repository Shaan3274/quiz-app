import React, { useState, useEffect } from 'react';
import {
    View,Text,StyleSheet
} from 'react-native';
const styles=StyleSheet.create({
    loginScreen:{
        backgroundColor:'#5e69ee',
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    formContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor:'rgba(199,173,173,0.2)',
        padding:50,
        margin:50,
        alignItems:'center',
        borderRadius:20
    },
    input:{
        color:'white',
        width:230,
        fontSize:20,
        padding:10,
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
        marginTop:10
    },
    haveAnAccount:{
        color:'white',
        fontSize:15,
        textAlign:'left',
        marginTop:20,
    },
    SignIn:{
        color:'blue',
        fontSize:15,
        textAlign:'center',
        marginTop:20,
        marginLeft:5
    },
    signButton:{
        width:230,
        height:50,
        color:'black',
        fontSize:20,
        textAlign:'center',
        backgroundColor:'white',
        borderRadius:10,
        marginTop:40,
        textAlignVertical:'center'
    },
    questionStyle:{
        fontSize:25,
        color:'white',
        marginLeft:10
    },
    optionStyle:{
        backgroundColor:'rgba(199,173,173,0.2)',
        margin:10,
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center'
    },
    optionNo:{
        borderRadius:50,
        fontSize:18,
        backgroundColor:'#5e69ee',
        padding:5,
        color:'white',
        margin:2,
        height:40,
        width:40,
        alignItems:'center',
        textAlign:'center'
    },
    optionTextStyle:{
        color:'white',
        fontSize:20,
        marginLeft:10
    },
    SelectedOptionNo:{
        borderRadius:50,
        fontSize:18,
        backgroundColor:'white',
        padding:5,
        color:'black',
        margin:2,
        height:40,
        width:40,
        alignItems:'center',
        textAlign:'center'
    },
    userNameStyle:{alignSelf:'center',alignItems:'center',marginTop:100},
    userNameText:{fontSize: 30, color: 'white', fontWeight: '700' },
    questionNoStyle:{ fontSize: 20, color: 'white', fontWeight: '700',textAlign:'center'},
    horizontalLine:{ width: 370, backgroundColor: '#5e69ee', borderColor: 'white', borderBottomColor: 'white', borderWidth: 1, marginTop: 1 },
    resultContainer:{ backgroundColor: '#5e69ee', alignContent: 'center', alignItems: 'center', padding: 50, flex: 1 },
    winOrLost:{ fontSize: 50, color: 'white', fontWeight: '700' },
    resultImageStyle:{ height: 350, width: 350 },
    congratesOrSorry:{ fontSize: 30, color: 'white' },
    scoreStyle:{ alignContent: 'center', justifyContent: 'center' },
})

export default styles;