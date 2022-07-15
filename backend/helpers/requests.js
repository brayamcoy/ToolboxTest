const https = require('https')
const urls = require('../config/urls')
const token = 'aSuperSecretKey'

const listRequest = () =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: urls().hostname,
      port: 443,
      path: urls().getListPath,
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }

    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error('statusCode=' + res.statusCode))
      }
      let body = []

      res.on('data', (d) => {
        body.push(d)
      })
      res.on('end', () => {
        try {
          body = JSON.parse(Buffer.concat(body).toString())
        } catch (e) {
          reject(e)
        }
        resolve(body.files)
      })
    })

    req.on('error', (e) => {
      reject(e.message)
    })
    req.end()
  })

const getByNameRequest = (namePath) =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: urls().hostname,
      port: 443,
      path: urls(namePath).getByNamePath,
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }
    const req = https.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return resolve('error')
      }
      let body = []

      res.on('data', (d) => {
        body.push(d)
      })
      res.on('end', () => {
        try {
          body = JSON.stringify(Buffer.concat(body).toString())
        } catch (e) {
          resolve('error')
        }
        resolve(body)
      })
    })

    req.on('error', (e) => {
      resolve('error')
    })
    req.end()
  })

module.exports = { listRequest, getByNameRequest, token }
