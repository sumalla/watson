<h2>Sample Watson App with angularJS</h2>
Borrowed heavily from: 
	https://github.com/IBM-Bluemix/zendcon-2014-hackathon/ 
this is a simple watson app to upload to your server 
<h3>Prerequisites</h3>
You need a IBM bluemix account: 
https://console.ng.bluemix.net
you'll need to add the Question and answer service & the User modeeling service.
<h3>Install</h3>
To install this you need to do the following: 
<br>
<code>
	cd PROJECT FOLDER
</code>
<br>
<code>
	git clone https://github.com/vimes1984/watson.git && npm install && bower install --save-dev
</code>
<code>
	grunt build
</code>
<br>
Then you'll need to create a enviromental array containg your usernames and passwords create a env_vars.php file in <code>/app/classes</code> folder, then 
<br>
<code>
	<?php
		$_ENV['username_user_model'] = "USER_MODELLING_USERNAME";
		$_ENV['username_qa'] = "QUESTION_ANSWER_USERNAME";
		$_ENV['password_user_model'] = "USER_MODELING_PASSWORD";
		$_ENV['password_qa'] = "QUESTION_ANSWER_PASSWORD";
	?>
</code>
Copy over the dist folder to your server  then move the classes folder over to the root of your app aswell and your good to go!