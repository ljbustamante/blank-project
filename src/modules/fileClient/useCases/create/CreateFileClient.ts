import { Either, left, right } from '@core/logic/Either'

type GetStatementAccountResponse = Either<Error, boolean>

export class CreateFileClient {
  constructor() {
  }
  async execute(): Promise<GetStatementAccountResponse> {

    const user = "user"
    if (!user) {
      return left(new Error())
    }

    return right(true)

  }
}
