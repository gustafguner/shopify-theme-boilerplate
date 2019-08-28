# Shopify Theme Boilerplate
A minimal Shopify boilerplate theme with functionality such as Autoprefixer, Babel and UglifyJS. 

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
3. `cd` into the `dev-assets` folder and install the dependencies by running `npm install`

## Usage