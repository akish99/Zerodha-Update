import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          import.meta.env.VITE_API_URL || "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (!status) {
          navigate("/login");
          return;
        }
        setUsername(user);
        toast(`Hello ${user}`, { position: "top-right" });
      } catch (error) {
        console.error("Unable to verify login", error);
        navigate("/login");
      }
    };
    verifyCookie();
  }, [navigate]);
  const Logout = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
