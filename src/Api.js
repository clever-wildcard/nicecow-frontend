class Api {
    constructor (authToken) {
        this.authToken = authToken
    }

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    BASE_URL = '/api/posts'

    createHeaders() {
        return this.authToken ? {
            ...this.headers,
            'Authorization': 'Bearer ' + this.authToken
        } : this.headers
    }

    async getAll() {
        return await fetch(this.BASE_URL, {
            method: 'GET',
            headers: this.createHeaders()
        })
    }

    async getById(userId) {
        return await fetch(`${this.BASE_URL}/${userId}`, {
            method: 'GET',
            headers: this.createHeaders()
        })
    }

    async delete(postId) {
        return await fetch(`${this.BASE_URL}/${postId}`, {
            method: 'DELETE',
            headers: this.createHeaders()
        })
    }

    async update(item) {
        return await fetch(`${this.BASE_URL}/${item.postId}`, {
            method: 'PUT',
            headers: this.createHeaders(),
            body: JSON.stringify(item)
            })
    }

    async create(item) {
        return await fetch(this.BASE_URL, {
            method: 'POST',
            headers: this.createHeaders(),
            body: JSON.stringify(item)
        })
    }
}

export default Api