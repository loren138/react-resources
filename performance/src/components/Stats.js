import PropTypes from 'prop-types';
import StyledH3 from '../styles/StyledH3';

function Stats({ data, setExactAge }) {
  const averageAge = data.reduce(
    (acc, cur) => acc + cur.age,
    0,
  ) / data.length;
  const averageHeight = data.reduce(
    (acc, cur) => acc + cur.height,
    0,
  ) / data.length;
  const averageWeight = data.reduce(
    (acc, cur) => acc + cur.weight,
    0,
  ) / data.length;

  return (
    <div>
      <StyledH3>Stats about Emperor Penguins</StyledH3>
      <ul>
        <li>
          Average Age:
          {' '}
          {averageAge.toLocaleString()}
          {' '}
          <button type="button" onClick={() => setExactAge(Math.floor(averageAge))}>
            Filter to
            {' '}
            {Math.floor(averageAge)}
            {' '}
            year old penguins
          </button>
        </li>
        <li>
          Average Height:
          {' '}
          {averageHeight.toLocaleString()}
        </li>
        <li>
          Average Weight:
          {' '}
          {averageWeight.toLocaleString()}
        </li>
      </ul>
    </div>
  );
}

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
  })).isRequired,
  setExactAge: PropTypes.func.isRequired,
};

export default Stats;
