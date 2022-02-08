import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
}

const joinURL = (baseURL, url) => {
    return `${baseURL}/${url}`
}

class Http {
    constructor() {
        this.domain = process.env.REACT_APP_BASE_URL
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

        return axios(url, options)
    }

    async get(url, id) {
        const method = 'GET'
        if (id) {
            // Fetch Single Record...
            url = `${url}/${id}`
        }
        const response = await this.request(url, method)
        return await response?.data
    }

    async post(url, data) {
        const method = 'POST'
        const response = await this.request(url, method)
        return await response?.data
    }

    async put(url, data) {
        const method = 'PUT'
        const response = await this.request(url, method)
        return await response?.data
    }

    async delete(url, id) {
        const method = 'DELETE'
        if (id) {
            // Fetch Single Record...
            url = `${url}/${id}`
        }
        const response = await this.request(url, method)
        return await response?.data
    }

}

export default Http