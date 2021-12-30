import React, { ReactElement } from "react";

import { IUserButtonProps } from "components/Layout/NavBar/UserButton/IUserButtonProps";
import { UserButton } from "components/Layout/NavBar/UserButton/UserButton";
import { HELP, LOGOUT, MY_CLIENTS, MY_INFO, MY_INFO_URL, MY_ORDERS } from "constants/userConstant";
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
  // const isOpen = useSelector(selectIsMenuOpen);
  // const router = useRouter();

  /**
   * Action on item click.
   * @param {any} item the item clicked.
   * @returns {void}
   */
  const onItemClick = (item: string): any => {
    // router.push(`/${item}`);
    console.log(item);
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
          <MenuItem icon={<IconUserRounded />}>
            <button onClick={onItemClick(MY_INFO_URL)}>{MY_INFO}</button>
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconClients />}>{MY_CLIENTS} </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconOrders />}>{MY_ORDERS} </MenuItem>
          <MenuDivider />
          <MenuItem icon={<IconHelp />}>{HELP}</MenuItem>
          <MenuDivider />
          <MenuItem color="red" fontWeight="bold">
            {LOGOUT}
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
