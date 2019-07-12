#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D textureSampler;

varying vec4 sharePositionFromLight;
varying vec4 sharePointColor;

// 如果ShadowFragment中使用gl_FragCoord.z计算深度值，则使用下面处理程序，只适用于小范围shadow
void main() {
    // 根据光源点处看物体‘所有点’的坐标[-1,1]范围，换算成[0,1]内的范围
    vec3 shadowCoord = (sharePositionFromLight.xyz/sharePositionFromLight.w)/2.0 + 0.5;

    // 将shadowCoord的xy坐标传递到纹理对象中，可以得到光源点处看的见的点的rgba值
    vec4 rgbaDepth = texture2D(textureSampler, shadowCoord.xy);
    float depth = rgbaDepth.r; // 获取到此点的深度值

    // 将所有点的坐标深度值，和光源看的见的点深度值做对比，如果大，则将颜色减弱（在阴影中），小则不变
    // 其中会加上一个0.005的偏移值为了消除马赫带的影响，这是因为在ShadowFragment中使用gl_FragCoord.z计算z值的精度（8位整数）比shadowCoord.z的精度低（浮点）
    float visibility = 1.0;
    if(shadowCoord.z < 0.83) { // 消除立体图自身阴影
        visibility = 1.0;
    }else{
        if(shadowCoord.z > depth + 0.005) {
            visibility = 0.7;
        }else {
            visibility = 1.0;
        }
    }
    gl_FragColor = vec4(sharePointColor.rgb * visibility, sharePointColor.a);
}

// 如果ShadowFragment使用高精度处理，则使用如下处理方式
// float unpackDepth(const in vec4);
// void main() {
//     vec3 shadowCoord = (sharePositionFromLight.xyz/sharePositionFromLight.w)/2.0 + 0.5;
//     vec4 rgbaDepth = texture2D(textureSampler, shadowCoord.xy);
//     float depth = unpackDepth(rgbaDepth);
//     float visibility = (shadowCoord.z > depth + 0.0015)? 0.7:1.0;
//     gl_FragColor = vec4(sharePointColor.rgb * visibility, sharePointColor.a);
// }

// float unpackDepth(const in vec4 rgbaDepth) {
//     const vec4 bitShift = vec4(1.0, 1.0/256.0, 1.0/(256.0 * 256.0), 1.0/(256.0 * 256.0 * 256.0));
//     float depth = dot(rgbaDepth, bitShift);
//     return depth;
// }