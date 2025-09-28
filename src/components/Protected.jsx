import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (!userId) {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default Protected;
