const FS = require('fs/promises')
const { existsSync } = require('fs')
const Path = require('path/posix')

const correctVersions = {
  '@auth0/auth0-react': '^1.12.0',
  '@babel/core': '^7.15.6',
  '@babel/plugin-proposal-class-properties': '^7.14.5',
  '@babel/plugin-proposal-object-rest-spread': '^7.15.6',
  '@babel/plugin-transform-regenerator': '^7.13.15',
  '@babel/plugin-transform-runtime': '^7.15.0',
  '@babel/preset-env': '^7.15.6',
  '@babel/preset-react': '^7.14.5',
  '@babel/register': '^7.13.14',
  '@devacademy/eslint-config': '^1.5.1',
  '@types/react': '^18.0.23',
  '@types/react-dom': '^18.0.7',
  '@reduxjs/toolkit': '^1.8.6',
  '@testing-library/jest-dom': '^5.16.5',
  '@testing-library/dom': '^8.17.1',
  '@testing-library/user-event': '^12.7.1',
  '@testing-library/react': '^13.4',
  'babel-jest': '^26.6.3',
  'babel-loader': '^8.2.2',
  'css-loader': '^6.3.0',
  dotenv: '^10.0.0',
  eslint: '^8.10.0',
  'eslint-config-eda': '^1.2.0',
  'eslint-plugin-jest': '^26.1.1',
  'eslint-plugin-jsx-a11y': '^6.5.1',
  express: '^4.17.2',
  'express-handlebars': '^6.0.2',
  'express-jwt': '^7.7.5',
  'express-jwt-authz': '^2.4.1',
  jest: '^29.2.2',
  jsdom: '^20.0.0',
  'jwks-rsa': '^2.1.5',
  knex: '^2.3.0',
  'mini-css-extract-plugin': '^2.3.0',
  nodemon: '^2.0.15',
  pg: '^8.8.0',
  prompt: '^1.3.0',
  'react-redux': '^8.0.4',
  redux: '^4.1.1',
  'regenerator-runtime': '^0.13.7',
  'style-loader': '^3.3.0',
  'styled-components': '^5.3.1',
  'sass-loader': '12.6.0',
  'react-router-dom': '^6.4.2',
  sass: '^1.50.1',
  superagent: '7.1.1',
  supertest: '^6.2.2',
  webpack: '^5.69.1',
  'webpack-cli': '^4.9.2',
  'webpack-dev-server': '^4.8.1',
  react: '^18.0.2',
  'react-dom': '^18.2.0',
  prettier: '2.6.1',
  'eslint-plugin-react': '^7.29.4',
  '@testing-library': '^12.1.3',
  sqlite3: '^5.1.2',
  typescript: '^4.8.4',
}

const main = async () => {
  const dirs = await FS.readdir(Path.join(__dirname, '..', 'packages'))
  for (const dir of dirs) {
    const packagePath = Path.join(
      __dirname,
      '..',
      'packages',
      dir,
      'package.json'
    )
    if (!existsSync(packagePath)) {
      continue
    }

    try {
      const json = await FS.readFile(packagePath, 'utf8')
      const packageObj = JSON.parse(json)
      const { dependencies, devDependencies } = packageObj
      let modified = false

      for (const name in correctVersions) {
        const version = correctVersions[name]
        if (dependencies && dependencies[name]) {
          dependencies[name] = version
          modified = true
        }

        if (devDependencies && devDependencies[name]) {
          devDependencies[name] = version
          modified = true
        }
      }

      if (modified) {
        console.log(`updating ${packagePath}`)
        const output = `${JSON.stringify(packageObj, null, 2)}\n`
        await FS.writeFile(packagePath, output, 'utf-8')
      }
    } catch (err) {
      console.error({ dir, err })
    }
  }
}

main().catch((err) => {
  process.exitCode = 1
  console.error(`align failed: ${err}`)
})
