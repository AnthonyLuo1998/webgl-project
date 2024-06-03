import a_farg from "./shader/index.frag";
import a_vert from "./shader/index.vert";
import { createProgram, createShader, randomColor } from "./utils";

const canvas = document.getElementById("cvs");

const gl = canvas.getContext("webgl");

const vertexShader = createShader(gl, gl.VERTEX_SHADER, a_vert);

const fragementShader = createShader(gl, gl.FRAGMENT_SHADER, a_farg);

const program = createProgram(gl, vertexShader, fragementShader);

const a_position = gl.getAttribLocation(program, "a_position");
const a_screen_size = gl.getAttribLocation(program, "a_screen_size");
const a_color = gl.getUniformLocation(program, "a_color");

// 赋值canvas宽高
gl.vertexAttrib2f(a_screen_size, canvas.width, canvas.height);

// console.log(a_position, a_screen_size, a_color);

gl.clearColor(0.0, 0.0, 0.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

const points = [];

canvas.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const color = randomColor();

  points.push({ x, y, color });

  gl.clearColor(0.0, 0.0, 0.0, 1);

  gl.clear(gl.COLOR_BUFFER_BIT);

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    gl.uniform4f(
      a_color,
      point.color.r,
      point.color.g,
      point.color.b,
      point.color.a
    );
    gl.vertexAttrib2f(a_position, point.x, point.y);

    gl.drawArrays(gl.POINTS, 0, 1);
  }
});
