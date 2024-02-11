import {ZodError} from 'zod'
import { FormError } from './types'

export const zodToFormError = (error: ZodError) => {
    return error.isEmpty ? [] : 
        error.issues.map((err) => ({
            key: err.path[0],
            message: err.message
        }))

}