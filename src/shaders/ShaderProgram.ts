import { Engine } from "../Engine";
import {Matrix4, Vector3} from '@math.gl/core';
export abstract class ShaderProgram {
    private _programId: WebGLProgram;
    private _vertexShaderId: WebGLShader;
    private _fragmentShaderId: WebGLShader;

    constructor(vertexShader:string, fragmentShader:string){
        this._vertexShaderId = ShaderProgram.loadShader(vertexShader, Engine.gl.VERTEX_SHADER)
        this._fragmentShaderId = ShaderProgram.loadShader(fragmentShader, Engine.gl.FRAGMENT_SHADER)
        const programId: WebGLProgram|null= Engine.gl.createProgram()
        if (!programId) throw new Error("Shaderprogram could not be created")
        this._programId = programId
        Engine.gl.attachShader(this._programId, this._vertexShaderId)
        Engine.gl.attachShader(this._programId, this._fragmentShaderId)
        this.bindAttributes()
        Engine.gl.linkProgram(this._programId)
        Engine.gl.validateProgram(this._programId)
        this.getAllUniformLocations()
    }

    public start(): void {
        Engine.gl.useProgram(this._programId);
    }

    public stop(): void {
        Engine.gl.useProgram(null);
    }

    public cleanUp(): void {
        stop()
        Engine.gl.detachShader(this._programId,this._vertexShaderId);
        Engine.gl.detachShader(this._programId,this._fragmentShaderId);
        Engine.gl.deleteShader(this._vertexShaderId);
        Engine.gl.deleteShader(this._fragmentShaderId);
        Engine.gl.deleteProgram(this._programId);
    }

    protected abstract bindAttributes(): void;

    protected abstract getAllUniformLocations(): void;

    protected loadFloat(location: WebGLUniformLocation | null, value: number): void {
        Engine.gl.uniform1f(location, value);
    }

    protected loadVector(location: WebGLUniformLocation | null, value: Vector3): void {
        Engine.gl.uniform3f(location, value.x, value.y, value.z);
    }

    protected loadBoolean(location: WebGLUniformLocation | null, value: Boolean): void {
        Engine.gl.uniform1f(location, value ? 1.0 : 0.0);
    }

    protected loadMatrix(location: WebGLUniformLocation | null, value: Matrix4): void {
        Engine.gl.uniformMatrix4fv(location, false, value.toFloat32Array())
    }

    protected getUniformLocation(uniformName:string): WebGLUniformLocation|null  {
        return Engine.gl.getUniformLocation(this._programId, uniformName)
    }

    protected bindAttribute(attribute: number, variableName: string): void {
        Engine.gl.bindAttribLocation(this._programId, attribute, variableName)
    }

    private static loadShader(code: string, type: number) {
        const shader: WebGLShader|null = Engine.gl.createShader(type);
        if(!shader) throw Error();
        Engine.gl.shaderSource(shader,code);
        Engine.gl.compileShader(shader);
        if (!Engine.gl.getShaderParameter(shader, Engine.gl.COMPILE_STATUS)){
            console.log(Engine.gl.getShaderInfoLog(shader))
            throw Error("Compile Error")
        }
        return shader;  
    }

}