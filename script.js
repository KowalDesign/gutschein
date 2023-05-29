const copyButton = document.getElementById("copy-button");
const copyIcon = document.getElementById("copy-icon");

copyButton.addEventListener("click", function () {
    const textbox = document.getElementById("textbox");
    textbox.select();
    document.execCommand("copy");

    copyIcon.src = "pictures/checkbox.png";
    
    window.open("https://amzn.to/43yL7J4", "_blank");
});
