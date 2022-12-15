import { useTheme } from '../../theme/useTheme';
import Typography from '../Typograph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ButtonSwitchMode = () => {
    const { changeTheme, inversedTheme } = useTheme();

    const isDarkIcon = inversedTheme === 'dark';
    const icon = isDarkIcon ? faMoon : faSun;
    const classesIcon = isDarkIcon ? 'fa-thin' : 'fa-font-thin fa-inverse';

    return (
        <button className="capitalize font-nunito bg-transparent m-0 p-0" type="button" onClick={changeTheme} >
            <FontAwesomeIcon icon={icon} className={classesIcon} />
            <Typography
            size="medium"
            weight="regular" 
            preset="span" 
            htmlTag="span" 
            className="ma-0 pa-0 ml-4">{`${inversedTheme} Mode`}</Typography>
        </button>  
    )
}

export default ButtonSwitchMode