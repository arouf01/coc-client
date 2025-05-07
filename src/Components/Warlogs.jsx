import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders";

const Warlogs = () => {
  const { loading, warLogs } = useContext(AuthContext);
  const allWars = warLogs?.items;
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl text-primary"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-semibold mb-6  py-15 text-center">
          Our War <span className="animated-text">Logs</span>
        </h2>
      </div>
      <div className="overflow-x-auto w-full mx-auto mb-15">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th>Opponent Tag</th>
              <th>Opponent Name</th>
              <th>Opponent Clan Level</th>
              <th>Team Size</th>
              <th>Our Clan Tag</th>
              <th>Our Clan Name</th>
              <th>Our Clan Level</th>
              <th>Our War Status</th>
            </tr>
          </thead>
          <tbody>
            {allWars.map((result) => (
              <tr className="hover:bg-base-300">
                <td>{result?.opponent?.tag}</td>
                <td>{result?.opponent?.name}</td>
                <td>{result?.opponent?.clanLevel}</td>
                <td>{result?.teamSize}</td>
                <td>{result?.clan?.tag}</td>
                <td>{result?.clan?.name}</td>
                <td>{result?.clan?.clanLevel}</td>
                <td>{result?.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Warlogs;
