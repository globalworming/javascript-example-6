const RunTest = {
    test1() {
        setTimeout(() => {
            try {
                let foods = document.getElementsByClassName("foods")[0]
                let textContent = foods.textContent;
                if (textContent.includes("undefined")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected no 'undefined' food`
                    return
                }
                if (!textContent.includes("apple")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'apple'`
                    return
                }
                if (!textContent.includes("banana")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected at least one 'banana' food`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    test2() {
        setTimeout(() => {
            try {
                let showsOrganisationFid = document.getElementsByClassName("organisation-NOD");
                if (showsOrganisationFid.length === 0) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
                    return
                }
                let textContent = showsOrganisationFid[0].textContent;

                if (!textContent.includes("thunder")) {
                    document.getElementsByClassName("error")[0].textContent = `test failed, expected "thunder" to be member of "NOD"`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    },
    test3() {
        setTimeout(() => {
            try {
                let features = [...document.querySelectorAll(".features li").values()]
                    .map(element => element.textContent)
                    .join(", ");
                if (!features.includes("notifyAuthorities")) {
                    document.getElementsByClassName("error")[0].textContent = `missing feature. define a function that can be called by "notifyAuthorities()"`
                    return
                }
                document.getElementById("displayOnSuccess").hidden = false
            } catch (e) {
                document.getElementsByClassName("error")[0].textContent = e.message + "\n\n" + e.stack
                throw e
            }
        }, 1000)
    }
}