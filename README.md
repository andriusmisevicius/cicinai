 - run `composer install`
 - `cp .example.env .env` 
 - run `touch database/database.sqlite` and provide path to this file in .env file. DB_DATABASE=path/to/this/database.sqlite. Use absolute path if you're using Windows.
 - run `php artisan migrate`, if migration fails try to run `php artisan optimize:clear`
 - run `php artisan key:generate`
 - run `php artisan backpack:install`
 - run `npm i`
 - run `npm run dev` or `npm run prod`
 - run `php artisan serve` and go to http://hosted-address:port/admin. There you should register an admin account.  Login and use the CMS to populate some content.
