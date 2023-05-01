export const formaterDataCountrie = (data: Array<any>) =>{
    return data.map(
      item => {
        const itemData = {
          title: '',
          image: '',
          description: [] as any
        };
        itemData.title = item.name.common;
        itemData.image = item.flags.png
        itemData.description.push({
          title: 'Population',
          content: item.population
        },
        {
          title: 'Region',
          content: item.region,
        },
        {
          title: 'Capital',
          content: item.capital[0]
        })
  
        return itemData;
      }
    )
  }