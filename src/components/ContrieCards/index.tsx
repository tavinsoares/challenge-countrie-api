import Card from './components/Card';

const mockData = {
  title: 'Brasil',
  description: [
    {
      title: 'Population',
      content: '206,135,893',
    },
    {
      title: 'Region',
      content: 'Americas',
    },
    {
      title: 'Capital',
      content: 'Brasilia',
    }
  ]
}

const cards = [mockData, mockData, mockData, mockData]

const CountrieCards = () => {
    return (
      <div className="flex flex-wrap md:flex-row sm:flex-col md:items-center md:justify-between">
        {cards.map(data => {
          return (
          <div className="xl:w-1/5 md:w-[350px] lg:w-[250px] sm:w-full mt-6 bg-white dark:bg-blue-dark-element rounded-xl">
            <Card {...data} />   
          </div>
          )
        })}
      </div> 
    )
}

export default CountrieCards;