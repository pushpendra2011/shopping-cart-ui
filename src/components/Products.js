import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import productList from "../data/Products";
import AddProduct from "./AddProduct";
function Products() {
  return (
    productList && (
      //resposive display of grid
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6}>
        {productList.map((item) => (
        //map over productList and display the grid
          <>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={item.product_image} />

              <Flex align="center">
                <Link
                  to={{
                    pathname: `/product/${item.product_id}`,
                    state: item,
                  }}
                >
                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" color="primary.350">
                        New
                      </Badge>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      {item.product_name}
                    </Box>

                    <Box>{item.product_price} ₹</Box>
                  </Box>
                </Link>
              </Flex>
              <Flex>
                <Box p={6} align="center">
                  <AddProduct item={item} />
                </Box>
              </Flex>
            </Box>
          </>
        ))}
      </Grid>
    )
  );
}

export default Products;
