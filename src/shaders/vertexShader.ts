export const vertexShader: string = `#version 300 es

in vec3 position;

out vec3 color;

void main(void){
    gl_Position = vec4(position, 1.0);
    color = vec3(position.x+0.5,1.0, position.z+0.5);
}

`;