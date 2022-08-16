export function objectToLink(obj: any) {
    let part = '?';
    let isFirst = true;
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if (!isFirst) {
                part += '&' 
            } else isFirst = false;
            part += key + "=" + obj[key];
        });
        return part;
    }
    return '';
}