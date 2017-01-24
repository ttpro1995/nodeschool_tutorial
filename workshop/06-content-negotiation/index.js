
var koa = require('koa');

/**
 * This is a promisified version of zlib's gzip function,
 * allowing you to simply `yield` it without "thunkifying" it.
 *
 *   app.use(function* (next) {
 *     this.response.set('Content-Encoding', 'gzip');
 *     this.response.body = yield gzip('something');
 *   })
 */
var gzip = require('mz/zlib').gzip;

var app = module.exports = koa();

app.use(function* (next) {
    if (!this.request.acceptsEncodings('gzip')) return yield* next;
    this.response.set('Content-Encoding', 'gzip')
    this.response.body = yield gzip('hello world')
})

app.use(function* (next) {
    if (!this.request.acceptsEncodings('identity')) return yield* next;
    this.response.set('Content-Encoding', 'identity')
    this.response.body = 'hello world'
})
