const copyButton = document.getElementById("copy-button");
const copyIcon = document.getElementById("copy-icon");

copyButton.addEventListener("click", function (event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Buttons

    const textbox = document.getElementById("textbox");
    textbox.removeAttribute("readonly"); // Entfernt das readonly-Attribut
    textbox.select();
    document.execCommand("copy");
    // textbox.setAttribute("readonly", "readonly"); // Setzt das readonly-Attribut wieder

    copyIcon.src = "pictures/checkbox.png";

    window.open("https://amzn.to/43yL7J4", "_blank");
}); 
