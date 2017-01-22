var ServerService = require('./services/serverService')

exports.createServerService = function (path) {
  return new ServerService(path)
}
