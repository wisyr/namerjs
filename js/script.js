new Clipboard(".clBoard"), function () {
    var a = "wrtpsdfghjklzcvbnm".split(""),
        b = "eyuioa".split(""),
        c = [],
        d = document.getElementById("buttoon");

    d.addEventListener("click", function () {
        for (var e = Math.floor(3 * Math.random() + 4),
                 f = 0; f <= e - 1; f++)if (f % 2 == 0) {
            c[f] = a[Math.floor(17 * Math.random())];
            for (var g = 0; g < e; g++)g % 2 != 0 && (c[g] = b[Math.floor(6 * Math.random())])
        }
        result = c.toString(), String.prototype.capitalize = function () {
            return this.charAt(0).toUpperCase() + this.slice(1)
        }, theName = result.capitalize();
        var h = theName.replace(/,/g, "");
        document.getElementById("getNewName").value = h;
        for (var f = 0; f < c.length; f++)c[f] = "";
        return h
    }, !1)
}(), function () {
    new Granim({
        element: "#canvas-radial",
        name: "radial-gradient",
        direction: "radial",
        opacity: [1, 1],
        isPausedWhenNotInView: !0,
        states: {"default-state": {gradients: [["#ffb347", "#ffcc33"], ["#83a4d4", "#b6fbff"], ["#00134d", "#002699"], ["#00001a", "#0f1f3d"]]}}
    })
}(), function () {
    setInterval(function () {
        var a = document.getElementById("canvas-radial"), b = a.getContext("2d").getImageData(20, 20, 1, 1).data, d = ("rgb(" + b[0] + "," + b[1] + "," + b[2] + ")", Math.round((299 * parseInt(b[0]) + 587 * parseInt(b[1]) + 114 * parseInt(b[2])) / 1e3));
        d > 105 ? $(".container, #buttoon, #getNewName").css("color", "black") && $("#buttoon, #getNewName").css("border-color", "black") : $(".container, #buttoon, #getNewName").css("color", "white") && $("#buttoon, #getNewName").css("border-color", "white")
    }, 1e3)
}(), $(".clBoard").click(function () {
    $(".clBoard").addClass("move"), setTimeout(function () {
        $(".clBoard").removeClass("move")
    }, 500)
});
