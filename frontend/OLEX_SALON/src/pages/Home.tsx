import { useNavigate } from "react-router-dom";
import { BestSellers, HomeDiscription } from ".";
import { NavBar } from "../component";

const Home = () => {
  const to = useNavigate();

  return (
    <>
      <NavBar />
      <div className=" flex flex-col  max-w-screen-2xl items-center pt-8 space-y-10">
        <HomeDiscription />

        <BestSellers />
      </div>
    </>
  );
};

export default Home;
