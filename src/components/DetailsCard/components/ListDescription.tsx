import DescriptionItem from './DescriptionItem';
import { InfoCountriesProps } from '../types';

const ListDescription = ({ groupDescription, infoValue }: ListDescriptionProps) => {
    if(!infoValue){
        return null;
    }

    return (<>
    {groupDescription.map((key, index) => {
        const value = infoValue[key as keyof typeof infoValue];
        const valueKey = key.replaceAll('_', ' ');

        return <DescriptionItem containerClassName={"mb-2"} descriptionItem={valueKey} value={value} />
    })}
    </>)
   
}

type ListDescriptionProps = {
    infoValue: InfoCountriesProps,
    groupDescription: Array<string>
}

export default ListDescription;