import { Matrix4 } from "@math.gl/core";
import { fragmentShader } from "./fragmentShader";
import { ShaderProgram } from "./ShaderProgram";
import { vertexShader } from "./vertexShader";

export class StaticShader extends ShaderProgram {
    
    private location_transformationMatrix: WebGLUniformLocation | undefined;
    private location_projectionMatrix: WebGLUniformLocation | undefined;
    
    constructor() {
        super(vertexShader, fragmentShader)
    }

    protected bindAttributes(): void {
        super.bindAttribute(0, "position")
    }

    protected getAllUniformLocations(): void {
        this.location_transformationMatrix = super.getUniformLocation("transformationMatrix")
        this.location_projectionMatrix = super.getUniformLocation("projectionMatrix")
    }

    public loadTransformationMatrix(matrix: Matrix4): void {
        if(!this.location_transformationMatrix) throw new Error("Location is undefined");
        super.loadMatrix(this.location_transformationMatrix, matrix);
    }

    public loadProjectionMatrix(matrix: Matrix4): void {
        if(!this.location_projectionMatrix) throw new Error("Location is undefined");
        super.loadMatrix(this.location_projectionMatrix, matrix);
    }
}