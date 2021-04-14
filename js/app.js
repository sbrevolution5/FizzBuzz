function main() {
    let fizz = parseInt(document.getElementById("fizz").value);
    let buzz = parseInt(document.getElementById("buzz").value);
    let limit = parseInt(document.getElementById("limit").value);
    let errorText = document.getElementById("errorText")
    if (limit >= 50000) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Limit must be between 1 and 50,000'
        })
        return
    } else if (limit <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'You must use a positive limit'
        })
        return
    } else if (isNaN(fizz) || isNaN(buzz) || isNaN(limit)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'One of your inputs isn\'t a number'
        })
        return
    } else {
        errorText.textContent = ""
    }
    //gets numbers
    let numList = getList(limit)
    //replace with fizz/buzz/fizzbuzz 
    let fizzed = fizzbuzz(fizz, buzz, numList)
    // displays array
    display(fizzed)
    confetti.start(1000)
}

function getList(limit) {
    let res = []
    for (let i = 1; i <= limit; i++) {
        res.push(i);

    }
    return res;
}

function fizzbuzz(fizz, buzz, list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] % fizz == 0 && list[i] % buzz == 0) {
            res.push("FizzBuzz")
        } else if (list[i] % fizz == 0) {
            res.push("Fizz")
        } else if (list[i] % buzz == 0) {
            res.push("Buzz")
        } else {
            res.push(`${list[i]}`)
        }
    }
    return res
}

function display(fbList) {
    const fbTemplate = document.getElementById("fbTemplate")
    const resultsBody = document.getElementById("resultsBody")
    let colCount = fbTemplate.content.cloneNode(true).querySelectorAll("td").length;
    // clears table to insert new data
    resultsBody.innerHTML = "";
    // loops over every element in the numbers array by row
    for (let i = 0; i < fbList.length; i += colCount) {
        let dataRow = fbTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td");
        for (let colI = 0; colI < cols.length; colI++) {
            let value = fbList[i + colI]
            if (typeof value === "undefined") {
                value = ""
            } else if (value == "Fizz") {
                cols[colI].classList.add("fizz")
            } else if (value == "Buzz") {
                cols[colI].classList.add("buzz")
            } else if (value == "FizzBuzz") {
                cols[colI].classList.add("fizzbuzz")
            }
            cols[colI].textContent = value

        }
        resultsBody.appendChild(dataRow);
    }
}