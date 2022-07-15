const urls = (name) => {
  return {
    hostname: 'echo-serv.tbxnet.com',
    getListPath: '/v1/secret/files',
    getByNamePath: `/v1/secret/file/${name}`
  }
}

module.exports = urls
