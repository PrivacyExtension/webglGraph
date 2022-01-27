export class RawModel {
    
    private _vaoId: WebGLVertexArrayObject;
    private _vertexCount: number;

    constructor(vaoId: WebGLVertexArrayObject, vertexCount: number) {
        this._vaoId = vaoId;
        this._vertexCount = vertexCount;
    }

    public get vaoId() {
        return this._vaoId;
    }

    public get vertexCount() {
        return this._vertexCount;
    }
}