window.addEventListener("load", function () {

    alert("Page ready");

    const form = document.getElementById("nameForm");
    const input = document.getElementById("nameInput");
    const list = document.getElementById("nameList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = input.value.trim();

        if (name === "") {
            return;
        }

        const item = document.createElement("li");
        item.textContent = name;

        list.appendChild(item);

        input.value = "";
        input.focus();
    });

});