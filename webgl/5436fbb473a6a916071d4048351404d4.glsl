#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 pointLightColor;
uniform vec3 ambientLightColor;
uniform vec3 pointLightPosition;

uniform sampler2D textureSampler;

varying vec2 shareTexturePosition;

varying vec3 sharePointPosition;
varying vec3 shareNormal;

void main() {
    vec4 pointColor = texture2D(textureSampler, shareTexturePosition);
    // 一般处理点光源都是和环境光源配合使用，因为如果单独使用点光源不在光源的一面会显得彻底暗下去

    // 环境光源的作用效果处理很简单只需要 lightColor * surfaceColor 光源颜色和物体表面颜色矩阵相乘即可
    vec3 ambient = ambientLightColor * pointColor.rgb;
    
    // 点光源产生的漫反射处理 lightColor * surfaceColor * cosTheta
    // 其中cosTheta为光线和物体表面的夹角，需要用向量的点乘计算（ a · b = |a| * |b| * cos 其中 a和b向量的长度必须为1而且需要做施密特规范化处理）
    // 另外，和方向光源处理的方式不同，方向光源已经指定了光源的的方向所以无需单独计算光线方向，但是点光源只能传入光源的坐标需要计算出光源的方向
    // 上面说的这些计算步骤，shader语法里面都提供了函数，直接调用即可

    // 规范化处理
    vec3 normal = normalize(shareNormal);
    // 计算点光源的方向，光源坐标向量减去点的坐标向量即可得光线方向
    vec3 lightDirection = normalize(pointLightPosition - sharePointPosition);
    // 计算光线和物体表面的夹角
    float cosAng = max(dot(lightDirection, normal), 0.0);
    // 计算方向光源产生的效果
    vec3 diffuse = pointLightColor * vec3(pointColor) * cosAng;

    // 最后将方向光源和环境光源的效果相加即可
    gl_FragColor = vec4(diffuse + ambient, pointColor.a);
}