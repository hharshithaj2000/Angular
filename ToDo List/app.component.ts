import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos:any;
  inputTodo:string="";
  ngOnInit(): void {
  this.todos=[
    {
      content:"First",
      completed:true
    },
    {
      content:"Second",
      completed:false
    },
  ]
  console.log(this.todos);
  }
 
  addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  console.log(this.todos);
  this.inputTodo=""
  }
  removeTodo(){
    this.todos.forEach((value: { content: string; },index: any) => {
      if(value.content==this.inputTodo){
        this.todos.splice(index,1);
      }
    });
    console.log(this.todos);
    this.inputTodo=""
  }
 
}
