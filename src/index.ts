import { Engine } from "./Engine";
let engine = new Engine("graph")
function run(){
    engine.nextFrame();
    requestAnimationFrame(run);
}
requestAnimationFrame(run)