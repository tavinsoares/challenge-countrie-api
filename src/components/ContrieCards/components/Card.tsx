import Typography from '../../Typograph';
import DescriptionCard from './DescriptionCard';

type CardProps = {
    title: string,
    description: Array<{
        title: string
        content: string
    }>
}

const Card = ({ title, description }: CardProps) => {

    return (
      <article>
        <div >
          <img alt="" className="rounded-t-xl" src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image" />
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