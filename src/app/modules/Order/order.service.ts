/* eslint-disable @typescript-eslint/no-explicit-any */

import { initiatePayment } from '../payments/payment.utils';
import orderModle from './order.modle';
import { modelMapper } from './order.modlerapper';

const createOrder = async (orderData: any) => {
  const { user, products } = orderData;

  let totalPrice = 0;

  const productDetails = await Promise.all(
    products.map(async (item: any) => {
      const Model = modelMapper[item.model];

      if (!Model) throw new Error(`Unknown product model: ${item.model}`);

      const product = await Model.findById(item.product);

      if (!product) {
        throw new Error('Product not found');
      }

      const productPrice = Number(product.price);
      totalPrice += productPrice * item.quantity;

      return {
        product: product._id,
        name: product.name,
        category: product.category,
        weight: product.weight,
        quantity: item.quantity,
        model: item.model,
        grosaryproduct: item.grosaryproduct || null,
      };
    }),
  );

  const transactionId = `TXN-${Date.now()}`;

  const order = new orderModle({
    user,
    products: productDetails,
    totalPrice,
    status: 'Pending',
    paymentStatus: 'Pending',
    transactionId,
  });

  await order.save();

  const paymentData = {
    transactionId,
    totalPrice,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone,
    customerAddress: user.address,
  };

  const paymentSession = await initiatePayment(paymentData);
  return paymentSession;
};

const getOrederGrosaryIntodb = async () => {
  return await orderModle.find();
};
const getAllOrdersWithDetails = async () => {
  const order = await orderModle.find().populate('products.product').exec();

  return order;
};
const getSingleOrdersWithDetails = async (_id: string) => {
  const order = await orderModle
    .findById(_id)
    .populate('products.product')
    .exec();

  return order;
};

const getSingleOrederGrosaryIntodb = async (_id: string) => {
  return await orderModle.findById(_id);
};

const UpdateOrederGrosaryIntodb = async (
  _id: string,
  payload: Partial<typeof orderModle>,
) => {
  return await orderModle.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteGrosaryOrderIntoDB = async (_id: string) => {
  return await orderModle.findByIdAndDelete(_id);
};

export const orderService = {
  createOrder,
  getOrederGrosaryIntodb,
  getSingleOrederGrosaryIntodb,
  UpdateOrederGrosaryIntodb,
  deleteGrosaryOrderIntoDB,
  getAllOrdersWithDetails,
  getSingleOrdersWithDetails,
};
