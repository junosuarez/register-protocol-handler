var registerProtocolHandler

switch (process.platform) {
  case 'win32':
    registerProtocolHandler = require('register-protocol-handler-windows')
    break;
  default:
    throw new Error(process.platform + ' not yet supported - PRs welcome! https://github.com/jden/register-protocol-handler')
}

module.exports = registerProtocolHandler