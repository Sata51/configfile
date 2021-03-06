# configfile

[![npm](https://img.shields.io/npm/v/configfile.svg?style=flat-square)](https://www.npmjs.com/package/configfile)
[![npm](https://img.shields.io/npm/dt/configfile.svg?style=flat-square)](https://www.npmjs.com/package/configfile)
[![npm](https://img.shields.io/npm/l/configfile.svg?style=flat-square)](https://github.com/Mindsers/configfile/blob/master/LICENSE)
[![Patreon](https://img.shields.io/badge/support-patreon-F96854.svg?logo=patreon&style=flat-square)](https://www.patreon.com/bePatron?u=9715649)
[![Discourse](https://img.shields.io/discourse/https/community.nathanaelcherrier.com/posts.svg?color=00aeef&logo=discourse&logoColor=00aeef&style=flat-square)](https://community.nathanaelcherrier.com)

*configfile* is a command line tool that help user to manage their own configuration files.

## Data storage

This tool **does not store** configuration files for you. A git repo ([dotfiles](https://github.com/topics/dotfiles)) is needed to store your configuration files.

Please follow this structure:

```txt
/files/
    /module1/
    /module2/
        /settings.json
        /configurationfile.txt
    /module3/
/scripts/
    /scriptfile.sh
```

## Installation

To install *Configfile*, you need to use NPM or Yarn.

```bash
yarn global add configfile@latest
```

## Usage

- `configfile init` or `configfile i`: Initialize *configfile* on the current user session.
    - `-f, --force` force current configuration to be overwritten.
- `configfile modules list` or `configfile m l`: Display a list of all modules available via *Configfile*.
- `configfile modules deploy [moduleName...]` or `configfile m d [moduleName...]`: Deploy the configuration files for the given module name.
    - `-l, --local` deploy authorized file to the current directory.
- `configfile scripts` or `configfile s`: Display a list of all scripts available via *Configfile*.
- `configfile scripts run <scriptName>` or `configfile s r <scriptName>`: Execute the script identifying by the given script name.

## Contribution

Contributions to the source code of *Configfile* are welcomed and greatly appreciated. For help on how to contribute in this project, please refer to [How to contribute to Configfile](https://github.com/Mindsers/configfile/blob/develop/CONTRIBUTING.md).

## Support

*Configfile* is licensed under an Apache-2.0 license, which means that it's a  completely free open source software. Unfortunately, *Configfile* doesn't make itself. Version 1.0.0 is the next step, which will result in many late, beer-filled nights of development.

If you're using *Configfile* and want to support the development, you now have the chance! Go on my [Patreon page](https://www.patreon.com/mindsers) and become my joyful patron!!

[![Become a Patron!](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=9715649)

For help on how to support Configfile, please refer to [The awesome people who support Configfile](https://github.com/Mindsers/configfile/blob/develop/SPONSORS.md).

<!-- ### Premium sponsors -->

## License

This project is under Apache-2.0 license. See LICENSE file.
