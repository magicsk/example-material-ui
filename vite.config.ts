import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from './src/index'

export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react(),
    iteriaLowcode({
      command,
      version: '1.2.5',
      mode: 'development',
      graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
      cwd: process.cwd(),
      injectMode: 'devServer'
    })]
  })
}

