import axios, { AxiosResponse } from "axios";

/**
 * Post body for order creation
 */
export interface PostData {
  expected_output_amount: number;
  fiat: string;
  notes: string;
}

/**
 * Post response body order creation
 */
export interface ResponseData {
  identifier: string;
  web_url: string;
}

/**
 * Make Post for order creation (service)
 */
export const ordersCreate = async ( postData?: PostData ): Promise<AxiosResponse<ResponseData>> => {
  const token = "7fb3fa18-6761-4bf0-a3a8-1b9e0247a0df";
  const uri: string = "https://payments.smsdata.com/api/v1/orders/orders_create";
  const headers = {
    "X-Device-Id": token,
  };

  try {
    debugger
    const response = await axios.post<ResponseData>(uri, postData, {
      headers,
    });

    return response;
  } catch (error: any) {
    throw new Error("Error al crear la orden: " + error?.message);
  }
};
