// Application Global Variable
let shareApp = {};
// Data Gathered from the api
let data = {};


shareApp.getListings = function (callback) {
    // It is possible that one or more of the parameters is empty
    $.get('/api/listing/', function (listings) {
        data.listings = listings;
        callback(listings);
    });
};

shareApp.populateListings = function (listings) {
    for (let i = 0; i < 10; i++) {
        if (listings[i]) {
            let title = $('<h3>').text(listings[i].title);

            let img = $('<img>')
                .attr('src', "../../images/logo-share-goods2.png")
                .attr('alt', 'listing picture')
                .attr('height', '150px')
                .attr('width', '150px');

            let description = $('<p>').text(listings[i].description);

            let category = $('<p>').text(listings[i].category);

            let rating = $('<p>').text('Recent Rating: ' + listings[i].rating + '\u2605');

            let viewBtn = $('<Button>').text('View Item');
                viewBtn.click(function(){
                    const username = window.location.pathname.split("/")[1];
                    window.location.href = '/' + username+ "/view/" + listings[i].id;
                });

            let listing = $('<div>')
                .addClass('listing')
                .append(title)
                .append(img)
                .append(description)
                .append(category)
                .append(rating)
                .append(viewBtn);



            $('#feed').append(listing);
        }
    }
};

shareApp.getRating = function (id){
    $.get(('/api/ratings/listing/' + id), function(rating){
        console.log(rating);
    });
};

/**
 * @param e event that we listened
 */
shareApp.filter = function (e) {
    // Get the values of every field
    var form = $(".container").find(".row").find("#selectionFilter");
    var itemName = form.find("#item").val();
    var category = form.find("#category").val();
    var dateAfter = form.find("#postedAfter").val();
    var now = form.find('#availNow:checked').val();
    if (typeof now == 'undefined') {
        now = false;
    }
    // perform GET request
    shareApp.getListings(itemName, category, dateAfter, now);
    // Update data object
    // Render the results into the stream of data
};

// Function that sets the event callbacks to the form
shareApp.init = function () {
    // Callback for the filtering form
    $(".container").find(".row").find("#selectionFilter").submit(shareApp.filter);

    //populate listings to be rendered
    shareApp.getListings(function (dataListings) {
        let listings = [];

        for (let i = 0; i < dataListings.length; i++) {
            let listing = {};
            listing.title = dataListings[i].item;
            listing.description = dataListings[i].description;
            listing.category = dataListings[i].category;
            listing.rating = 1;
            listing.id = dataListings[i].listingid;

            listings.push(listing);

        }

        shareApp.populateListings(listings);


    });

};

$(document).ready(function () {
    shareApp.init();
});
