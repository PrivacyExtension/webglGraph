import { Matrix4, toRadians, Vector3 } from "@math.gl/core";

export class Maths {
    public static createTransformationMatrix(translation: Vector3, rx: number, ry: number, rz: number, scale: number): Matrix4 {
        var matrix: Matrix4 = new Matrix4(Matrix4.IDENTITY);
        matrix = matrix.translate(translation)
        matrix = matrix.rotateX(toRadians(rx))
        matrix = matrix.rotateY(toRadians(ry))
        matrix = matrix.rotateZ(toRadians(rz))
        matrix = matrix.scale(scale)
        return matrix;
    }
}