async function requester(method, url, data) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    try {
        return await response.json();
    } catch (error) {
        return response;
    }
}

async function get(url){
    return requester("GET", url);
}
async function post(url, data){    
    return requester("POST", url, data);
}

export const api = {
    get,
    post
};
