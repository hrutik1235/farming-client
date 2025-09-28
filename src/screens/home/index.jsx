import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/api";

const Home = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axiosInstance
      .get("/user")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* NAVBAR */}
      <div className="py-4 border-b border-gray-300 shadow-sm flex justify-between px-5">
        <div>
          <p>Welcome: {userData?.data.user.display_name || ""}</p>
        </div>

        <div>Wallet Balance: {userData?.data.wallet.balance || 0}</div>
      </div>
      <div className="flex "></div>
      <div className="grid grid-cols-10 mx-5 mt-10 gap-0.5">
        {userData?.data ? (
          userData.data.land
            .sort((a, b) => a.position - b.position)
            .map((land) => {
              return (
                <div className="w-full h-8 rounded-sm bg-gray-100 border border-gray-200 cursor-pointer"></div>
              );
            })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
