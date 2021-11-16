import React, { Component } from 'react';
import s from '../Style.module.css';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onOptionBtnClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const persantage = (this.state.good / this.countTotalFeedback()) * 100;
    return persantage.toFixed();
  };

  render() {
    const options = Object.keys(this.state);

    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <Options options={options} onBtnClick={this.onOptionBtnClick} />

        <>
          <h2 className={s.statisticTitle}>Statistic</h2>
        </>

        {totalFeedback === 0 && <Notification />}

        {totalFeedback !== 0 && (
          <>
            <p>
              <span className={s.score}>Good:</span>
              <span className={s.amount}>{this.state.good}</span>
            </p>
            <p>
              <span className={s.score}>Neutral:</span>
              <span className={s.amount}>{this.state.neutral}</span>
            </p>
            <p>
              <span className={s.score}>Bad:</span>
              <span className={s.amount}>{this.state.bad}</span>
            </p>
            <p>
              <span className={s.score}>Total:</span>
              <span className={s.amount}>{this.countTotalFeedback()}</span>
            </p>
            <p>
              <span className={s.score}>Positiv feedback:</span>
              <span className={s.amount}>{this.countPositiveFeedbackPercentage()}%</span>
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Statistic;
