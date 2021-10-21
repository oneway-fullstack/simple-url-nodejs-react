let chai = require('chai')
const shortid = require("shortid");
let chaiHttp = require('chai-http')
const { expect } = chai;
let should = chai.should();

let server = require('../bin/www')

chai.use(chaiHttp)
let urlCode = shortid.generate()
describe('Testing the shorten-url endpoints:', () => {
  it('It should not create a new shorten-url with invalid field', (done) => {
    let url = {
      originUrl: 'Test url'
    }

    chai.request(server)
      .post('/url')
      .set('Accept', 'application/json')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        expect(res.body).to.include({
          status: 'failed',
          message: 'Please use the valid url.'
        })
        done()
      })
  })

  it('It should create a new shorten-url', (done) => {
    let url = {
      originUrl: 'https://outlook.live.com/mail/0/inbox'
    }

    chai.request(server)
      .post('/url')
      .set('Accept', 'application/json')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(201)
        res.body.data.should.have.property('id')
        res.body.data.should.have.property('urlCode')
        res.body.data.should.have.property('originUrl')
        res.body.data.should.have.property('shortenUrl')
        expect(res.body.status).to.equal('success')
        done()
      })
  })

  it('It should get all urls', (done) => {
    chai.request(server)
      .get('/url?limit=10&offset=1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.status).to.equal('success')
        done()
      })
  })
})
