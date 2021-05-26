/*  No teste unitário abaixo, crio uma instancia da classe a ser testada
"sut", a qual invoco a função hundle, que é responsável em validar o request
httpRequest que eu forjo também.
No caso estou testando um request sem a informação "name", o qual espera
um response com código 400
Além disso, importo a Classe SignUpController do arquivo signup */

import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
