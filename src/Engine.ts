import { DisplayManager } from "./display/DisplayManager";
import { RawModel } from "./model/RAWModel";
import { Renderer } from "./renderer/Renderer";
import { StaticShader } from "./shaders/StaticShader";
import { Loader } from "./loader/Loader";

export class Engine {
    public static gl: WebGL2RenderingContext;
    public loader: Loader;
    public renderer: Renderer;
    public shader: StaticShader;

    public vertecies: Float32Array = Float32Array.of(
        -0.5, 0.5, 0.0,
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0,
        0.5, 0.5, 0.0
    )
    public indeces: Int32Array = Int32Array.of(
        0,1,3,
        3,1,2
    )

    public model : RawModel;
    constructor(queryId: string){
       const gl: WebGL2RenderingContext | undefined = DisplayManager.createDisplay(queryId)
       if(!gl){
            alert("Error with WEBGL context")
       }else {
           Engine.gl = gl;
          
       }
       this.loader = new Loader();
       this.renderer = new Renderer();
       this.model = this.loader.loadToVAO(this.vertecies, this.indeces);
       this.shader = new StaticShader();

    }

    public nextFrame(): void {
        this.renderer.prepare()
        this.shader.start()
        this.renderer.render(this.model);
        this.shader.stop()
    }
}