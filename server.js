const jsonServer = require('json-server')
const liveServer = require('live-server')
const apiServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

liveServer.start({
    logLevel: 0,
    root: './public'
})

apiServer.use(middlewares)
apiServer.use('/api', router)
apiServer.listen(9000, () => {
    console.log('JSON Server is running')
})

