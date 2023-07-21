import axios, { AxiosResponse } from "axios";

/**
 * Post body for order creation
 */
export interface PostData {
  expected_output_amount: number;
  merchant_urlko: string;
  merchant_urlok: string;
  merchant_url_standby: string;
  notes: string;
  reference: string;
  fiat: "EUR" | "USD" | "GBP";
  language?: string;
  front_dni?: string;
  back_dni?: string;
  first_name: string;
  surnames: string;
  address_name: string;
  address_additional?: string;
  address_number: string;
  zip_code: string;
  city: string;
  province: string;
  country: string;
  email: string;
  phone_number: string;
  nif: string;
  referral_id?: string;
  internal_data?: string;
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
export const ordersCreate = async (
  postData?: PostData
): Promise<AxiosResponse<ResponseData>> => {
  const token = "7fb3fa18-6761-4bf0-a3a8-1b9e0247a0df";
  const uri: string =
    "https://payments.smsdata.com/api/v1/orders/";
  const headers = {
    "X-Device-Id": token,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post<ResponseData>(uri, postData, {
      headers,
    })

    return response;
  } catch (error: any) {
    throw new Error("Error al crear la orden: " + error?.message);
  }
};
