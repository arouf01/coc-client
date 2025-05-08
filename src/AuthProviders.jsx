import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [clanInfo, setclanInfo] = useState([]);
  const [warLogs, setWarLogs] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://coc-server-cvaj.onrender.com/api/clan-info"
      );
      const data = response.data;
      setclanInfo(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://coc-server-cvaj.onrender.com/api/war-logs"
      );
      const data = response.data;
      setWarLogs(data);
    })();
  }, []);

  const info = {
    clanInfo,
    loading,
    warLogs,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
