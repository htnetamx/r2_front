/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */

import { forwardRef, ForwardedRef } from "react";

import { BiChevronDown } from "react-icons/bi";
import Select, {
  components as selectComponents,
  GroupTypeBase,
  OptionTypeBase,
  Props as SelectProps,
  SelectComponentsConfig,
  StylesConfig,
  Theme,
} from "react-select";

import {
  chakra,
  useColorModeValue as mode,
  useMultiStyleConfig,
  useStyles,
  useTheme,
  Center,
  CloseButton,
  CSSWithMultiValues,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Portal,
  RecursiveCSSObject,
  StylesProvider,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";

import { IMultiSelectFieldProps } from "./IMultiSelectFieldProps";
import "./react-multi-select-field.css";

interface ItemProps extends CSSWithMultiValues {
  _disabled: CSSWithMultiValues;
  _focus: CSSWithMultiValues;
}

const chakraStyles: SelectProps["styles"] = {
  input: (provided) => ({
    ...provided,
    color: "inherit",
    lineHeight: 1,
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "none",
    zIndex: 3,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0.125rem 1rem",
  }),
};

const chakraComponents: SelectProps["components"] = {
  // Control components
  Control: ({ children, innerRef, innerProps, isDisabled, isFocused }) => {
    const inputStyles = useMultiStyleConfig("Input", {});

    return (
      <StylesProvider value={inputStyles}>
        <Flex
          ref={innerRef}
          sx={{
            ...inputStyles.field,
            p: 0,
            overflow: "hidden",
            h: "auto",
            minH: 10,
          }}
          {...innerProps}
          {...(isFocused && { "data-focus": true })}
          {...(isDisabled && { disabled: true })}
        >
          {children}
        </Flex>
      </StylesProvider>
    );
  },
  MultiValueContainer: ({ children, innerRef, innerProps, data: { isFixed } }) => (
    <Tag
      zIndex={3}
      ref={innerRef}
      {...innerProps}
      m="0.125rem"
      variant={isFixed ? "solid" : "subtle"}
    >
      {children}
    </Tag>
  ),
  MultiValueLabel: ({ children, innerRef, innerProps }) => (
    <TagLabel ref={innerRef} {...innerProps}>
      {children}
    </TagLabel>
  ),
  MultiValueRemove: ({ children, innerRef, innerProps, data: { isFixed } }) => {
    if (isFixed) {
      return null;
    }

    return (
      <TagCloseButton ref={innerRef} {...innerProps}>
        {children}
      </TagCloseButton>
    );
  },
  IndicatorSeparator: ({ innerProps }) => (
    <Divider {...innerProps} orientation="vertical" opacity={0} />
  ),
  ClearIndicator: ({ innerProps }) => <CloseButton {...innerProps} size="sm" mx={2} />,
  DropdownIndicator: ({ innerProps }) => {
    const { addon } = useStyles();

    return (
      <Center
        {...innerProps}
        sx={{
          ...addon,
          h: "100%",
          borderRadius: 0,
          borderWidth: 0,
          cursor: "pointer",
          bg: "transparent",
          mx: "-0.35rem",
        }}
      >
        <Icon as={BiChevronDown} h={5} w={5} alignItems="right" />
      </Center>
    );
  },
  // Menu components
  MenuPortal: ({ children }) => <Portal>{children}</Portal>,
  Menu: ({ children, ...props }) => {
    const menuStyles = useMultiStyleConfig("Menu", {});
    return (
      <selectComponents.Menu {...props}>
        <StylesProvider value={menuStyles}>{children}</StylesProvider>
      </selectComponents.Menu>
    );
  },
  MenuList: ({ innerRef, children, maxHeight }) => {
    const { list } = useStyles();
    return (
      <chakra.div
        sx={{
          ...list,
          maxH: `${maxHeight}px`,
          overflowY: "auto",
        }}
        ref={innerRef}
      >
        {children}
      </chakra.div>
    );
  },
  GroupHeading: ({ innerProps, children }) => {
    const { groupTitle } = useStyles();
    return (
      <chakra.div sx={groupTitle} {...innerProps}>
        {children}
      </chakra.div>
    );
  },
  Option: ({ innerRef, innerProps, children, isFocused, isDisabled }) => {
    const { item } = useStyles();
    return (
      <chakra.div
        role="button"
        sx={{
          ...item,
          w: "100%",
          textAlign: "left",
          bg: isFocused ? (item as RecursiveCSSObject<ItemProps>)._focus.bg : "transparent",
          ...(isDisabled && (item as RecursiveCSSObject<ItemProps>)._disabled),
        }}
        ref={innerRef}
        {...innerProps}
        {...(isDisabled && { disabled: true })}
      >
        {children}
      </chakra.div>
    );
  },
};

export const MultiSelectField = forwardRef(
  <
    OptionType extends OptionTypeBase = { label: string; value: string },
    IsMulti extends boolean = true,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
  >(
    {
      label,
      error,
      isRequired,
      name = "",
      styles = {},
      components = {},
      theme,
      ...props
    }: SelectProps<OptionType, IsMulti, GroupType> & IMultiSelectFieldProps,
    ref: ForwardedRef<any>
  ) => {
    const chakraTheme = useTheme();
    const placeholderColor = mode(chakraTheme.colors.gray[400], chakraTheme.colors.whiteAlpha[400]);
    const isInvalidInput = error !== undefined;

    return (
      <FormControl position="relative" isInvalid={isInvalidInput} isRequired={isRequired}>
        <FormLabel
          _focus={{
            color: mode("blue.600", "blue.300"),
          }}
          fontWeight="semibold"
          position="absolute"
          color={mode("gray.600", "white")}
          top="-4"
          insetStart="2"
          bg={{
            base: mode("white", "gray.800"),
            md: mode("white", "gray.700"),
          }}
          zIndex={2}
          px="2"
        >
          {label}
        </FormLabel>
        <Select
          className={`${isInvalidInput ? "multi-select-field-error" : ""}`}
          ref={ref}
          name={name}
          components={{
            ...(chakraComponents as SelectComponentsConfig<OptionType, IsMulti, GroupType>),
            ...components,
          }}
          styles={{
            control: (styles) => ({
              ...styles,
            }),
            ...(chakraStyles as StylesConfig<OptionType, IsMulti, GroupType>),
            ...styles,
          }}
          theme={(baseTheme) => ({
            ...baseTheme,
            borderRadius: chakraTheme.radii.md,
            colors: {
              ...baseTheme.colors,
              neutral50: placeholderColor, // placeholder text color
              neutral40: placeholderColor, // noOptionsMessage color
              ...(theme as Theme)?.colors,
            },
            spacing: {
              ...baseTheme.spacing,
              ...(theme as Theme)?.spacing,
            },
          })}
          {...props}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);
