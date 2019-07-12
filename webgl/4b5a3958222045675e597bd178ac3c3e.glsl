attribute vec4 pointPosition;
attribute vec4 pointNormal;
attribute vec2 texturePosition;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform mat4 inverseTranspose;

varying vec3 sharePointPosition;
varying vec3 shareNormal;
varying vec2 shareTexturePosition;

void main() {
    // 为了在球体中实现更好点的点光源立体效果，需要利用fragement shader和varing插值计算
    
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    sharePointPosition = vec3(modelMatrix * pointPosition);

    // 如果绘制的物体是运动的，需要不停的计算出物体表面当前的法线方向，而这个计算过程也是一个固定的公式调用即可
    shareNormal = normalize(vec3(inverseTranspose * pointNormal));

    shareTexturePosition = texturePosition;
}