import { RawModel } from "../model/RAWModel";
import { Engine } from "../Engine";

export class Loader {
    
    private vaos: Array<WebGLVertexArrayObject> = new Array();
    private vbos: Array<WebGLBuffer> = new Array();

    public loadToVAO(positions: Float32Array, indeces: Int32Array):RawModel {
        const vaoId: WebGLVertexArrayObject|null = this.createVAO();
        this.bindIndicesBuffer(indeces)
        this.storeDataInAttributeList(0, positions)
        this.unbindVAO()
        return new RawModel(vaoId, indeces.length)
    }

    public cleanUp(): void {
        this.vaos.forEach(vao => {
            Engine.gl.deleteVertexArray(vao);
        })
        this.vbos.forEach(vbo => {
            Engine.gl.deleteBuffer(vbo);
        })
    }

    

    private createVAO(): WebGLVertexArrayObject|null {
        const vaoId:WebGLVertexArrayObject|null = Engine.gl.createVertexArray()
        if (vaoId) this.vaos.push(vaoId)
        Engine.gl.bindVertexArray(vaoId)
        return vaoId
    }

    private bindIndicesBuffer(data:Int32Array): void {
        const vboId: WebGLBuffer| null = Engine.gl.createBuffer()
        if (vboId) this.vbos.push(vboId)
        Engine.gl.bindBuffer(Engine.gl.ELEMENT_ARRAY_BUFFER, vboId)
        Engine.gl.bufferData(Engine.gl.ELEMENT_ARRAY_BUFFER, data, Engine.gl.STATIC_DRAW)

    }

    private storeDataInAttributeList(attributeNumber: number, data: Float32Array): void {
        const vboId: WebGLBuffer | null =  Engine.gl.createBuffer()
        if (vboId) this.vbos.push(vboId)
        Engine.gl.bindBuffer(Engine.gl.ARRAY_BUFFER, vboId)
        Engine.gl.bufferData(Engine.gl.ARRAY_BUFFER, data, Engine.gl.STATIC_DRAW)
        Engine.gl.vertexAttribPointer(attributeNumber, 3, Engine.gl.FLOAT, false, 0, 0)
        Engine.gl.bindBuffer(Engine.gl.ARRAY_BUFFER, null)
    }

    private unbindVAO(): void {
        Engine.gl.bindVertexArray(null)
    }
}