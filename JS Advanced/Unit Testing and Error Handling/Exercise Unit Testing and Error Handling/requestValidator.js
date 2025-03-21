
function validateRequest(request) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.uri || !/^[a-zA-Z0-9.]+$/g.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (/[<>&'"]/.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}