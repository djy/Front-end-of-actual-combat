#ifdef GL_ES
precision mediump float;
#endif

uniform samplerCube textureSampler;
uniform vec3 eyePosition;

varying vec3 sharePointPosition;
varying vec3 shareNormal;

void main() {
    vec3 lightDirection = normalize(sharePointPosition - eyePosition);
    vec3 reflectDirection = reflect(lightDirection, shareNormal);
    gl_FragColor = textureCube(textureSampler, reflectDirection);
}