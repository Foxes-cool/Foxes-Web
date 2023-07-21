{
    var foxes = {};

    let totals = new Object();
    let tags = ["fox", "curious", "happy", "scary", "sleeping"];
    for (let i = 0; i < tags.length; i++) {
        eval(`
            foxes.${tags[i]} = function() {
                let update = false;
                let days = Math.floor(new Date()/86400000);
                if(totals["${tags[i]}"]) {
                    if(totals["${tags[i]}"].time != days) {
                        update = true;
                    }
                }
                else{
                    update = true;
                }
                if(update) {
                    let xmlHttp = new XMLHttpRequest();
                    xmlHttp.open( "GET", "https://foxes.cool/counts/${tags[i]}", false );
                    xmlHttp.send( null );
                    totals["${tags[i]}"] = {time: days, count: xmlHttp.responseText};
                }
                return \`https://img.foxes.cool/${tags[i]}/\${Math.floor(Math.random()*totals["${tags[i]}"].count)}.jpg\`;
            }
        `);
    }
}
