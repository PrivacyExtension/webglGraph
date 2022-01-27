export const vertexShader: string = `#version 300 es

in vec3 position;

out vec3 color;

uniform mat4 transformationMatrix;
uniform mat4 projectionMatrix;

void main(void){
    gl_Position = projectionMatrix * transformationMatrix * vec4(position, 1.0);
    color = vec3(position.x+0.5,1.0, position.z+0.5);
}

`;