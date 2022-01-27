import { Vector3 } from "@math.gl/core";
import { RawModel } from "../model/RAWModel";

export class Entity {
    private _model: RawModel;
    private _position: Vector3;
    private _rotX: number
    private _rotY: number
    private _rotZ: number;
    private _scale: number;

    constructor(model: RawModel, position: Vector3, rotX: number, rotY: number, rotZ: number, scale: number){
        this._model = model;
        this._position = position;
        this._rotX = rotX;
        this._rotY = rotY;
        this._rotZ = rotZ;
        this._scale = scale;
    }

    public increasePosition(dx: number, dy: number, dz: number): void {
        this._position.x += dx;
        this._position.y += dy;
        this._position.z += dz;
    }

    public increaseRotation(dx: number, dy: number, dz: number): void {
        this._rotX += dx;
        this._rotY += dy;
        this._rotZ += dz;
    }
    
    
    
    
    
    
    
    
    
    
    public get model() {
        return this._model
    }
    public get position() {
        return this._position
    }
    public get rotX() {
        return this._rotX
    }
    public get rotY() {
        return this._rotY
    }
    public get rotZ() {
        return this._rotZ
    }
    public get scale() {
        return this._scale
    }
}