import { useState } from 'react';
import styled from 'styled-components';
import DataFile from '../data/dataFile';
import Stats from './Stats';
import StyledH3 from '../styles/StyledH3';

function Data() {
  const [sexFilter, setSexFilter] = useState('');
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(20);
  const [sort, setSort] = useState('age');
  const updateSex = (e) => setSexFilter(e.target.value);
  const setExactAge = (age) => {
    setMinAge(age);
    setMaxAge(age);
  };

  let filteredData = [...DataFile];
  if (sexFilter) {
    filteredData = filteredData.filter(({ sex }) => sex === sexFilter);
  }
  filteredData = filteredData.filter(({ age }) => age >= minAge);
  filteredData = filteredData.filter(({ age }) => age <= maxAge);
  filteredData.sort((a, b) => a[sort] - b[sort]);

  const totalRows = filteredData.length;

  return (
    <DataDiv>
      <Stats data={DataFile} setExactAge={setExactAge} />
      <form>
        <Filters>
          <StyledH3>Search Penguin Data</StyledH3>
          <div>
            Sex:
            <label htmlFor="male">
              <input
                type="radio"
                checked={sexFilter === 'm'}
                value="m"
                onChange={updateSex}
                id="male"
              />
              {' '}
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                checked={sexFilter === 'f'}
                value="f"
                onChange={updateSex}
                id="female"
              />
              {' '}
              Female
            </label>
            <label htmlFor="all">
              <input
                type="radio"
                checked={!sexFilter}
                value=""
                onChange={updateSex}
                id="all"
              />
              {' '}
              All
            </label>
          </div>
          <div>
            <label htmlFor="minAge">
              Minimum Age:
              {' '}
              <input
                type="number"
                min="0"
                max="20"
                id="minAge"
                value={minAge}
                onChange={(e) => setMinAge(parseInt(e.target.value, 10))}
              />
            </label>
          </div>
          <div>
            <label htmlFor="maxAge">
              Maximum Age:
              {' '}
              <input
                type="number"
                min="1"
                max="20"
                id="maxAge"
                value={maxAge}
                onChange={(e) => setMaxAge(parseInt(e.target.value, 10))}
              />
            </label>
          </div>
          <div>
            <label htmlFor="sort">
              Sort:
              {' '}
              <select onChange={(e) => setSort(e.target.value)} value={sort} id="sort">
                <option value="age">Age</option>
                <option value="height">Height (in)</option>
                <option value="weight">Weight (lb)</option>
              </select>
            </label>
          </div>
        </Filters>
      </form>
      <StyledH3>Matching Penguin Data</StyledH3>
      <Matches>
        Matching Rows:
        {' '}
        {totalRows}
      </Matches>
      <Table>
        <thead>
          <tr>
            <th>Sex</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(({
            id, sex, height, weight, age,
          }) => (
            <tr key={id}>
              <td>{sex}</td>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </DataDiv>
  );
}

const Filters = styled.div`
  div {
    padding: 5px 0;
  }
`;

const DataDiv = styled.div`
  padding: 10px;
`;

const Matches = styled.div`
  font-style: italic;
`;

const Table = styled.table`
  margin: 5px 0;
  border: 1px solid black;
  border-collapse: collapse;
  
  tr {
    border: 1px solid black;
  }
  
  td, th {
    padding: 2px 5px;
  }
`;

export default Data;
