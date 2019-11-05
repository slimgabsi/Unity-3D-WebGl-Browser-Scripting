<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Unity WebGL Player | UnityBrowserScriptingSG</title>
    <link rel="shortcut icon" href="TemplateData/favicon.ico">
    <link rel="stylesheet" href="TemplateData/style.css">
    <script src="TemplateData/UnityProgress.js"></script>
    <script src="Build/UnityLoader.js"></script>
     <script src="js/onInit.js"></script>
    <script>
      window.gameInstance = UnityLoader.instantiate("gameContainer", "Build/WebGLBuild.json", {onProgress: UnityProgress,
      Module: {
       onRuntimeInitialized: onInit,
      },
      });
    </script>
  </head>
  <body>
    <div class="webgl-content">
      <div id="gameContainer" style="width: 960px; height: 600px"></div>
      <div class="footer" style="text-align: center;">
        <img id="FlapImage" src="images/flap.png" style="border-radius:10px;cursor: pointer;">
      </div>
    </div>
  </body>
</html>
