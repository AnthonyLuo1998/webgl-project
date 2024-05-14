import a_farg from "./shader/index.frag";
import a_vert from "./shader/index.vert";
import { createProgram, createShader } from "./utils";

const canvas = document.getElementById("cvs");

const gl = canvas.getContext("webgl");

const vertexShader = createShader(gl, gl.VERTEX_SHADER, a_vert);

const fragementShader = createShader(gl, gl.FRAGMENT_SHADER, a_farg);

const program = createProgram(gl, vertexShader, fragementShader);

gl.clearColor(0.0, 0.0, 0.0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.POINTS, 0, 1);
