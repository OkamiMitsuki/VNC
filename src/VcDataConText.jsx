import { createContext, useState, useContext } from "react";

const VcDataContext = createContext();

export function useVcDataContext() {
  return useContext(useVcDataContext);
}

export function VcDataProvider({ children }, { VcData }) {
  const [VcState, SetVcState] = useState({
    VcData: VcData,
    ExLoop: 0,
    Track: 0,
  });
  const value = {
    VcState,
    SetVcState,
  };

  return (
    <VcDataContext.Provider value={value}>{children}</VcDataContext.Provider>
  )
}