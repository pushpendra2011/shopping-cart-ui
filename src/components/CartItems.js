import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { RiIndeterminateCircleFill } from "react-icons/ri";
import { shoppingCartContext } from "../App";
import EmptyCart from "./EmptyCart";
function CartItems() {
  const { addItem, cart, removeItem, deleteItem } = useContext(
    shoppingCartContext
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || null)
  const btnRef = React.useRef();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const totalOfCart = cart.reduce((acc, currProduct) => {
        const { product_price, quantity } = currProduct;
        const totalPrice = parseFloat(product_price) * quantity;

        return acc + totalPrice;
      }, null);
      setTotal(totalOfCart);
    }
  }, 
  // [isOpen, addItem, removeItem]);
  [isOpen, cart]);

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<FaCartPlus />}
        color={["primary.500"]}
        bg={["primary.150"]}
        _hover={{
          bg: ["primary.450"],
          color: ["primary.250"],
        }}
        variant="solid"
      >
        Check cart
      </Button>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My cart</DrawerHeader>

          <DrawerBody>
            {cart.length > 0 ? (
              <Table variant="simple">
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th>Products</Th>
                    <Th>
                      <div>Price /</div>
                      <div>Qty</div>
                    </Th>
                    <Th>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
                  {cart.map((cart) => (
                    <Tr>
                      <Td>{cart.product_name}</Td>
                      <Td>
                        <Flex direction="column" align="center">
                          <Box>{cart.product_price}</Box>
                          <Flex align="center">
                            <Button
                              bg="primary.500"
                              _hover={{
                                bg: ["primary.450"],
                                color: ["primary.250"],
                              }}
                              onClick={() => addItem(cart, 1)}
                            >
                              +
                            </Button>
                            <Text px={2}>{cart.quantity}</Text>
                            <Button
                              disabled={cart.quantity <= 1}
                              onClick={() => removeItem(cart, 1)}
                            >
                              -
                            </Button>
                          </Flex>
                        </Flex>
                      </Td>

                      <Td>
                        <Text>{cart.quantity * cart.product_price}</Text>
                      </Td>
                      <Td>
                        <Icon
                          fill="indianred"
                          onClick={() => deleteItem(cart.product_id)}
                          as={RiIndeterminateCircleFill}
                          w={8}
                          h={8}
                        />

                        {/* <Icon as {RiIndeterminateCircleFill}  fill="indianred"  */}

                        {/* w={16} h={16} /> */}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            ) : (
              <EmptyCart/>
              // <h1>Nothing in cart</h1>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Flex align="center" justify="flex-end">
              {total && (
                <>
                  <Box
                    fontSize="16px"
                    fontWeight="bold"
                    color="primary.200"
                    p="5"
                  >
                    ${total}
                  </Box>
                  <Spacer />
                </>
              )}
              <Box>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Back
                </Button>
                <Button bg="primary.450" color="white">
                  Proceed
                </Button>
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartItems;

// export default function RightDrawer() {

//   }
