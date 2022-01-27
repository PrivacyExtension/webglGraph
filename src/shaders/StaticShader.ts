import { fragmentShader } from "./fragmentShader";
import { ShaderProgram } from "./ShaderProgram";
import { vertexShader } from "./vertexShader";

export class StaticShader extends ShaderProgram {
    
    
    
    constructor() {
        super(vertexShader, fragmentShader)
    }

    protected bindAttributes(): void {
        super.bindAttribute(0, "position");
    }
    
    protected getAllUniformLocations(): void {
        throw new Error("Method not implemented.");
    }
}