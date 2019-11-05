mergeInto(LibraryManager.library, {

  Js_BirdDied: function () {
     var body=document.getElementsByTagName('body')[0];
    body.style.backgroundColor='red';
    body.style.transition='1s all';
  },

  Js_BirdSpawned: function () {
    var body=document.getElementsByTagName('body')[0];
    body.style.backgroundColor='white';
    body.style.transition='1s all';

  }

});