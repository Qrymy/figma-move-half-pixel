enum Direction {
  UP = "UP",
  RIGHT = "RIGHT",
  DOWN = "DOWN",
  LEFT = "LEFT"
}

const halfPixel = 0.5;

const moveLayer = (layer: SceneNode, direction: Direction) => {
  switch (direction) {
    case Direction.UP:
      layer.y -= halfPixel;
      return;
    case Direction.RIGHT:
      layer.x += halfPixel;
      return;
    case Direction.DOWN:
      layer.y += halfPixel;
      return;
    case Direction.LEFT:
      layer.x -= halfPixel;
  }
};

const move = (direction: Direction) => {
  const layers = figma.currentPage.selection;
  if (layers.length === 0) {
    figma.closePlugin("Select one or more layers");
    return;
  }
  for (const layer of layers) {
    moveLayer(layer, direction);
  }
};

switch (figma.command) {
  case "moveUp":
    move(Direction.UP);
    break;
  case "moveRight":
    move(Direction.RIGHT);
    break;
  case "moveDown":
    move(Direction.DOWN);
    break;
  case "moveLeft":
    move(Direction.LEFT);
    break;
}
