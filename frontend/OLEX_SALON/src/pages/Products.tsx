"use client";
import { Flex, Grid, Select, SelectContent, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavBar, NewProductCard, ProductCard } from "../component";
import { BiComment, BiFemaleSign, BiMale } from "react-icons/bi";
import { IoMale } from "react-icons/io5";
import { BsGenderNeuter } from "react-icons/bs";

interface Productx {
  name: String;
  description: String;
  price: String;
  ImageUrl: string;
  category: "Uni-SEX" | "Female" | "Male";
  stock: string;
  _id: String;
}

const Cloths = () => {
  const to = useNavigate();

  const [_Loading, _setLoading] = useState(false);
  const [_SearchQuote, _setSearchQuote] = useState("");
  const [_Selection, _setselection] = useState<
    "All" | "Uni-SEX" | "Female" | "Male"
  >("All");
  const [_ProductList, _setProductList] = useState<[Productx]>([
    {
      name: "",
      description: "",
      price: "",
      ImageUrl: "",
      category: "Male",
      _id: "",
      stock: "",
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
  }, []);

  useEffect(() => {
    if (_Selection == "All") {
      axios
        .get("http://localhost:8000/product/getAll")
        .then((data) => {
          const productlist = data.data.data;
          _setProductList(productlist);
        })
        .catch((error) => {
          console.log("Error" + error);
        });
    } else {
      axios
        .get("http://localhost:8000/product/getfiltered/" + _Selection)
        .then((data) => {
          const productlist = data.data.data;
          _setProductList(productlist);
        })
        .catch((error) => {
          console.log("Error" + error);
        });
    }
  }, [_Selection, _ProductList]);

  return (
    <>
      <NavBar />
      <br />
      <center>
        <div className=" max-w-2xl flex space-x-4">
          <TextField.Root>
            <TextField.Slot>
              <FaMagnifyingGlass />
            </TextField.Slot>
            <TextField.Input
              className=" w-80"
              placeholder=" Name of the Product..."
              onChange={(d) => {
                _setSearchQuote(d.currentTarget.value);
              }}
            />
          </TextField.Root>

          <Select.Root
            defaultValue="All"
            onValueChange={(e) => {
              switch (e) {
                case "All":
                  _setselection("All");
                  break;
                case "Male":
                  _setselection("Male");
                  break;
                case "Female":
                  _setselection("Female");
                  break;
                case "Uni-SEX":
                  _setselection("Uni-SEX");
                  break;

                default:
                  break;
              }
            }}
          >
            <Select.Trigger />
            <SelectContent>
              <Select.Item value="All">
                <Flex align={"center"} gap={"1"}>
                  <BiComment />
                  All
                </Flex>
              </Select.Item>
              <Select.Item value="Male">
                <Flex align={"center"} gap={"1"}>
                  <IoMale />
                  Men
                </Flex>
              </Select.Item>
              <Select.Item value="Female">
                <Flex align={"center"} gap={"1"}>
                  <BiFemaleSign />
                  Women
                </Flex>
              </Select.Item>
              <Select.Item value="Uni-SEX">
                <Flex align={"center"} gap={"1"}>
                  <BsGenderNeuter />
                  Uni-Sex
                </Flex>
              </Select.Item>
            </SelectContent>
          </Select.Root>
        </div>
      </center>
      <br />

      <NewProductCard />

      <Flex justify={"center"} width={"100%"}>
        <Grid
          justify={"center"}
          align={"center"}
          columns={{ initial: "1", sm: "2", md: "3", lg: "4" }}
          mt={"3"}
          gapY={"3"}
          gapX={"8"}
        >
          {_ProductList
            .filter((product) =>
              _SearchQuote.toLocaleLowerCase() == ""
                ? product
                : product.name
                    .toLocaleLowerCase()
                    .includes(_SearchQuote.toLocaleLowerCase())
            )
            .map((product, index) => (
              <ProductCard
                key={index}
                Price={product.price}
                Discription={product.description}
                Catagory={product.category}
                Name={product.name}
                ImgUrl={product.ImageUrl}
                stock={product.stock}
                _id={product._id}
              />
            ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Cloths;
