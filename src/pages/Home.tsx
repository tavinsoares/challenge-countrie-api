import { useEffect } from 'react'

import ThemeProvider from '../theme/ThemeProvider';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import CountrieCards from '../components/ContrieCards';

import { countriesAPI } from '../service/countriesAPI';
import useAsync from '../utils/useAsync';
import { formaterDataCountrie } from '../utils/formaterDataCountrie';

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
  }
]

function Home() {
  const { data, run } = useAsync({
    storageName: 'countries',
    formater: formaterDataCountrie
   });

  useEffect(() => {
    if(data && data.length > 0){
      return;
    }

    const promise = countriesAPI.region('america');

    run(promise)
  }, [])

  return (
    <ThemeProvider>
      <Header />
      <main className="lg:h-full h-full pt-6 bg-gray-light-background dark:bg-blue-dark-background">
        <section className="flex md:justify-between md:flex-row sm:flex-col mx-auto container">
          <Input className="md:w-3/6" value="" onChange={() => {}} placeholder="Search for a country..." />

          <div className="relative md:mt-0 sm:mt-6">
            <Select classNames="sm:w-4/6 md:w-full" placeholder="Filter by Region" onChange={() => {}} options={optionsSelect} />
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
