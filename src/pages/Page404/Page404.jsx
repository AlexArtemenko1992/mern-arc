import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default Page404;
