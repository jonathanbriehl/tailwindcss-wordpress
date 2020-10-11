Tailwind CSS + WordPress
===

A blank WordPress theme with Tailwind CSS included to kick start your next theme. The theme is based on the `_s` or `underscores` theme from [Automatic](https://github.com/automattic/_s) (check out their repo for more information). 
See the [notes below](#customization) for instructions on customizing the name of the theme.  

There are two different options depending on your preferences — a basic css file that imports the entire Tailwind CSS framework or using Laravel Mix with SASS to import and compile your css.

## Using Basic CSS File

Before starting, delete the following files:
```text
package.json
package-lock.json
tailwind.config.js
theme-style.scss
webpack.mix.js
```  

Then, rename `simple-style.css` to `style.css`. Uncomment either of the imports that you wish to you use. Start making something amazing.

## Using Laravel Mix

Before starting, delete `simple-style.css`.

Run `npm install`

Work from the `theme-style.scss` file. Uncomment either of the imports you wish to use.

While you're developing, run `npm run dev` to compile your css one time or `npm run watch-poll` so it continues to compile as you make changes.

When you're done, run `npm run prod`.

## Customization

Clone or download this repository, change its name to something else (like, say, `my-super-awesome-theme`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Search for `'tailwindcss-wordpress'` (inside single quotations) to capture the text domain and replace with: `'my-super-awesome-theme'`.
2. Search for `tailwindcss_wordpress_` to capture all the functions names and replace with: `my_super_awesome_theme_`.
3. Search for `Text Domain: tailwindcss-wordpress` in `style.css` and replace with: `Text Domain: my-super-awesome-theme`.
4. Search for <code>&nbsp;tailwindcss_wordpress</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;My_Super_Awesome_Theme</code>.
5. Search for `tailwindcss-wordpress-` to capture prefixed handles and replace with: `my-super-awesome-theme-`.
6. Search for `TAILWINDCSS_WORDPRESS_` (in uppercase) to capture constants and replace with: `MY_SUPER_AWESOME_THEME_`.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `tailwindcss-wordpress.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.
