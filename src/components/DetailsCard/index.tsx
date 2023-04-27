import Typography from '../../components/Typograph/index';
import DescriptionItem from './components/DescriptionItem';
import BorderCountries from './components/BorderCountries';

const DetailsCard = ({ data }: DetailsCardProps) => {
    if(!data) {
        return null;
    }

    const { image, name, languages, border_countries, ...restData } = data;
    const keysData = Object.keys(restData);
    
    return (
        <div className="pt-14">
            <img alt=""  src={image}  />
            <article className="mt-8">
                <Typography 
                    htmlTag="h2"
                    preset="h2"
                    size="extraLarge"
                    weight="bold"
                    className="mb-4"
                >
                {name}
                </Typography>
                { keysData.map((key, index) => {
                    const value = restData[key as  keyof typeof restData];
                    const valueKey = key.replaceAll('_', ' ');
                    let containerClasses = '';

                    if(index === 4 || index == 6){
                        containerClasses = 'sm:pb-5'
                    }
                    
                    return <DescriptionItem containerClassName={containerClasses} descriptionItem={valueKey} value={value} />
                }) }
                <BorderCountries border_countries={border_countries} />
            </article>
            
        </div>
    )
}

type DetailsCardProps = {
    data: {
        image?: string,
        name?: string,
        native_name?: string,
        population?: string,
        region?: string,
        sub_region?: string,
        capital?: string,
        top_level_domain?: string,
        currencies?: string,
        languages?: Array<string>,
        border_countries?: Array<string>
    }
}

DetailsCard.defaultProps = {
    data: {
        image: 'teste'
    }
}

export default DetailsCard;