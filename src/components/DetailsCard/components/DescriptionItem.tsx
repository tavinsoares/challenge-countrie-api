import Typography from '../../../components/Typograph/index';
import classnames from 'classnames';

const DescriptionItem = ({ descriptionItem, value, containerClassName }: DescriptionItemProps ) => {

    if(!value){
        return null;
    }

    const containerClasses = classnames(containerClassName)

    return (
        <div className={containerClasses}>
            <Typography 
                htmlTag="span"
                preset="span"
                size="small"
                weight="bold"
                className="capitalize"
            >
            {`${descriptionItem}:`}
            </Typography>
            <Typography 
                htmlTag="span"
                preset="span"
                size="small"
                weight="light"
            >
            {` ${value}`}
            </Typography>
        </div>
    )
}

type DescriptionItemProps = { 
    descriptionItem: string, 
    value?: string | string[],
    containerClassName?: string
}
export default DescriptionItem;