import react, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,TextInput, Button} from 'react-native';
import styles from '../styles/loginstyle';
import Login from '../components/login';
import { useNavigation } from '@react-navigation/native';
const HomeScreen=(navigation:any)=>{
    navigation=useNavigation();
    const [name,setName]=useState('');
    return (
        <View style={styles.loginScreen}>
            <View style={styles.formContainer}>
                <Text style={{color:'white',fontSize:35,fontStyle:'italic'}}>BrainyTrail</Text>
                <Image source={require('../images/quiz-logo.jpeg')} style={{margin:30,height:100,width:100}}></Image>
                <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={(text)=>setName(text)}></TextInput>
                <TouchableOpacity onPress={()=>navigation.navigate("Quiz",{userName:name,})}>
                    <Text style={styles.signButton}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default HomeScreen;