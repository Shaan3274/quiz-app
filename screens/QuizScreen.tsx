import react, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from '../styles/loginstyle';
import Login from '../components/login';
import React, { useState } from 'react';
import Question from '../components/question';
import QuestionInformation from '../components/questioninformation';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuizScreen = (navigation: any) => {
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const loadQuiz = async () => {
        const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
        const result = await fetch(url);
        const array = await result.json();
        setQuestions(array.results);
        setQuestionIndex(0);
        setCurrentQuestion(questions[questionIndex]?.question);
        setOptions(setQuestionOptions(array.results[questionIndex]));
        setSelectedIndex(-1);
    }
    const shuffleOptions = (opts: any) => {
        for (let i = opts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opts[i], opts[j]] = [opts[j], opts[i]];
        }
    }
    const setQuestionOptions = (ques: any) => {
        const options = ques.incorrect_answers;
        options.push(ques.correct_answer);
        shuffleOptions(options);
        return options;
    }
    const setNextQuestion = () => {
        setQuestionIndex(questionIndex + 1);
        setSelectedIndex(-1);
        setCurrentQuestion(questions[questionIndex + 1]?.question);
        setOptions(setQuestionOptions(questions[questionIndex + 1]));
    }
    const verifyAnswer = (ans: any, idx: any) => {
        setSelectedIndex(idx);
        if (questions[questionIndex].correct_answer === ans) {
            setScore(score + 1);
        }
    }
    useEffect(() => {
        loadQuiz();
    }, []);
    navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.loginScreen}>
            <View style={styles.userNameStyle}>
                <Text style={styles.userNameText}>
                    {route.params?.userName}
                </Text>
            </View>
            {
                questions.length ?
                    <View style={styles.loginScreen}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.questionNoStyle}>
                                {questionIndex + 1} of 10
                            </Text>
                        </View>
                        <View style={styles.horizontalLine}></View>
                        <View>
                            <Text style={styles.questionStyle}>
                                Q. {decodeURIComponent(questions[questionIndex]?.question)}
                            </Text>
                            <TouchableOpacity onPress={() => verifyAnswer(options[0], 0)}>
                                <View style={styles.optionStyle}>
                                    <Text style={selectedIndex == 0 ? styles.SelectedOptionNo : styles.optionNo}>A</Text>
                                    <Text style={styles.optionTextStyle}>
                                        {decodeURIComponent(options[0])}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => verifyAnswer(options[1], 1)}>
                                <View style={styles.optionStyle}>
                                    <Text style={selectedIndex == 1 ? styles.SelectedOptionNo : styles.optionNo}>B</Text>
                                    <Text style={styles.optionTextStyle}>{decodeURIComponent(options[1])}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => verifyAnswer(options[2], 2)}>
                                <View style={styles.optionStyle}>
                                    <Text style={selectedIndex == 2 ? styles.SelectedOptionNo : styles.optionNo}>C</Text>
                                    <Text style={styles.optionTextStyle}>{decodeURIComponent(options[2])}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => verifyAnswer(options[3], 3)}>
                                <View style={styles.optionStyle}>
                                    <Text style={selectedIndex == 3 ? styles.SelectedOptionNo : styles.optionNo}>D</Text>
                                    <Text style={styles.optionTextStyle}>{decodeURIComponent(options[3])}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={questionIndex < 9 ? () => setNextQuestion() : () => navigation.navigate("Result", { name: route.params?.userName, quizScore: score })}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 50, padding: 7, marginTop: 20, marginLeft: 290 }}>
                                <Image source={require('../images/rightArrow.png')} style={{ margin: 10, height: 30, width: 30 }}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    : <View><ActivityIndicator color={'white'} size={100}></ActivityIndicator></View>
            }
        </View>
    );
}
export default QuizScreen;



