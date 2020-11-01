const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const favicon = require('serve-favicon')


// 3. on allume la compression pour tous les fichiers texte
app.use(require('compression')( /*{level:9}*/ )) // les taux de compression élevés posent des problèmes aux machines faibles
/*app.use(require('shrink-ray')({
  brotli: {
    quality: 14
  }
}))*/

app.use(express.static('demos/'))
app.use(favicon(__dirname + '/rocket.png'))

// fonts.gstatic.com


app.use(express.static('page-tp/', {
  lastModified: true,
  etag: true,
  // 4. démo de pré-connection à un domaine que le navigateur ne peut pas deviner juste en lisant le HTML
  // attention à la démo sur webpagetest : notre WPT privé n'affiche pas les requêtes vers google s'il est en httpS
  /*setHeaders: function (res, path, stat) {
    res.set('Link', '<https://fonts.gstatic.com>; rel=preconnect;crossorigin;')
  }*/
  setHeaders: function (res, path, stat) {
    //res.set('Link', '<http://fonts.gstatic.com>; rel=preconnect;crossorigin;')
    res.set('Link', '<http://fonts.gstatic.com/s/amaranth/v9/KtkuALODe433f0j1zMnFHdA.woff2>; rel=preload; as=font')
  }
}))
// 1. on met un cache client d'un an pour toutes les requêtes
app.use(express.static('page-tp/', {
  maxAge: '1y' // = 1 an
}))
// app
app.listen(8181, _ => console.log('server opened on port 8181'))
// 2. test avec HTTP/2. (PASSER EN HTTPS!)
//require('spdy') // HTTP/2*/
/*require('https') // HTTPS 1.1
  .createServer({
    key: fs.readFileSync(path.join(__dirname, '/node_modules/http2/example/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, '/node_modules/http2/example/localhost.crt'))
  }, app)
  .listen(8181, _ => console.log('HTTPS server opened on port 8181'))
*/
// NodeJS le supporte maintenant nativement : https://nodejs.org/api/http2.html#http2_http2stream_pushstream_headers_options_callback 
// mais il n'assure pas la rétro-compatibilité, donc Express plante avec : https://github.com/expressjs/express/issues/3388
/*require('http2').createSecureServer({
    key: fs.readFileSync(path.join(__dirname, '/node_modules/http2/example/localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, '/node_modules/http2/example/localhost.crt'))
  }, app)
  .listen(8181, _ => console.log('HTTP2 server opened on port 8181'))
  */