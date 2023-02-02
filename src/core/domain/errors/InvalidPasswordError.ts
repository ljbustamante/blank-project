import { DomainError } from '@core/domain/errors/DomainError'

export class InvalidPasswordError extends Error implements DomainError {
  constructor() {
    super(`The password is invalid.`)
    this.name = 'InvalidPasswordError'
  }
}
