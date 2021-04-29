let j = document.createElement("script");
j.onload = function() {
    let e = new jsPDF,
        t = document.getElementsByTagName("img");
    for (let d in t) {
        let a = t[d];
        if (console.log("add img ", a), !/^blob:/.test(a.src)) {
            console.log("invalid src");
            continue
        }
        let o = document.createElement("canvas"),
            n = o.getContext("2d");
        o.width = a.width, o.height = a.height, n.drawImage(a, 0, 0, a.width, a.height);
        let l = o.toDataURL("image/jpeg", 1);
        e.addImage(l, "JPEG", 0, 0), e.addPage()
    }
    e.save("download.pdf")
}, j.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js", document.body.appendChild(j);
