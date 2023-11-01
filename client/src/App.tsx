import axios from "axios";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState<string>("");
  const axiosGetTestHandler = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getTest");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const axiosPostTestHandler = async () => {
    console.log(username);
    try {
      const response = await axios.post(
        "http://localhost:8000/postTest",
        {
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col w-64">
      <div className="text-3xl">Starting point</div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="border-2"
      ></input>
      <button
        onClick={() => axiosGetTestHandler()}
        className="border-2 bg-sky-600"
      >
        Axios Get Test
      </button>
      <button
        onClick={() => axiosPostTestHandler()}
        className="border-2 bg-rose-700"
      >
        Axios Post Test
      </button>
    </div>
  );
}

export default App;
