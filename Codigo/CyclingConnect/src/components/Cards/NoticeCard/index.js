import React from 'react';
import moment from 'moment';
import * as S from './styles';

function NoticeCard({ onPress, title, description, date }) {
  const formatDateComponents = () => {
    moment.locale('pt');
    const dateObj = moment(date, 'YYYY-MM-DD');
    return {
      day: dateObj.format('ddd').toLowerCase(),
      number: dateObj.format('DD'),
      month: dateObj.format('MMM').toLowerCase()
    };
  };

  const { day, number, month } = formatDateComponents();

  return (
    <S.Card onPress={onPress}>
      <S.LeftPart>
        <S.Day>{day}</S.Day>
        <S.Number>{number}</S.Number>
        <S.Month>{month}</S.Month>
      </S.LeftPart>
      <S.RightPart>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</S.Subtitle>
        <S.Description>{description}</S.Description>
      </S.RightPart>
    </S.Card>
  );
}

export default NoticeCard;