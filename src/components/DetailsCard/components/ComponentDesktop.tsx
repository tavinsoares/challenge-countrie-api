import Typography from '../../../components/Typograph/index';
import ListDescription from './ListDescription';
import BorderCountries from './BorderCountries';

import { InfoCountriesProps } from '../types';

const ComponentDesktop = ({ image, title, infos, infosValue, borderCountries }: ComponentDesktopProps) => {

    if(!infos || !infosValue){
        return null;
    }

    const firstGroup = infos.slice(0, 5);
    const secondGroup = infos.slice(5, 8)

    return (
        <div className="flex items-center justify-center w-full md:hidden lg:flex lg:pt-12">
            <img src={image} alt="" className="block max-w-1/2 h-[350px]" />
            <div className="px-10 xl:px-20 w-1/2">
                <div className="w-full flex">
                    <div className="w-1/2 h-[220px]">
                    <Typography 
                        htmlTag="h2"
                        preset="h2"
                        size="extraLarge"
                        weight="bold"
                        className="mb-4"
                    >
                        {title}
                    </Typography>
                        <ListDescription
                            groupDescription={firstGroup}
                            infoValue={infosValue}
                        />
                    </div>
                    <div className="w-1/2 h-[220px]">
                        <ListDescription
                            groupDescription={secondGroup}
                            infoValue={infosValue}
                        />
                    </div>
                </div>
                <div className="mt-6 w-full h-[80px]">
                    <BorderCountries border_countries={borderCountries} />
                </div>
            </div>
        </div>
    )
}

type ComponentDesktopProps = {
    image?: string,
    title?: string,
    infos?: Array<string>,
    infosValue?: InfoCountriesProps,
    borderCountries?: Array<string>,
}

export default ComponentDesktop;