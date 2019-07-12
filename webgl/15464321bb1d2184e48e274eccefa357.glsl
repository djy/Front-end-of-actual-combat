attribute vec4 pointPosition;
attribute vec4 pointColor;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform mat4 shadowMvpMatrixFromLight;

varying vec4 sharePointColor;
varying vec4 sharePositionFromLight;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    // 计算出视野点在光源处的物体坐标
    sharePositionFromLight = shadowMvpMatrixFromLight * pointPosition;
    sharePointColor = pointColor;
}