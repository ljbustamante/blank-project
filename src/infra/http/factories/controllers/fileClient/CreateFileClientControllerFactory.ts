import {Controller} from "@core/infra/Controller";
import {CreateFileClientController} from "@modules/fileClient/useCases/create/CreateFileClientController";
import {CreateFileClient} from "@modules/fileClient/useCases/create/CreateFileClient";

export function CreateFileClientControllerFactory(): Controller {
  const createFileClient = new CreateFileClient()
  return new CreateFileClientController(createFileClient)
}
