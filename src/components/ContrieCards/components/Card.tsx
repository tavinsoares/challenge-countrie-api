import Typography from '../../Typograph';
import DescriptionCard from './DescriptionCard';

import { CardProps } from './types';

const Card = ({ title, description, image }: CardProps) => {

    return (
      <article>
        <div >
          <img alt="" className="block sm:w-[328px] sm:h-[328px] md:w-[350px] md:h-[350px] lg:w-[271px] lg:h-[250px] rounded-t-xl" src={image} />
        </div>
        <div className="py-6 px-7">
            <Typography 
              htmlTag="h3"
              preset="h3"
              size="extraLarge"
              weight="bold"
            >
              {title}
            </Typography>
            <DescriptionCard 
              description={description}
            />
          </div>
      </article>
    )
}

export default Card