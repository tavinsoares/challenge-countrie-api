import { CardProps } from '../components/ContrieCards/components/types';

export const filterByName = (data: Array<CardProps>, name: string) => {
    return new Promise((resolve, reject) => {
        try {
            const filteredData = data.filter(item => {
                return item.title.toLowerCase().includes(name.toLowerCase());        
            })
            resolve(filteredData)
        } catch(e) {
            reject(e)
        }
    });

}