function modalPopup(src) {

    document.getElementById('modalImage').src = 'Assets/Images/' + src;
    document.getElementById('modal').style.display = 'block';

    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}

function collapseModal() {

    document.getElementById('modal').style.display = 'none';

}