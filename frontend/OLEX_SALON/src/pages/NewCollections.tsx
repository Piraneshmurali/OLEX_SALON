import { Flex, Text } from "@radix-ui/themes";
import { NewArrivalCards } from "../component";

const NewCollections = () => {
  const ProductList = [
    {
      ProductName: "Fan Jersey -Dhoni",
      Url: "https://thunimany.in/wp-content/uploads/2022/04/yellove.jpg",
    },
    {
      ProductName: "Fan Jersey -Dhoni",
      Url: "https://thunimany.in/wp-content/uploads/2022/04/yellove.jpg",
    },
    {
      ProductName: "Fan Jersey -Dhoni",
      Url: "https://thunimany.in/wp-content/uploads/2022/04/yellove.jpg",
    },
    {
      ProductName: "Fan Jersey -Dhoni",
      Url: "https://thunimany.in/wp-content/uploads/2022/04/yellove.jpg",
    },
  ];
  return (
    <div>
      <center>
        <Text weight={"bold"} className=" text-3xl underline text-[#889A5E]">
          New Collection
        </Text>
        <br />
        <Text size={"4"}>
          Embrace the essence of confidence and authenticity with every garment
          you wear
        </Text>
      </center>
      <br />
      <Flex gap={"3"}>
        {ProductList.map((Product, index) => (
          <NewArrivalCards
            key={index}
            Imgurl={Product.Url}
            ProductName={Product.ProductName}
          />
        ))}
      </Flex>
    </div>
  );
};

export default NewCollections;
