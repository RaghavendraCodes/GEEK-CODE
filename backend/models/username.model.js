import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        leetcodeUsername: {
            type: String, 
            require: true, 
        }, 
        gfgUsername: {
            type: String, 
            require: true, 
        }
    },
    {
        timestamps: true,
    }
)

export const UserSchema = mongoose.model("UserSchema", userSchema)