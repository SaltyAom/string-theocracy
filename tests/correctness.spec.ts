import StringTheocracy from '../src'

describe('Correctness', () => {
	it('Find root path', () => {
		const router = new StringTheocracy()

		const result = router.on('GET', '/', 'Yay').find('GET', '/')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/',
			handler: 'Yay',
			params: {},
			query: {}
		})
	})

	it('Find nested path', () => {
		const router = new StringTheocracy()

		const result = router
			.on('GET', '/my/path', 'Yay')
			.find('GET', '/my/path')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/my/path',
			handler: 'Yay',
			params: {},
			query: {}
		})
	})

	it('Parse URL', () => {
		const router = new StringTheocracy()

		const result = router
			.on('GET', '///complex/path', 'Yay')
			.find('GET', 'http://localhost:8080//complex///path/')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/complex/path',
			handler: 'Yay',
			params: {},
			query: {}
		})
	})

	it('Parse query parameters', () => {
		const router = new StringTheocracy()

		const result = router
			.on('GET', '/my/path', 'Yay')
			.find('GET', '/my/path?name=saltyaom&package=string-theocracy')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/my/path',
			handler: 'Yay',
			params: {},
			query: {
				name: 'saltyaom',
				package: 'string-theocracy'
			}
		})
	})

	it('Parse path parameters', () => {
		const router = new StringTheocracy()

		const result = router
			.on('GET', '/id/:id/:user', 'Yay')
			.find('GET', '/id/123/saltyaom?post=3')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/id/123/saltyaom',
			handler: 'Yay',
			params: {
				id: '123',
				user: 'saltyaom'
			},
			query: {
				post: '3'
			}
		})
	})

	it('Differentiate static from dynamic path', () => {
		const router = new StringTheocracy()

		const result = router
			.on('GET', '/id/:id/:user', 'Yay')
			.on('GET', '/id/:id/admin', 'No')
			.find('GET', '/id/3/admin')

		expect(result).toEqual({
			found: true,
			method: 'GET',
			path: '/id/3/admin',
			handler: 'No',
			params: {
				id: '3'
			},
			query: {}
		})
	})
})
