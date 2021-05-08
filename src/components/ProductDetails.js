import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import details from "../data/ProductDetails";
import AddProduct from "./AddProduct";
import prod from "../data/Products";
import NoProduct from "./NoProduct";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const param = useParams();
  let data = useLocation();

  useEffect(() => {
    const product_item = details.find((arr) => {
      return arr.product_id === +param.id;
    });
    // check when user directly comes to /product/1 istead of coming from catalogue screen
    if (!data.state) {
      data.state = prod.find((arr) => {
        return arr.product_id === +param.id;
      });
    }

    var merged = Object.assign({}, product_item, data.state);
    setProductDetails(merged);
  }, []);

  return (
    <div>
      {!(
        Object.keys(productDetails).length === 0 &&
        productDetails.constructor === Object
      ) ? (
        <Flex bg="primary.500">
          <Center>
            <Image maxH={420} src={data.state.product_image}></Image>
          </Center>
          <Box flex="1">
            <Text
              fontWeight="bolder"
              color="primary.350"
              fontSize="18px"
              align="center"
            >
              {productDetails.product_name}
            </Text>
            <Box p="4">
              <Text fontWeight="bold">
                {productDetails.product_seller_name}
              </Text>
              <Text color="primary.350">
                {productDetails.product_seller_description}
              </Text>
              <Text fontSize="32px" font-fontWeight="bold" color="primary.350">
                {productDetails.product_price}₹
              </Text>

              <Text>
                <Box d="flex" mt="2" alignItems="center">
                  {productDetails.product_ratings}
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        color={
                          i < productDetails.product_ratings ? "green" : "gray"
                        }
                      />
                    ))}
                  <Box as="span" ml="2" color="primary.500" fontSize="sm">
                    {productDetails.product_no_of_review} reviews
                  </Box>
                  <Box></Box>
                  <AddProduct item={productDetails} />
                </Box>
              </Text>
            </Box>
          </Box>
        </Flex>
      ) : (
        <NoProduct />
      )}
    </div>
  );
}

export default ProductDetails;
