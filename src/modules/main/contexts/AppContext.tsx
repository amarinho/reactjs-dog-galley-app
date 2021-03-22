import React, { createContext } from 'react';

export interface AppContextProps {
    locale: string;
    selectLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AppContext = createContext<Partial<AppContextProps>>({});
