import react from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/loginstyle';
const Question=(data:any)=>{
    console.warn(data[0])
    return (
        <View>
            <Text style={styles.questionStyle}>
                who invented C++ programming language?
            </Text>
            <View style={styles.optionStyle}>
                <Text style={styles.optionNo}>A</Text>
                <Text style={styles.optionTextStyle}>
                {decodeURIComponent (data[0])}
                </Text>
            </View>
            <View style={styles.optionStyle}>
                <Text style={styles.optionNo}>B</Text>
                <Text style={styles.optionTextStyle}>{decodeURIComponent(data[0])}</Text>
            </View>
            <View style={styles.optionStyle}>
                <Text style={styles.optionNo}>C</Text>
                <Text style={styles.optionTextStyle}>Bill gates</Text>
            </View>
            <View style={styles.optionStyle}>
                <Text style={styles.optionNo}>D</Text>
                <Text style={styles.optionTextStyle}>John</Text>
            </View>
        </View>
    );
}
export default Question;