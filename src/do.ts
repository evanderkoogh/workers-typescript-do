import { Env } from './types'

export class DurableObj {
  constructor(
    protected readonly state: DurableObjectState,
    protected readonly env: Env,
  ) {}

  async fetch(request: Request) {
    return new Response('Hello World')
  }
}
