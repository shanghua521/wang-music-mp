import { get } from './request'

export const sayHello = () => {
  return get('/v1/hello')
}