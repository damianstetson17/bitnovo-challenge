import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { resetData, setWebUrl } from "../../store/slices/currencySlice";
import { apiConfig } from "../../config/apiConfig";

const WebSocketListener = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const data = useAppSelector((state) => state.currency.data);
  const dispatch = useAppDispatch();

  //status flag from ws
  const completedPaymentFlag: string = "CO";
  const cancelledPaymentFlag: string = "CA";

  useEffect(() => {
    //if post create_orders return data values for socket connection
    if (data) {
      const url = apiConfig.ws + data?.identifier;
      const socket = new WebSocket(url);

      //webSocket listeners
      socket.onopen = () => {
        console.log("Conexión establecida.");
      };

      socket.onmessage = (event) => {
        const jsonData = JSON.parse(event.data);
        console.log("Mensaje recibido:", data);

        //if is data is not null try set the web_url value
        if (data?.web_url) {
          dispatch(setWebUrl(data?.web_url));
        }

        //verify status payment for redirect
        if (jsonData?.status === completedPaymentFlag) {
          navigation.navigate("PaymentSuccessScreen", {});
        }
        if (jsonData?.status === cancelledPaymentFlag) {
          navigation.navigate("SetMountScreen", {});
          ToastAndroid.show("Se ha cancelado el pago.", ToastAndroid.LONG);
        }
      };

      socket.onerror = (error) => {
        console.error("Error en la conexión:", error);
        dispatch(resetData());
        dispatch(setWebUrl(""));
      };

      socket.onclose = (event) => {
        console.log("Conexión cerrada:", event.reason);
        dispatch(resetData());
        dispatch(setWebUrl(""));
      };
    }
  }, [data]);

  return null;
};

export default WebSocketListener;
