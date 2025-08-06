import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  products: Array<{
    product: mongoose.Schema.Types.ObjectId;

    quantity: number;
  }>;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  transactionId: string;
}

const OrderSchema: Schema = new Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    // products: [
    //   {
    //     _id: false,
    //     product: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'GrosaryProductModle',
    //       required: true,
    //       quantity: { type: Number, required: true },
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true,
    //     },
    //     // grosaryproduct: {
    //     //   type: mongoose.Schema.Types.ObjectId,
    //     //   ref: 'User',
    //     //   required: true,
    //     // },
    //   },
    // ],

    products: [
      {
        _id: false,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: 'products.model', // ✅ Dynamic reference
        },
        model: {
          type: String,
          required: true,
          enum: ['grosaryproduct', 'offerproduct'],
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending',
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IOrder>('Order', OrderSchema);
