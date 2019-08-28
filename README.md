# Shopify Theme Boilerplate
🛒 A minimal Shopify theme boilerplate with support for Gulp, Autoprefixer, Babel and more. 

## Prerequisites
[Node.js](https://nodejs.org/)

[Theme Kit](https://shopify.github.io/themekit/)

## Setup
Setting up this boilerplate theme consists of two phases.

### Creating the Shopify theme and finding the theme id
1. Clone the repository
2. Compress the folder into a `.zip` file
3. Inside the admin panel, go into `Online Store > Themes`
4. Click the `Upload Theme` button and pick your  `.zip` file
5. To the right of the newly created theme, click `Customize`.
6. The `XXXXXXXXXXX` part of the URL is your theme id `https://my-example-store.myshopify.com/admin/themes/XXXXXXXXXXX/editor`

### Setting up the development environment
1. Create a file named `config.yml` in the root, with the content of the already existing file `config.example.yml`
2. Replace the dummy-credentials with your actual ones
3. `cd` into the `dev-assets` folder and install the dependencies by running 
   ```sh
   npm install
   ```

## Usage
Using the boilerplate theme is very smooth.

1. Open two terminal windows/tabs
2. In the first one, `cd` into the root of the theme and run 
   ```sh
   theme watch
   ```
3. In the second one, `cd` into the `dev-assets` folder and run 
   ```sh
   gulp watch
   ```

The `theme watch` command watches for changes in the theme files and will update the theme with the new files if any changes occur. The `gulp watch` command watches the files inside the `dev-assets` folder. When a file change occurs there, Gulp processes and copies the affected files into the `assets` folder of the Shopify theme. This triggers the `theme watch` command and the theme will be updated. 

## Further reading

[Theme Kit Commands](https://shopify.github.io/themekit/commands/)