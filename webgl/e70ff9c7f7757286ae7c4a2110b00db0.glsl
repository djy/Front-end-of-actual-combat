#ifdef GL_ES
precision mediump float;
#endif

varying vec4 sharePointColor;

void main() {
    gl_FragColor = sharePointColor;
}