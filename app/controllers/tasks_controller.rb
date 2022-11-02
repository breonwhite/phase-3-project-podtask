class TasksController < ApplicationController
    
    get "/tasks" do
     Task.all.to_json(include: {
        podcast: { only: [:topic, :description, :guest, :release_date] } })
    end
  
    get "/tasks/:id" do
        task = Task.find_by_id(params["id"])
        task.to_json
    end
  
    post "/tasks" do
        task = Task.new(params)
        if task.save
            #return object as json if saved
            task.to_json
        else
            #return error message if not saved
            { errors: task.errors.full_messages }.to_json
        end   
    end
  
    patch "/tasks/:id" do
        task = Task.find_by_id(params["id"])
        if task.update(params)
            task.to_json
        else
            { errors: task.errors.full_messages }.to_json
        end
    end
  
    delete "/tasks/:id" do
        task = Task.find_by_id(params["id"])
        if task
            task.destroy
            task.to_json
        else
            { errors: ["Task Doesn't Exist"] }.to_json
        end
    end
 end