# Simple Pokemon Pokedex

A Simple pokedex that enables you to see the first 151 classic pokemons, their types, their names and their photos.

This project is a enhanced version of a [Free Code Camp tutorial](https://www.freecodecamp.org/news/a-practical-guide-to-typescript-how-to-build-a-pokedex-app-using-html-css-and-typescript/).

On top of the original project I added some nice feature. Please check them below.

## Technologies Used

- TypeScript (No frameworks)
- HTML
- CSS

## Features added on top of original project

- Default sorting by Pokemon ID
- Dynamic filter By Pokemon Type

## How to run

1) Install [npm](https://www.npmjs.com/)
2) Install Typescript `npm install -g typescript`
3) Init Typescript configuration `tsc --init`
4) In your `tsconfig.json` file make sure you have these properties:
```{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "public/js"
        "rootDir": "src",
        "strict": true,
        "esModuleInterop": true
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src"]
}
```
5) Run `tsc` to compile typescript files into js.
6) Open `index.html` with your favorite browser and have fun! :)

## Live Preview

Click [here](https://htmlpreview.github.io/?https://github.com/MuriloMarquesSantos/simple-pokedex/blob/master/index.html) for a live preview


## Contact

Should you have any questions contact me: murilommms@gmail.com

