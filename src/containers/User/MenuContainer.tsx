import React, { ReactElement } from "react";

import { useSelector } from "react-redux";

import { selectIsMenuOpen } from "dataflows/Menu/MenuSelectors";
import { useRouter } from "next/router";
import IconClients from "styled/icons/Menu/Clients";
import IconHelp from "styled/icons/Menu/Help";
import IconOrders from "styled/icons/Menu/Orders";
import IconProfile from "styled/icons/Menu/Profile";
import IconUserRounded from "styled/icons/Menu/UserRounded";

import { Menu, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";

/**
 * The menu popover container.
 * @returns {ReactElement} The component.
 */
export const MenuContainer = (): ReactElement => {
  const isOpen = useSelector(selectIsMenuOpen);
  const router = useRouter();

  /**
   * Action on item click.
   * @param {any} item the item clicked.
   * @returns {void}
   */
  const onItemClick = (item: any): void => {
    router.push(`/${item}`);
  };

  return (
    <Menu isOpen={isOpen}>
      {({ onClose }) => (
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
            <MenuItem icon={<IconUserRounded />}>Mis datos </MenuItem>
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
      )}
    </Menu>
  );
};
