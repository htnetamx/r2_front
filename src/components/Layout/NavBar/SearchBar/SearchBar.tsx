import React, { FC, ReactElement } from "react";

import { BiSearch } from "react-icons/bi";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import { ISearchBarProps } from "./ISearchBarProps";

/**
 * The SearchBar Component
 * @param {ISearchBarProps} props the SearchBar props.
 * @returns {ReactElement} the searchBar component.
 */
export const SearchBar: FC<ISearchBarProps> = (props: ISearchBarProps): ReactElement => {
  const { searchBarPlaceholder } = props;
  return (
    <>
      <InputGroup>
        <Input placeholder={searchBarPlaceholder} />
        <InputRightElement pointerEvents="none" fontSize="1.2em">
          <BiSearch />
        </InputRightElement>
      </InputGroup>
    </>
  );
};
