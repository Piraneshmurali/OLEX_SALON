import { Container, Text } from "@radix-ui/themes";

const imageCard = ({
  Imgurl,
  ProductName,
}: {
  Imgurl: string;
  ProductName: String;
}) => {
  return (
    <div>
      <Container className=" flex overflow-hidden border-yellow-700 border-4  bg-[#F8D3B8] h-96  w-72  justify-evenly mt-2 pt-2  rounded-lg">
        <Container className=" max-h-96  justify- flex ">
          <img src={Imgurl} height={100} />
        </Container>
        <br />

        <Text
          as="div"
          align={"center"}
          className=" bg-[#486978] w-full p-1 text-white"
        >
          {ProductName}
        </Text>
      </Container>
    </div>
  );
};

export default imageCard;
