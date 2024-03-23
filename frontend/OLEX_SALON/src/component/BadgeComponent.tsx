import { Badge, Flex, Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";
import { PiFinnTheHuman } from "react-icons/pi";

interface Props {
  Children: PropsWithChildren;
}

const BadgeComponent = ({
  catogory,
}: {
  catogory: "Uni-SEX" | "Male" | "Female";
}) => {
  if (catogory == "Uni-SEX")
    return (
      <Badge color="violet">
        <Flex align={"center"} gap={"1"}>
          <PiFinnTheHuman />
          <Text>{catogory}</Text>
        </Flex>
      </Badge>
    );
  else if (catogory == "Male")
    return (
      <Badge color="green">
        <Flex align={"center"} gap={"1"}>
          <PiFinnTheHuman />
          <Text>{catogory}</Text>
        </Flex>
      </Badge>
    );
  else {
    return (
      <Badge color="yellow">
        <Flex align={"center"} gap={"1"}>
          <PiFinnTheHuman />
          <Text>{catogory}</Text>
        </Flex>
      </Badge>
    );
  }
};

export default BadgeComponent;
