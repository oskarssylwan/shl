import { promisify } from 'util'
import { curry } from 'ramda'

export const createRedisClient = deps => options => {
  const client = deps.Redis.createClient(options)

  return new Proxy({}, {
    get: (_, command: string) => command !== 'set'
      ? promisify(client[command]).bind(client)
      : curry((key: string, data: any) => promisify(client.set)
            .bind(client)(key, data, 'EX', 30)
            .then(() => data)
          )
  })
}
