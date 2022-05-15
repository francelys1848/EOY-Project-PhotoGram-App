let mostPopularPhotos=["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg","https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg","https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

let photos=
    [];
$(".submit").click(function(){
       let items=$("input").val();
    let a = photos.length;
     $(".posts").empty();
    photos.push(items);
    for(let x of photos){
        $(".posts").append("<img src=" + x + ">");
}
if (a===3){
 $(".message").empty();
        $(".messages").append("<p>" + "Congrats, you are a Silver Level user!" + "</p>");
    
}
    if (a===5){
 $(".message").empty();
        $(".message").append("<p>" + "Congrats, you are a Gold Level user!"   + "</p>");
    
}
    
    
    if (a>=5){
 $(".message").empty();
        $(".message").append("<p>" + "Congrats, you are a Platinum Level user!"   + "</p>");
    }
      $(".liked-photo").append("<img src=" + mostPopularPhotos[a] + ">");

});




















