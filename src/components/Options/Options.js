import s from '../Style.module.css';
import propTypes from 'prop-types';

function Options({ options, onOptionBtn }) {
  return (
    <div>
      {options.map(option => (
        <button className={s.button} type="button" key={option} onClick={() => onOptionBtn(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onOptionBtn: propTypes.func.isRequired,
};

export default Options;
