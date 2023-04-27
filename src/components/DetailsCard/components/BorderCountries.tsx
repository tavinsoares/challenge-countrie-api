import Typography from '../../../components/Typograph/index';

const BorderCountries = ({ border_countries }: { border_countries?: Array<string> }) => {

    if(!border_countries){
        return null
    }

    return (
        <>
        <Typography 
            htmlTag="span"
            preset="span"
            size="small"
            weight="bold"
            className="block mb-4"
        >
            Border Countries:
        </Typography>
            <div className="flex">
                {border_countries.map((border, index) => (
                <div className="inline-block sm:w-1/3 sm:mr-2 shadow-md shadow-blue-light-element border border-blue-dark-element px-6 py-1 font-nunito dark:text-gray-light-background text-blue-dark-element text-center">
                    <Typography 
                    htmlTag="span"
                    preset="span"
                    size="small"
                    weight="light"
                    >
                        {border}
                    </Typography>
                </div>
                ))}
            </div>
        </>
    )
}

export default BorderCountries;