import react from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/loginstyle';
const QuestionInformation=(props:any)=>{
    return (
        <View> 
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>
                    {props.details.name}
                </Text>
                <Text style={{fontSize:20,color:'white',fontWeight:'700',marginLeft:250}}>
                    1 of 10
                </Text>
            </View>
            <View style={{width:370,backgroundColor:'#5e69ee',borderColor:'white',borderBottomColor:'white',borderWidth:1,marginTop:1}}>
                
            </View>
        </View>
    );
}
export default QuestionInformation;