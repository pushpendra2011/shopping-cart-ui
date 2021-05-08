import { Button } from "@chakra-ui/button";
import { FaCartPlus } from "react-icons/fa";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { useContext, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { shoppingCartContext } from "../App";

function AddProduct({ item }) {
  const { addItem } = useContext(shoppingCartContext);

  // capture number that user has selected in the number selector
  const [num, setNum] = useState(1);
  const numHandler = (item, num) => {
    addItem(item, num);
    //once item is added to cart, set the num back to 1
    setNum(1);
  };
  return (
    <Flex align="center" direction={["column", "column", "row", "row"]}>
      <Box px={4}>
        <NumberInput
          defaultValue={1}
          min={1}
          value={num}
          onChange={(number) => setNum(+number)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Spacer />
      <Box w="100%">
        <Button
        width="100%"
          leftIcon={<FaCartPlus />}
          color={["primary.500"]}
          bg={["primary.150"]}
          onClick={() => numHandler(item, num)}
          _hover={{
            bg: ["primary.450"],
            color: ["primary.250"],
          }}
          variant="solid"
        >Add</Button>
      </Box>
    </Flex>
  );
}

export default AddProduct;
