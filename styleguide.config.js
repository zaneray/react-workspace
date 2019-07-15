const componentExts = '{js,jsx,ts,tsx}';

module.exports = {
    theme: {
      maxWidth: "100%",
      sidebarWidth: 300
    },
    usageMode: 'expand',
    exampleMode: 'expand',
    pagePerSection: true,
    sections: [
      {
        name: 'Base Components',
        components: `packages/react-pantry/src/components/**/*.${componentExts}`,
        sectionDepth: 2
      }
    ],
    webpackConfig: {
      module: {
        rules: [
          // Babel loader, will use your project’s babel.config.js
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    }
}