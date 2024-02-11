'use server'
import { authSchema } from '@/lib/schemas'
import { FormError } from '@/lib/types'
import { zodToFormError } from '@/lib/utils'
import { ZodError } from 'zod'

export const signInAction = async (state: any, data: FormData) => {
    try {   
        const {email, password} = authSchema.parse(data)
        console.log(email, password)
        return []
    } catch (e: unknown) {
        if (e instanceof ZodError) {
            return zodToFormError(e)
        }
        throw e;
    }
    
}