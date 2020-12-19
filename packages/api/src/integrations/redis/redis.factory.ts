import * as RedisDep from 'redis'
import { createRedisClient } from './redis'

export const Redis = createRedisClient({ Redis: RedisDep })({ host: 'localhost' })
