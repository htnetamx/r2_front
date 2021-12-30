import React, { ReactElement } from "react";

import { MyInfoForm } from "components/User/MyInfoForm/MyInfoForm";
import { ProfitBanner } from "components/User/ProfitBanner/ProfitBanner";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";

import { Container } from "@chakra-ui/layout";

import { IInfoContainerProps } from "./IInfoContainer";

/**
 * The User Info Container.
 * @returns {ReactElement} The User Info Container
 */
export const InfoContainer = (): ReactElement => {
  const infoContainerProps: IInfoContainerProps = {
    profitBannerProps: {
      url: "test",
      currentProfit: 365,
    },
    myInfoFormProps: {
      name: "Luis Posada",
      address: "Calle 34 - 23",
      phoneNumber: "5523234",
      storeName: "Tienda los Posada",
      url: "https://testinglab.netamx.app/",
    },
  };

  return (
    <Container
      centerContent={false}
      maxW="container.lg"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <ReturnToHome />
      <ProfitBanner {...infoContainerProps.profitBannerProps} />
      <MyInfoForm {...infoContainerProps.myInfoFormProps} />
    </Container>
  );
};
