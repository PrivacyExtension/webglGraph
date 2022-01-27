import { Engine } from "../Engine";
import { RawModel } from "../model/RAWModel";

export class Renderer {



    public prepare(): void {
        //Set Background to white
        Engine.gl.clear(Engine.gl.COLOR_BUFFER_BIT);
        Engine.gl.clearColor(1, 1, 1, 1);
    }

    public render(model:RawModel): void {
        if (model.vaoId && model.vertexCount){
            Engine.gl.bindVertexArray(model.vaoId);
            Engine.gl.enableVertexAttribArray(0);
            Engine.gl.drawElements(Engine.gl.TRIANGLES, model.vertexCount, Engine.gl.UNSIGNED_INT, 0)
            Engine.gl.disableVertexAttribArray(0);
            Engine.gl.bindVertexArray(null);
        }
        
    }
}