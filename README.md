# GatesFinace

http://8.131.79.148:8000/

## 2020/11/01

1、每次run build后将dist文件夹放到云上，还有所有的flask的py

2、在dist文件夹下python -m SimpleHTTPServer 8000，用python server打开，8000端口

3、在虚拟环境中打开python app.py

4、netstat -anp |grep ipaddress 查找占用ip的东西

5、kill -9 ipaddress 杀死ip

6、vue里所有的localhost引用必须变成http://8.131.79.148

7、nohup (python order) & 持久化进行

## 2020/11/02

1、进入即是初始页

## 2020/11/03

1、完成登陆和注册，发现 bug: href + route 在本地可以正常运行，但到服务器端会报错。

2、登陆利用 sessionStorage 实现登陆记忆，可持久化。
