var request = require('request'),
    expect = require('chai').expect

describe('get an array of zones', function() {
    it('should return an empty list (for now)', function(done) {
        request.get({ url: 'http://localhost:3000/api/zone' },
            (err, resp, body) => {
                let zones = JSON.parse(body)
                expect(zones.status).to.equal(200)
                expect(zones.results).lengthOf(0)
                done()
            })
    })
})

describe('get an zone by the id', function() {
    it('should return an error (for now)', function(done) {
        request.get({ url: 'http://localhost:3000/api/zone/123' },
            (err, resp, body) => {
                let zones = JSON.parse(body)
                expect(zones.status).to.equal(500)
                done()
            })
    })
})