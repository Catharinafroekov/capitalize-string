/* const aName = "Catharina";
const third = (aName.substring(0,2).toLowerCase() + aName.substring(2, 3).toUpperCase() + aName.substring(3).toLowerCase());
console.log (third) */

/* const aName = "catharina";
const third = (aName.substring(0,1).toUpperCase() + aName.substring(1).toLowerCase());
console.log (third) */

let theText = "Kaj og Andrea spiser solsikkefrø";
const modifiedText = theText.replaceAll("spiser", "fråder");
/* console.log(modifiedText);
 */
const splitText = theText.split(" ");
console.log(splitText.join(" "));