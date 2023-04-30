import Typography from '../../../components/Typograph/index';
import DescriptionItem from './DescriptionItem';
import BorderCountries from './BorderCountries';

import classnames from 'classnames';

import { InfoCountriesProps } from '../types';

const ComponentMobile = ({ image, title, infos, infosValue, borderCountries }: ComponentMobileProps) => {
    if(!infos || !infosValue){
        return null;
    }

    return (
        <div className="lg:hidden pt-14">
            <img alt=""  src={image}  />
            <article className="mt-8">
                <Typography 
                    htmlTag="h2"
                    preset="h2"
                    size="extraLarge"
                    weight="bold"
                    className="mb-4"
                >
                {title}
                </Typography>
                { infos.map((key, index) => {
                    const value = infosValue[key as  keyof typeof infosValue];
                    const valueKey = key.replaceAll('_', ' ');
                    let containerClasses = '';

                    if(index === 4 || index == 6){
                        containerClasses = 'sm:pb-2'
                    }
                    
                    return <DescriptionItem containerClassName={classnames("mb-4", containerClasses)} descriptionItem={valueKey} value={value} />
                }) }
                <BorderCountries border_countries={borderCountries} />
            </article> 
        </div>
    )
}

type ComponentMobileProps = {
    image?: string,
    title?: string,
    infos?: Array<string>,
    infosValue?: InfoCountriesProps,
    borderCountries?: Array<string>,
}

export default ComponentMobile