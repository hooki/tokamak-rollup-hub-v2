"use client";
import type { ButtonProps, TextProps } from "@chakra-ui/react";
import {
  Button,
  Pagination as ChakraPagination,
  IconButton,
  Text,
  createContext,
  usePaginationContext,
} from "@chakra-ui/react";
import * as React from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniEllipsisHorizontal,
} from "react-icons/hi2";
import { LinkButton } from "./link-button";

interface ButtonVariantMap {
  current: ButtonProps["variant"];
  default: ButtonProps["variant"];
  ellipsis: ButtonProps["variant"];
}

type PaginationVariant = "outline" | "solid" | "subtle";

interface ButtonVariantContext {
  size: ButtonProps["size"];
  variantMap: ButtonVariantMap;
  getHref?: (page: number) => string;
}

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
});

export interface PaginationRootProps
  extends Omit<ChakraPagination.RootProps, "type"> {
  size?: ButtonProps["size"];
  variant?: PaginationVariant;
  getHref?: (page: number) => string;
}

const variantMap: Record<PaginationVariant, ButtonVariantMap> = {
  outline: { default: "ghost", ellipsis: "plain", current: "outline" },
  solid: { default: "outline", ellipsis: "outline", current: "solid" },
  subtle: { default: "ghost", ellipsis: "plain", current: "subtle" },
};

export const PaginationRoot = React.forwardRef<
  HTMLDivElement,
  PaginationRootProps
>(function PaginationRoot(props, ref) {
  const { size = "sm", variant = "outline", getHref, ...rest } = props;
  return (
    <RootPropsProvider
      value={{ size, variantMap: variantMap[variant], getHref }}
    >
      <ChakraPagination.Root
        ref={ref}
        type={getHref ? "link" : "button"}
        {...rest}
      />
    </RootPropsProvider>
  );
});

export const PaginationEllipsis = React.forwardRef<
  HTMLDivElement,
  ChakraPagination.EllipsisProps
>(function PaginationEllipsis(props, ref) {
  const { size, variantMap } = useRootProps();
  return (
    <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
      <Button as="span" variant={variantMap.ellipsis} size={size}>
        <HiMiniEllipsisHorizontal />
      </Button>
    </ChakraPagination.Ellipsis>
  );
});

export const PaginationItem = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.ItemProps
>(function PaginationItem(props, ref) {
  const { page } = usePaginationContext();
  const { size, variantMap, getHref } = useRootProps();

  const current = page === props.value;
  const variant = current ? variantMap.current : variantMap.default;

  if (getHref) {
    return (
      <LinkButton href={getHref(props.value)} variant={variant} size={size}>
        {props.value}
      </LinkButton>
    );
  }

  return (
    <ChakraPagination.Item ref={ref} {...props} asChild>
      <Button
        variant={variant}
        size={size}
        width={"32px"}
        height={"32px"}
        borderRadius={"3px"}
        bgColor={page === props.value ? "#1C1C1C" : "transparent"}
        boxShadow={"none"}
        color={page === props.value ? "#FFF" : "#1C1C1C"}
        outline={"none"}
        border={"none"}
        _hover={{ bgColor: "#1C1C1C", color: "#FFF" }}
      >
        {props.value}
      </Button>
    </ChakraPagination.Item>
  );
});

export const PaginationPrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.PrevTriggerProps
>(function PaginationPrevTrigger(props, ref) {
  const { size, variantMap, getHref } = useRootProps();
  const { previousPage } = usePaginationContext();
  const { page } = usePaginationContext();
  if (getHref) {
    return (
      <LinkButton
        href={previousPage != null ? getHref(previousPage) : undefined}
        variant={variantMap.default}
        size={size}
      >
        <HiChevronLeft />
      </LinkButton>
    );
  }

  return (
    <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
      <IconButton
        cursor={"pointer"}
        variant={variantMap.default}
        size={size}
        bgColor={"transparent"}
        border={"none"}
        color={page === 1 ? "#86929D" : "#1C1C1C"}
        display={"flex"}
        alignItems={"center"}
        gap={"6px"}
        fontFamily={"Proxima Nova"}
        fontSize={"14px"}
        fontWeight={500}
      >
        <HiChevronLeft width={9} height={9} />
        Prev
      </IconButton>
    </ChakraPagination.PrevTrigger>
  );
});

export const PaginationNextTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraPagination.NextTriggerProps
>(function PaginationNextTrigger(props, ref) {
  const { size, variantMap, getHref } = useRootProps();
  const { nextPage } = usePaginationContext();
  const { page, totalPages } = usePaginationContext();
  if (getHref) {
    return (
      <LinkButton
        href={nextPage != null ? getHref(nextPage) : undefined}
        variant={variantMap.default}
        size={size}
      >
        <HiChevronRight />
      </LinkButton>
    );
  }

  return (
    <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
      <IconButton
        cursor={"pointer"}
        variant={variantMap.default}
        size={size}
        bgColor={"transparent"}
        border={"none"}
        color={page === totalPages ? "#86929D" : "#1C1C1C"}
        display={"flex"}
        alignItems={"center"}
        gap={"6px"}
        fontFamily={"Proxima Nova"}
        fontSize={"14px"}
        fontWeight={500}
      >
        Next
        <HiChevronRight width={9} height={9} />
      </IconButton>
    </ChakraPagination.NextTrigger>
  );
});

export const PaginationItems = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ChakraPagination.Context>
      {({ pages }) =>
        pages.map((page, index) => {
          return page.type === "ellipsis" ? (
            <PaginationEllipsis key={index} index={index} {...props} />
          ) : (
            <PaginationItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              fontFamily={"Proxima Nova"}
              fontWeight={500}
              cursor={"pointer"}
              key={index}
              type="page"
              value={page.value}
              {...props}
            />
          );
        })
      }
    </ChakraPagination.Context>
  );
};

interface PageTextProps extends TextProps {
  format?: "short" | "compact" | "long";
}

export const PaginationPageText = React.forwardRef<
  HTMLParagraphElement,
  PageTextProps
>(function PaginationPageText(props, ref) {
  const { format = "compact", ...rest } = props;
  const { page, totalPages, pageRange, count } = usePaginationContext();
  const content = React.useMemo(() => {
    if (format === "short") return `${page} / ${totalPages}`;
    if (format === "compact") return `${page} of ${totalPages}`;
    return `${pageRange.start + 1} - ${Math.min(
      pageRange.end,
      count
    )} of ${count}`;
  }, [format, page, totalPages, pageRange, count]);

  return (
    <Text fontWeight="medium" ref={ref} {...rest}>
      {content}
    </Text>
  );
});
