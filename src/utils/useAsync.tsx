import useLocalStorage from './useLocalStorage';
import { useCallback } from 'react'

interface useAsyncParams {
    storageName: string
    formater: Function
}

const useAsync = ({ storageName, formater }: useAsyncParams) => {
    const [data, setData] = useLocalStorage({
        initialValue: [], 
        propStorage: storageName
    })
  
    const run = useCallback((promise: Promise<any>) => {
      if (!promise) {
        return
      }
   
     promise.then(
       (data: any) => {
         if(formater){
            const formatedData = formater(data);
            setData(formatedData);
            return;
         }
         setData(data)
       },
       (error: any) => {
         setData([])
       },
     );
  
    }, [])
  
    return { data, run }
}

export default useAsync