import ThemeProvider from '../theme/ThemeProvider';
import Header from '../components/Header';
import ButtonBack from '../components/ButtonBack';
import DetailsCard from '../components/DetailsCard';

const dataMock = {
    data: {
        image: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image",
        name: 'Belgium',
        native_name: 'Belgie',
        population: '11.319.511',
        region: 'Europe',
        sub_region: 'Western Europe',
        capital: 'Brussels',
        top_level_domain: '.be',
        currencies: 'Euro',
        languages: ['Dutch', 'French', 'German'],
        border_countries: ['France', 'Germany', 'Netherlands']
    }
}

const Details = () => {
    return(
    <ThemeProvider>
        <Header />
        <main className="lg:h-screen h-screen pt-6 bg-gray-light-background dark:bg-blue-dark-background">
        <section className="container">
            <ButtonBack />
        </section>
        <section className="container md:max-w-[360px]">
            <DetailsCard {...dataMock} />      
        </section>
        </main>
    </ThemeProvider>
    )
}

export default Details