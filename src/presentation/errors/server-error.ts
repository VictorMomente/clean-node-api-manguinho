/* -
> contém a formalização do erro do SignUp quando falta algum
parâmetro (ex. name, email etc)
-  */

export class ServerError extends Error {
  constructor () {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    super('Internal server error')
    this.name = 'ServerError'
  }
}
