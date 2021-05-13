#!/bin/bash

#cd /var/www/html/pipelinetesting/
cd /var/www/html/mppljobs.com/
c=$(ls -l /var/www/html/mppljobs.com/ | grep "^d" | wc -l)


arr1=(/var/www/html/mppljobs.com/*/) 
total=${#arr1[@]}
for(( i=0; i<$total; i++ ))
do
	type=`jq -r .deployment_type ${arr1[$i]}/deploy.json`
	if [ $type == react ]
	then
		portno=`jq -r .port_number ${arr1[$i]}/deploy.json`
		cd ${arr1[$i]}
		npm i
		npm run-script build
		pm2 serve build $portno --spa
		cd
	elif [ $type == node ]
	then
		filename=`jq -r .file_name ${arr1[$i]}/deploy.json`
		cd ${arr1[$i]}
		npm i
		pm2 start $filename
		cd
	else
		echo "Not an app"
	fi
done
