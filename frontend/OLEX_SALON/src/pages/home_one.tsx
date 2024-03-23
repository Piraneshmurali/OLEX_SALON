import { Box, Button, Container, Grid, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const home_one = () => {
  const to = useNavigate();
  return (
    <div className=" pl-8 pr-8">
      <Grid columns={{ initial: "1", md: "2" }} align={"start"}>
        <Box className=" pt-10">
          <Text
            weight={"bold"}
            size={"8"}
            className=" text-[#436D83] font-serif "
          >
            Discover the perfect hair style that suits you best.
          </Text>
          <br />
          <Text size={"4"}>
            Elevate your look with our Salon, where style meets individuality.
            Discover a world of contemporary hairstyles, quality treatments, and
            statement looks that empower you to express your unique personality.
            Our salon is dedicated to creating diverse hair solutions for all
            ages, genders, and occasions. From trendy everyday styles to elegant
            formal updos, we've got you covered.
          </Text>
          <br />
          <br />
          <Button
            size={"4"}
            onClick={() => {
              to("/products");
            }}
          >
            Shop Now
          </Button>
          <Container className=" sm:hidden  flex justify-center items-center">
            <img src="https://images.pexels.com/photos/973402/pexels-photo-973402.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </Container>
        </Box>
        <Box>
          <Container className=" sm:block hidde flex justify-center items-center">
            <img src="https://images.pexels.com/photos/973402/pexels-photo-973402.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default home_one;
