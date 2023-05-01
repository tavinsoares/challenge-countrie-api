export const formaterDetailCard = (data: any) => {
    const item = data[0];
    const currenciesKeys = Object.keys(item.currencies);
    const languagesKeys = Object.keys(item.languages);

    return {
        data: {
            image: item.flags.png,
            name: item.name.common,
            native_name: item.name.nativeName.official,
            population: item.population,
            region: item.region,
            sub_region: item.subregion,
            capital: item.capital[0],
            top_level_domain: item.tld,
            currencies: item.currencies[currenciesKeys[0]].name,
            languages: languagesKeys.map(key => item.languages[key]),
            border_countries: item.borders
        }
    };
}