const user = localStorage.getItem("data");
let data = JSON.parse(user);
document.getElementById("user-name-div").innerHTML = data.name;
document.getElementById("age-value").innerHTML = data.age;
document.getElementById("education-value").innerHTML = data.education;
document.getElementById("status-value").innerHTML = data.status;
document.getElementById("occupation-value").innerHTML = data.occupation;
document.getElementById("location-value").innerHTML = data.location;
document.getElementById("tech-literte-value").innerHTML = data.techLiterte;
document.getElementById("summary-value").innerHTML = data.summary;
document.getElementById("bio-value").innerHTML = data.bio;

// document.getElementById('user-photo').style.background = 'url(./ellipse1.png)';
// document.getElementById('user-photo').style.background = "url('./ellipse1.png')";

// document.getElementById('user-photo').style.backgroundImage = "url('" + data.image + "')";
document.getElementById('img').src = data.image;

let maxPersonalityAtrrsNumber = 3;
let persList = data.personality;
for (i = 0; i < maxPersonalityAtrrsNumber && i < persList.length; i++) {
    document.getElementById("characteristic" + (i + 1) + "-value").innerHTML = persList[i];
    //document.getElementsByClassName("characteristic" + (i + 1) + "-frame").style.visibility = "visible";
    //?document.getElementsByClassName("characteristic" + (i + 1) + "-frame").style.background = "#F2F2F2";
    document.getElementById("frame-" + (i + 1)).style.background = "#F2F2F2";

}


let maxNeedsAtrrsNumber = 3;
let needsList = data.needs;
for (i = 0; i < maxNeedsAtrrsNumber && i < needsList.length; i++) {
    document.getElementById("need" + (i + 1) + "-value").innerHTML = needsList[i];
}

let maxFrustrationsAtrrsNumber = 3;
let frustrationsList = data.frustrations;
for (i = 0; i < maxFrustrationsAtrrsNumber && i < frustrationsList.length; i++) {
    document.getElementById("frustration" + (i + 1) + "-value").innerHTML = frustrationsList[i];
}

let maxBrandsNumber = 6;
let brandsList = data.brands;
for (i = 0; i < maxBrandsNumber && i < brandsList.length; i++) {
    document.getElementById("brand" + (i + 1) + "-value").style.background = "url('" + brandsList[i] + "')"
}



let paymentAtrrsNumber = 2;
let paymentList = data.payment;
for (i = 0; i < paymentAtrrsNumber && i < paymentList.length; i++) {
    let payment = paymentList[i];
    document.getElementById("payment" + (i + 1) + "-value").innerHTML = payment.label;
    document.getElementById("payment-icon" + (i + 1) + "-value").style.background = "url('" + payment.img + "')";
}

let platformAtrrsNumber = 2;
let platformList = data.platform;
for (i = 0; i < platformAtrrsNumber && i < platformList.length; i++) {
    let platform = platformList[i];
    document.getElementById("platform" + (i + 1) + "-value").innerHTML = platform.label;
    document.getElementById("platform-icon" + (i + 1) + "-value").style.background = "url('" + platform.img + "')";

}


