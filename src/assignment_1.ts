const modifyHex = (hex: string): string => {

    if (hex.length == 4) {
        hex = hex.replace("#", "")
    }

    if (hex.length == 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }

    return hex
}


interface RGBResponse {
    r: number;
    g: number;
    b: number;
}

const hexToRgb = (hex: string): RGBResponse => {
    hex = hex.replace("#", "");
    if (hex.length !== 6) {
        hex = modifyHex(hex);
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return { r, g, b };
}

const hex = "#FF9933";
const hex2 = "#FFF";
console.log(hexToRgb(hex2));