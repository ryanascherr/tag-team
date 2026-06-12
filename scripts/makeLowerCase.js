// Make string lowercase and replace " " with "-" for image path
export function makeLowerCase(string) {
    string = string.toLocaleLowerCase();
    string = string.replace(/ /g, "-");

    return string;
}