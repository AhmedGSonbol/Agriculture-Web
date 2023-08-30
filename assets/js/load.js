const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
console.log(language);

if(language === "en")
{

document.styleSheets[1].disabled = true

}
else
{

    document.styleSheets[1].disabled = false
}