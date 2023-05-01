import { useEffect } from 'react';
import { useParams } from 'react-router';

import ThemeProvider from '../theme/ThemeProvider';
import Header from '../components/Header';
import ButtonBack from '../components/ButtonBack';
import DetailsCard from '../components/DetailsCard';

import { countriesAPI } from '../service/countriesAPI';
import useAsync from '../utils/useAsync';
import { formaterDetailCard } from '../utils/formaterDetailCard';

const Details = () => {
    const { name } = useParams();

    const { data, run } = useAsync({
        storageName: `countrie-${name}`,
        formater: formaterDetailCard
       });
    
      useEffect(() => {
        if(data && data.length > 0){
          return;
        }
    
        const promise = countriesAPI.details(name || '');
    
        run(promise)
      }, [])
    
    
    return(
    <ThemeProvider>
        <Header />
        <main className="lg:h-screen h-screen pt-6 bg-gray-light-background dark:bg-blue-dark-background">
        <section className="container">
            <ButtonBack />
        </section>
        <section className="container md:max-w-[360px] lg:max-w-full">
            <DetailsCard {...data} />      
        </section>
        </main>
    </ThemeProvider>
    )
}

export default Details