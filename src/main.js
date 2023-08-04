{
    var foxes = {};

    let totals = new Object();
    function i(name, object) {
        let update = false;
        let days = Math.floor(new Date()/86400000);
        if(totals[name]) {
            if(totals[name].time != days) {
                update = true;
            }
        }
        else{
            update = true;
        }
        if(update) {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", `https://foxes.cool/counts/${name}`, false );
            xmlHttp.send( null );
            totals[name] = {time: days, count: xmlHttp.responseText};
        }

        const ret = [];
        for (let d in object) {
            ret.push(d + '=' + object[d]);
        }

        return `https://img.foxes.cool/${name}/${Math.floor(Math.random()*totals[name].count)}.jpg?${ret.join("&")}`.replace(/\?$/,'');
    }

    foxes.fox = function(object) {return i("fox", object)}
    foxes.curious = function(object) {return i("curious", object)}
    foxes.happy = function(object) {return i("happy", object)}
    foxes.scary = function(object) {return i("scary", object)}
    foxes.sleeping = function(object) {return i("sleeping", object)}
}
