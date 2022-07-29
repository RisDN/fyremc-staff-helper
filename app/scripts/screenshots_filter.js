const filterType = document.querySelector("#filter-type");
filterType.addEventListener("change", () => {
    let value = filterType.value;
    switch (value) {
        case "date":
            document.querySelector("#date-input").style.display = "block";
            document.querySelector("#days-input").style.display = "none";
            loadImages()
            break;
        case "days":
            document.querySelector("#days-input").style.display = "block";
            document.querySelector("#date-input").style.display = "none";
            loadImages()
            break
        default:
            break;
    }
});