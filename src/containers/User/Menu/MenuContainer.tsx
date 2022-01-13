import React, { useEffect, useState, ReactElement } from "react";

import { IUserButtonProps } from "components/Layout/NavBar/UserButton/IUserButtonProps";
import { UserButton } from "components/Layout/NavBar/UserButton/UserButton";
import {
  HELLO_USER,
  HELP,
  LOGOUT,
  MY_CLIENTS,
  MY_CLIENTS_URL,
  MY_INFO,
  MY_INFO_URL,
  MY_ORDERS,
  MY_ORDERS_URL,
} from "constants/userConstant";
import { useRouter } from "next/router";
import IconClients from "styled/icons/Menu/Clients";
import IconHelp from "styled/icons/Menu/Help";
import IconOrders from "styled/icons/Menu/Orders";
import IconProfile from "styled/icons/Menu/Profile";
import IconUserRounded from "styled/icons/Menu/UserRounded";

import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";

/**
 * The menu popover container.
 * @param {IUserButtonProps} userButtonProps UserButton props
 * @returns {ReactElement} The menu container
 */
export const MenuContainer = (userButtonProps: IUserButtonProps): ReactElement => {
  const router = useRouter();
  const [username, setUsername] = useState<string>();
  /**
   * Action on item click.
   * @param {any} item the item clicked.
   * @returns {void}
   */
  const redirectTo = (item: string): void => {
    router.push(item);
  };

  /**
   * GetUsername service
   * @returns {string} username
   */
  const getUsername = (): string => {
    return "Luis";
  };

  useEffect(() => setUsername(getUsername()), []);

  return (
    <Menu>
      <MenuButton colorScheme="pink" _hover={{ bg: "gray.100", borderRadius: "0.375rem" }}>
        <UserButton {...userButtonProps} />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          {username && (
            <MenuItem
              icon={<IconProfile />}
              fontWeight="bold"
              _hover={{ bg: "#587DFF", color: "white" }}
              _focus={{ bg: "#587DFF", color: "white" }}
            >
              {HELLO_USER} {username}
            </MenuItem>
          )}
          <MenuDivider />
          <MenuItem icon={<IconUserRounded />} onClick={() => redirectTo(MY_INFO_URL)}>
            {MY_INFO}
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconClients />} onClick={() => redirectTo(MY_CLIENTS_URL)}>
            {MY_CLIENTS}
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconOrders />} onClick={() => redirectTo(MY_ORDERS_URL)}>
            {MY_ORDERS}
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconHelp />} onClick={() => console.log("Redirect")}>
            {HELP}
          </MenuItem>
          <MenuDivider />
          <MenuItem color="red" fontWeight="bold" onClick={() => console.log("Logout")}>
            {LOGOUT}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
