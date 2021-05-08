import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import { FaSadCry } from "react-icons/fa";

function NoProduct() {
  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      <Icon fill="primary.500" as={FaSadCry} h={56} w={56}></Icon>
      <Text  color="primary.350">
        No Product found!
      </Text>
    </Flex>
  );
}

export default NoProduct;
