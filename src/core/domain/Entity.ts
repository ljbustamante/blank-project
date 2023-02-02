import { v4 as uuid4 } from 'uuid'

export abstract class Entity<T> {
  protected readonly _uuid: string
  public readonly props: T

  get uuid(): string {
    return this._uuid
  }

  constructor(props: T, uuid?: string) {
    this._uuid = uuid || uuid4()
    this.props = props
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!(object instanceof Entity)) {
      return false
    }

    return this._uuid === object._uuid
  }
}
