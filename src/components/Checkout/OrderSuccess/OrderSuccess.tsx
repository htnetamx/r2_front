import React, { useEffect, useState, ReactElement } from "react";

import Lottie from "react-lottie";

import loader from "styled/animations/loader.json";
import success from "styled/animations/success.json";
import ImageWomanOne from "styled/icons/CheckoutFlow/WomanOne";
import ImageWomanTwo from "styled/icons/CheckoutFlow/WomanTwo";

import { Box, Button, Center, Text } from "@chakra-ui/react";

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
          <Box
            width="327px"
            height="133px"
            background="#DADAFF"
            borderRadius="13px"
            display="flex"
            alignItems="center"
          >
            <Box width="64px" height="100px">
              <ImageWomanOne />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Text
                width="198px"
                height="47px"
                fontWeight="bold"
                fontSize="18px"
                lineHeight="140%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#0000FD"
                textAlign="center"
                marginBottom="26px"
              >
                Gana $40 y regala $40 compartiendo la liga
              </Text>
              <Button
                display="flex"
                alignItems="center"
                padding="12px 16px"
                width="137px"
                height="46px"
                background="#3870FF"
                boxShadow="0px 0px 4px rgba(179, 179, 179, 0.25)"
                borderRadius="8px"
                color="#FFFFFF"
                _hover={{ background: "#3870FF" }}
              >
                Compartir liga
              </Button>
            </Box>
            <Box width="64px" height="100px">
              <ImageWomanTwo />
            </Box>
          </Box>
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
