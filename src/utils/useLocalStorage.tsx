import { useState, useEffect } from 'react';

interface useLocalStoragePropsParms {
  initialValue: any,
  propStorage: string
}

const useLocalStorage = ({initialValue, propStorage}: useLocalStoragePropsParms) => {
    const [value, setValue] = useState(
        () => {
          const valueStorage = JSON.parse(window.localStorage.getItem(propStorage) || '{}')
    
          return valueStorage || initialValue
        }
      )
    
      useEffect(() => {
        window.localStorage.setItem(propStorage, JSON.stringify(value));
      }, [value])
      
      return [value, setValue]
}

export default useLocalStorage