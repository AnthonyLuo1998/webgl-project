precision mediump float;

attribute vec2 a_position;

attribute vec2 a_screen_size;

void main(){
    // 坐标转换
    vec2 position = a_position / a_screen_size * 2.0 - 1.0;
    position = position * vec2(1.0, -1.0);
    gl_Position = vec4(position, 0.0, 1.0);
    gl_PointSize = 20.0;
}