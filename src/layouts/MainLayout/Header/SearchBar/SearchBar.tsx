import React, { memo, useEffect, ReactElement } from "react";

import { BiSearch } from "react-icons/bi";

import { SEARCH_BAR_PLACEHOLDER } from "constants/searchBarConstants";
import { useRouter } from "next/router";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

/**
 * The searchbar component
 * @returns {ReactElement} The searchbar component
 */
export const SearchBar = memo((): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/search");
  }, [router]);

  /**
   * Handles the searchbar enter event
   * @param {React.KeyboardEvent} e The event
   * @returns {void}
   */
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const q = e.currentTarget.value;

      router.push(
        {
          pathname: "/search",
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div>
      <InputGroup>
        <Input placeholder={SEARCH_BAR_PLACEHOLDER} />
        <InputRightElement pointerEvents="none" fontSize="1.2em">
          <BiSearch />
        </InputRightElement>
      </InputGroup>
    </div>
  );
});

SearchBar.displayName = "SearchBar";
