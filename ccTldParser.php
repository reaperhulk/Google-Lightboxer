<?php
$supported_domains = file_get_contents('http://www.google.com/supported_domains');
$domainsArr = explode("\n",trim($supported_domains));
foreach($domainsArr as $value) {
	echo "<string>http://www$value/images*</string>\n";
}
echo "\n\n\n\n";
foreach($domainsArr as $value) {
	echo "<string>www$value</string>\n";
}