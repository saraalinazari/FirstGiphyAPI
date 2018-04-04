
var topics = ["cat","dog","mouse","fish","lion",
             "monkey","panda", "raccoon","giraffe","ostrich"
              ];

function showButtons(){
    var i=0;
    $("#show-buttons").empty();
    for(i=0;i<topics.length;i++){
        
        var newBtn = $("<button>");
        newBtn.text(topics[i]);
        newBtn.val(i.toString());
        console.log("index: "+ i.toString());
        newBtn.attr("class", "animals btn btn-outline-info mr-1 ml-1");
        $("#show-buttons").append(newBtn);
    }
}

function showPictures(){
    var buttonVal=$(this).val();
    console.log(buttonVal);
    var animalIndex = parseInt(buttonVal);
    var animal= topics[animalIndex];
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=ONa0PbNywJdmdoQxrnKwLWuIYtkm38EH&limit=10";

    $.ajax({
        url: queryURL,
        method: "get"
    }).then(function(response){
        console.log(response);
        var result=response.data;
        var i=0;
        for(i=0;i<10;i++){
            
            var newDivImg = $("<div>");
            newDivImg.attr("class"," col-md-4  text-info ");
            var newPImg = $("<p>").text("Rating: "+result[i].rating);
            var newPTitle=$("<p>").text("Title: "+result[i].title);

            var newLinkDownload=$("<a>");
            newLinkDownload.attr("href",result[i].embed_url);
            newLinkDownload.attr("download",result[i].embed_url);
            newLinkDownload.attr("class","downloadButton btn btn-outline-info");
         
            newLinkDownload.text("Download");

            




            var animalImg = $("<img>");
            animalImg.attr("src" , result[i].images.fixed_width_still.url);
            animalImg.attr("data-still",result[i].images.fixed_width_still.url);
            animalImg.attr("data-animate",result[i].images.fixed_width.url);
            animalImg.attr("data-state","still");
            animalImg.attr("class","animalImg rounded ");

           newDivImg.append(animalImg);
           newDivImg.append(newPImg);
           newDivImg.append(newPTitle);
           newDivImg.append(newLinkDownload);


           $("#show-pictures").prepend(newDivImg);
           
           
        }
       
    });
}

function changeAnimationType(){


        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }


}

function showUserAnimal(){
    event.preventDefault();
    var userAnimal=$("#animal-input").val().trim();
    console.log(userAnimal);
   
    topics.push(userAnimal);
    showButtons();
}


     showButtons();
    $(document).on("click",".animals",showPictures );
    $(document).on("click",".animalImg",changeAnimationType );
  
  $(document).on("click","#add-animal", showUserAnimal);
 // $(".downloadButton").on("click",function(){});
