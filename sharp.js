var Sharp = {
    start: (function() {
        document.querySelectorAll(".e").forEach(element => {
            var a = element.innerHTML.split("|");
            var ret;
            for (var i in a) {
                if (a.hasOwnProperty(i)) {
                    if (i / 2 !== Math.round(i / 2)) {
                        eval("ret = " + a[i]);
                        a[i] = "<span data-toto=\"" + a[i] + "\" class=\"ev\">" + ret + "</span>";
                    }
                }
            }


            element.innerHTML = a.join(" ");
        });
    }),
    stop: (function() {
        this.rep.stop
    }),
    run: (function() {
        document.querySelectorAll(".ev").forEach(element => {
            var ret;
            eval("ret = " + element.getAttribute("data-toto"));


            element.innerHTML = ret;
        });
    })
}

window.onload = function() {
    Sharp.start();
    setInterval(Sharp.run, 10);
}

// hola soy papa