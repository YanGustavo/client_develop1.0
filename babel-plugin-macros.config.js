module.exports = {
  tailwind: {
    plugins: [  
      "macros",    
      [
        
        'babel-plugin-import',
        {
          libraryName: '@mui/material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@mui/icons-material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'icons',
      ],
    ],
    config: "./src/tailwind.config.js",
    format: "auto"
  }
};