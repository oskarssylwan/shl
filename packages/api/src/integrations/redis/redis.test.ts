import { createRedisClient } from './redis'

const createMockRedisDep = () => ({
  createClient: () => ({
    get: jest.fn(),
    set: jest.fn()
  })
})

describe('createRedisClient()', () => {

  let Redis;

  beforeEach(() => {
    const deps = { Redis: createMockRedisDep() }
    const options = {}
    Redis = createRedisClient(deps)(options)
  })

  describe('Redis commands', () => {

    ['get', 'set'].forEach(command => {
      describe(`Redis.${command}()`, () => {
        it('must return a promise (have a .then function)', () => {
          expect(typeof Redis[command]('key', 'value').then).toBe('function')
        })
      })
    })

  })

})
