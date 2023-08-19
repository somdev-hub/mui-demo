import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import Select from "../components/Select";

const MainPage = () => {
  const navigate = useNavigate();
  interface User {
    name: string;
    email: string;
    phone: string;
  }

  const userData: User = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!userData.name)
      navigate("/login", { state: { message: "Please register first" } });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Table />
      <Select />
    </div>
  );
};

export default MainPage;
