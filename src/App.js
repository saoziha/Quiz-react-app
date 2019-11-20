import './App.css';
import React, { Component } from 'react';
import Question from './Component/Question/Question';
import QuestionList from './Component/QuestionList/QuestionList';
import Result from './Component/Result/Result';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: '	In which Spanish city did the Joan Miro museum open in 1975?',
          choices: [
            {
              id: 'a',
              text: 'Barcelona'
            },
            {
              id: 'b',
              text: 'Paris'
            },
            {
              id: 'c',
              text: 'Venice'
            },
            {
              id: 'd',
              text: 'Da Nang'
            }
          ],
          answer: 'b'
        },
        {
          id: 2,
          text: 'What is bottled a lot in the French town Vichy?',
          choices: [
            {
              id: 'a',
              text: 'Water'
            },
            {
              id: 'b',
              text: 'Cocacola'
            },
            {
              id: 'c',
              text: 'Pesi'
            },
            {
              id: 'd',
              text: 'Miranda'
            }
          ],
          answer: 'a'
        },
        {
          id: 3,
          text: 'What is the real meaning of the Greek word Pita?',
          choices: [
            {
              id: 'a',
              text: 'Bread'
            },
            {
              id: 'b',
              text: 'Meat'
            },
            {
              id: 'c',
              text: 'Veggie'
            },
            {
              id: 'd',
              text: 'Fish'
            }
          ],
          answer: 'c'
        },
        {
          id: 4,
          text: 'Which famous brewer from Amsterdam did die in the year 2002?',
          choices: [
            {
              id: 'a',
              text: 'Tiger'
            },
            {
              id: 'b',
              text: 'Heniken'
            },
            {
              id: 'c',
              text: 'Laure'
            },
            {
              id: 'd',
              text: 'Budlight'
            }
          ],
          answer: 'c'
        }
      ],
      current: 1,
      score: 0,
      index: 0,
      objAnswer: {},
      isResult: true
    };
  }
  setCurrent = current => this.setState({ current });
  setIndex = index => this.setState({ index });

  // get selected answer from radio button
  getValueButton = e => {
    const { objAnswer, questions } = this.state;
    let obj = objAnswer;
    let answer = e.target.value;
    let quantityIndex = this.state.index;

    obj[quantityIndex] = answer;
    this.setState({
      objAnswer: obj
    });
  };

  nextButton = e => {
    e.preventDefault();
    this.setState({
      current: this.state.current + 1,
      index: this.state.index + 1
    });
  };

  prevButton = e => {
    e.preventDefault();
    this.setState({
      current: this.state.current - 1,
      index: this.state.index - 1
    });
  };

  //show result and calculate score
  showResult = e => {
    e.preventDefault();
    this.setState({
      current: this.state.current + 1,
      isResult: !this.state.isResult
    });

    const { questions, objAnswer } = this.state;
    let arr = [];
    let correctAnswers = questions.map((question, index) => question.answer);

    //get value from selected answer object
    for (let [key, value] of Object.entries(objAnswer)) {
      arr.push(value);
    }

    //compare with correct answer and calculate score
    let currentScore = this.state.score;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == correctAnswers[i]) {
        currentScore++;
      }
    }

    this.setState(
      {
        score: currentScore
      },
      () => console.log(this.state.score)
    );
  };

  render() {
    let submit;
    let reload;
    if (this.state.current === this.state.questions.length) {
      submit = <input className="btn-navigate" onClick={this.showResult} type="submit" name="" value="submit" />;
      reload = '';
    } else if (this.state.current >= this.state.questions.length) {
      reload = (
        <a href="http://localhost:3000/">
          <input className="btn-navigate" type="submit" name="" value="Do it again?" />
        </a>
      );
    } else {
      submit = '';
      reload = '';
    }

    return (
      <div className="container">
        <header></header>
        <div className="wrap">
          <div>
            {this.state.isResult ? (
              <QuestionList
                setCurrent={this.setCurrent}
                setIndex={this.setIndex}
                onSelectedAnwser={this.getValueButton}
                onClickNext={this.nextButton}
                onClickPrev={this.prevButton}
                {...this.state}
              />
            ) : (
              <Result {...this.state} />
            )}

            <div>{submit}</div>
            <div>{reload}</div>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}
