// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  Location,
  Module,
  Environment
} from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [new videoModule(), new surfaceModule()],
    ...options
  });

  // Render your app content to the default cylinder surface
  // const Surface1 = new Surface(1000, 600, Surface.SurfaceShape.Flat);
  // Surface1.setAngle(0, 0);
  // r360.renderToSurface(r360.createRoot("V2020"), Surface1);

  r360.renderToSurface(r360.createRoot("V2020", {}), r360.getDefaultSurface());

  const Surface2 = new Surface(500, 600, Surface.SurfaceShape.Flat);
  Surface2.setAngle(1.1, 0);
  r360.renderToSurface(r360.createRoot("ChooseTheme"), Surface2);

  Surface3 = new Surface(500, 600, Surface.SurfaceShape.Flat);
  Surface3.setAngle(-0.8, 0);
  r360.renderToSurface(r360.createRoot("CallerConversation"), Surface3);

  player = r360.compositor.createVideoPlayer("myplayer");
  player.setSource("/static_assets/Vid4.mp4", "2D");
  player.setLoop(true);
  player.setMuted(false);

  player1 = r360.compositor.createVideoPlayer("myplayer1");
  player1.setSource("/static_assets/Vid5.mp4", "2D");
  player1.setLoop(true);
  player1.setMuted(false);

  player2 = r360.compositor.createVideoPlayer("myplayer2");
  player2.setSource("/static_assets/Vid6.mp4", "2D");
  player2.setLoop(true);
  player2.setMuted(false);

  player3 = r360.compositor.createVideoPlayer("myplayer3");
  player3.setSource("/static_assets/Vid7.mp4", "2D");
  player3.setLoop(true);
  player3.setMuted(false);

  // r360.compositor.setBackgroundVideo("myplayer");
  // r360.start();

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("hawaii_beach.jpg"));
}

window.React360 = { init };

class videoModule extends Module {
  constructor() {
    super("videoModule");
  }

  muteAudio(themeSelected) {
    if (themeSelected == "video") {
      player.setMuted(false);
    } else {
      player.setMuted(true);
      //player.destroy();
    }
  }
}

class surfaceModule extends Module {
  constructor() {
    super("surfaceModule");
  }
  resizeSurf(width, height) {
    Surface3.resize(500, 600);
    Surface3.setAngle(-0.8, 0);
  }
  // changeSurf(Type) {
  //   Type === "Flat"
  //     ? Surface2.setShape(Surface.SurfaceShape.Flat)
  //     : Surface2.setShape(Surface.SurfaceShape.Cylinder);
  // }
}
