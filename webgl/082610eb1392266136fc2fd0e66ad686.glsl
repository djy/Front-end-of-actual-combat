#ifdef GL_ES
precision mediump float;
#endif

void main() {
    // 计算光源处点坐标的深度值
    // 可以使用gl_FragCoord.z做近似简化处理，范围在[0,1]，注意这种处理方法会有精度问题
    // gl_FragCoord.z是一个8位精度，如果光源位置离的过远则无法存储
    // 将值写到gl_FragColor中，可以在fbo的纹理对象中获取
    gl_FragColor = vec4(gl_FragCoord.z, 0.0, 0.0, 0.0);
    
    // 提高计算精度
    // const vec4 bitShift = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
    // const vec4 bitMask = vec4(1.0/256.0, 1.0/256.0, 1.0/256.0, 0.0);
    // vec4 rgbaDepth = fract(gl_FragCoord.z * bitShift);
    // rgbaDepth -= rgbaDepth.gbaa * bitMask;
    // gl_FragColor = rgbaDepth;
}