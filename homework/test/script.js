function check() {
    let yes = 0;
    let no = 0;
    let result = "";
    let choice;
    for (let v = 1; v <= 5; v++) {
        let q = document.forms["quiz"].elements["vopros" + v];
        for (let i = 0; i < q.length; i++) {
            if (q[i].checked) { choice = q[i].value }
        }
        if (choice == "yes") { yes++; }
        if (choice == "no") { no++; }
    }
    if (yes < 5)
        alert("Вы заработали " + yes + " баллов!");
    else
        alert("Вы заработали 6 баллов!");
}
