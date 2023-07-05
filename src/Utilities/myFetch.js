

function setOptions(method) {
    const tmdbApiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjZlNTQ4YjRjZGEzZjNkNTU1MGEyMjI2OGE3ZTkwYyIsInN1YiI6IjYwNzQxMjViNzg1NzBlMDA0MDE2OWM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o4eCivtKJo8dSEfjmtYATlOafH1VuWDgCRGJ1HcHNVs";
    return {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tmdbApiKey}`
        }
    }
}

function setUrl(endpoint, params) {
    const baseUrl = "https://api.themoviedb.org/3";
    let finalParams = '';

    if (params) {
        for (const key in params) {
            finalParams += `${key}=${params[key]}&`;
        }

        endpoint = endpoint + "?";
        finalParams = finalParams.replace(/&$/, '');
    }
    return baseUrl + endpoint + finalParams

}

export function myFetch(method, endpoint, params) {
    const options = setOptions(method);
    const url = setUrl(endpoint, params);

    return fetch(url, options)
        .then(res => res.json())
        .then(res => {
           return res
        })
        .catch(err => {
           return  err
        })
}


