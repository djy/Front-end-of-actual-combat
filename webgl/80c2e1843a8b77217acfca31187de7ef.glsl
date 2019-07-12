attribute vec4 pointPosition;

uniform mat4 perspetiveMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

void main() {

    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;

}