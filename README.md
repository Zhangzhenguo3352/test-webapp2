1��github �½�һ���ֿ�<br>
2������ ����  git clone xxxx<br>
3��git init    ��ʼ�� package.json<br>
4��touch .gitignore README.md   ���������ı����� ˵���ı�<br>
5��mkdir src build  ���������ļ��� src��ʼ���ļ��� �� build�������ļ���<br>
6���� src �ļ�����    touch index.js component.js  ����index.js ��  component.js<br>
7���� build �ļ�����    touch index.html  ����index.html<br>
8��npm install webpack -g --save-dev    �ҷ��ֱ���ȫ�ְ�װ<br>
9��touch webpack.config.js         webpack �õĻ�Ҳ��Ҫ����һ�������ļ���<br>
10��package.json  ������ ���� npm run build ���<br>
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build":"webpack"
},
11��û���� package.json �����ã����� webpack ������<br>
12��npm install webpack-dev-server --save-dev   ����ʹ���ԣ�������Щ<br>
13���������� �޸��˾����� ������� -w ��--watch �ļ�д��<br>
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w"
},
14��webpack --help ��webpack ������Щ����<br>
          webpack --progess --colors   ��� ���ֽ��� �� ��ɫ����
          webpack --display-error-details   ��� ���ִ��� λ��������


15���ܹ������ȸ��� 8080 �˿� package.json д�����Է���  http://localhost:8080<br>
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server"
},
     ����ָ�� ��Ĭ�Ϸ��ʶ˿ڽ����Ǹ��ļ����������� --content-base build ,Ĭ��ָ�� build �ļ���<br>
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build"
},
     ��Ҳ�в���<br>
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build --colors"
},
16���޸��ļ��� package.json ʱ Ҫ��ʹ�ã�npm run build Ȼ���������ȸ��� npm run dev <br>
17����ҳ�棬���֧��webpackҲ���Դ������Ҫ�޸� webpack.config.js<br>
module.exports = {
    //�ҵ�����ļ�
    entry:{
        index:'./src/index.js',
        com:'./src/component.js'
    },
    //���
    output:{
        path:'./build',
        filename:'[name].js'
    }
}


































