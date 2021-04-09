// Script for sort by price, name, quantity or rating

// variables for order of sorting
var sortByNameAsc = true;
var sortByPriceAsc = true;
var sortByQuantityAsc = true;
var sortByRatingAsc = true;

window.onload = function() {
    // SORT

    var tableProducts = document.getElementsByClassName("products_table")[0];
    var th = tableProducts.querySelectorAll("th");
    var thName = th[2];
    var thPrice = th[3];
    var thQuantity = th[4];
    var thRating = th[6];

    // sort table by product name (column 2, isString = true)
    thName.addEventListener("click", function () {
        sortByColumn(2, sortByNameAsc, true);
    });
    // sort table by product price (column 3, isString = false)
    thPrice.addEventListener("click", function () {
         sortByColumn(3, sortByPriceAsc, false);
    });
    // sort table by product quantity (column 4, isString = false)
    thQuantity.addEventListener("click", function () {
         sortByColumn(4, sortByQuantityAsc, false);
    });
    // sort table by product rating (column 6, isString = false)
    thRating.addEventListener("click", function () {
         sortByColumn(6, sortByRatingAsc, false);
    });

    // sortAsc => true: ascending order, false: descending order
    // isString => false for numbers, true for strings 
    function sortByColumn(columnNumber, sortAsc, isString) {
        let switching = true;
        var switchcount = 0;

        while (switching) {
            switching = false;

            var rows = tableProducts.querySelectorAll("tr");
            // Iterate through all table rows (except one who contains table headers):
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("td")[columnNumber];
                y = rows[i + 1].getElementsByTagName("td")[columnNumber];
                
                if (sortAsc) {
                    if (isString) {
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else {
                        if (Number(x.innerHTML) > Number(y.innerHTML)) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                } else {
                    if (isString) {
                        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else {
                        if (Number(x.innerHTML) < Number(y.innerHTML)) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;      
            } else {
                if (switchcount == 0) {
                    sortAsc = !sortAsc;
                    switching = true;
                }
            }
        }
    }


    // FIND PRODUCTS

    var divFindProduct = document.getElementsByClassName("findProduct")[0];
    var inputFindProduct = divFindProduct.getElementsByTagName("input")[0];
    var btnFindProduct = document.getElementById("findProductBtn");
    var btnReloadProducts = document.getElementById("reloadAllProducts");

    // find product bt name - button onclick
    btnFindProduct.addEventListener("click", function() {
        var rows = tableProducts.querySelectorAll("tr");
        var noOfRows = rows.length;

        // collection to store the rows who will be removed
        var rowsToDelete = new Set();
        // the desired value to lower case
        var lookupValue = (String(inputFindProduct.value)).toLowerCase();
        
        // retain the index of the rows who will be removed
        for (let i = 1; i < noOfRows; i++) {
            var name = String(rows[i].getElementsByTagName("td")[2].innerHTML);
            if ((name.toLowerCase()).search(lookupValue) == -1) {
                rowsToDelete.add(i);
            }
        }

        // remove rows
        for (let i = noOfRows - 1; i > 0; i--) {
            if (rowsToDelete.has(i)) {
                tableProducts.deleteRow(i);
            }
        }
    });

    // reload all products - button onclick
    btnReloadProducts.addEventListener("click", function() {
        location.reload();
    });
    

    // ADD NEW LIST OF PRODUCTS

    var olSavedLists = document.getElementById("savedLists");
    var addNewListBtn = document.getElementById("addNewListBtn");
    var newListName = document.getElementById("newListName");

    // create new list and append it to Saved Lists
    addNewListBtn.addEventListener("click", function() {
        var rows = tableProducts.querySelectorAll("tr");
        var noOfRows = rows.length;

        // get the products name of all products selected
        var listItems = new Set();
        for (let i = 1; i < noOfRows; i++) {
            var checkBoxi = rows[i].getElementsByTagName("input")[0];
            if (checkBoxi.checked) {
                listItems.add(String(rows[i].getElementsByTagName("td")[2].innerHTML));
            }
        }
        
        // put all the products selected in one list
        var newList = document.createElement("li");
        var pNewListName = document.createElement("p");
        var ulNewListItems = document.createElement("ul");

        pNewListName.innerHTML = newListName.value;
        pNewListName.className = "newListName";
        newList.appendChild(pNewListName);

        for (let item of listItems) {
            var liNewListItem = document.createElement("li");
            liNewListItem.innerHTML = item;
            liNewListItem.className = "liList";
            ulNewListItems.appendChild(liNewListItem);
        }
        newList.appendChild(ulNewListItems);
        
        // append the new list
        olSavedLists.appendChild(newList);

        // remove selected items and the name of the new list
        for (let i = 1; i < noOfRows; i++) {
            var checkBoxi = rows[i].getElementsByTagName("input")[0];
            checkBoxi.checked = false;
        }
        newListName.value = "";

    });
}
