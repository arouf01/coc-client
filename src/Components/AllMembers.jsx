import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders";

const AllMembers = () => {
  const { clanInfo, loading } = useContext(AuthContext);
  const memberList = clanInfo.memberList;

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
          Total Clan Member{" "}
          <span className="animated-text">{clanInfo.members}</span>
        </h2>

        {/* table */}
        <div className="overflow-x-auto w-full mx-auto mb-15">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Clan Rank</th>
                <th>Name</th>
                <th>Role</th>
                <th>Town Hall Level</th>
                <th>EXP Level</th>
                <th>Trophies</th>
                <th>Builder Base Trophies</th>

                <th>Donated</th>
                <th>Donations Received</th>
              </tr>
            </thead>
            <tbody>
              {memberList.map((member) => (
                <tr className="hover:bg-base-300">
                  <td>{member.tag}</td>
                  <td>{member.clanRank}</td>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.townHallLevel}</td>
                  <td>{member.expLevel}</td>
                  <td>{member.trophies}</td>
                  <td>{member.builderBaseTrophies}</td>

                  <td>{member.donations}</td>
                  <td>{member.donationsReceived}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMembers;
