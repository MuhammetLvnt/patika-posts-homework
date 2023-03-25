import React, { useEffect, useState } from "react";
import { getData } from "../App";

function Posts() {
  const [number, setNumber] = useState();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (number !== "") {
      const fetchData = async () => {
        try {
          const result = await getData(number);
          setUserData(result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [number]);
  return (
    <div>
      <div className="grid justify-items-center">
        <input
          className="border mt-10"
          placeholder="Bir sayı giriniz."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      {userData && (
        <div>
          <pre>{JSON.stringify(userData.user, null, 2)}</pre>
          {"Post :"} <pre>{JSON.stringify(userData.posts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Posts;
