attribute vec4 pointPosition;
attribute vec4 pointColor;
attribute vec2 texturePosition;

uniform mat4 perspetiveMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

varying vec2 shareTexturePosition;

void main() { 
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;

    shareTexturePosition = texturePosition;
}