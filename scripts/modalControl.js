export function openModal(src) {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").classList.add("open");
    document.querySelector(".modal img").setAttribute('src', src);
}

export function closeModal() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".modal").classList.remove("open");
    document.querySelector(".modal img").setAttribute('src', "");
}