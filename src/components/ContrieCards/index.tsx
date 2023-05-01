import Card from './components/Card';
import { useNavigate } from "react-router-dom";

import { CardProps } from './components/types';

type CountrieCards = {
  cards: Array<CardProps>
}

const CountrieCards = ({ cards }: CountrieCards) => {
  const navigate = useNavigate();

  if(!cards || !cards.length){
    return null;
  }

  return (
    <div className="flex flex-wrap md:flex-row sm:flex-col md:items-center md:justify-between">
      {cards.map((data, index) => {
        const { title } = data;
        return (
        <div key={index} onClick={() => navigate(`/details/${title}`)} className="cursor-pointer xl:w-[271px] md:w-[350px] lg:w-[250px] sm:w-full mt-6 bg-white dark:bg-blue-dark-element rounded-xl">
          <Card {...data} title={title} />   
        </div>
        )
      })}
    </div> 
  )
}

export default CountrieCards;