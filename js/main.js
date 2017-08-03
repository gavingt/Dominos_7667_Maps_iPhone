
//Address list
var mOriginalAddresses = [
    ["a1.jpg", "720-920 N. 82nd St. (even)"],
    ["a1.jpg", "815, 825 N. Hayden Rd."],
    ["a2.jpg", "835-985 N. Granite Reef Rd. (odd)"],
    ["a3.jpg", "980 N. Granite Reef Rd."],
    ["a4.jpg", "1001-1273 N. Granite Reef Rd. (odd)"],
    ["a4.jpg", "1002-1350 N. 85th Pl. (even)"],
    ["a4.jpg", "1013-1331 N. 84th Pl. (even/odd)"],
    ["a5.jpg", "1221 N. 85th Pl."],
    ["a6.jpg", "1406 N. 85th Pl."],
    ["a115.jpg", "1475 N. Granite Reef Rd."],
    ["a7.jpg", "1650 N. 87th Terrace"],
    ["a8.jpg", "2615 N. Hayden Rd."],
    ["a8.jpg", "2635 N. Hayden Rd."],
    ["a9.jpg", "2700 N. Hayden Rd."],
    ["a10.jpg", "2830-2842 N. Granite Reef Rd. (even)"],
    ["a96.jpg", "2992 N. Miller Rd."],
    ["a14.jpg", "3015 N. Hayden Rd."],
    ["a16.jpg", "3031 N. Civic Center Plz."],
    ["a18.jpg", "3200 N. 75th St."],
    ["a20.jpg", "3333 N. Civic Center Plz."],
    ["a21.jpg", "3421-3513 N. Paiute Way (odd)"],
    ["a22.jpg", "3426-3620 N. Miller Rd. (even)"],
    ["a23.jpg", "3500, 3600 N. Hayden Rd."],
    ["a21.jpg", "3501 N. 64th St."],
    ["a24.jpg", "3634-3656 N. 70th St. (even)"],
    ["a24.jpg", "3703 N. 69th St."],
    ["a25.jpg", "3902-4036 N. Granite Reef Rd. (even)"],
    ["a26.jpg", "4000 N. Drinkwater Blvd."],
    ["a31.jpg", "4102-4290 N. 81st St. (even/odd)"],
    ["a27.jpg", "4120 N. 78th St."],
    ["a28.jpg", "4140 N. 78th St."],
    ["a29.jpg", "4181 N. Granite Reef Rd."],
    ["a30.jpg", "4201-4371 N. Miller Rd. (odd)"],
    ["a30.jpg", "4202-4354 N. Parkway Ave. (even)"],
    ["a31.jpg", "4210-4272 N. 82nd St. (even)"],
    ["a32.jpg", "4215 N. Drinkwater Blvd."],
    ["a33.jpg", "4245 N. Drinkwater Blvd."],
    ["a34.jpg", "4310 N. 78th St."],
    ["a35.jpg", "4315-4343 N. 78th St. (odd)"],
    ["a103.jpg", "4330 N. 62nd St. (school lunch)"],
    ["a36.jpg", "4347-4431 N. Parkway Ave. (odd)"],
    ["a37.jpg", "4354 N. 82nd St."],
    ["a36.jpg", "4360-4424 N. 78th St. (even)"],
    ["a38.jpg", "4425, 4435 N. 78th St."],
    ["a98.jpg", "4525 N. 66th St."],
    ["a104.jpg", "4525 N. Granite Reef Rd. (school lunch)"],
    ["a39.jpg", "4600-4630 N. 68th St. (even)"],
    ["a40.jpg", "4701 N. 68th St."],
    ["a110.jpg", "4800 N. 68th St."],
    ["a42.jpg", "4831-5143 N. Granite Reef Rd. (odd)"],
    ["a100.jpg", "4848 N. Goldwater Blvd."],
    ["a43.jpg", "4925 N. Scottsdale Rd."],
    ["a44.jpg", "4950 N. Miller Rd."],
    ["a45.jpg", "5001-5147 N. 83rd St. (odd)"],
    ["a46.jpg", "5001 N. Scottsdale Rd."],
    ["a47.jpg", "5002-5198 N. 83rd St. (even)"],
    ["a45.jpg", "5002-5152 N. Granite Reef Rd. (even)"],
    ["a48.jpg", "5020-5142 N. 81st St. (even/odd)"],
    ["a48.jpg", "5022-5146 N. 82nd St. (even)"],
    ["a49.jpg", "5101 N. Casa Blanca Dr."],
    ["a50.jpg", "5101 N. Scottsdale Rd."],
    ["a51.jpg", "5219 N. Casa Blanca Dr."],
    ["a105.jpg", "5399 N. Pima Rd. (school lunch)"],
    ["a52.jpg", "5401 N. Scottsdale Rd."],
    ["a114.jpg", "6000 E. Camelback Rd."],
    ["a112.jpg", "6125 E. Indian School Rd."],
    ["a53.jpg", "6302 E. Camelback Rd."],
    ["a21.jpg", "6405 E. Indian School Rd."],
    ["a111.jpg", "6815-6895 E. Camelback Rd."],
    ["a67.jpg", "6848 E. Camelback Rd."],
    ["a68.jpg", "6850 E. Main St."],
    ["a24.jpg", "6906-6941 E. 4th St."],
    ["a24.jpg", "6910-6943 E. 3rd St. (even/odd)"],
    ["a24.jpg", "6929, 6945 E. 2nd St."],
    ["a69.jpg", "6935 E. 5th Ave."],
    ["a101.jpg", "7025 E. Via Soleri Dr."],
    ["a102.jpg", "7110 E. Indian School Rd."],
    ["a70.jpg", "7117-7167 E. Rancho Vista Dr. (odd)"],
    ["a99.jpg", "7126 E. Osborn Rd."],
    ["a71.jpg", "7333 E. Chaparral Rd."],
    ["a72.jpg", "7430, 7436 E. Chaparral Rd."],
    ["a73.jpg", "7440 E. Thomas Rd."],
    ["a74.jpg", "7474, 7494 E. Earll Dr."],
    ["a106.jpg", "7501 E. Oak St. (school lunch)"],
    ["a107.jpg", "7501 E. Virginia Ave. (school lunch)"],
    ["a75.jpg", "7502-7580 E. Earll Dr. (even)"],
    ["a73.jpg", "7502, 7510 E. Thomas Rd."],
    ["a22.jpg", "7534-7550 E. Osborn Rd. (even)"],
    ["a30.jpg", "7601-7673 E. Montecito Ave. (odd)"],
    ["a76.jpg", "7625 E. Camelback Rd."],
    ["a36.jpg", "7701-7781 E. Camelback Rd. (odd)"],
    ["a77.jpg", "7701, 7791 E. Osborn Rd."],
    ["a34.jpg", "7709-7751 E. Glenrosa Ave. (even/odd)"],
    ["a34.jpg", "7720, 7740 E. Heatherbrae Ave."],
    ["a78.jpg", "7740 E. Glenrosa Ave."],
    ["a28.jpg", "7777 E. Heatherbrae Ave."],
    ["a79.jpg", "7777 E. Main St."],
    ["a80.jpg", "7800-7970 E. Camelback Rd. (even)"],
    ["a116.jpg", "7955 E. Chaparral Rd."],
    ["a81.jpg", "8002-8272 E. Oak St. (even)"],
    ["a31.jpg", "8015-8163 E. Glenrosa Ave. (odd)"],
    ["a14.jpg", "8020 E. Thomas Rd."],
    ["a82.jpg", "8021 E. Osborn Rd."],
    ["a83.jpg", "8055 E. Thomas Rd."],
    ["a84.jpg", "8100 E. Camelback Rd."],
    ["a48.jpg", "8131-8151 E. Vista Dr. (odd)"],
    ["a85.jpg", "8145 E. Camelback Rd."],
    ["a86.jpg", "8155 E. Roosevelt St."],
    ["a47.jpg", "8201-8246 E. Orange Blossom Ln. (even/odd)"],
    ["a47.jpg", "8202-8244 E. Chaparral Rd. (even)"],
    ["a47.jpg", "8203-8245 E. Vista Dr. (odd)"],
    ["a1.jpg", "8210-8221 E. Garfield St. (even/odd)"],
    ["a10.jpg", "8223-8367 E. Thomas Rd. (odd)"],
    ["a25.jpg", "8301-8391 E. Indian School Rd. (odd)"],
    ["a45.jpg", "8303-8329 E. Vista Dr. (odd)"],
    ["a45.jpg", "8304-8348 E. Orange Blossom Ln. (even/odd)"],
    ["a108.jpg", "8330 E. Osborn Rd. (school lunch)"],
    ["a87.jpg", "8350 E. McKellips Rd."],
    ["a42.jpg", "8406-8498 E. Chaparral Rd. (even/odd)"],
    ["a4.jpg", "8406-8564 E. Roosevelt St. (even)"],
    ["a113.jpg", "8444 E. Indian School Rd."],
    ["a109.jpg", "8451 E. Oak St. (school lunch)"],
    ["a88.jpg", "8500 E. Indian School Rd."],
    ["a4.jpg", "8520-8559 E. Belleview St. (even/odd)"],
    ["a4.jpg", "8520-8558 E. Portland St. (even/odd)"],
    ["a89.jpg", "8521 E. McDowell Rd."],
    ["a90.jpg", "8550-8588 E. Indian School Rd. (even)"],
    ["a91.jpg", "8550 E. McDowell Rd."],
    ["a5.jpg", "8625 E. Belleview Pl."],
    ["a92.jpg", "8750 E. McDowell Rd."],
    ["a93.jpg", "8780 E. McKellips Rd."],
    ["a94.jpg", "9000 E. Chaparral Rd."]
];


$(document).ready(function() {
    inflateAddressList(mOriginalAddresses);
    filterAddressList();

    //when user views a map and then presses Back softnav button, search_input gets cleared automatically
    $(window).bind("pagehide", function() {
        $("#search_input").val("");
        $("#address_list").empty();
        inflateAddressList(mOriginalAddresses);
    });

    $("#search_icon").click(function() {
       $("#search_input").focus();
    });

});




function inflateAddressList(addressList) {

    addressList.forEach(function(currentAddress) {
        var currentAddressElement = document.createElement("a");
        currentAddressElement.className = ("address_list_item");
        currentAddressElement.href = "img/maps/" + currentAddress[0];
        currentAddressElement.textContent = currentAddress[1];

        $("#address_list").append(currentAddressElement);
    });
}

function filterAddressList() {
    var searchInput = $("#search_input");
    var result;
    var constraint = "";

    // Save current value of element
    searchInput.data('currentVal', searchInput.val());

    // Look for changes in the value
    searchInput.bind("propertychange change click keyup input paste", function(event){
        // If value has changed...
        if (searchInput.data('currentVal') !== searchInput.val()) {
            // Updated stored value
            searchInput.data('currentVal', searchInput.val());

            //implement algorithm here
            constraint = searchInput.data().currentVal.toLowerCase().trim();

            if (constraint.length > 0) {
                var matchesFound = [];
                mOriginalAddresses.forEach(function (originalItem) {
                    var item = originalItem[1].toLowerCase();
                    //var pattern = new RegExp(/(\d+)(?!\w) *(?:north +|east +|south +|west +|n +|e +|s +|w +|n. +|e. +|s. +|w. +)*(.*)/g);
                    var pattern = new RegExp(/(\d+)(?!\w) *(?:north +|east +|south +|west +|n +|e +|s +|w +|n. +|e. +|s. +|w. +)*(.*)/);

                    var match = pattern.exec(constraint);

                    var containsEven = false;
                    var containsOdd = false;
                    var containsEvenOdd = false;
                    if (item.includes("(even")) {
                        containsEven = true;
                    }
                    if (item.includes("odd)")) {
                        containsOdd = true;
                    }
                    if (containsEven && containsOdd) {
                        containsEvenOdd = true;
                    }

                    //user must enter a number or a number followed by a space and arbitrary text to enter the below IF statement (in other words, constraint must match RegEx)
                    if (match !== null && item.includes("-")) {
                        //user must enter only a number to enter the below IF statement, and that number must be the start of a street name for an item that also contains a "-"
                        if (item.includes(" " + constraint)) {

                            matchesFound.push(originalItem);
                        }
                        else {
                            var streetNumberEntered = match[1];
                            var numberRanges = getNumberRanges(item);  //numberRanges is a 2-element array

                            if (canBeInRange(streetNumberEntered, numberRanges[0], numberRanges[1]) && item.includes(match[2])) {

                                //this IF detects if user already entered full number, and only then do we do even/odd checking
                                if (streetNumberEntered >= numberRanges[0] && streetNumberEntered <= numberRanges[1]) {

                                    if (containsEvenOdd) {
                                        matchesFound.push(originalItem);
                                    } else if (containsEven) {
                                        if (streetNumberEntered % 2 === 0) {
                                            matchesFound.push(originalItem);
                                        }
                                    } else {
                                        //containsOdd must be true and containsEven false to land here
                                        if (streetNumberEntered % 2 !== 0) {
                                            matchesFound.push(originalItem);
                                        }
                                    }
                                } else {
                                    matchesFound.push(originalItem);
                                }
                            }
                        } //end IF/ELSE block checking addresses with dashes(-)
                    }
                    else { //if item doesn't contain a dash (or pattern not matched, likely by typing in only letters), it gets processed here
                        if (isANumber(constraint)) {
                            //if item starts with constraint or constraint matches start of street name
                            if (item.startsWith(constraint) || item.includes(" " + constraint)) {
                                matchesFound.push(originalItem);
                            }
                        }
                        else {
                            if (item.includes(constraint)) {
                                matchesFound.push(originalItem);
                            }
                        }
                    }

                }); // end FOREACH loop checking each address item

                result = matchesFound;

            }  //ends IF block with condition "constraint.length > 0"
            else {
                result = mOriginalAddresses;
            }

            $("#address_list").empty();
            inflateAddressList(result);
        } //end IF statement that checks if new input = old input
    });  //end searchInput eventListener that listens for any changes to input textbox
}




//returns true if input is a positive integer number, such as the street number for a street address
function isANumber(input) {
    var pattern = /^[0-9]+$/;
    return pattern.test(input);
}





// calculates whether testNumber can be within numberRange[0] and numberRange[1] if user keeps typing number
function canBeInRange(testNumber, numberRangeLow, numberRangeHigh) {  //testNumber is an int, numberRange is a 2-element array

    var numberRange = [numberRangeLow, numberRangeHigh];

    var testNumberDecomposed = [];
    var lowerRangeDecomposed = [];
    var upperRangeDecomposed = [];

    while (testNumber > 0) {
        testNumberDecomposed.push(testNumber % 10);
        testNumber = Math.floor(testNumber / 10);
    }
    testNumberDecomposed.reverse();

    while (numberRange[0] > 0) {
        lowerRangeDecomposed.push(numberRange[0] % 10);
        numberRange[0] = Math.floor(numberRange[0] / 10);
    }
    lowerRangeDecomposed.reverse();

    while (numberRange[1] > 0) {
        upperRangeDecomposed.push(numberRange[1] % 10);
        numberRange[1] = Math.floor(numberRange[1] / 10);
    }
    upperRangeDecomposed.reverse();

    if (testNumberDecomposed.length > upperRangeDecomposed.length) {
        return false;
    }

    var testNumberReconstructed = 0;
    var lowerRangeReconstructed = 0;
    var upperRangeReconstructed = 0;

    //if lower range and upper range both have some number of digits
    if (lowerRangeDecomposed.length === upperRangeDecomposed.length) {
        for (var i = 0; i < testNumberDecomposed.length; i++) {
            testNumberReconstructed = (testNumberReconstructed * 10) + testNumberDecomposed[i];
            lowerRangeReconstructed = (lowerRangeReconstructed * 10) + lowerRangeDecomposed[i];
            upperRangeReconstructed = (upperRangeReconstructed * 10) + upperRangeDecomposed[i];

            if (testNumberReconstructed < lowerRangeReconstructed || testNumberReconstructed > upperRangeReconstructed) {
                return false;
            }
        }
    }
    //if upper range has more digits than lower range
    else {
        for (var j = 0; j < testNumberDecomposed.length; j++) {
            if (testNumberDecomposed.length > j) {
                testNumberReconstructed = (testNumberReconstructed * 10) + testNumberDecomposed[j];
            }
            if (lowerRangeDecomposed.length > j) {
                lowerRangeReconstructed = (lowerRangeReconstructed * 10) + lowerRangeDecomposed[j];
            }
            upperRangeReconstructed = (upperRangeReconstructed * 10) + upperRangeDecomposed[j];

            var testNumberReconstructedAddedDigit = (testNumberReconstructed * 10);

            var upperRangeReconstructedAddedDigit;
            if (upperRangeDecomposed.length > j + 1) {
                upperRangeReconstructedAddedDigit = (upperRangeReconstructed * 10) + upperRangeDecomposed[j+1];
            }
            else {
                upperRangeReconstructedAddedDigit = upperRangeReconstructed;
            }

            if ( (testNumberReconstructed < lowerRangeReconstructed
                    || testNumberReconstructed > upperRangeReconstructedAddedDigit)
                && (testNumberReconstructedAddedDigit < lowerRangeReconstructed
                    || testNumberReconstructedAddedDigit > upperRangeReconstructedAddedDigit) ) {
                return false;
            }
        }
    }

    return true;
}





//gets the numbers before and after the dash and returns them as a 2-element array
function getNumberRanges(addressString) {
    var pattern = /(\d+)-(\d+) .+/;

    var match = pattern.exec(addressString);
    var results = [];
    if (match !== null) {
        results[0] = parseInt(match[1]);
        results[1] = parseInt(match[2]);
    }
    return results;

}
