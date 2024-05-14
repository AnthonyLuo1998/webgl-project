import a_farg from "./shader/index.frag";
import a_vert from "./shader/index.vert";

const canvas = document.getElementById("cvs");

const gl = canvas.getContext("webgl");

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, a_vert);
gl.compileShader(vertexShader);

const fragementShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragementShader, a_farg);
gl.compileShader(fragementShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragementShader);

gl.linkProgram(program);
gl.useProgram(program);

gl.clearColor(0.0, 0.0, 0.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.POINTS, 0, 1);
