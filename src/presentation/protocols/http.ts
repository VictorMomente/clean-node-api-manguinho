/* -

> Essas interfaces definem o que as classes httpRequest e httpResponse
precisam ter para eu poder usar elas em outros códigos.

> Olhar a arquitetura do projeto. Elas são interfaces!

> Observação sobre o httpRequest
  O body é opcional, por isso a formação body?:
  Significa que se eu tiver body, será do tipo any
  mas se eu não tiver nada não tem problema.
  Isso porque requisições do tipo get por exemplo, não precisam de body
  Já requisições do tipo post, precisam...
- */

export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
}
