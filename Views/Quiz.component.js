import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLACK, BLUE, ORANGE, PURPLE, RED, WHITE, YELLOW} from "../utils/colors";
import {connect} from "react-redux";
import FlashCardsService from "../services/Flashcards.service";
import SubmitButtonComponent from "../components/SubmitButton.component";


const ResultComponent = (props) => {
    const {score} = props;
    return (
        <View style={styles.resultContainer}>
            <Text style={{color: PURPLE, fontSize: 24, textAlign: 'center'}}>{`You scored ${score} points!`}</Text>
        </View>
    )
}

const CardComponent = (props) => {
    const {content} = props;
    return (
        <View style={styles.resultContainer}>
            <Text style={{color: BLACK, fontSize: 36, textAlign: 'center'}}>{content}</Text>
        </View>
    )
}


class QuizComponent extends Component {
    state = {
        questionNumber: 0,
        score: 0,
        done: false,
        showAnswer: false
    }

    nextQuestion = () => {
        this.setState((state) => {
            return {
                ...state,
                ["questionNumber"]: state["questionNumber"] + 1,
                ["showAnswer"]: false,
            }
        })
    }

    incrementScore = () => {
        this.setState((state) => {
            return {
                ...state,
                ["score"]: state["score"] + 10
            }
        })
    }

    done = () => {
        this.setState((state) => {
            return {
                ...state,
                ["done"]: true
            }
        })
    }

    flip = () => {
        this.setState((state) => {
            return {
                ...state,
                ["showAnswer"]: !state["showAnswer"]
            }
        })
    }

    reset = () => {
        this.setState(() => ({
            questionNumber: 0,
            score: 0,
            done: false,
            showAnswer: false
        }));
    }


    onSubmitAnswer(isCorrect, max) {
        const {questionNumber, done} = this.state;
        if (questionNumber < max && !done) {
            if (isCorrect) this.incrementScore();
            (questionNumber + 1 < max) ? this.nextQuestion() : this.done();
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const {deckCard} = this.props;
        navigation.setOptions({title: `${deckCard.title} Quiz`})
    }


    render() {
        const {questionNumber, score, done, showAnswer} = this.state;
        const {deckCard} = this.props;
        const {questions, counts} = deckCard;
        const questionCard = questions[questionNumber];
        const {question, answer} = questionCard ? questionCard : {};
        return (
            <View style={styles.container}>
                {counts > 0
                    ? (<React.Fragment>
                        <View style={styles.header}>
                            <Text style={styles.statusBarItem}>
                                {`${questionNumber + 1}/${counts}`}
                            </Text>
                            <Text style={styles.statusBarItem}>
                                {`Score: ${score}`}
                            </Text>
                        </View>
                        <View style={styles.body}>
                            {done
                                ? (<ResultComponent score={score}/>)
                                : (<CardComponent content={showAnswer ? answer : question}/>)
                            }
                        </View>
                        <View style={styles.footer}>
                            {done
                                ? (
                                    <SubmitButtonComponent onPress={() => this.reset()}
                                                           title="RESTART"
                                                           color={WHITE}
                                                           backgroundColor={ORANGE}
                                    />
                                )
                                : showAnswer
                                    ? (<React.Fragment>
                                        <SubmitButtonComponent onPress={() => {
                                            this.onSubmitAnswer(true, counts);
                                        }} disabled={done} title="Correct" color={WHITE} backgroundColor={BLUE}/>
                                        <SubmitButtonComponent onPress={() => {
                                            this.onSubmitAnswer(false, counts);
                                        }} disabled={done} title="Incorrect" color={WHITE} backgroundColor={RED}/>
                                    </React.Fragment>)
                                    : (
                                        <SubmitButtonComponent onPress={() => this.flip()}
                                                               title="SHOW ANSWER"
                                                               color={WHITE}
                                                               backgroundColor={ORANGE}
                                        />
                                    )
                            }

                        </View>
                    </React.Fragment>)
                    : (
                        <View style={styles.body}>
                            <CardComponent
                                content="SORRY! YOU CANNOT TAKE A QUIZ BECAUSE THERE ARE NOT CARDS IN THE DECK"/>
                        </View>
                    )
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: YELLOW
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },

    body: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    statusBarItem: {
        color: PURPLE,
        fontSize: 24
    }


});


function mapStateToProps(decks, {route}) {
    if (!route) return;
    const id = route.params.id;
    if (!id) return {};
    const deck = decks[id];
    if (!deck) return {};
    const deckCard = FlashCardsService.formatDeck(deck, id);
    const flashCardsService = new FlashCardsService('test');
    return {
        deckCard,
        id,
        flashCardsService
    }
}


export default connect(mapStateToProps)(QuizComponent);
