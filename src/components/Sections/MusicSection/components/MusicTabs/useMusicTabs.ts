import { useState } from "react";

const useMusicTabs = () => {
  const [tabValue, setTabValue] = useState("dubstep");

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabValue: string
  ) => {
    setTabValue(newTabValue);
  };

  return {
    tabValue,
    handleTabChange,
  };
};

export default useMusicTabs;
