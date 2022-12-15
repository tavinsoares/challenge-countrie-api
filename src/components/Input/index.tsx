import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../theme/useTheme';

const Input = ({ value, onChange, placeholder }: InputPros) => {
    const { inversedTheme } = useTheme();

    const isDarkIcon = inversedTheme === 'dark';
    const classesIcon = isDarkIcon ? 'fa-thin' : 'fa-font-thin fa-inverse';

    return  (
    <div className="rounded-xl bg-white dark:bg-blue-dark-element py-4 px-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} className={classesIcon}/>
        <input 
            className="ml-4 font-nunito bg-white dark:text-white dark:bg-blue-dark-element outline-0" 
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    </div>
    )
}

Input.defaultProps = {
    placeholder: 'Search...'
}

type InputPros = {
    value: string,
    onChange: VoidFunction,
    placeholder?: string
}

export default Input;