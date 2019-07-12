attribute vec4 pointPosition;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

varying vec4 shareTexturePosition;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;

    shareTexturePosition = pointPosition;
}