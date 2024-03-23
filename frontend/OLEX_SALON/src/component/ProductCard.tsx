import { TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  HoverCard,
  IconButton,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { GiPoloShirt } from "react-icons/gi";
import { TbCashBanknote } from "react-icons/tb";
import { UpdateDialog } from ".";
import { PiFinnTheHuman } from "react-icons/pi";
import { PropsWithChildren, ReactNode } from "react";
import BadgeComponent from "./BadgeComponent";

const ProductCard = ({
  Name,
  ImgUrl,
  Price,
  Catagory,
  Discription,
  _id,
}: {
  Name: String;
  ImgUrl: string;
  Price: String;
  Discription: String;
  Catagory: "Uni-SEX" | "Male" | "Female";
  _id: String;
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Card className="  border-red-500 w-80 h-80 max-h-80 max-w-80 ">
          <Inset clip={"border-box"}>
            <img
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 150,
                backgroundColor: "var(--gray-5)",
              }}
              src={ImgUrl}
            />
          </Inset>
          <br />
          <Box>
            <Flex justify={"between"} align={"end"}>
              <Text weight={"medium"}>
                <Link className=" text-black">{Name}</Link>
              </Text>

              <Flex align={"center"}>
                <Container>
                  <UpdateDialog
                    name={Name.toString()}
                    price={Price.toString()}
                    imageurl={ImgUrl}
                    cato={"Male"}
                    desc={Discription.toString()}
                    _id={_id.toString()}
                  />
                </Container>
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Box>
                      <IconButton color="red">
                        <TrashIcon />
                      </IconButton>
                    </Box>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content>
                    <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
                    <AlertDialog.Description>
                      Do you want to proceed deletion of selected product?
                    </AlertDialog.Description>
                    <br />
                    <Flex justify={"end"} gap={"3"} align={"center"}>
                      <AlertDialog.Cancel>
                        <Box>
                          <Button color="gray" variant="soft">
                            Cancel
                          </Button>
                        </Box>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action>
                        <Box>
                          <Button
                            color="red"
                            onClick={() => {
                              axios
                                .delete(
                                  "http://localhost:8000/product/delete/" + _id
                                )
                                .then(() => {})
                                .catch(() => {});
                            }}
                          >
                            Yes, prceed Delete
                          </Button>
                        </Box>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>
              </Flex>
            </Flex>
            <Flex align={"center"} gap={"1"}>
              <TbCashBanknote />
              <Text>{Price}</Text>
            </Flex>
            <BadgeComponent catogory={Catagory} />

            <br />
          </Box>
        </Card>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Flex className=" max-w-xl">
          <Inset>
            <img
              src={ImgUrl}
              style={{
                display: "block",
                objectFit: "cover",
                width: "50%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Box>
            <Text>{Name}</Text>
            <br />
            <Text>{Discription}</Text>
          </Box>
        </Flex>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default ProductCard;
