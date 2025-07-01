export const mfConfig = {
<<<<<<< Updated upstream
  name: "myPageApp",
  filename: "remoteEntry.js",
  library: { type: "var", name: "myPageApp" },
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.2.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
    "@mui/material": { singleton: true, requiredVersion: "^7.0.1" },
    "@mui/icons-material": { singleton: true, requiredVersion: "^7.0.1" },
    "react-router-dom": { singleton: true, requiredVersion: "^6.30.0" },
  },
};
=======
  name: "mypage",
  exposes: {},
  shared: ["react", "react-dom"],
};
>>>>>>> Stashed changes
