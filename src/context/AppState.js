import { createContext, useContext, useMemo, useState } from 'react';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [historico, setHistorico] = useState([]);               
  const [historicoCarbono, setHistoricoCarbono] = useState([]); 

  const value = useMemo(() => ({
    historico,
    setHistorico,
    historicoCarbono,
    setHistoricoCarbono,
  }), [historico, historicoCarbono]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
