export class RawModel {
    
    private _vaoId: WebGLVertexArrayObject|null;
    private _vertexCount: number|null;

    constructor(vaoId: WebGLVertexArrayObject|null, vertexCount: number|null) {
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