/*
* ����һ�� webpack �����ļ�
*
*
*
* */

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