#ifdef GL_ES
precision mediump float;
#endif

uniform samplerCube textureSampler;

varying vec4 shareTexturePosition;

void main() {
    gl_FragColor = textureCube(textureSampler, shareTexturePosition.xyz);
}