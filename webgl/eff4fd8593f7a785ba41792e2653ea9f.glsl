attribute vec4 pointPosition;
attribute vec4 pointColor;
attribute vec4 pointNormal;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform vec3 diffuselightColor;
uniform vec3 ambientLightColor;

uniform mat4 inverseTranspose;
uniform vec3 difuselightDirection;

varying vec4 sharePointColor;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    // 一般处理方向光源都是和环境光源配合使用，因为如果单独使用方向光源不在光源的一面会显得彻底暗下去

    // 环境光源的作用效果处理很简单只需要 lightColor * surfaceColor 光源颜色和物体表面颜色矩阵相乘即可
    vec3 ambient = ambientLightColor * pointColor.rgb;
    
    // 方向光源产生的漫反射处理 lightColor * surfaceColor * cosTheta
    // 其中cosTheta为光线和物体表面的夹角，需要用向量的点乘计算（ a · b = |a| * |b| * cos 其中 a和b向量的长度必须为1而且需要做施密特规范化处理）
    // 上面说的这些计算步骤，shader语法里面都提供了函数，直接调用即可

    // 规范化处理
    // 如果绘制的物体是运动的，需要不停的计算出物体表面当前的法线方向，而这个计算过程也是一个固定的公式调用即可
    vec3 normal = normalize(vec3(inverseTranspose * pointNormal));
    // 计算光线和物体表面的夹角
    float cosAng = max(dot(difuselightDirection, normal), 0.0);
    // 计算方向光源产生的效果
    vec3 diffuse = diffuselightColor * vec3(pointColor) * cosAng;

    // 最后将方向光源和环境光源的效果相加即可
    sharePointColor = vec4(diffuse + ambient, pointColor.a);
}