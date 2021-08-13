import { Env } from "./types"

export default {
  async fetch(request: Request, env: Env) {
    return new Response('Hello World!')
  }
}