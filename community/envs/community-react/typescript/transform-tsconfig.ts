export function transformTsConfig(config) {
  config.setTarget('ES2017');
  config.raw.tsconfig.compilerOptions.module = 'es2020';
  config.raw.tsconfig.compilerOptions.lib = ['es2021', 'dom', 'ESNext.String'];
  return config;
}
