'use strict';
(function() {
  var data = [
    {
      id: 'box1',
      title: 'First box',
      content: '<p>Lorem ipsum dolor sit amet!</p>',
      categories: ['highlighted', 'special-header', 'important']
    },
    {
      id: 'box2',
      title: 'Second box',
      content: '<p>Lorem ipsum dolor sit amet!</p>',
      categories: ['special-header', 'important']
    },
    {
      id: 'box3',
      title: 'Third box',
      content: '<p>Lorem ipsum dolor sit amet!</p>',
      categories: ['highlighted', 'important']
    },
    {
      id: 'box4',
      title: 'Fourth box',
      content: '<p>Lorem ipsum dolor sit amet!</p>',
      categories: ['highlighted']
    },
    {
      id: 'box5',
      title: 'Fifth box',
      content: '<p>Lorem ipsum dolor sit amet!</p>',
      categories: []
    }
  ];

  var board = document.getElementById('board');

  function notHeader(value) {
    var reg = /^((?!header).)*$/gi;
    return reg.test(value);
  }

  function isHeader(value) {
    var reg = /header/gi;
    return reg.test(value);
  }

  for (var i = 0; i < data.length; i++) {
    board.insertAdjacentHTML(
      'beforeend',
      `<div id="${data[i].id}" class="box ${data[i].categories.filter(notHeader).join(' ')}"> 
            <header class="${data[i].categories.filter(isHeader).join(' ')}">${data[i].title}</header>
            ${data[i].content}
            </div>`
    );
  }
})();
