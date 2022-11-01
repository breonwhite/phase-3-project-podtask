class TasksController < ApplicationController
    get "/tasks" do
     Task.all.to_json
    end
 
 
 
 
 end