import s from '../Style.module.css';
import propTypes from 'prop-types';

function Options({ onOptionBtn }) {
  return (
    <div>
      <button className={s.button} type="button" name="good" onClick={onOptionBtn}>
        good
      </button>
      <button className={s.button} type="button" name="bad" onClick={onOptionBtn}>
        bad
      </button>
      <button className={s.button} type="button" name="neutral" onClick={onOptionBtn}>
        neutral
      </button>
    </div>
  );
}

Options.propTypes = {
  onOptionBtn: propTypes.func.isRequired,
};

export default Options;
