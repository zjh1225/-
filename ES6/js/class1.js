var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
       // this.remove = this.main.querySelectorAll('.delete');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }
    //init 初始化操作让相关的元素绑定事件元
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            // console.log( this.lis[i].index);
            this.iconfont[i].onclick = this.removeTab;
             // 双击时调用函数editTab
             this.spans[i].ondblclick = this.editTab;
             this.sections[i].ondblclick = this.editTab;
        }
    }
    //更新元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.iconfont = this.main.querySelectorAll('.iconfont');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    //1.切换功能
    toggleTab() {
        that.clearClass();
        //添加类名
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    //删除类名
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';

        }
    }
    //2.添加功能
    addTab() {
        that.clearClass();
        //创建一个随机数
        var num = parseInt(Math.random() * 10);
        //创建li和section
        var li = ` <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`;
        var section = `<section class="conactive">测试 ` + num + `</section>`;
        //添加到html
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        that.init();

    }
    //3.删除功能
    removeTab(e) {
        //阻止事件冒泡
        e.stopPropagation();
        //获取小x父元素索引
        var index = this.parentNode.index;
        //删除点击小x相对父节点
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当删除的不是选中状态，则选中的不变，也就是下面的代码不执行
        if (document.querySelector('.liActive')) return;
        // 删除后让前一个li处于选定状态..
        index--;
        that.lis[index] && that.lis[index].click();
    }
    //4.修改功能
    editTab() { 
        var str = this.innerHTML;
         // 双击时禁止选定文字
         window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty();
             // 双击时生成文本框
             this.innerHTML = '<input type="text" />';
             // 文本框中保存原有文字
             var input = this.children[0];
             input.value = str;
             // 文本框中的文字处于选中状态
             input.select();
             // 当离开文本框时，把文字给span
             input.onblur = function () {
                 this.parentNode.innerHTML = this.value;
             }
             // 按下回车键也可以把文本框中的值给span
             input.onkeyup = function (event) {
                 if (event.keyCode === 13) {
                     // 回车键是13，回车相当于调用失去焦点的事件
                     this.blur();
                 }
             }
    }
}
new Tab('#tab');