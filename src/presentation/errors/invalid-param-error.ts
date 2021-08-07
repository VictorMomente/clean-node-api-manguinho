
export class InvalidParamError extends Error {
  constructor (paramName: String) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
