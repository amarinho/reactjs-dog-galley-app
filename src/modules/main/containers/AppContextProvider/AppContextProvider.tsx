import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../../../../lang/fr.json';
import English from '../../../../lang/en.json';
import { AppContext } from '../../contexts/AppContext';

export interface AppContextProvider {
    children: React.ReactNode;
}

const local = navigator.language.split(/[-_]/)[0];

const getSupportedLanguage = (locale: string) => {
    return locale === 'fr' ? 'fr' : 'en';
};

const getLanguageFile = (locale: string) => {
    return locale === 'fr' ? French : English;
};

export const AppContextProvider = ({children}: AppContextProvider): JSX.Element => {
    const [locale, setLocale] = useState<string>(getSupportedLanguage(local));
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const [messages, setMessages] = useState<any>(getLanguageFile(local));

    const selectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        setLocale(getSupportedLanguage(newLocale));
        setMessages(getLanguageFile(newLocale));
    };

    return (
        <AppContext.Provider value={{ locale: locale, selectLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </AppContext.Provider>
    );
};
