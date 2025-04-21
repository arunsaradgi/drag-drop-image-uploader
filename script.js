const CLOUD_NAME = "dwsmxpmqs";
const UPLOAD_PRESET = "unsigned_upload"

const drop = document.querySelector('#drop_area');
const input = document.querySelector('#fileElement');
const browse = document.querySelector('#browse');
const gallery = document.querySelector('#gallery');

browse.onclick = () => input.click();

drop.ondragover = e => e.preventDefault();

drop.ondrop = e => {
    e.preventDefault();
    console.log(e)
    handleUpload(e.dataTransfer.files[0])
}

input.onchange = () => handleUpload(input.files[0])

function handleUpload(file) {
    if (!file.type.startsWith('image/')) return alert('only images are allowed')

    const form = new FormData()
    form.append('file', file);
    form.append('upload_preset', UPLOAD_PRESET)

    fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: form
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            displayImage(data.secure_url)

            //storing my data to LS
            const ToLS = JSON.parse(localStorage.getItem('images')) || [];
            ToLS.push(data.secure_url);
            localStorage.setItem('images', JSON.stringify(ToLS));
        })

        .catch(err => console.log(err))
}

function displayImage(url) {
    const img = document.createElement('img');
    img.src = url;
    gallery.appendChild(img)
}

window.addEventListener('DOMContentLoaded', () => {
    const LSImages = JSON.parse(localStorage.getItem('images')) || [];
    LSImages.forEach(ele => displayImage(ele));
});
