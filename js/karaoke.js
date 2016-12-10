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
    var list = event.data.list;
    var searchString = ($('.search-input').val()).toLowerCase();
    var resultsList = list.filter(function(item){
      return (item.toLowerCase()).indexOf(searchString) !== -1;
    });
    console.log(resultsList, searchString);
    displaySearchList(resultsList, searchString);
  }

  function displaySearchList(list, searchString){
    $('.results-list').fadeOut(200, function(){
      $('.results-list').html('');
      $('.results-list').append('<p class="lead"> ' + list.length + ' results containing "' + searchString + '" :<p>');
      $('.results-list').append('<ul class="list-group"></ul>');
      list.forEach(function(result){
        $('.list-group').append('<li class="list-group-item">' + result + '</li>');
      });
      $('.results-list').slideDown(600);
    });
  }

  function bingo(event) {
    event.preventDefault();
    var list = event.data.list;
    var randomIndex = Math.floor(Math.random() * list.length);
    displayBingo(list[randomIndex]);
  }

  function displayBingo(result){
    $('.results-list').fadeOut(200, function(){
      $('.results-list').html('');
      $('.results-list').append('<p>Here is your pick, good luck!<p>');
      $('.results-list').append('<p class="lead">' + result + '</p>');
      $('.results-list').slideDown(200);
    });
  }

  $.get('karaoke_list.txt', function(data) {

    var list = cleanFile(data);

    $('.results-list').hide();

    $('.search-button').on('click', { list: list }, searchList);

    $('form').submit({ list: list }, searchList);

    $('.bingo-button').on('click', { list: list }, bingo);

  }, 'text');


});