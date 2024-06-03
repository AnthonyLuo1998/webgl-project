import a_farg from "./shader/triangle/triangle.frag";
import a_vert from "./shader/triangle/triangle.vert";
import { createProgram, createShader } from "./utils";

const canvas = document.getElementById("cvs");

const gl = canvas.getContext("webgl");

const vertexShader = createShader(gl, gl.VERTEX_SHADER, a_vert);

const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, a_farg);

const program = createProgram(gl, vertexShader, fragmentShader);

const points = [1.0, 0.2, 0.3, 0.4, 0.5, 0.6];

// 获取a_position变量的地址
const a_position = gl.getAttribLocation(program, "a_position");

// 创建缓冲区对象
const buffer = gl.createBuffer();

// 绑定缓冲区对象
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

// 缓冲区数据
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);

// 缓冲区数据与a_position绑定
gl.enableVertexAttribArray(a_position);

// 指定a_position变量的数据格式
gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.TRIANGLES, 0, 3);
