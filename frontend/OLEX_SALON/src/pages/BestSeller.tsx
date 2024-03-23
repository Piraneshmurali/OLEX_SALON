import { Button, Container, Flex, Grid, Text } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardCustom } from "../component";

interface Productx {
  name: String;
  description: String;
  price: String;
  ImageUrl: string;
  category: String;
  _id: String;
}

const BestSeller = () => {
  const to = useNavigate();

  const [_ProductList, _setProductList] = useState<[Productx]>([
    {
      name: "",
      description: "",
      price: "",
      ImageUrl: "",
      category: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/product/getAll")
      .then((data) => {
        const productlist = data.data.data;
        _setProductList(productlist);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  }, [_ProductList]);
  return (
    <>
      <Grid
        columns={"2"}
        className=" h-screen w-screen max-h-screen max-w-screen bg-[#749EB4]"
      >
        <Container className=" flex justify-center ml-10 max-w-96">
          <Text weight={"bold"} className=" font-serif text-4xl text-white">
            Best Seller Products
          </Text>
          <br />
          <Text weight={"medium"} className="text-white">
            Embrace the essence of confidence and authenticity with every hair
            accessory you choose.
          </Text>
          <br />
          <br />
          <Button
            onClick={() => {
              to("/products");
            }}
            variant="outline"
            size={"4"}
            className=" border-white border-2  text-white  "
          >
            See More
          </Button>
        </Container>

        <Container className=" flex justify-center">
          <Flex gap={"4"} className=" pr-5">
            {_ProductList.slice(0, 3).map((product, index) => (
              <CardCustom
                key={index}
                name={product.name}
                price={product.price}
                imgurl={product.ImageUrl}
              />
            ))}
          </Flex>
        </Container>
      </Grid>
    </>
  );
};

export default BestSeller;
