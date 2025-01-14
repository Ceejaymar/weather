import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Daily = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 20px 0;
  color: #fff;
  font-weight: 700;
  min-width: 175px;

  span {
    margin: 5px 0;
  }
`;

export const DailyCard = ({ day }) => (
  <Daily>
    <img
      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
    />
    <span>{day.dt}</span>
    <span>{Math.round(day.temp.day)}&deg;</span>
  </Daily>
);

DailyCard.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
      })
    ),
    temp: PropTypes.shape({
      day: PropTypes.number.isRequired,
    }),
  }),
};
