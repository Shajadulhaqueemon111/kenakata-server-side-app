/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';
import { Query } from 'mongoose';
export const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'block'],
      default: 'active',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre(/^find/, function (this: Query<any, any>, next: () => void) {
  this.where({ isDeleted: false });
  next();
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
