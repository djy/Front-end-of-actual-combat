precision mediump float;

uniform sampler2D textureSampler1;
uniform sampler2D textureSampler2;

varying vec2 shareTexturePosition;


void main() {
    gl_FragColor = texture2D(textureSampler1, shareTexturePosition) * texture2D(textureSampler2, shareTexturePosition);;
}