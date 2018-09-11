import { Component,Input,Output,OnInit,EventEmitter } from '@angular/core';

@Component({
    selector:'fenye',
    templateUrl:'./fenye.component.html'
})

export class FenyeComponent implements OnInit {
    @Input() page;  //当前页数
    @Input() size;      //每页条数
    @Output() callback = new EventEmitter<any>();   //改变当前页事件
 
    _total = 0;
    pageCount = 0;      //总页数
    isFirst = true;     //是否第一页
    isLast = true;      //是否最后一页
    nums = [];          //页序号
    numsCount = 5;      //允许展示的序号长度
    sizeOptionItem = 0; //每条条数项目

    //初始化
    ngOnInit(){
        this.setSizeOption()
        this.setPageCount()
        this.setNums()
    }

    //总条数
    @Input() public set total(val){
        this._total = val;
        this.setPageCount();
        this.setNums()
    }

    //设置每页显示条数的组合
    setSizeOption(){
        if(!this.size || Number.isNaN(parseInt(this.size))){
            this.size = 10;
        }
        if([10,20,30,40,50,100].indexOf(this.size)==-1){
            this.sizeOptionItem = this.size;
        }
    }

    //设置总页数
    setPageCount(){
        let num = Math.ceil( this._total / this.size );
        this.pageCount = Number.isFinite(num) && !Number.isNaN(num) ? num : 0;
    }

    //设置页序号
    setNums(){
        this.nums = [];
        this.isFirst = false;
        this.isLast = false;
        if(this.pageCount==0){
            return;
        }
        
        if(this.pageCount<this.numsCount){
            this.isFirst = true;
            this.isLast = true;
            for(let i=1;i<=this.pageCount;i++){
                this.nums.push(i);
            }
            return;
        }
        
        let half = Math.floor(this.numsCount / 2);
        
        let begin = this.page - half;
        begin = begin>1 ? begin : 1;
        let len = begin + this.numsCount;

        let end = this.page + half;
        if(end>=this.pageCount){            
            begin = this.pageCount-this.numsCount+1;
            len = this.pageCount+1;
        }

        for(let i=begin;i<len;i++){
            this.nums.push(i);
        }        
    }

    //设置当前页码
    setPage(page){
        this.page = page;
        this.callback.emit({page:page,size:this.size});
    }

    //设置每页条数
    setSize(e){
        this.size = parseInt(e.target.value);
        this.setPageCount()
        if(this.page>this.pageCount){
            this.setPage(this.pageCount)
        }else{
            this.setPage(this.page)
        }
        this.setNums();
    }

    //上一页
    prev(){
        if(this.pageCount<=this.numsCount || this.isFirst){
            return;
        }
        this.isLast=false;
        let end = this.nums.shift();
        let begin = end-this.numsCount+1;
        if(begin<=1){
            this.isFirst = true;
            begin = 1;
            end = this.numsCount;
        }
        this.nums = [];
        for(let i=begin;i<=end;i++){
            this.nums.push(i);
        }
    }

    //下一页
    next(){
        if(this.pageCount<=this.numsCount || this.isLast){
            return;
        }
        this.isFirst = false;
        let begin = this.nums.pop();
        let end = begin+this.numsCount;
        if(end>this.pageCount){
            this.isLast = true;
            begin = this.pageCount-this.numsCount+1;
            end = this.pageCount+1;
        }
        this.nums = [];
        for(let i=begin;i<end;i++){
            this.nums.push(i);
        }
    }

    //跳转
    jump(e){
        let page = parseInt(e.target.value);
        page = isNaN(page) || page<1 ? 1 : page;
        page = page>this.pageCount ? this.pageCount : page;
        this.setPage(page);
        this.setNums();     
    }
    
}