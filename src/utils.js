/**
 * 创建着色器
 *
 * @param gl WebGL渲染上下文
 * @param type 着色器类型（gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER）
 * @param source 着色器源代码
 * @returns 返回创建的着色器对象
 */
export function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

/**
 * 创建WebGL程序对象
 *
 * @param gl WebGL上下文对象
 * @param vertexShader 顶点着色器对象
 * @param fragementShader 片段着色器对象
 * @returns 创建的WebGL程序对象
 */
export function createProgram(gl, vertexShader, fragementShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragementShader);
  gl.linkProgram(program);
  gl.useProgram(program);
  return program;
}
