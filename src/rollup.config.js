import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

export default {
  input: 'src/main/index.js',  
  output: {
    dir: 'dist',
    format: 'cjs',  
  },
  plugins: [
    commonjs({
      dynamicRequireTargets: [
        /node_modules\/sqlite3/,  
      ],
      ignoreDynamicRequires: false,  
    }),
  ],
};
