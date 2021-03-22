import React, {useContext} from 'react';
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedTime} from "react-intl";
import {AppContext} from "../../contexts/AppContext";
import {Page} from "../../ui/atoms/Page/Page";

export const Languages = (): JSX.Element => {

    const context = useContext(AppContext);

    return (
        <Page htmlId='languages-page'>
            <select value={context.locale} onChange={context.selectLanguage}>
                <option value='en'>English</option>
                <option value='fr'>French</option>
            </select>
            <br/>
            <FormattedMessage
                id="app.channel.plug"
                defaultMessage="Tutorial brought to you by Lokalise"
                values={{blogName: "Lokalise"}}
            />
            <br/>
            <FormattedDate
                value={Date.now()}
                year='numeric'
                month='long'
                day='numeric'
                weekday='long'
            />
            <br/>
            <FormattedNumber
                value={20.42}
                style="currency"
                currencyDisplay="symbol"
                currency="USD"
            /><br/>
            <FormattedNumber
                value={10000}
            />
            <br/>
            <FormattedTime
                value={new Date()}
                hour="numeric"
                minute="numeric"
                second="numeric"
                timeZoneName="long"
            />
        </Page>
    );
};
