import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if(body){
                body = JSON.stringify(body);
                headers['Content-type'] = 'application/json';
            }
           const response = await fetch(url, {method, body, headers});
           const data = await response.json();

           if(!response.ok){
               throw new Error(data.message || 'Что-то пошло не так');
               console.log('error responseNotOk')
           }
            setLoading(false);
           return data;
        } catch (e) {
            setLoading(false);
            setError(e);
            throw e;
        }

    }, []);
    console.log('hook loading: ', loading);
    const clearError = useCallback(() => setError(null), []);
    console.log('render hook')
    return {loading, request, error, clearError};
}