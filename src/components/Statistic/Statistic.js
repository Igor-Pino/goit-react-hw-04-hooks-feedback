import { useState } from 'react';
import s from '../Style.module.css';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function StatisticHooks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const onBtnClick = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const totalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persantage = (good / totalFeedback()) * 100;
    return persantage.toFixed();
  };

  return (
    <div>
      <Options onOptionBtn={onBtnClick} options={options} />

      <>
        <h2 className={s.statisticTitle}>Statistic</h2>
      </>

      {totalFeedback() === 0 && <Notification />}

      {totalFeedback() !== 0 && (
        <>
          <p>
            <span className={s.score}>Good:</span>
            <span className={s.amount}>{good}</span>
          </p>
          <p>
            <span className={s.score}>Neutral:</span>
            <span className={s.amount}>{neutral}</span>
          </p>
          <p>
            <span className={s.score}>Bad:</span>
            <span className={s.amount}>{bad}</span>
          </p>
          <p>
            <span className={s.score}>Total:</span>
            <span className={s.amount}>{totalFeedback()}</span>
          </p>
          <p>
            <span className={s.score}>Positiv feedback:</span>
            <span className={s.amount}>{countPositiveFeedbackPercentage()}%</span>
          </p>
        </>
      )}
    </div>
  );
}

export default StatisticHooks;
