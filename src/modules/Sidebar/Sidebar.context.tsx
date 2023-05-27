import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

export interface ISidebarContextProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<Partial<ISidebarContextProps>>({});

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
