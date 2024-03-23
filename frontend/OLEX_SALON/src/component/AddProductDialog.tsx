import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenuIcon,
  InfoCircledIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Callout,
  Dialog,
  DropdownMenu,
  Flex,
  Grid,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import "firebase/storage";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TfiClose } from "react-icons/tfi";
import { z } from "zod";
import { ErrorsC } from ".";
import { ImageDb } from "./FirebaseConfig";

const FormValidationSchema = z.object({
  NewProductName: z.string().min(1, "Product Name is required"),
  NewProductDescription: z.string(),
  NewProductPrice: z.string().min(1, "Value must be greater than Zero"),
  NewProductUrl: z.object({}).required(),
});

type FormSchma = z.infer<typeof FormValidationSchema>;

const AddProductDialog = () => {
  const [isSubmitting, setSubmit] = useState<boolean>(false);
  const [_imgurl, setImgUrl] = useState<String>();
  const [isImg, setImg] = useState<File | null>(null);
  const [Catog, setCatog] = useState<"Male" | "Female" | "Uni-SEX">("Male");
  const [CausedError, SetCause] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchma>({
    resolver: zodResolver(FormValidationSchema),
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Flex className=" items-end justify-end m-5">
          <Button onClick={() => {}}>
            <PlusIcon /> Add Product
          </Button>
        </Flex>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Close>
          <Flex justify={"end"}>
            <TfiClose
              onClick={() => {
                reset();
                SetCause(false);
              }}
            />
          </Flex>
        </Dialog.Close>
        <br />
        <Dialog.Title>Add New Product</Dialog.Title>
        <Dialog.Description>
          enter the details of the product that you like to add
        </Dialog.Description>
        <br />
        {CausedError && (
          <Callout.Root color="red">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>UnExpected Error Occured</Callout.Text>
          </Callout.Root>
        )}
        <form
          onSubmit={handleSubmit(async (e) => {
            setSubmit(true);

            const ImgRef = ref(ImageDb, "imagessaloon/" + isImg?.name);
            await uploadBytes(ImgRef, isImg!).then((snapshot) => {
              console.log("uploaded" + snapshot.metadata);
            });

            await getDownloadURL(ImgRef)
              .then((url) => {
                console.log(
                  e.NewProductName +
                    Catog +
                    e.NewProductPrice +
                    url +
                    e.NewProductDescription
                );
                axios
                  .post("http://localhost:8000/product/create", {
                    name: e.NewProductName,
                    category: Catog,
                    price: e.NewProductPrice,
                    ImageUrl: url,
                    description: e.NewProductDescription,
                  })
                  .then(() => {
                    setSubmit(false);
                    SetCause(false);
                    reset();
                  })
                  .catch((e) => {
                    SetCause(true);
                    setSubmit(false);
                    console.log("Submition error" + e);
                  });
              })
              .catch((e) => {
                console.log("errpr" + e);
              });
          })}
        >
          <Flex direction={"column"} gap={"1"}>
            <Text>1. Name of the Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Name"
                title="NewProductName"
                {...register("NewProductName")}
              />
            </TextField.Root>
            {errors.NewProductName && (
              <ErrorsC Msg={errors.NewProductName.message!} />
            )}
            <br />
            <Text>2. Description about Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Product Description"
                title="NewProductDescription"
                {...register("NewProductDescription")}
              />
            </TextField.Root>
            {errors.NewProductDescription && (
              <ErrorsC Msg={errors.NewProductDescription.message!} />
            )}
            <br />
            <Text>2. Price Product</Text>
            <TextField.Root>
              <TextField.Input
                placeholder="Price... (in LKR)"
                title="NewProductPrice"
                {...register("NewProductPrice")}
              />
            </TextField.Root>
            {errors.NewProductPrice && (
              <ErrorsC Msg={errors.NewProductPrice.message!} />
            )}
            <br />
            <Text>3. Product Catogory</Text>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <TextField.Root>
                  <TextField.Slot>
                    <DropdownMenuIcon />
                  </TextField.Slot>
                  <TextField.Input
                    placeholder="Product Catogory"
                    onChange={() => {}}
                    value={Catog}
                  />
                </TextField.Root>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Male");
                  }}
                >
                  <Text>Male</Text>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Female");
                  }}
                >
                  <Text>Female</Text>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  onClick={() => {
                    setCatog("Uni-SEX");
                  }}
                >
                  <Text>Uni-Sex</Text>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <br />
            <Text>4. Upload a product Image</Text>
            <Grid columns={"2"}>
              <Box>
                <Flex justify={"center"} align={"center"} direction={"column"}>
                  <TextField.Root m={"4"}>
                    <TextField.Input
                      type="file"
                      accept="image/*"
                      {...register("NewProductUrl")}
                      onChange={(e) => {
                        setImg(e.target.files![0]);
                      }}
                    />
                  </TextField.Root>
                </Flex>
              </Box>
              <Box>
                <img
                  src={isImg ? URL.createObjectURL(isImg) : ""}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 100,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Box>
            </Grid>
            {errors.NewProductUrl && (
              <ErrorsC Msg={errors.NewProductUrl.message!} />
            )}
          </Flex>
          <br />

          <Flex justify={"end"}>
            <button
              type="submit"
              disabled={isSubmitting}
              className=" bg-red-400 pt-1 bt-b-1 pl-2 pr-2 rounded-md font-medium text-lg"
            >
              Save
            </button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddProductDialog;
