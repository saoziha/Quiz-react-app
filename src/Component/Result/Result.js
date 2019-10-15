import React, { Component } from 'react';

export default class Result extends Component {
  render() {
    const percent = (this.props.score / this.props.questions.length) * 100;
    // let message = '';

    // if (70 < percent <= 100) {
    //   message = 'You did good!';
    // }
    // if (30 < percent <= 70) {
    //   message = 'You did quite good!';
    // }
    // if (0 < percent <= 30) {
    //   message = 'You did 2 bad';
    // }

    return (
      <div>
        <h3>Result</h3>
        <h2>
          {this.props.score} out of {this.props.questions.length}
        </h2>
        <h3>{percent}%</h3>
      </div>
    );
  }
}
