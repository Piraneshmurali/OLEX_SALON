import { Box, Container, Text } from "@radix-ui/themes";

const Card = ({
  imgurl,
  name,
  price,
}: {
  imgurl: string;
  name: String;
  price: String;
}) => {
  return (
    <Container className=" max-h-80 max-w-64 flex">
      <Box className=" max-h-72  h-72 border-2 border-white bg-gray-400 overflow-hidden">
        <img
          src={imgurl}
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
        />
      </Box>
      <Box className=" flex items-center mt-2 justify-center flex-col">
        <Text weight={"light"} className=" text-white">
          {name}
        </Text>
        <Text weight={"light"} className=" text-white">
          Price {price}LKR
        </Text>
      </Box>
    </Container>
  );
};

export default Card;
