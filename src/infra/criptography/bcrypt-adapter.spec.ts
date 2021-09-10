/* eslint-disable @typescript-eslint/return-await */
import { BcryptAdapter } from './bcrypt-adapter'
import bcrypt from 'bcrypt'
const salt = 12

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash_value'))
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with corret values', async () => {
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should returns a hash on success', async () => {
    const sut = new BcryptAdapter(salt)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash_value')
  })
})
