import React, { ReactElement } from "react";

import { useSelector } from "react-redux";

import { IUserButtonProps } from "components/Layout/NavBar/UserButton/IUserButtonProps";
import { UserButton } from "components/Layout/NavBar/UserButton/UserButton";
import { MY_INFO, MY_INFO_URL } from "constants/userConstant";
import { selectIsMenuOpen } from "dataflows/Menu/MenuSelectors";
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
  const isOpen = useSelector(selectIsMenuOpen);
  const router = useRouter();

  /**
   * Action on item click.
   * @param {any} item the item clicked.
   * @returns {void}
   */
  const onItemClick = (item: string): any => {
    router.push(`/${item}`);
  };

  return (
    <Menu>
      {/* <Menu isOpen={isOpen}> */}
      <MenuButton colorScheme="pink" _hover={{ bg: "gray.100", borderRadius: "0.375rem" }}>
        <UserButton {...userButtonProps} />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem
            icon={<IconProfile />}
            fontWeight="bold"
            _hover={{ bg: "#587DFF", color: "white" }}
            _focus={{ bg: "#587DFF", color: "white" }}
            m={0}
            p={0}
          >
            Hola, {"Luis"}
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconUserRounded />} onClick={onItemClick(MY_INFO_URL)}>
            {MY_INFO}
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconClients />}>Mis clientes </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconOrders />}>Órdenes y facturas </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconHelp />}>Ayuda </MenuItem>
          <MenuDivider />
          <MenuItem color="red" fontWeight="bold">
            Cerrar sesión
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
