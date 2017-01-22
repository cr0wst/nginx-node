var Debug = require('debug')('node-nginx')
var ChildProcess = require('child_process')

/**
 * ServerService - Provides a service for interacting with the nginx process.
 *
 * @param  {type} path The path to the nginx process.
 * Default is /etc/init.d/nginx.  Node user must have headless sudo access to
 * the given resource.  No checks will be done to verify this.
 */
function ServerService (path) {
  // Path to the nginx conf.d folder
  this.nginxServicePath = path || '/etc/init.d/nginx'
}

ServerService.START_COMMAND = 'start'
ServerService.STOP_COMMAND = 'stop'
ServerService.RESTART_COMMAND = 'restart'
ServerService.SUDO_PREFIX = 'sudo'

ServerService.prototype.start = function () {
  var command = ServerService.SUDO_PREFIX + ' ' + this.nginxServicePath + ' ' +
    ServerService.START_COMMAND
  executeCommand(command)
}

ServerService.prototype.stop = function () {
  var command = ServerService.SUDO_PREFIX + ' ' + this.nginxServicePath + ' ' +
    ServerService.STOP_COMMAND
  executeCommand(command)
}

ServerService.prototype.restart = function () {
  var command = ServerService.SUDO_PREFIX + ' ' + this.nginxServicePath + ' ' +
    ServerService.RESTART_COMMAND
  executeCommand(command)
}

/**
 * executeCommand - Execute the given shell command.
 *
 * @param  {type} command The command to execute.
 */
function executeCommand (command) {
  Debug('Executing: ' + command)
  ChildProcess.exec(command, function (err, stdout, stderr) {
    if (err) {
      Debug('Error running command: ' + stderr)
    }
  })
}

module.exports = ServerService
