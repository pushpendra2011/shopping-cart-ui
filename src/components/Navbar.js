import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FcShop } from "react-icons/fc";
import CartItems from "./CartItems";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={"primary.500"}
      color={"primary.350"}
    >
      <Flex align="center">
        <Link to="/">
          <Icon as={FcShop} w={16} h={16} />
        </Link>
      </Flex>
      <Box>
        <Flex align={"center"} pt={[4, 4, 0, 0]}>
          <Box p="4">
            <h2>Welcome to BuyNURSERY</h2>
          </Box>
          <CartItems />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
