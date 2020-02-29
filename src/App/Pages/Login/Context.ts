import { createContext, Dispatch } from 'react';

export default createContext<{
  showRegister: boolean;
  setShowRegister: Dispatch<React.SetStateAction<boolean>>;
}>({
  showRegister: false,
  setShowRegister: () => {},
});
