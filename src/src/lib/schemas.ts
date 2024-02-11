import {zfd} from 'zod-form-data'
import {z} from 'zod'

export const authSchema = zfd.formData({
    email: zfd.text(
        z.string()
        .min(1, {message: 'Email field is required'})
        .email("Invalid email")
    ),
    password: zfd.text(
        z.string()
        .min(1, {message: 'Password field is required'})
    )
})