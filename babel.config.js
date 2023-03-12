module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './app/components',
            '@screens': './app/screens',
            '@assets': './app/assets',
            '@constants': './app/constants',
            '@utils': './app/utils',
            '@types': './app/types',
            '@hooks': './app/hooks',
          },
        },
      ],
    ],
  }
}
