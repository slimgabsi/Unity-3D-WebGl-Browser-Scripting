function onInit() {

  console.log('Unity Init');
  document.getElementById  ('FlapImage').addEventListener('mousedown',function(){
    window.gameInstance.SendMessage("Bird", "Jump");
  }  );
}
