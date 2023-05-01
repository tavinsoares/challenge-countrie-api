import { useEffect, useState, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';

import ThemeProvider from '../theme/ThemeProvider';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import CountrieCards from '../components/ContrieCards';

import { countriesAPI } from '../service/countriesAPI';
import useAsync from '../utils/useAsync';
import { formaterDataCountrie } from '../utils/formaterDataCountrie';
import { filterByName } from '../utils/filterByName'

const optionsSelect = [
  {
    value: 'africa',
    label: 'Africa'
  },
  {
    value: 'america',
    label: 'America'
  },
  {
    value: 'asia',
    label: 'Asia'
  },
  {
    value: 'europe',
    label: 'Europa'
  },
  {
    value: 'oceania',
    label: 'Oceania'
  },
  {
    value: 'antarctic',
    label: 'Antártida'
  },
  {
    value: 'all',
    label: 'Todos'
  }
]

function Home() {
  const { data, run } = useAsync({
    storageName: 'countries',
    formater: formaterDataCountrie
   });

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if(inputValue !== ''){
      run(filterByName(data, inputValue))
    }

    if(inputValue === ''){
      run(countriesAPI.all())
    }
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, inputValue])

  const OnSelectRegion = (option: SingleValue<{
    label: string,
    value: string
  }>) => {
    const value  = option?.value;
    let promise;
    if(!value) return;

   if(value === 'all'){
      promise = countriesAPI.all();
    } else {
      promise = countriesAPI.region(value);
    }
    
    run(promise)
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  }

  return (
    <ThemeProvider>
      <Header />
      <main className="lg:h-screen md:h-screen sm:h-full pt-6 bg-gray-light-background dark:bg-blue-dark-background">
        <section className="flex md:justify-between md:flex-row sm:flex-col mx-auto container">
          <Input className="md:w-3/6" value={inputValue} onChange={onChangeInput} placeholder="Search for a country..." />

          <div className="relative md:mt-0 sm:mt-6">
            <Select classNames="sm:w-4/6 md:w-full" placeholder="Filter by Region" onChange={OnSelectRegion} options={optionsSelect} />
          </div>
        </section>
        <section className="mx-auto container pb-8">
          <CountrieCards cards={data} />
        </section>
        
      </main>
    </ThemeProvider>
  );
}

export default Home;
