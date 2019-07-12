attribute vec4 pointPosition;
attribute vec4 pointNormal;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

varying vec3 sharePointPosition;
varying vec3 shareNormal;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    shareNormal = normalize(vec3(pointNormal));
    sharePointPosition = vec3(modelMatrix * pointPosition);
}