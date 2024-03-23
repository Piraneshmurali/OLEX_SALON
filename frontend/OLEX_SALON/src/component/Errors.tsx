import { Callout } from "@radix-ui/themes";
import { BsInfoCircle } from "react-icons/bs";

const Errors = ({ Msg }: { Msg: String }) => {
  return (
    <Callout.Root>
      <Callout.Icon>
        <BsInfoCircle />
      </Callout.Icon>
      <Callout.Text>{Msg}</Callout.Text>
    </Callout.Root>
  );
};

export default Errors;
