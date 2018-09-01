// import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { flyIn } from '../animations/fly-in';
import { tabs, titles } from '../common/util';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.less'],
  animations: [
    flyIn
  ]
})
export class WriteComponent implements OnInit, AfterViewInit, OnDestroy {
  tabs = tabs;
  titles = titles;
  editor;
  isVisible = false;
  isVisibleMiddle = false;
  isConfirmLoading = false;

  showModal = () => {
    this.isVisible = true;
  }
  showModal2 = () => {
    this.isVisibleMiddle = true;
  }
  handleCancel = (e) => {
    $('#tabOne').html(e);
    this.isVisible = false;
  }
  handleCancel2 = (e) => {
    $('#tabTwo').html(e);
    this.isVisibleMiddle = false;
  }
  constructor(private http: Http) { }
  // uploadFile(url:string,formData:any){
  //   var self=this;
  //   var headers=new Headers();
  //   headers.set("Accept","application/json");
  //   return this.http.post(url,formData,{headers:headers});
  // }
  ngOnInit() {

  }

  public fileInputChangeHandler(): void {
    let fileInput = <HTMLInputElement>document.getElementById('img_input');
    let inputValue = fileInput.value;
    if (!inputValue) {
      return;
    }
    //提交隐藏的表单，上传文件
    let fileForm = <HTMLFormElement>document.getElementById('file_upload_form');
    fileForm.action = "fileuploadurl";
    fileForm.onsubmit = function (event) {
      console.log(event);
      event.preventDefault();
      let file = fileInput.files[0];
      let formData = new FormData();
      formData.append('file', file, file.name);

      let xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'file_upload_URL.php');
      xhr.onload = function () {
        let json;
        if (xhr.status != 200) {
          console.log('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location != 'string') {
          console.log('Invalid JSON: ' + xhr.responseText);
          return;
        }
        console.log(json.location);
        fileInput.value = '';
      };
      xhr.send(formData);
    }
    fileForm.submit();
    fileInput.value = '';
  }

  ngAfterViewInit() {
    /**
     *  【非常重要】
     *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
     */
    let self = this;
    tinymce.init({
      selector: '#post_editor',
      skin_url: '/assets/skins/lightgray',
      //menubar:false,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample'
      ],
      toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      image_advtab: true,
      codesample_content_css: '/assets/css/prism.css',
      //文件和图片上传相关的选项
      file_browser_callback_types: 'image',
      file_browser_callback: function (field_name, url, type, win) {
        console.log(type);
        console.log(type == 'image');
        if (type == 'image') {
          let event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
          let fileInput = document.getElementById('img_input');
          fileInput.dispatchEvent(event);
        }
      },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          console.log(content);
        });
      },
      // images_upload_handler:function(blobInfo,success,failure){
      //   var formData;
      //   formData=new FormData();
      //   formData.append("file",blobInfo.blob(),blobInfo.filename());
      //   self.uploadFile("/api/upload",formData).subscribe(data=>{
      //     console.log(data);
      //     success(data["serverPath"]);
      //   })
      // }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
