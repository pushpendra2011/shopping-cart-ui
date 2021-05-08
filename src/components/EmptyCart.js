import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import { MdHourglassEmpty } from "react-icons/md";
function EmptyCart() {
  return (
    <div>
      <Flex justify="center">
        <Icon
          just
          fill="primary.500"
          as={MdHourglassEmpty}
          h={56}
          w={56}
        ></Icon>
      </Flex>
      <Flex justify="center">
        <Text color="primary.350">You cart is empty</Text>
      </Flex>
    </div>
  );
}

export default EmptyCart;
