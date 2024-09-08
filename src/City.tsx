import React from 'react';
import { CurrentBankomat } from './CurrentBankomat';
import { MoneyType } from './App';
import styled from 'styled-components';

type CityPropsType = {
  data: MoneyType[]; //встречаем денюжки
};

export const City = ({ data }: CityPropsType) => {
  // console.log(data);
  // с деструктуризацией пожалуйста

  // const mappedMoney = props.data.map((el: MoneyType, index) => (
  //     <CurrentBankomat
  //         key={el.id}
  //         money={el}
  //     />
  // ))

  // return <Wrapper>Одна банконота-одна компонента</Wrapper>;
  return (
    <Wrapper>
      {data.map((el) => (
        <Banknote key={el.id} color={el.banknote === 'USD' ? 'green' : 'blue'}>
          <Name>{el.banknote}</Name>
          <Nominal>{el.nominal}</Nominal>
        </Banknote>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Banknote = styled.div<{ color: string }>`
  background-color: ${(props) => (props.color === 'green' ? 'aquamarine' : 'lightskyblue')};
  width: 200px;
  height: 100px;
  margin: 10px;
`;

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`;
