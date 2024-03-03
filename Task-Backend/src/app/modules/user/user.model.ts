/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { TUser, UserModel } from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>(
    {
        employeeId: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: 0,
        },

        role: {
            type: String,
            enum: ['normalUser', 'manager', 'it'],
            default: 'normalUser',
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next) {
    const user = this;

    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_round),
    );

    next();
});

userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

userSchema.statics.isUserExistsByemployeeId = async function (employeeId: string) {
    return await User.findOne({ employeeId });
};

userSchema.statics.isUserExistsWithPassword = async function (
    employeeId: string,
) {
    return await User.findOne({ employeeId }).select(
        '+password +previousLastPassword +previousSecondLastPassword ',
    );
};

userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword,
) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>('User', userSchema);
