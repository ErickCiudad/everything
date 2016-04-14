/**
 * Created by session2 on 2/19/16.
 */
console.log('yooo');

//function changeTheme(choice){
//    if (choice === "blue") {
//        document.body.style.backgroundColor = "blue";
//        document.body.innerHTML = 'ABCDEFG';
//    }
//}
//document.getElementById('main-content').style.backgroundColor = "red";

var color = false;
document.body.style.backgroundColor = color;
var image = 'https://loseitapp.files.wordpress.com/2014/09/istock_000014459318_double.jpg';
document.body.style.backgroundImage = "url('" + image + "')";
document.body.style.backgroundImage = image;

//function showPic(src) {
//    var img = document.createElement("img");
//    img.src = src;
//    img.width = 1000;
//    img.height = 1000;
//    img.zIndex = -1000;
//    img.bottom = -1000;
//    document.body.appendChild(img);
//}
//showPic('https://loseitapp.files.wordpress.com/2014/09/istock_000014459318_double.jpg');

//var div = document.createElement("div");
//div.style.width = "100%";
//div.style.height = "100px";
//div.style.background = "white";
//div.style.backgroundImage = "url('https://loseitapp.files.wordpress.com/2014/09/istock_000014459318_double.jpg')";
//div.style.color = "black";
//div.innerHTML = "Hello";

var blue = document.createElement('BUTTON');
var t = document.createTextNode("Blue");       // Create a text node
blue.appendChild(t);


document.body.appendChild(blue);
blue.onclick = function () {
    //alert("Success");
    color = '#05EDFF';
    document.body.appendChild(div);
};

////

var mint = document.createElement('BUTTON');
var p = document.createTextNode("Mint");       // Create a text node
mint.appendChild(p);


document.body.appendChild(mint);
mint.onclick = function () {
    //alert("Success");
    color = '#BDFCC9';
    document.body.appendChild(div);
};



var pic = document.createElement('BUTTON');
var r = document.createTextNode("Image");       // Create a text node
pic.appendChild(r);


document.body.appendChild(pic);
pic.onclick = function () {
    //alert("Success");
    image = prompt('Put in a url');
    document.body.appendChild(div);
    document.body.style.backgroundImage.url = (image);
};



function checkColor()
{
    document.body.style.backgroundColor = color;

    //document.body.style.backgroundImage.src = image;

}

setInterval(checkColor, 200);


