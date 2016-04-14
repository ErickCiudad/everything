/**
 * Created by session2 on 11/24/15.
 */
function show_image(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function delete_image() {
    test.parentNode.removeChild(test);
}

//document.body.removeChild(img);

function create() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new");
    para.appendChild(node);
    var element = document.getElementById("screen");
    element.appendChild(para);
    para.id = 'id'
}

function replace() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is coral");
    para.appendChild(node);
    var parent = document.getElementById("screen");
    var child = document.getElementById("id");
    parent.replaceChild(para,child);
}

///////////////////
function specialCreate(){
    var para = document.createElement("p");
    var node = document.createTextNode("Special af");
    para.appendChild(node);
    var element = document.getElementById("screen");
    element.appendChild(para);
    para.id = 'special';
    document.getElementById('special').addEventListener("click", function(){
        displayBanana('http://www.solagriasrl.it/wp-content/uploads/2014/05/banana.jpg',150, 150, 'Banana', 'banana');
    });

    var para2 = document.createElement("p");
    var node2 = document.createTextNode("Twice as special!");
    para2.appendChild(node2);
    para2.id = 'secondSpecial';
    var child = document.getElementById("special");
    parent.replaceChild(para,child);

}

function specialReplace() {

    var para = document.createElement("p");
    var node = document.createTextNode("Twice as special!");
    para.appendChild(node);
    para.id = 'secondSpecial';
    var child = document.getElementById("special");
    parent.replaceChild(para,child);
}

///////////////////

function displayApple(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
//////////////////////////////////
    //removes previous onclick
    document.getElementById("appleButton").removeEventListener("click", function(){
        displayApple('http://images6.fanpop.com/image/photos/34900000/Apple-fruit-34914779-260-295.jpg',150, 150, 'Apple', 'apple');
    });

    //////////////////////////////
    document.getElementById("appleButton").addEventListener("click", function(){
        displayBanana('http://www.solagriasrl.it/wp-content/uploads/2014/05/banana.jpg',150, 150, 'Banana', 'banana');
    });
    //DALTONS HELP
    //state++;
    //if()
}



function displayBanana(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

/////////////////////////////

/////////////////////////////

/////////////////////////////

/////////////////////////////
var number = 1;

function numberCount() {
    console.log(number);
    if (number === 1) {
            numberPic('http://ecx.images-amazon.com/images/I/81XUl-A7UZL._SL1500_.jpg', 200, 250, 'one', 'one');
        number++;
        return;
    }
    if (number === 2) {
        numberPic('https://s3.amazonaws.com/rapgenius/1367562378_2-chainz-rapradar.jpg', 200, 250, 'two', 'two');
        number++;
        return;
    }
    if (number === 3) {
        number++;
        numberPic('https://upload.wikimedia.org/wikipedia/en/a/ae/Healthywealthy.jpg', 200, 250, 'three', 'three');
        return;
    }
    if (number === 4) {
        number++;
        numberPic('https://underdesign.files.wordpress.com/2010/08/4loko_watermelon.jpg', 200, 250, 'four', 'four');
        return;
    }
    if (number === 5) {
        number++;
        numberPic('https://www.charlescountymd.gov/sites/default/files/coadmin/tourism/fiveguys.jpg', 200, 250, 'five', 'five');
        return;
    }
    if (number === 6) {
        number++;
        numberPic('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jmPHp_C1fkGOvJyp-SZCabTb5Tvn2W49a2_Kc2IbNt96CsO0', 200, 250, 'five', 'five');
        return;
    }
    else {alert("outta numbers")}
}

function numberPic(src, width, height, alt, id) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.id = id;
// This next line will just add it to the <body> tag
    document.body.appendChild(img);
}






