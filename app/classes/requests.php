<?php
/**
 * Watson question
 *
 * @package   Watson-questions
 * @author    bawd <churchill.c.j@gmail.com>
 * @license   GPL-2.0+
 * @link      http://bawd.com/
 * @copyright 11-28-2014 bawd
 */

/**
 * watson requests class.
 *
 * @package Watson requests
 * @author  bawd <churchill.c.j@gmail.com>
 */
class Watson_Requests{
	/**
	 * Plugin version, used for cache-busting of style and script file references.
	 *
	 * @since   1.0.0
	 *
	 * @var     string
	 */
	protected $version = "1.0.0";

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Slug of the plugin screen.
	 *
	 * @since    1.0.0
	 *
	 * @var      string
	 */
	protected $plugin_screen_hook_suffix = null;

	/**
	 * Initialize the plugin by setting localization, filters, and administration functions.
	 *
	 * @since     1.0.0
	 */
	public function __construct() {

	}

	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		// If the single instance hasn"t been set, set it now.
		if (null == self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function credetinals_send() {
	
	$creds = '{"question_and_answer": {
			    "name": "Question and Answer-ol",
			    "label": "question_and_answer",
			    "plan": "question_and_answer_free_plan",
			    "credentials": {
			      "url": "https://gateway.watsonplatform.net/qagw/service",
			      "username": "1d0d3764-5f66-400b-9450-b34b486aaa73",
			      "password": "vTfBTlWtwqG4"
			    }
			  }
			}';
		/*
		/v1/question/{id}
			*/
	$url = "https://gateway.watsonplatform.net/qagw/service";
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($creds)));
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
	curl_setopt($ch, CURLOPT_POSTFIELDS,$creds);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response  = curl_exec($ch);
	curl_close($ch);
	var_dump($response);
	}

}