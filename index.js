function createPost (){
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let posterTemplate = document.getElementById('poster-template').innerHTML;
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  //insert pageTemplate into "pageTemplate" div in this format:
  //<div class="pageTemplate"><p>poster</p><p>Posted By:
  //<span class="title">title</span></p></div>

}
function postComment (){
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  
}
