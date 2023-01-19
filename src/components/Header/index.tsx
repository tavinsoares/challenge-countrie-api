import ButtonSwitchMode from '../ButtonSwitchMode/';
import Typography from '../Typograph';

const Header = ({ title }: HeaderProps) => {

    return (
        <header className="py-10 shadow-2sm bg-white dark:bg-blue-dark-element">
            <div className="relative container sm:container lg:container xl:container container mx-auto flex items-center">
                <Typography 
                size="extraLarge" 
                weight="bold" 
                preset="h1" 
                htmlTag="h1" 
                className="ma-0 pa-0 absolute left-0 ml-4 md:ml-6 lg:ml-8">{title}</Typography>
                <div className="absolute right-0 mr-4 md:mr-6 lg:mr-8">
                    <ButtonSwitchMode /> 
                </div>
            </div>
        </header>
    )
}

type HeaderProps = {
    title: string
}

Header.defaultProps = {
    title: 'Where in the world?'
}

export default Header;