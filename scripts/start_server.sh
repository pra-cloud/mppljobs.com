#!/bin/bash

cd /var/www/html/pipelinetesting/
c=$(ls -l /var/www/html/pipelinetesting/ | grep "^d" | wc -l)

arr1=(Node React React)
arr2=(index.js 3001 3002)

arr=(/var/www/html/pipelinetesting/*/)
for (( i=0; i<$c; i++ ))
do
        cd ./${arr[i]}
        if [ "${arr1[i]}" = "Node" ]
        then
                npm i
                pm2 start ${arr2[i]}
                cd ..
        elif [ "${arr1[i]}" = "React" ]
        then
                npm i
                npm run-script build
                pm2 serve build ${arr2[i]} --spa
                cd ..
        fi
done
