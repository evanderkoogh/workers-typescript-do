import { Env } from './types'
import html from './index.html'

export default {
  async fetch(request: Request, env: Env) {
    return new Response(html, { headers: { 'content-type': 'text/html' } })
  },
}
