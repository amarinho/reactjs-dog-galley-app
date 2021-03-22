const compare = (a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
};

export const compareVersions = (version1, version2) => {
    const version1Array = version1.toString().split('.');
    const version2Array = version2.toString().split('.');

    const smallerArrayLength = version1Array.length > version2Array.length
        ? version2Array.length : version1Array.length;

    let result = 0;
    let idx = 0;
    while(result === 0 && idx < smallerArrayLength) {
        result = compare(Number(version1Array[idx]), Number(version2Array[idx]));
        if (result !== 0) return result;
        idx = idx + 1;
    }

    if(result === 0 && version1Array.length  === version2Array.length) {
        return result;
    }

    return version1Array.length > version2Array.length
        ? 1 : -1;
};
