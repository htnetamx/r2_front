import React, { useEffect, useState, ReactElement } from "react";

import Lottie from "react-lottie";

import { Center, Text } from "@chakra-ui/react";

import loader from "../../../../public/assets/images/animations/loader.json";
import success from "../../../../public/assets/images/animations/success.json";

// TODO: we need this props from the backend
const fakeProps = {
  sellerName: "Abarrotes Patoto",
  pickUpDate: "06/11/2021",
  pickUpTime: "5:00pm",
};

/**
 *  The order success screen component
 * @returns {ReactElement} The order success screen component
 */
export const OrderSuccess = (): ReactElement => {
  const [response, setResponse] = useState<boolean>(false);

  /**
   * This useEffect is just for simulating the response from the server after order is made
   * */
  useEffect(() => {
    setTimeout(() => setResponse(true), 4000);
  }, []);

  return (
    <Center display="flex" flexDirection="column" alignItems="center">
      {response ? (
        <>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: success,
            }}
            width="142px"
            height="141px"
          />
          <Text
            width="318px"
            height="68px"
            margin="21px 21px 23px 21px"
            fontSize="24px"
            fontWeight="700"
            textAlign="center"
          >
            {"¡Su pedido ha sido procesado exitosamente!"}
          </Text>
          <Text
            width="302px"
            height="75px"
            fontSize="18px"
            margin="0px 29px 89px 29px"
            textAlign="center"
          >
            Puedes pasar a buscar tu pedido por <strong>{fakeProps.sellerName}</strong>, a partir
            del día {fakeProps.pickUpDate} después de las {fakeProps.pickUpTime}.
          </Text>
        </>
      ) : (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: loader,
          }}
          width="126px"
          height="132px"
        />
      )}
    </Center>
  );
};
