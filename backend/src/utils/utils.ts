import { ValidationError } from "class-validator";

export function getErrorDetails(errors: ValidationError[]){
  return errors.map(item => (
    {
      [item.property]: Object.values(item.constraints as {})
    }
  ))
}