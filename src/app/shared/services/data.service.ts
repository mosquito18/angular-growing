import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var file = require('file-system');
var fs = require('fs');

import { Article } from '../../model/article-model';
import { Vedio } from '../../model/vedio-model';
import { Mission } from '../../model/mission-model';
import { Test } from '../../model/test-model';
import { Comment } from '../../model/comment-model';


@Injectable()
export class DataService {
  public articleListURL = 'mock-data/article-info.json';
  public vedioListURL = 'mock-data/vedio-info.json';
  public missionListURL = 'mock-data/mission-info.json';
  public teatListURL = 'mock-data/test-info.json';
  public recommendListURL = 'mock-data/recommend-info.json';
  public commentListURL = 'mock-data/comment-mock.json';
  
  
  



  constructor(public http: Http) { }
  public getArticleList(): Observable<Article[]> {
    let url = this.articleListURL;
    return this.http
      .get(url)
      .map((res: Response) => {
        let result = res.json();
        // console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  public getVedioList(): Observable<Vedio[]> {
    let url = this.vedioListURL;
    return this.http
      .get(url)
      .map((res: Response) => {
        let result = res.json();
        // console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  public getMissionList(): Observable<Mission[]> {
    let url = this.missionListURL;
    return this.http
      .get(url)
      .map((res: Response) => {
        let result = res.json();
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  // public getTestList(): Observable<Test[]> {
  //   let url = this.teatListURL;
  //   return this.http
  //     .get(url)
  //     .map((res: Response) => {
  //       let result = res.json();
  //       // console.log(result);
  //       return result;
  //     })
  //     .catch((error: any) => Observable.throw(error || 'Server error'));
  // }
    getTestList() {
    return this.http.post('/PRZN/testinfo',{})
      .map((res: Response) => {
        let result = res.json();
        console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

    addArtiicl(): Observable<any> {
        return this.http.post('/PRZN/insertarticle',{ 
        "a_type": "article",
        "avator": "../../assets/avator2.jpg",
        "author": "中和兄",
        "editdate": "2017-08-17T08:52:52.295Z",
        "title": "也来说是 AngularJS、 Angular 2、Angular 4 的区别",
        "content": "随着Angular版本的频繁推出，有必要了解下AngularJS、Angular2、Angular4的区别。字面上的区别（1）我们常说的Angular1是指AngularJS；从Angular2开始已经改名了。不再带有JS，只是单纯的 Angular；（2）还有一个不可思议的版本变化： 从 Angular 2 直接跳跃到了 Angular 4 ， 咋不见…… Angular 3 了呢？ 架构上的差别 Angular 1 是一个典型的 MVC 架构 （Model - View - Controller ）， 其架构如图所示： 相比于 Angular 1 的MVC",
        "tab": "编程开发",
        "comment": 62,
        "a_like": 260,
        "a_img": "../../assets/card2.jpg"
      })
        .map((res: Response) => {
        let result = res.json();
        console.log(result);
        return result;
      })
        .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public getRecommendListURL() {
    let url = this.recommendListURL;
    return this.http
      .get(url)
      .map((res: Response) => {
        let result = res.json();
        // console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  public getCommentListURL() {
    let url = this.commentListURL;
    return this.http
      .get(url)
      .map((res: Response) => {
        let result = res.json();
        // console.log(result);
        return result;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  
  public getMis(id: number): Observable<Mission[]> {
    var id = id;
    let url = this.missionListURL;
    
    debugger;
    return this.http
      .get(url)
      .map((res: Response) => {
        let arr = res.json();
        console.log(id);
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          console.log(arr);
          if (arr[i].id == id) {
            var row = arr[i];
            var id = row.id;
            var title = row.title;
            var content = row.content;
            var publisher = row.publisher;
            var endTime = row.endTime;
            var isFinish = !row.isFinish;

            arr.splice(i, 1);
          }
        }
        var obj = {
          id: id,
          title: title,
          content: content,
          publisher: publisher,
          endTime: endTime,
          isFinish: isFinish
        };
        arr.splice(0, 0, obj);
        var newData = JSON.stringify(arr);
        fs.writeFile(url, newData, function (err) {
          console.log(err);
          return arr;
        });
      }).catch((error: any) => Observable.throw(error || 'Server error'));
  }
}



