const {user} = require('./user')
const {issue} = require('./issue')
const {toolHeight} = require('./toolHeight')
const {toolRecord} = require('./toolRecord')
const {onlineError} = require('./onlineError')
const {apply} = require('./apply')
const {every} = require('./every')
const {total} = require('./total')
exports.db= {
  user,
  issue,
  toolHeight,
  toolRecord,
  onlineError,
  apply,
  every,
  total
}