import React, { ReactElement } from "react";

import { BsChevronLeft } from "react-icons/bs";

import { TO_HOME } from "constants/userConstant";
import { useRouter } from "next/router";

import { Flex, Text } from "@chakra-ui/layout";

/**
 * The ReturnToHome component.
 * @returns {ReactElement} the ReturnToHome element.
 */
export const ReturnToHome = (): ReactElement => {
  const router = useRouter();

  return (
    <Flex justify={{ base: "start", md: "start" }} onClick={() => router.push("/")} mb="4">
      <BsChevronLeft fontSize="20px" color={"#3870FF"} fontWeight="700" cursor={"pointer"} />
      <Text color={"#3870FF"} fontWeight="700" fontSize="16px" cursor={"pointer"}>
        {TO_HOME}
      </Text>
    </Flex>
  );
};
