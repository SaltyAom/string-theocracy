import StringTheocracy from 'string-theocracy'

const router = new StringTheocracy()

router
    .on('GET', '/', () => console.log('Hi'))
    .on('GET', '/my/path', () => console.log('Hi'))
    .on('GET', '/id/:id', () => console.log('Hi'))
    .on('POST', '/', () => console.log('Hi'))

console.log(router.find('GET', '/'))
console.log(router.find('GET', '/id/123'))
console.log(router.find('GET', 'http://localhost:8080/my/path'))
console.log(router.find('GET', '/id/123?awd=d&a=c'))

console.dir(router.routes, {
    depth: null
})
