<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ph_dir' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'I:u1,[spwz3Y`[[qwny]~4R)wuqZ%ggG)ei`Rb2)C4(4,]k44.?eC>rfj]rnp4+(' );
define( 'SECURE_AUTH_KEY',  '<eRva,nO>::[[fFt`QF5} _IA(<K~@m_j--;GFYo`ODp>gcuG,Q_@LHe(,3_>B&]' );
define( 'LOGGED_IN_KEY',    ')qo]+ CbE u;vcC]@yX}@ADUVR,@ {L[6^*:/O1pGtjkz+aaGhoXFecX>p@mEn)j' );
define( 'NONCE_KEY',        'u~0M=w<_H8kmq0Qh@K`$ (re5j0=6wPYSeP;HS76gznoWUscbeC|y0h2g*+rF5Eh' );
define( 'AUTH_SALT',        '~~Dyd`zCRF?MGO}POg2|a/XGrEWdoFy*[Agw2M6C7owbAYp]vi?1iCvG%]TK!0NV' );
define( 'SECURE_AUTH_SALT', '3e%)EhB$EQ=D+vT}*rBP.OqY2-p9Yop)hUu5I4!d.M4*k&B6-Z|JlC>g4y!e,JUk' );
define( 'LOGGED_IN_SALT',   'nT|!F$d?gBE{R7r4/n6VoxU/O<MvQ1|!]9U $O_ D@UZR<BuvxG[.oYzc4O|}/[d' );
define( 'NONCE_SALT',       '(gKw7y#4][JfWgB:-eN~v6x_gh=&cX^Qf(D(>lK?QcP!yo^o nNr!WHyefMD*AtS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
