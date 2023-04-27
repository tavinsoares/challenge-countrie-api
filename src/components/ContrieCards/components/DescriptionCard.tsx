import Typography from '../../Typograph';

type DescriptionProps = {
    description: Array<{
        title: string
        content: string
    }>
}

const DescriptionCard = ({ description }: DescriptionProps ) => {

    return (
        <ul className="mt-3">
            {
                description.map((item, index) => {
                    return (
                        <li key={index}>
                            <Typography 
                                htmlTag="span"
                                preset="span"
                                size="medium"
                                weight="bold"
                                className="mr-1"
                            >
                                {`${item.title}:`}
                            </Typography>

                            <Typography 
                                htmlTag="span"
                                preset="span"
                                size="medium"
                                weight="regular"
                            >
                                {item.content}
                            </Typography>
                        </li>
                    )
                })
            }
        </ul>
        
    )

}

export default DescriptionCard