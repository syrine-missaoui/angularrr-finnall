import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { Article } from 'src/app/front/models/ArticleModels/article';
import { Commentaire } from 'src/app/front/models/ArticleModels/commentaire';
import { React } from 'src/app/front/models/ArticleModels/react';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  
  data:any={
    bodycommt:'',
  }
  count:number=1;
  id: any;
  blogDetail: Blog | null = null;
  article :Article = new Article;
  comments:Commentaire[]=[];
  lovecountpost:number=0;
  title:string='';
  react : React = new React;
  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router, private jwtHelper:JwtHelperService) {
    this.id = activatedRouter.snapshot.paramMap.get('idartcile');
    
    
  }

  ngOnInit(): void {
     this.service.findbyidArticle(this.id).subscribe((r:any)=>{
      this.article=r;  
      this.title=this.article.title;
      console.log(this.title)});
    this.service.findAllCommentsCli(this.id).subscribe((d:any)=>this.comments=d);
    
     }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);
    

  }
  token : any = localStorage.getItem('token');
  decodedToken =this.jwtHelper.decodeToken(this.token);
  iduser:number= this.decodedToken.userId;
  onSubmit(idartcile:number) {
    console.log(this.iduser);
    this.service.addcomment(idartcile,this.data,this.iduser).subscribe((d:any) => {
      console.log("here");
      console.log(this.data)
      console.log(d); 
        // Reset the form
      this.data = {
        bodycommt:'',
      };
})};

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.article.idartcile]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }
  addLove(id: number){
    this.service.addlovereact(id).subscribe((d:any)=>d=this.react);

  }
  addLike(id: number){
    this.service.addlikereact(id).subscribe((d:any)=>d=this.react);

  }
  adddislike(id: number){
    this.service.adddislikereact(id).subscribe((d:any)=>d=this.react);

  }
  addLovecomment(id: number){
    this.service.addlovereactcomment(id).subscribe((d:any)=>d=this.react);

  }
  addLikecomment(id: number){
    this.service.addlikereactcomment(id).subscribe((d:any)=>d=this.react);

  }
  adddislikecomment(id: number){
    this.service.adddislikereactcomment(id).subscribe((d:any)=>d=this.react);

  }

}
