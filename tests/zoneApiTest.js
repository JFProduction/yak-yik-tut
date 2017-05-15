var request = require('request'),
    expect = require('chai').expect

describe('get an array of zones', function() {
    it('should return a list of zones greater than 0', function(done) {
        request.get({ url: 'http://localhost:3000/api/zone' },
            (err, resp, body) => {
                let zones = JSON.parse(body)
                expect(zones.status).to.equal(200)
                expect(zones.results).length.greaterThan(0)
                getZoneById(zones.results[0]._id)
                done()
            })
    })
})

function getZoneById(id) {
    describe('using id ' + id + ' to get a specific zone', function() {
        it('should get first zone for the name', function(done) {
            request.get({ url: 'http://localhost:3000/api/zone/' + id },
                (err, resp, body) => {
                    let zone = JSON.parse(body)
                    expect(zone.status).to.equal(200)
                    expect(zone.result.name).to.equal('first zone')
                    done()
                })
        })
    })
}

describe('create a zone', function() {
    it('should return an success', function(done) {
        request.post({ url: 'http://localhost:3000/api/zone', 
                     data: JSON.stringify({
                         name: 'third zone',
                         zipCodes: ['75550']
                     }) 
                },
            (err, resp, body) => {
                let zone = JSON.parse(body)
                expect(zone.status).to.equal(200)
                expect(zone.name).to.equal('third zone')
                done()
            })
    })
})