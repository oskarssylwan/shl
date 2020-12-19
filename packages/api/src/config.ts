require('dotenv').config()
export const port = process.env.PORT || 3001
export const buildEnvironment = process.env.BUILD_ENVIRONMENT || 'dev'
