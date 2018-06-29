# FirstGiphyAPI

## Requirement
- Use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

## Prerequisites
- Download Chrome or Internet Explorer or Mozilla for your specific operating system.

## Instructions
- You can see the [live Demo](https://saraalinazari.github.io/FirstGiphyAPI/).
- By clicking on each animal, 10 gifs are showing.
- if user click on each picture, it starts animation and if it was already animated, then it just get freezed without animation.
- Also, user can add favorite animal to the end of buttons and it will show the new animal at the end. 
- user can click on new added button and see the pictures. Also, can click on pictures to change the status from still to animation and vise versa.

![Image of firstGiphy](https://github.com/saraalinazari/FirstGiphyAPI/blob/master/screenshots/screen1.png?raw=true)

## Technologies Used
- HTML
- CSS
- Javascript
- jQuery
- Giphy API
- AJAX call 

## Code Explanation
### Lesson Learned
- What is AJAX call and how to use it to call on APIs.
- How I can use different usefull APIs to get data and show it on my application. 
- How to use jQuery to show different images in the web page.

### Code Highlights
```
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
```

## Authors
- Sara Alinazari
