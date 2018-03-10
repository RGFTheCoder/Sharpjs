var md;

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
        if (typeof Remarkable !== 'undefined') {
            md = new Remarkable();
            document.querySelectorAll(".m").forEach(element => {
                var a = element.innerHTML;
                var ret;
                ret = md.render(a);;
                a = "<span data-toto=\"" + a + "\" class=\"mv\">" + ret + "</span>";

                element.innerHTML = a;
            });
        }
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

        if (typeof Remarkable !== 'undefined') {
            document.querySelectorAll(".mv").forEach(element => {
                var ret;
                ret = md.render(element.getAttribute("data-toto"));


                element.innerHTML = ret;
            });
        }
    })
}

window.onload = function() {
    Sharp.start();
    setInterval(Sharp.run, 10);
}