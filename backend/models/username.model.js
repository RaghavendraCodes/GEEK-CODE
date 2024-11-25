import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        usernameGeek: {
            type: String, 
            required: true, 
        },
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