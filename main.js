function modalPopup(src) {

    document.getElementById('modalImage').src = 'Assets/Images/' + src;
    document.getElementById('modal').style.display='block';

}

function collapseModal(){

    document.getElementById('modal').style.display='none';
    
}