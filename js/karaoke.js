$(document).ready(function(){

  function cleanFile(data) {
    var lines = data.split('\n');
    var mainFiltering = lines.filter(function(line){
      return line !== 'SgList' && line.substring(0, 4) !== 'Page' ;
    });
    mainFiltering.splice(0, 1);
    return mainFiltering;
  }

  function searchList(event) {
    event.preventDefault();

  }

  function bingo(event) {
    event.preventDefault();
    var list = event.data.list;
    var randomIndex = Math.floor(Math.random() * list.length);
    console.log(list[randomIndex]);
    return list[randomIndex];
  }

  $.get('karaoke_list.txt', function(data) {

    var list = cleanFile(data);

    $('.search-button').on('click', { list: list, searchString: $('.search-input').val() }, searchList);

    $('.bingo-button').on('click', { list: list }, bingo);

  }, 'text');


});