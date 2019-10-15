import React, { Component } from 'react';
import Question from './../Question/Question';

export default class QuestionList extends Component {
  render() {
    return (
      <div className="question">
        <h2 className="title">QUIZ!</h2>
        {this.props.questions.map(question => {
          if (this.props.current === question.id) {
            return (
              <Question
                question={question}
                currentQuestion={question}
                onSelectedAnwser={this.props.onSelectedAnwser}
                onClickNext={this.props.onClickNext}
                onClickPrev={this.props.onClickPrev}
                {...this.props}
              />
            );
          }
        })}
      </div>
    );
  }
}
