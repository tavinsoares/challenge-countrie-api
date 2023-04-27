import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../theme/useTheme';
import { Link } from "react-router-dom";

const BackButton = () => {
    const { inversedTheme } = useTheme();

    const isDarkIcon = inversedTheme === 'dark';
    const classesIcon = isDarkIcon ? 'fa-thin' : 'fa-font-thin fa-inverse';

    return (
        <Link className="cursor-pointer shadow-md shadow-blue-light-element border border-blue-dark-element px-6 py-1 font-nunito dark:text-gray-light-background text-blue-dark-element" to="/">
            <FontAwesomeIcon icon={faArrowCircleLeft} className={classesIcon} />
            <span className="ml-2">Back</span>  
        </Link>
    )
}

export default BackButton;