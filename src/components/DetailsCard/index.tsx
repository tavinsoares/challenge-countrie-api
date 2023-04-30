import ComponentMobile from './components/ComponentMobile';
import ComponentDesktop from './components/ComponentDesktop';

import { InfoCountriesProps } from './types';

const DetailsCard = ({ data }: DetailsCardProps) => {
    if(!data) {
        return null;
    }

    const { image, name, border_countries, ...restData } = data;
    const keysData = Object.keys(restData);
    
    return (
        <>
        <ComponentMobile
            image={image}
            title={name}
            infos={keysData}
            infosValue={restData}
            borderCountries={border_countries}
        />
        <ComponentDesktop 
            image={image}
            title={name}
            infos={keysData}
            infosValue={restData}
            borderCountries={border_countries}
        />
        </>
    )
}

type DetailsCardProps = {
    data: InfoCountriesProps
}

DetailsCard.defaultProps = {
    data: {
        image: 'teste'
    }
}

export default DetailsCard;