import React, { Component } from 'react';
import Result from './../Result/Result';

export default class Question extends Component {
  render() {
    const { question } = this.props;
    let answer;
    if (question.choices) {
      answer = question.choices.map(choice => {
        return (
          <li class="question-item" key={choice.id}>
            <input
              className="button"
              onClick={this.props.onSelectedAnwser}
              type="radio"
              name={question.id}
              value={choice.id}></input>
            {choice.text}
          </li>
        );
      });
    } else {
      answer = 'sai roi';
    }

    let buttonNext = (
      <input className="btn-navigate" onClick={this.props.onClickNext} type="button" name="" value="Next" />
    );
    let buttonPrev = (
      <input className="btn-navigate" onClick={this.props.onClickPrev} type="button" name="" value="Prev" />
    );

    if (this.props.current === this.props.questions.length) {
      buttonNext = '';
    }
    if (this.props.current == 1) {
      buttonPrev = '';
    }

    return (
      <div>
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-question">{answer}</ul>
        {buttonPrev}
        {buttonNext}
      </div>
    );
  }
}
