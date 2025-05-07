import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders";
import cocHome from "../assets/coc_home.jpg";

const Home = () => {
  const { clanInfo, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-xl text-primary"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="mb-15">
        <img src={cocHome} alt="cocHome" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to <span className="animated-text">Rajshahi king</span>
          </h1>
          <hr className="border-blue-500 border-t-2 w-1/4 mb-4" />
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Clan <span className="animated-text">Info</span>
          </h2>

          {/* table */}
          <div className="overflow-x-auto w-full max-w-2xl mb-15 mx-auto">
            <table className="table w-full text-center">
              <tbody>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Tag</td>
                  <td>{clanInfo.tag}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Name</td>
                  <td>{clanInfo.name}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Type</td>
                  <td>{clanInfo.type}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Level</td>
                  <td>{clanInfo.clanLevel}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Points</td>
                  <td>{clanInfo.clanPoints}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Builder Base Points</td>
                  <td>{clanInfo.clanBuilderBasePoints}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Clan Capital Points</td>
                  <td>{clanInfo.clanCapitalPoints}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Join Required Trophies</td>
                  <td>{clanInfo.requiredTrophies}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">War Frequency</td>
                  <td>{clanInfo.warFrequency}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">War Win Streak</td>
                  <td>{clanInfo.warWinStreak}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Total War Wins</td>
                  <td>{clanInfo.warWins}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">War Ties</td>
                  <td>{clanInfo.warTies}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">War Losses</td>
                  <td>{clanInfo.warLosses}</td>
                </tr>
                <tr className="hover:bg-base-300">
                  <td className="font-semibold">Total Members</td>
                  <td>{clanInfo.members}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
