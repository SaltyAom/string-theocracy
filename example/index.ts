import StringTheocracy from '../src'

const router = new StringTheocracy()

router
    .on('GET', '/id/:id', () => console.log('Hi'))
    .on('GET', '/my/path', () => console.log('Hi'))
    .on('GET', '/a/b/c', () => console.log('Hi'))
    .on('GET', '/a/b//d', () => console.log('Hi'))
    .on('GET', '/a/b/id/:id', () => console.log('Hi'))
    .on('GET', '/a/b/id/:id/a', () => console.log('Hi'))

console.log(router.routes)

console.log('\n\n', router.find('GET', 'http://localhost:8080/id/1'))
console.log(router.find('GET', '/id/:id'))
console.log(router.find('GET', '/my/path'))
console.log(router.find('GET', 'http://localhost:8080/a/b/c'))
console.log(router.find('GET', '/a/b///d?awd=d&a=c'))
console.log(router.find('GET', '/a/b/id/a/a?awd=d&a=c'))

console.dir(router.routes, {
    depth: null
})
