let image = "";

function readUserPhoto() {

    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            image = e.target.result;
            console.log(image);
        });

        FR.readAsDataURL(this.files[0]);
    }

}

document.getElementById("user-photo").addEventListener("change", readUserPhoto);




// document.getElementById("submit").addEventListener("click", readUserData);

function readUserPersonalData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let education = document.getElementById("education").value;
    let status = document.getElementById("status").value;
    let occupation = document.getElementById("occupation").value;
    let location = document.getElementById("location").value;
    let techLiterte = document.getElementById("tech-literte").value;
    let summary = document.getElementById("summary").value;
    let bio = document.getElementById("bio").value;

    // console.log(name);
    // console.log(age);
    // console.log(education);
    // console.log(status);
    // console.log(occupation);
    // console.log(location);
    // console.log(techLiterte);
    // console.log(summary);
    // console.log(bio);
    return {
        "name": name,
        "age": age,
        "education": education,
        "status": status,
        "occupation": occupation,
        "location": location,
        "techLiterte": techLiterte,
        "summary": summary,
        "bio": bio,
    };
}

function readUserPersonality() {
    let personality = [];

    if (document.getElementById("introvert").checked) {
        personality.push(document.getElementById("introvert-value").innerHTML);
    }
    if (document.getElementById("extrovert").checked) {
        personality.push(document.getElementById("extrovert-value").innerHTML);
    }
    if (document.getElementById("thinker").checked) {
        personality.push(document.getElementById("thinker-value").innerHTML);
    }
    if (document.getElementById("reader").checked) {
        personality.push(document.getElementById("reader-value").innerHTML);
    }
    if (document.getElementById("calm").checked) {
        personality.push(document.getElementById("calm-value").innerHTML);
    }
    if (document.getElementById("shy").checked) {
        personality.push(document.getElementById("shy-value").innerHTML);
    }

    // console.log(personality);
    return personality;
}

function readUserNeeds() {
    let needs = [];
    if (document.getElementById("need1").checked) {
        needs.push(document.getElementById("need1-value").innerHTML);
    }
    if (document.getElementById("need2").checked) {
        needs.push(document.getElementById("need2-value").innerHTML);
    }
    if (document.getElementById("need3").checked) {
        needs.push(document.getElementById("need3-value").innerHTML);
    }

    // console.log(needs);
    return needs;
}

function readUserFrustrations() {
    let frustrations = [];
    if (document.getElementById("frustration1").checked) {
        frustrations.push(document.getElementById("frustration1-value").innerHTML);
    }
    if (document.getElementById("frustration2").checked) {
        frustrations.push(document.getElementById("frustration2-value").innerHTML);
    }
    if (document.getElementById("frustration3").checked) {
        frustrations.push(document.getElementById("frustration3-value").innerHTML);
    }

    // console.log(frustrations);
    return frustrations;
}

function readUserBrands() {
    let brands = [];
    if (document.getElementById("brand1").checked) {
        brands.push(document.getElementById("brand1-value").innerHTML);
    }
    if (document.getElementById("brand2").checked) {
        brands.push(document.getElementById("brand2-value").innerHTML);
    }
    if (document.getElementById("brand3").checked) {
        brands.push(document.getElementById("brand3-value").innerHTML);
    }
    if (document.getElementById("brand4").checked) {
        brands.push(document.getElementById("brand4-value").innerHTML);
    }
    if (document.getElementById("brand5").checked) {
        brands.push(document.getElementById("brand5-value").innerHTML);
    }
    if (document.getElementById("brand6").checked) {
        brands.push(document.getElementById("brand6-value").innerHTML);
    }


    // console.log(brands);
    return brands;

}

function readUserPaymentMedium() {
    let payment = [];
    if (document.getElementById("payment1").checked) {
        payment.push(document.getElementById("payment1-value").innerHTML);
    }
    if (document.getElementById("payment2").checked) {
        payment.push(document.getElementById("payment2-value").innerHTML);
    }
    // console.log(payment);
    return payment;
}

function readUserPlatform() {
    let platform = [];
    if (document.getElementById("platform1").checked) {
        platform.push(document.getElementById("platform1-value").innerHTML);
    }
    if (document.getElementById("platform2").checked) {
        platform.push(document.getElementById("platform2-value").innerHTML);
    }
    // console.log(platform);
    return platform;
}

// localStorage.getItem("data")
// JSON.parse(localStorage.getItem("data"))
function collectAllData() {

    let data = readUserPersonalData();

    data["personality"] = readUserPersonality();
    data["needs"] = readUserNeeds();
    data["frustrations"] = readUserFrustrations();
    data["brands"] = readUserBrands();
    data["payment"] = readUserPaymentMedium();
    data["platform"] = readUserPlatform();

    localStorage.setItem("data", JSON.stringify(data));
}