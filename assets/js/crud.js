// Script for CRUD operation

// Create
$("#add_product").submit(function(event){
    alert("New product added successfully!");
})

// Update
$("#update_product").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(unindexed_array);

    var request = {
        "url": `http://localhost:3000/api/products/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("New product updated successfully!");
    })

})

// Delete
if(window.location.pathname == "/"){
    $ondelete = $("a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/products/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Are you sure you want to delete this product?")){
            $.ajax(request).done(function(response){
                alert("Product deleted successfully!");
                location.reload();
            })
        }

    })
}