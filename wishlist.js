javascript: (() => {
    let getSKU = prompt('Enter the SKU.');
    getSKU = getSKU.split(",")
    if (getSKU.length) {
        for (let x = 0; x < getSKU.length; x++) {
            let cookies = existingCookie();
            let addSku = getSKU[x];
        
            function existingCookie() {
                let name = "wishlist="; // cookie name
                let decodedCookie = decodeURIComponent(document.cookie); // decode any cookies
                let splitCookies = decodedCookie.split(";"); //

                for (let i = 0; i < splitCookies.length; i++) {
                    let cookie = splitCookies[i];
                    if (cookie.includes(name)) {
                        return cookie.substring(name.length, cookie.length)
                    }
                }

            }

            if (addSku === "") {
                alert("NO SKUS PROVIDED")
            } else {
                addSku = addSku.toUpperCase();
                if (cookies === undefined) {
                    cookies = [];
                    cookies.push(addSku);
                    document.cookie = 'wishlist=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    document.cookie = "wishlist=" + encodeURIComponent(JSON.stringify(cookies)) + ";path=/";
                    location.reload()
                } else {
                    cookies = cookies.replace("=", "");
                    let JSONData = JSON.parse(cookies.split(","));
                    JSONData.push(addSku);
                    document.cookie = "wishlist=" + encodeURIComponent(JSON.stringify(JSONData)) + ";path=/";
                    location.reload()
                }
            }
        }
    } else {
        alert("Stop being stupid please")
    }
})();   
