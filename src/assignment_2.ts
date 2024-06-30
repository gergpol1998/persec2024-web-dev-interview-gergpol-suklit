const sortStrings = (arrStr: string[]): string[] => {

    arrStr.sort((a, b) => {
        if (a.startsWith("TH") && b.startsWith("TH")) {
            const numA = parseInt(a.substring(2,4),10);
            const numB = parseInt(b.substring(2,4),10);
            
            return numA - numB;
        } else {
            return a.localeCompare(b);
        }
    });

    return arrStr;
}

const stringArray = ["TH19", "SG20", "TH2"]
const stringArray2 = ["TH10", "TH3Netflix", "TH1", "TH7"]

console.log(sortStrings(stringArray))