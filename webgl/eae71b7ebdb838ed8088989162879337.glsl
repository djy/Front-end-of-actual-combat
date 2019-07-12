precision mediump float;

uniform sampler2D textureSampler;

varying vec2 shareTexturePosition;


void main() {
    gl_FragColor = texture2D(textureSampler, shareTexturePosition);
}