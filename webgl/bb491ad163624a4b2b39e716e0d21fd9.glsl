#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 fogColor;
uniform vec2 fogDistance;

varying vec4 sharePointColor;
varying float shareDistance;

void main() {
    float fogEnd = fogDistance.y;
    float fogStart = fogDistance.x;
    float c = fogEnd - fogStart;

    float fogFactor = clamp((fogEnd - shareDistance) / c, 0.0, 1.0);
    vec3 resultColor = mix(fogColor, vec3(sharePointColor), fogFactor);

    gl_FragColor = vec4(resultColor, sharePointColor.a);
}