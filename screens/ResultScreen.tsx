import react from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/loginstyle';
import Login from '../components/login';
import { useNavigation, useRoute } from '@react-navigation/native';
const ResultScreen = (navigation: any) => {
    const route = useRoute();
    navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            {
                route.params?.quizScore >= 5 ? <View style={styles.resultContainer}>
                    <Text style={styles.winOrLost}>
                        You Win!
                    </Text>
                    <Image style={styles.resultImageStyle} source={require('../images/win.png')}></Image>
                    <Text style={styles.congratesOrSorry}>
                        Congrats {route.params?.name}
                    </Text>
                    <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                        <Text style={styles.scoreStyle}>
                            You earned {route.params?.quizScore} Points
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.popToTop()}>
                        <Text style={styles.signButton}>Take Quiz Again</Text>
                    </TouchableOpacity>
                </View> : <View style={styles.resultContainer}>
                    <Text style={styles.winOrLost}>
                        You Fail!
                    </Text>
                    <Image style={styles.resultImageStyle} source={require('../images/fail.png')}></Image>
                    <Text style={styles.congratesOrSorry}>
                        We're Sorry {route.params?.name}
                    </Text>
                    <View style={styles.scoreStyle}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            You earned {route.params?.quizScore} Points
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.popToTop()}>
                        <Text style={styles.signButton}>Take Quiz Again</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}
export default ResultScreen;
{/* <View style={{ backgroundColor: '#5e69ee', alignContent: 'center', alignItems: 'center', padding: 50, flex: 1 }}>
                    <Text style={{ fontSize: 50, color: 'white', fontWeight: '700' }}>
                        You Win!
                    </Text>
                    <Image style={{ height: 350, width: 350 }} source={require('../images/win.png')}></Image>
                    <Text style={{ fontSize: 30, color: 'white' }}>
                        Congrats {route.params?.name}
                    </Text>
                    <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            You earned {route.params?.quizScore} Points
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Quiz", { userName: name, })}>
                        <Text style={styles.signButton}>Take Quiz Again</Text>
                    </TouchableOpacity>
                </View> */}