precision mediump float;

uniform vec4 a_color;

void main(){
    vec4 color = a_color / vec4(255.0, 255.0, 255.0, 1.0);
    gl_FragColor = color;
}