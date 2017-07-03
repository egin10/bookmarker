//Listen for form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
  //Get Form Values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  /*
  //Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
  */

  //Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    //Init array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Add bookmark to array
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  //Prevent Form From Submitting
  e.preventDefault();
}

//Fetch bookmarks
function fetchBookmarks(){
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //Get Output id
  var bookmarksResults = document.getElementById('bookmarksResults');
  //Build Output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>' + name +
                                  ' <a class="btn btn-default" target="_blank" href="'+ url +'">Visit</a>'+
                                  '<h3>'+
                                  '</div>';
  }
}
