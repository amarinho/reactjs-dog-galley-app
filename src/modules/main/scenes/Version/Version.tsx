import React, {useState} from 'react';
import {Page} from "../../ui/atoms/Page/Page";
import {compareVersions} from "../../services/VersionService/VersionService";

export const Version = (): JSX.Element => {

    const [compare, setCompare] = useState<number | undefined | null>(undefined);
    const [version1, setVersion1] = useState<string>('');
    const [version2, setVersion2] = useState<string>('');

    const handleVersion1Change = (e:  React.ChangeEvent<HTMLInputElement>): void  => {
        setVersion1(e.target.value);
        setCompare(null);
    };

    const handleVersion2Change = (e:  React.ChangeEvent<HTMLInputElement>): void  => {
        setVersion2(e.target.value);
        setCompare(null);
    };

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const comparing = (e: React.MouseEvent): void  => {
        const result = compareVersions(version1, version2)
        setCompare(result);
    };

    return (
        <Page htmlId='version-page'>
            <form>
                <label htmlFor="version1">First version:</label><br/>
                <input type="text" id="version1" name="version1" onChange={handleVersion1Change} /><br/>
                <label htmlFor="version2">Second version:</label><br/>
                <input type="text" id="version2" name="version2" onChange={handleVersion2Change} /><br/>
                <input type="button" value="Submit" onClick={comparing} /><br/>
            </form>
            { (compare || compare === 0) &&
                <div>Comparing {version1} with {version2} results in {compare}</div>
            }
        </Page>
    );
};
