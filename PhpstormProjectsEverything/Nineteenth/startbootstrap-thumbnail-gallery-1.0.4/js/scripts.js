/**
 * Created by session2 on 3/25/16.
 */
function expandImage(src){
    ReplacePic();
    Pic(src);
    document.getElementById('notes').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('expandedImage').style.display = 'block';
}

function Pic(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 80;
    img.height = 80;
    img.id = 'Picture';

// This next line will just add it to the <body> tag
    document.getElementById('expandedImage').appendChild(img);
}

function ReplacePic() {
    picture.parentNode.removeChild(picture)
}