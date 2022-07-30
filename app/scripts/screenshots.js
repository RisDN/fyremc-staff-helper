const fs = require("fs");

let fileNames = [];
let screenshotsFolder;

const savedPath = localStorage.getItem("screenshotPath");
if (savedPath === null) {
    localStorage.setItem(
        "screenshotPath",
        `${process.env.HOME}/AppData/Roaming/.fyremc.hu/game/screenshots`
    );
    screenshotsFolder = `${process.env.HOME}/AppData/Roaming/.fyremc.hu/game/screenshots`;
} else {
    screenshotsFolder = localStorage.getItem("screenshotPath");
}
document.querySelector('#path-display').innerHTML = pathFormatter(screenshotsFolder)

document.querySelector('#open-path').addEventListener('click', () => {
    require('child_process').exec(`start "" "${screenshotsFolder}"`);
})

function pathFormatter(path) {
    if (path.length > 35) {
        return path.slice(0, 35) + '...'
    }
    return path
}
document.querySelector('#date-input').valueAsDate = new Date();

function loadImages() {
    let value = document.querySelector('#filter-type').value;
    fileNames = []
    switch (value) {
        case "date":
            let dateValue = document.querySelector("#date-input").value;
            fs.readdirSync(screenshotsFolder).forEach((file) => {
                let fileName = file
                file = file
                    .replaceAll(".png", "")
                    .replaceAll("-", " ")
                    .replaceAll("_", " ")
                    .replaceAll(".", " ")
                    .replace(' ', '-')
                    .replace(' ', '-');
                file = file.split(" ");


                if (file[0] == dateValue) {
                    fileNames.push(fileName)
                }
            });
            document.querySelector('#screenshots-count').innerHTML = `Screenshotok <span style="font-size: 30px; font-style: italic;">(${fileNames.length})</span>`
            displayImages(fileNames)
            break;

        case "days":
            document.querySelector("#days-input").style.display = "block";
            document.querySelector("#date-input").style.display = "none";
            break;
    }
}
loadImages()


function displayImages(filesList) {
    document.querySelector('.screenshots-holder').innerHTML = ''
    let counter = 0
    filesList.forEach(file => {
        counter++
        let newElement = document.createElement('div')
        newElement.className = 'image-holder'
        newElement.innerHTML =
            `
    	<div class="image">
			<span style="float: left; margin-left: 5px;">${counter}#</span>
    		<span>${file}</span>
    		<img src="${screenshotsFolder}/${file}" width="430" height="270" onclick="copyImage('${file}')">
		</div>
		`
        document.querySelector('.screenshots-holder').append(newElement)
    });
}

function copyImage(filename) {
    let path = `${screenshotsFolder}/${filename}`
    CopyImageClipboard.copyImageToClipboard(path)
}

const { dialog } = require('@electron/remote')
document.querySelector('#path-selector').addEventListener('click', () => {
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then(ertek => {
        if (ertek.filePaths[0] != undefined) {
            localStorage.setItem('screenshotPath', ertek.filePaths[0])
            screenshotsFolder = ertek.filePaths[0]
            window.location.reload()
        }
    })
})

/*
let msBetween = Math.abs(date.getTime() - now.getTime());
let daysBetween = parseInt(msBetween / (24 * 60 * 60 * 1000));
if (daysBetween < 1) {
fileNames.push(date);
}*/