// Custom hook that returns a function, which when executed makes a fetch request.
// Takes a callback that will nbe executed if fetch is successfull
const useHttp = ({postFetchFunction}) => {

    const satisfyRequest = (configData) =>{
        fetch(configData.url, {
            method: configData.method || 'GET',
            body: configData.body || '',
            headers: configData.headers || null
        })
        .then(respose => respose.json())
        .then(data => postFetchFunction(data));
    }

    return satisfyRequest;
}

export default useHttp;