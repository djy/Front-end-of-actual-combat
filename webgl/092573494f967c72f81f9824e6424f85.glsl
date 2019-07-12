attribute vec4 pointPosition;
attribute vec4 pointColor;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

varying vec4 sharePointColor;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    sharePointColor = pointColor;
}