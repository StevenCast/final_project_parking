export default{
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    // Transforma archivos JavaScript usando Babel
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    // Mapea archivos CSS a un módulo vacío
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    // Indica a Jest que trate archivos estáticos como módulos vacíos
    transformIgnorePatterns: [
        '/node_modules/(?!.*\\.js$)',
    ],
    // Permite la importación de archivos JSX
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: "jsdom"
};