function downloadScript(){
    console.log("old");
}

// downloadScript();

// intern code
// function downloadScript(){
//     console.log("new");
// }


// iife

(function(){
    function downloadScript(){
        console.log("intern code");
    }
    downloadScript();
})();

downloadScript();