/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, address, cartItems } = req.body;

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty or missing',
      });
    }

    const orderData = {
      user: { name, email, phone, address },
      products: cartItems.map((item: any) => ({
        product: item._id,
        quantity: item.quantity,
        model: 'grosaryProduct',
        grosaryproduct: item,
      })),
    };

    const newOrder = await orderService.createOrder(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: newOrder,
    });
  } catch (error) {
    console.error('Order Error:', error);
    res.status(500).json({
      success: false,
      message: (error as Error).message,
      error,
    });
  }
};
export const getAllOrdersController = catchAsync(
  async (req: Request, res: Response) => {
    const orders = await orderService.getAllOrdersWithDetails();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
  },
);
export const getSingleOrdersController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const orders = await orderService.getSingleOrdersWithDetails(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Single Orders fetched successfully!',
      data: orders,
    });
  },
);
export const getAllOredrGrosaryProduct = catchAsync(
  async (req: Request, res: Response) => {
    const result = await orderService.getOrederGrosaryIntodb();
    console.log(result);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All  ordered medicines fetched successfully',
      data: result,
    });
  },
);
export const getSingleOredrGraryProduct = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await orderService.getSingleOrederGrosaryIntodb(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Single  ordered medicines fetched successfully',
      data: result,
    });
  },
);

export const updateOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;

  const payload = req.body;

  const result = await orderService.UpdateOrederGrosaryIntodb(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order status successfully',
    data: result,
  });
});
export const deleteOrder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await orderService.deleteGrosaryOrderIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order status successfully',
    data: result,
  });
});
