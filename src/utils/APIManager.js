import superagent from 'superagent'

export default {
    get: (url, params, callback) => {
         superagent.get(url)
            .query(params)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    callback(err, null)
                    return
                }

                const status = response.body.status
                if (status !== 200) {
                    callback({ message: response.body.message }, null)
                    return
                }

                callback(null, response.body)
            })
    },

    post: (url, body, callback) => {
        superagent.post(url)
            .send(body)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    callback(err, null)
                    return
                }

                const status = response.body.status
                if (status !== 200) {
                    callback({ message: response.body.message }, null)
                    return
                }

                callback(null, response.body)
            })
    },

    put: () => {

    },

    delete: (url, callback) => {
        superagent.del(url)
            .send(null)
            .end((err, response) => {
                if (err) {
                    callback(err, null)
                    return
                }

                const status = response.body.status
                if (status !== 200) {
                    callback({ message: response.body.message }, null)
                    return
                }

                callback(null, response.body)
            })
    }
}