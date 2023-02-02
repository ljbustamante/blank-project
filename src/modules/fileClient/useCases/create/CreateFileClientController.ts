import {Controller} from "@core/infra/Controller";
import {CreateFileClient} from "@modules/fileClient/useCases/create/CreateFileClient";
import { HttpResponse, clientError, fail, ok } from '@core/infra/HttpResponse'

export class CreateFileClientController implements Controller{

  constructor(private createFileClient: CreateFileClient) {
  }

  async handle(): Promise<HttpResponse> {

    try {

      const result = await this.createFileClient.execute()

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return clientError(error)
        }
      } else {
        const products = result.value

        return ok(products)
      }

    } catch (err) {
      return fail(err)

    }

  }

}
