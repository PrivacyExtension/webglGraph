import { Matrix4, toRadians } from "@math.gl/core";
import { Engine } from "../Engine";
import { Entity } from "../entities/Entity";
import { StaticShader } from "../shaders/StaticShader";
import { Maths } from "../toolbox/Maths";

export class Renderer {

    private static readonly FOV: number = 70;
    private static readonly NEAR_PLANE: number = 0.1;
    private static readonly FAR_PLANE: number = 1000;

    private projectionMatrix: Matrix4 = new Matrix4().perspective({ fov: toRadians(Renderer.FOV), aspect:Engine.gl.canvas.width/Engine.gl.canvas.height, near:Renderer.NEAR_PLANE, far:Renderer.FAR_PLANE })

    constructor(shader: StaticShader){
        shader.start()
        shader.loadProjectionMatrix(this.projectionMatrix)
        shader.stop()
    }

    public prepare(): void {
        //Set Background to white
        Engine.gl.clear(Engine.gl.COLOR_BUFFER_BIT);
        Engine.gl.clearColor(1, 1, 1, 1);
    }

    public render(entity: Entity, shader: StaticShader): void {

        Engine.gl.bindVertexArray(entity.model.vaoId);
        Engine.gl.enableVertexAttribArray(0);

        const transformationMatrix: Matrix4 = Maths.createTransformationMatrix(entity.position, entity.rotX, entity.rotY, entity.rotZ, entity.scale)
        shader.loadTransformationMatrix(transformationMatrix)
        Engine.gl.drawElements(Engine.gl.TRIANGLES, entity.model.vertexCount, Engine.gl.UNSIGNED_INT, 0)
        Engine.gl.disableVertexAttribArray(0);
        Engine.gl.bindVertexArray(null);
        
    }
}