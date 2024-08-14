import { validate } from "class-validator";
import { getErrorDetails } from "./utils";


export async function dtoValidation(data: any) {
  const errors = await validate(data)
  if(errors.length) {
    return getErrorDetails(errors)
  }
  return undefined
}