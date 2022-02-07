const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
}

const joinURL = (baseURL, url) => {
    return `${baseURL}/${url}`
}

class Service {
    constructor() {
        this.domain = '/api/v1'
    }

    request(url, method = 'POST', data = null) {
        url = joinURL(this.domain, url)

        const options = {
            headers,
            method,
        }

        if (data) {
            options.body = JSON.stringify({ ...data })
        }

        return fetch(url, options)
    }

    async get(url, id) {
        const method = 'GET'
        if (id) {
            // Fetch Single Record...
            url = `${url}/${id}`
        }
        const response = await this.request(url, method)
        return await response.json()
    }

    async post(url, data) {
        const method = 'POST'
        const response = await this.request(url, method)
        return await response.json()
    }

    async put(url, data) {
        const method = 'PUT'
        const response = await this.request(url, method)
        return await response.json()
    }

    async delete(url, id) {
        const method = 'DELETE'
        if (id) {
            // Fetch Single Record...
            url = `${url}/${id}`
        }
        const response = await this.request(url, method)
        return await response.json()
    }

}

export default Service