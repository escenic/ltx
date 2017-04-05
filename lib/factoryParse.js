'use strict'

module.exports = function factoryParse (Parser) {
  return function parse (data, options) {
    var p = new Parser(options)
    var result = null
    var error = null

    p.on('tree', function (tree) {
      result = tree
    })
    p.on('error', function (e) {
      error = e
    })

    p.write(data)
    p.end()

    if (error) {
      throw error
    } else {
      return result
    }
  }
}