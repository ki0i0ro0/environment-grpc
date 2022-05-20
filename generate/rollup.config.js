import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const settings = (name) => {
  return {
    input: `./src/${name}.js`,
    output: {
      file: `dist/${name}.js`,
      format: 'esm',
    },
    plugins: [resolve(), commonjs(), terser()],
  }
}

export default [settings('todo_pb')]
