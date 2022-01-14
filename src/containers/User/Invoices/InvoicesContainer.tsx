import React, { useState, ReactElement } from "react";

import { BiCalendar } from "react-icons/bi";

import { IInvoiceProps } from "components/User/Invoice/IInvoice";
import { Invoice } from "components/User/Invoice/Invoice";
import { ReturnToHome } from "components/User/ReturnToHome/ReturnToHome";
import { INVOICES_HEADER, INVOICES_LASTDAYS, YOUR_INVOICES } from "constants/userConstant";

import { Box, Container, Text } from "@chakra-ui/layout";
import { Icon, Input, InputGroup, InputRightElement, SimpleGrid } from "@chakra-ui/react";

import { IInvoicesContainerProps } from "./IInvoicesContainer";

/**
 * The User's Invoices Container
 * @returns {ReactElement} The User's Invoices Container
 */
export const InvoicesContainer = (): ReactElement => {
  const [date, setDate] = useState<string>("");
  const [invoice, setInvoice] = useState({ orderId: 0, name: "", deliveryDate: new Date() });

  // eslint-disable-next-line require-jsdoc
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setDate(dateValue);
    const d = new Date(dateValue.replace(/-/g, "/"));
    console.log(d);
    // TODO: Pasar fecha en endpoint para traer la factura en específico.
    setInvoice({
      orderId: 9,
      name: "Abarrotes",
      deliveryDate: d,
    });
  };

  const invoicesSampleObject: IInvoiceProps[] = [
    {
      orderId: 1,
      name: "Abarrotes",
      deliveryDate: new Date("January 14, 2022 03:45:00"),
    },
    {
      orderId: 2,
      name: "Abarrotes",
      deliveryDate: new Date("January 13, 2022 03:45:00"),
    },
    {
      orderId: 3,
      name: "Abarrotes",
      deliveryDate: new Date("January 3, 2022 03:45:00"),
    },
    {
      orderId: 2,
      name: "Abarrotes",
      deliveryDate: new Date("January 1, 2022 03:45:00"),
    },
    {
      orderId: 2,
      name: "Abarrotes",
      deliveryDate: new Date("December 17, 2021 03:45:00"),
    },
  ];

  const invoicesContainerProps: IInvoicesContainerProps = {
    invoicesDetailProps: invoicesSampleObject,
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
      <SimpleGrid columns={[1, 1, 2]}>
        <Box>
          <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
            {INVOICES_HEADER}
          </Text>
          <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }} fontWeight="400">
            {INVOICES_LASTDAYS}
          </Text>
        </Box>
        <Box mt={["3", "0"]}>
          <Text fontSize={{ base: "13px", md: "13px", lg: "14px" }} fontWeight="400">
            ¿Buscas una factura en especial? escoge una fecha
          </Text>
          <InputGroup>
            <Input size="md" type="date" value={date} onChange={onChangeDate} />
            <InputRightElement>
              <Icon as={BiCalendar} w={5} h={5} />
            </InputRightElement>
          </InputGroup>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={1} spacing={2} mt={["6", "10"]} mb={10}>
        <Text
          fontSize={{ base: "15px", md: "16px", lg: "18px" }}
          fontWeight="700"
          display={["none", "block"]}
        >
          {YOUR_INVOICES}
        </Text>
        {date && invoice ? (
          <Invoice {...invoice} />
        ) : (
          invoicesContainerProps.invoicesDetailProps.map((invoice, index) => (
            <Invoice {...invoice} key={index} />
          ))
        )}
      </SimpleGrid>
    </Container>
  );
};
