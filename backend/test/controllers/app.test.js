
const chai = require('chai')
const { should, expect } = require('chai')
const chaiHttp = require('chai-http')
const app = require('../..')

chai.use(chaiHttp)

describe('API /files/data', () => {
  it('it should return 200', (done) => {
    chai.request(app)
      .get('/files/data')
      .end((err, res) => {
        expect(err)
        expect(res).to.have.status(200)
        should(res.body)
        done()
      })
  })
})

describe('API /files/list', () => {
  it('it should return 200 and one array', (done) => {
    chai.request(app)
      .get('/files/list')
      .end((err, res) => {
        expect(err)
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
