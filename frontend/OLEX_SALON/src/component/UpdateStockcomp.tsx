import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Box,
  Button,
  Callout,
  Flex,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";

const UpdateStockcomp = ({ _id }: { _id: String }) => {
  const [_Update, _SetUpdate] = useState<boolean>(false);
  const [_stock, _setStock] = useState<number>();
  const [_Error, _setError] = useState<any>();

  useEffect(() => {
    if (_Update) {
      axios
        .patch("http://localhost:8000/product/updatestock/" + _id, {
          stock: _stock,
        })
        .then(() => {
          _SetUpdate(false);
        })
        .catch((err) => {
          console.log("Update Failed ");
        });
    }
  }, [_Update]);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Flex>
          <Button color="violet">Update Inventory</Button>
        </Flex>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Updating Inventory</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Enter the New Inventory level
        </AlertDialog.Description>
        <br />
        {_Error && (
          <Callout.Root color="red">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{_Error[0].message}</Callout.Text>
          </Callout.Root>
        )}
        <Box>
          <TextField.Root>
            <TextField.Input
              placeholder="Invntory...in Numbers"
              onChange={async (e) => {
                const InventorySchema = z
                  .number({
                    required_error: "Inventory is required to proceed update",
                    invalid_type_error: "Inventory sholud be a number",
                  })
                  .positive("Inventory can not be less than Zero");

                const validation = await InventorySchema.safeParse(
                  parseInt(e.target.value)
                );

                if (!validation.success) {
                  _setStock(0);
                  _setError(validation.error.errors);
                }

                if (validation.success) {
                  _setError(null);
                  _setStock(parseInt(e.target.value));
                }
              }}
            />
          </TextField.Root>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Box>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Box>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Box>
                <Button
                  variant="solid"
                  color="red"
                  disabled={_Error}
                  onClick={() => {
                    _SetUpdate(true);
                  }}
                >
                  Update
                </Button>
              </Box>
            </AlertDialog.Action>
          </Flex>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default UpdateStockcomp;
