class Tab{
        constructor(id){

            this.main = document.querySelector(id);
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.delete');

        }
        //init 初始化操作让相关的元素绑定事件元
        init(){
            for(let i=0;i<this.lis.length;i++){
                this.lis[i].onclick=function() {
                    console.log(this.lis[i]);
                }
            }
        }
        //1.切换功能
        toggleTab(){}
        //2.添加功能
        addTab(){}
        //3.删除功能
        removeTab(){}
        //4.修改功能
        editTab(){}
}
new Tab('#tab');