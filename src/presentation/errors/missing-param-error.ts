/* -
> contém a formalização do erro do SignUp quando falta algum
parâmetro (ex. name, email etc)
-  */

export class MissingParamError extends Error {
  constructor (paramName: String) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
