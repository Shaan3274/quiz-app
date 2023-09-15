import react from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/loginstyle';
import Login from '../components/login';
import { useNavigation, useRoute } from '@react-navigation/native';
const ResultScreen=(navigation:any)=>{
    const route=useRoute();
    navigation=useNavigation();
    return (
        <View>
            <Text>
            {route.params?.name}
            </Text>
            <View style={{alignContent:'center',justifyContent:'center'}}>
                <Text style={{fontSize:40}}>
                {route.params?.quizScore}
                </Text>
            </View>
        </View>
    );
}
export default ResultScreen;